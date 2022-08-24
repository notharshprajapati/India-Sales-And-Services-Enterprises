import React from "react";
import loading from "../../src/assets/loading.gif";
import styled from "styled-components";
const Loading = () => {
  return (
    <Wrapper>
      <img src={loading} alt="" className="centerImage" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .centerImage {
    width: 25%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default Loading;
