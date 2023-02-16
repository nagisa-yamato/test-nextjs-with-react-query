import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";
import LoginForm from "@/components/LoginForm/LoginForm";
import { useEffect } from "react";

const PagesLogin = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      void (async () => await router.push("/"))();
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn) {
    return null;
  }

  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};

export default PagesLogin;
