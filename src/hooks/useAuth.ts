import { AuthContext } from "@/context/AuthProvider";
import { useContext, useMemo } from "react";

const useAuth = () => {
  const { user } = useContext(AuthContext);

  const isLoggedIn = useMemo(() => {
    return !!user;
  }, [user]);

  const refreshIdToken = async () => {
    console.warn("refreshIdToken @useAuth.ts");
    await user?.getIdToken(true);
  };

  return { user, isLoggedIn, refreshIdToken };
};

export default useAuth;
