import React from "react";
import styled from "styled-components";
import { RiArrowUpFill } from "react-icons/ri";

const ScrollUp = ({ scrollPosition }) => {
  return (
    <Wrapper>
      <a
        href="#"
        className={`${
          scrollPosition < 200 ? "scrollup" : "scrollup show-scroll"
        }`}
      >
        <RiArrowUpFill className="scrollup__icon" />
      </a>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .scrollup {
    position: fixed;
    background-color: var(--first-color);
    right: 1rem;
    bottom: -30%;
    display: inline-flex;
    padding: 0.5rem;
    border-radius: 0.25rem;
    z-index: var(--z-tooltip);
    opacity: 0.8;
    transition: 0.4s;
  }

  .scrollup__icon {
    font-size: 1rem;
    color: #fff;
  }

  .scrollup:hover {
    background-color: var(--first-color-alt);
    opacity: 1;
  }

  /* Show Scroll Up*/
  .show-scroll {
    bottom: 3rem;
  }
  @media screen and (min-width: 1200px) {
    .scrollup {
      right: 3rem;
    }
  }
`;

export default ScrollUp;
