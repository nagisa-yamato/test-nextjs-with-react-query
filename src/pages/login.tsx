import { useRouter } from "next/router";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";
import LoginForm from "@/components/LoginForm/LoginForm";

const Login = () => {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  if (isLoggedIn) {
    return router.push("/pagination");
  }

  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
};

export default Login;
