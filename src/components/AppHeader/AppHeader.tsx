import useAuth from "@/hooks/useAuth";
import { logout } from "@/lib/firebase/auth/helpers";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header, UL } from "./AppHeader.styles";

const AppHeader = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

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
          </li>{" "}
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
          <li>
            <Link href="/gallery-with-next-image">gallery-with-next-image</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button
                onClick={async () => {
                  await logout();
                  // https://stackoverflow.com/a/67635388
                  queryClient.removeQueries();
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
