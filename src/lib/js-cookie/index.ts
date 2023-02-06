import Cookies from "js-cookie";

export const cookiesApi = Cookies.withAttributes({
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
});
