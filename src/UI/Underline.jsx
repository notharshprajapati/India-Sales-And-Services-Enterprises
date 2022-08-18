import React from "react";
import styled from "styled-components";

const Underline = () => {
  return (
    <Wrapper>
      <div className="underline" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .underline {
    content: "";
    width: 25%;
    height: 2px;
    background-color: var(--first-color);
  }
`;
export default Underline;
