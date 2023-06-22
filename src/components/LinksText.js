import Link from "next/link";
import { styled } from "styled-components";

import { colors } from "@/config/colors";

const Wrap = styled.div`
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
    <Wrap>
      <p>{title}</p>
      <Link href={href}>{linkText}</Link>
    </Wrap>
  );
};

export default LinksText;
