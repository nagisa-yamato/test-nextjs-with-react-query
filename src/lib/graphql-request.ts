import { auth } from "@/lib/firebase/config";
import { ClientError, GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  "https://stage-api.stagefam.com/graphql",
  {
    headers: {
      "X-Referer": "https://sample.stagefam.com",
    },
    /**
     * ログイン中に401エラーに遭遇したらトークンの更新を試みる
     *
     * HACK: 本当はasync関数受け付けないっぽいですが短縮形だったらいけた
     *
     * @see https://github.com/jasonkuhrt/graphql-request#middleware
     * @param response
     * @returns
     */
    async responseMiddleware(response) {
      // サーバー側だったら早期リターン
      if (typeof window === undefined) {
        return;
      }
      // https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
      const user = auth.currentUser;
      if (
        response instanceof ClientError &&
        response.response.status === 401 &&
        user
      ) {
        console.warn("attempt token refresh");
        await user.getIdToken(true);
      }
    },
  }
);

/**
 * client.requestの`requestHeaders`に渡してください
 * @see https://github.com/jasonkuhrt/graphql-request#passing-headers-in-each-request
 * @param token
 * @returns
 */
export const createAuthorizationHeader = (
  token: string | undefined
): HeadersInit | undefined => {
  return token ? { Authorization: `Bearer ${token}` } : undefined;
};
