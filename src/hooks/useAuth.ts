import { AuthContext } from "@/context/AuthProvider";
import { useContext, useMemo } from "react";

const useAuth = () => {
  const { user } = useContext(AuthContext);

  const isLoggedIn = useMemo(() => {
    return !!user;
  }, [user]);

  return { user, isLoggedIn };
};

export default useAuth;
