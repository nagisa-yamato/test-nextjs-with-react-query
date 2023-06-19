"use client";

import {
  COOKIE_NAME_ACCESS_TOKEN,
  COOKIE_NAME_REFRESH_TOKEN,
} from "@/constants";
import { auth } from "@/lib/firebase/config";
import { cookiesApi } from "@/lib/js-cookie";
import { User } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";

export const AuthContext = createContext<{ user: User | null }>({ user: null });

export const AuthProvider = (props: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      console.warn("onIdTokenChanged");
      if (user) {
        console.warn("has user");
        const token = await user.getIdToken();
        setUser(user);
        cookiesApi.set(COOKIE_NAME_ACCESS_TOKEN, token);
        cookiesApi.set(COOKIE_NAME_REFRESH_TOKEN, user.refreshToken);
        return;
      }
      console.warn("no user");
      setUser(null);
      cookiesApi.remove(COOKIE_NAME_ACCESS_TOKEN);
      cookiesApi.remove(COOKIE_NAME_REFRESH_TOKEN);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
