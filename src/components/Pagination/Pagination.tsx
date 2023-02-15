import { ITEMS_PER_PAGE } from "@/constants";
import { PageInfoFragment } from "@/gql/fragments/common";
import { FragmentType, useFragment } from "@/gql/generated";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { ButtonsWrap } from "./Pagination.styles";

export default function Pagination<VariableType>(props: {
  pageInfoFragment: FragmentType<typeof PageInfoFragment>;
  variables: VariableType;
  setVariables: Dispatch<SetStateAction<VariableType>>;
  page?: number;
  totalCount: number;
  currentCount: number;
  isPreviousData: boolean;
}) {
  const { variables, setVariables, totalCount, currentCount, isPreviousData } =
    props;
  const pageInfoFragment = useFragment(
    PageInfoFragment,
    props.pageInfoFragment
  );
  const [page, setPage] = useState(props.page ?? 1);
  const router = useRouter();
  const pathWithoutQueryParams = useMemo(
    () => router.asPath.split("?")[0],
    [router.asPath]
  );

  return (
    <ButtonsWrap>
      <button
        disabled={!pageInfoFragment?.hasPreviousPage || !router.isReady}
        onClick={async () => {
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
          await router.push(
            { pathname: pathWithoutQueryParams, query: newVariables },
            undefined,
            { shallow: true }
          );
          setPage((prev) => prev - 1);
        }}
      >
        戻る
      </button>
      全 {totalCount} 件中 {(page - 1) * ITEMS_PER_PAGE + 1} 〜{" "}
      {isPreviousData ? "..." : (page - 1) * 10 + currentCount} 件目
      <button
        disabled={!pageInfoFragment?.hasNextPage || !router.isReady}
        onClick={async () => {
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
          await router.push(
            { pathname: pathWithoutQueryParams, query: newVariables },
            undefined,
            {
              shallow: true,
            }
          );
          setPage((prev) => prev + 1);
        }}
      >
        進む
      </button>
    </ButtonsWrap>
  );
}
