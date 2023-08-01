import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
 0%,
    75%,
    100% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  
    25% {
      -webkit-transform: translateY(-20px);
      -ms-transform: translateY(-20px);
      -o-transform: translateY(-20px);
      transform: translateY(-20px);
    }
`;

const Wrap = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #023020;
    margin: 35px 5px;
  }
  span:nth-child(1) {
    animation: ${bounce} 1s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }

  span:nth-child(2) {
    animation: ${bounce} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.33s infinite;
  }

  span:nth-child(3) {
    animation: ${bounce} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.66s infinite;
  }
`;

const Loader = () => {
  return (
    <Wrap>
      <span />
      <span />
      <span />
    </Wrap>
  );
};

export default Loader;
