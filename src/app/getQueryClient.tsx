// https://tanstack.com/query/v5/docs/react/guides/ssr#using-hydrationboundary
import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
