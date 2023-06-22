import Image from "next/image";
import styled from "styled-components";

import { logo } from "@/config/images";

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
  height: fit-content;
  overflow: visible;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-top: 15px;

  img {
  }
`;
const Header = () => {
  return (
    <Wrap>
      <Image alt={"Logo"} src={logo} width={100} height={50} priority />
    </Wrap>
  );
};
export default Header;
