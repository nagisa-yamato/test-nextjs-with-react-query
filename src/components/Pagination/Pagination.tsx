import { ITEMS_PER_PAGE } from "@/constants";
import { PageInfoFragment } from "@/graphql/fragments/common";
import { FragmentType, useFragment } from "@/graphql/generated";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { ButtonsWrap } from "./Pagination.styles";

/** 仮設ページネーション型 他所で使う想定は無い */
type PaginationVariables = {
  first?: number;
  after?: string;
  last?: number;
  before?: string;
  page?: number;
};

/**
 * "first"と"last"をnumber型に変換して返す (router.query等から受け取った場合、stringの可能性があるため)
 * @param object
 * @returns
 */
const convertFirstLastToNumber = <Type,>(
  object: Type &
    PaginationVariables & {
      first?: string | number;
      last?: string | number;
    }
) => {
  Object.entries(object).forEach(([key, value]) => {
    if (key !== "first" && key !== "last") {
      return;
    }
    const valueAsNumber = Number(value);
    if (Number.isNaN(valueAsNumber)) {
      return;
    }
    object[key] = valueAsNumber;
  });
  return object;
};

/**
 * Objectに"page"属性が含まれていたら削除して返す
 * @param object
 * @returns
 */
const deletePagePropertyFromObject = <Type,>(
  object: Type & PaginationVariables
) => {
  if (Object.hasOwn(object, "page")) {
    delete object.page;
  }
  return object;
};

/**
 * クエリパラメーターをAPI投げるときのvariablesに変換する
 * @param object
 * @returns
 */
export const organizeQueryParamsToVariables = <Type,>(
  object: Type & PaginationVariables
) => {
  return convertFirstLastToNumber<Type>(
    deletePagePropertyFromObject<Type>(object)
  );
};

/**
 * ページネーションコンポーネント
 *
 * @param props PageInfo, クエリのvariables, variablesのsetState, totalCount(全件数), currentCount(クエリ結果の件数), isPreviousData(useQueryの返り値)
 * @returns
 */
const Pagination = <VariableType,>(props: {
  pageInfoFragment: FragmentType<typeof PageInfoFragment>;
  variables: VariableType;
  setVariables: Dispatch<SetStateAction<VariableType>>;
  totalCount: number;
  currentCount: number;
  isPreviousData: boolean;
}) => {
  const { variables, setVariables, totalCount, currentCount, isPreviousData } =
    props;
  const pageInfoFragment = useFragment(
    PageInfoFragment,
    props.pageInfoFragment
  );

  const router = useRouter();
  /**
   * NOTE:
   * memoizeしないと下記useEffectで無限ループ
   */
  const pageFromQueryParams = useMemo(() => {
    const page = Number(router.query.page);
    return Number.isNaN(page) ? 1 : page;
  }, [router.query.page]);
  const [page, setPage] = useState<number>(pageFromQueryParams);
  /**
   * NOTE:
   * AppHeaderのNextLinkで同じページに遷移する場合、
   * useEffectで明示的にpageを更新しないといけない
   */
  useEffect(() => {
    setPage(pageFromQueryParams);
  }, [pageFromQueryParams]);

  const pathWithoutQueryParams = useMemo(
    () => router.asPath.split("?")[0],
    [router.asPath]
  );

  const handleClickPrevious = async () => {
    const newVariables: VariableType & {
      first?: number;
      after?: string;
    } = {
      ...variables,
      last: ITEMS_PER_PAGE,
      before: pageInfoFragment?.startCursor,
    };
    if (Object.hasOwn(newVariables, "first")) {
      delete newVariables.first;
    }
    if (Object.hasOwn(newVariables, "after")) {
      delete newVariables.after;
    }
    setVariables(newVariables);
    const nextPage = page - 1;
    setPage(nextPage);
    await router.push(
      {
        pathname: pathWithoutQueryParams,
        query: { ...newVariables, page: nextPage },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleClickNext = async () => {
    const newVariables: VariableType & {
      last?: number;
      before?: string;
    } = {
      ...variables,
      first: ITEMS_PER_PAGE,
      after: pageInfoFragment?.endCursor,
    };
    if (Object.hasOwn(newVariables, "last")) {
      delete newVariables.last;
    }
    if (Object.hasOwn(newVariables, "before")) {
      delete newVariables.before;
    }
    setVariables(newVariables);
    const nextPage = page + 1;
    setPage(nextPage);
    await router.push(
      {
        pathname: pathWithoutQueryParams,
        query: { ...newVariables, page: nextPage },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <ButtonsWrap>
      <button
        disabled={!pageInfoFragment?.hasPreviousPage || !router.isReady}
        onClick={handleClickPrevious}
      >
        戻る
      </button>
      全 {totalCount} 件中 {(page - 1) * ITEMS_PER_PAGE + 1} 〜{" "}
      {isPreviousData ? "..." : (page - 1) * ITEMS_PER_PAGE + currentCount} 件目
      <button
        disabled={!pageInfoFragment?.hasNextPage || !router.isReady}
        onClick={handleClickNext}
      >
        進む
      </button>
    </ButtonsWrap>
  );
};

export default Pagination;
