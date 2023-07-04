import styled from "styled-components";

import { useRouter } from "next/router";

import { authApi } from "@/utils/authApi";
import { colors } from "@/config/colors";

const Btn = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  background-color: transparent;
  font-size: 18px;
  color: ${colors.text};
  padding: 7px;
  cursor: pointer;
  pointer-events: auto;
  border-radius: 6px;
  transition: all 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:hover {
    color: ${colors.mainWhite};
    background-color: ${colors.text};
    opacity: 0.6;
  }
`;
const LogOut = () => {
  const router = useRouter();
  const getCookie = (val) => {
    const name = val + "=";
    const decodedCookie = decodeURIComponent(document.cookie);

    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i += 1) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }

      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  };
  const logOut = async () => {
    // let token = localStorage.getItem("token");
    let token = getCookie("token");

    await authApi.logout(token);

    router.push("/");

    // localStorage.removeItem("token");
  };
  return <Btn onClick={logOut}>Log out</Btn>;
};

export default LogOut;
