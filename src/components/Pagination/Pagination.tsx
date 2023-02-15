import { ITEMS_PER_PAGE } from "@/constants";
import { PageInfoFragment } from "@/gql/fragments/common";
import { FragmentType, useFragment } from "@/gql/generated";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { ButtonsWrap } from "./Pagination.styles";

/**
 * Objectに"page"属性が含まれていたら削除して返す
 *
 * 主にクエリパラメーターからページ同期用の"page"を削除する目的
 *
 * @param object
 * @returns
 */
export const deletePagePropertyFromObject = <Type,>(
  object: Type & { page?: number }
) => {
  if (Object.hasOwn(object, "page")) {
    delete object.page;
  }
  return object;
};

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
      {isPreviousData ? "..." : (page - 1) * 10 + currentCount} 件目
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
