import {
  COOKIE_NAME_ACCESS_TOKEN,
  COOKIE_NAME_REFRESH_TOKEN,
} from "@/constants";
import useAuth from "@/hooks/useAuth";
import { auth } from "@/lib/firebase/config";
import { cookiesApi } from "@/lib/js-cookie";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header, UL } from "./AppHeader.styles";

const AppHeader = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  return (
    <Header>
      <nav>
        <UL>
          <li>
            <Link href="/">index</Link>
          </li>
          <li>
            <Link href="/gallery-group">gallery-group</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                onClick={async () => {
                  await signOut(auth);
                  cookiesApi.remove(COOKIE_NAME_ACCESS_TOKEN);
                  cookiesApi.remove(COOKIE_NAME_REFRESH_TOKEN);
                  await router.push("/");
                }}
              >
                logout
              </button>
            ) : (
              <Link href="/login">login</Link>
            )}
          </li>
        </UL>
      </nav>
    </Header>
  );
};

export default AppHeader;
