import { auth } from "@/lib/firebase/config";
import { useMemo } from "react";

// TODO:
// useAuthにリファクタ、onAuthStateChangedを察知する
// _app層でContextとして露出
const useIsLoggedIn = () => {
  const user = auth.currentUser;
  const isLoggedIn = useMemo(() => {
    return !!user;
  }, [user]);

  return isLoggedIn;
};

export default useIsLoggedIn;
