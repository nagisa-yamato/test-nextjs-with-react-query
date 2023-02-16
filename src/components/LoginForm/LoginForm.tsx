import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Label } from "./LoginForm.styles";
import { login } from "@/lib/firebase/auth/helpers";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <Form
      onSubmit={async (event) => {
        event.preventDefault();
        await login(email, password);
        await router.push("/");
      }}
    >
      <Label>
        email
        <input type="text" onChange={(event) => setEmail(event.target.value)} />
      </Label>
      <Label>
        password
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </Label>
      <button type="submit">login</button>
    </Form>
  );
};

export default LoginForm;
