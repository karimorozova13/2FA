import Link from "next/link";
import { styled } from "styled-components";

import { colors } from "@/config/colors";

const LinksWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  p {
    color: ${colors.text};
    font-weight: 700;
  }
  a {
    color: ${colors.cta};
    font-weight: 700;
  }
`;

const LinksText = ({ title, href, linkText }) => {
  return (
    <LinksWrap>
      <p>{title}</p>
      <Link href={href}>{linkText}</Link>
    </LinksWrap>
  );
};

export default LinksText;
