import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;

  @media screen and (max-width: 767px) {
    flex-wrap: initial !important;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Container = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Container;
