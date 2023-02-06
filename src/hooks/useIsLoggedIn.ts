import { auth } from "@/lib/firebase/config";
import { useMemo } from "react";

const useIsLoggedIn = () => {
  const user = auth.currentUser;
  const isLoggedIn = useMemo(() => {
    return !!user;
  }, [user]);

  return isLoggedIn;
};

export default useIsLoggedIn;
