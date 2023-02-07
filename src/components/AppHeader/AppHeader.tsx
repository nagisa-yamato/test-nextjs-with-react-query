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
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/get-server-side-props">get-server-side-props</Link>
          </li>
          <li>
            <Link href="/pagination">pagination</Link>
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
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
