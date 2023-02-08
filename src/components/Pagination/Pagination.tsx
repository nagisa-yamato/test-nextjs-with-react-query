import { ITEMS_PER_PAGE } from "@/constants";
import { PageInfoFragment } from "@/gql/fragments/common";
import { FragmentType, useFragment } from "@/gql/generated";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Pagination.module.css";

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

  return (
    <div className={styles.buttons}>
      <button
        disabled={!pageInfoFragment?.hasPreviousPage}
        onClick={() => {
          setVariables({
            ...variables,
            first: undefined,
            after: undefined,
            last: ITEMS_PER_PAGE,
            before: pageInfoFragment?.startCursor,
          });
          setPage((prev) => prev - 1);
        }}
      >
        戻る
      </button>
      全 {totalCount} 件中 {(page - 1) * ITEMS_PER_PAGE + 1} 〜{" "}
      {isPreviousData ? "..." : (page - 1) * 10 + currentCount} 件目
      <button
        disabled={!pageInfoFragment?.hasNextPage}
        onClick={() => {
          setVariables({
            ...variables,
            last: undefined,
            before: undefined,
            first: ITEMS_PER_PAGE,
            after: pageInfoFragment?.endCursor,
          });
          setPage((prev) => prev + 1);
        }}
      >
        進む
      </button>
    </div>
  );
}
