import { useRouter } from "next/router";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import LoginForm from "@/components/LoginForm/LoginForm";
import { useEffect } from "react";

const Login = () => {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/pagination");
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

export default Login;
