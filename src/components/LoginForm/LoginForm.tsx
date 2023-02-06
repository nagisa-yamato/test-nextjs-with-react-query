import { auth } from "@/lib/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { cookiesApi } from "@/lib/js-cookie";
import {
  COOKIE_NAME_ACCESS_TOKEN,
  COOKIE_NAME_REFRESH_TOKEN,
} from "@/constants";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <form
      className={styles.form}
      onSubmit={async (event) => {
        event.preventDefault();
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const accessToken = await userCredential.user.getIdToken();
        cookiesApi.set(COOKIE_NAME_ACCESS_TOKEN, accessToken);
        cookiesApi.set(
          COOKIE_NAME_REFRESH_TOKEN,
          userCredential.user.refreshToken
        );
        await router.push("/pagination");
      }}
    >
      <label className={styles.label}>
        email
        <input type="text" onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label className={styles.label}>
        password
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
