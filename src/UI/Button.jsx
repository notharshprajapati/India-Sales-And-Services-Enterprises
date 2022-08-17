import React from "react";
import styled from "styled-components";
import { RiArrowRightDownLine } from "react-icons/ri";

const Button = ({ text }) => {
  return (
    <Wrapper>
      <a href="#about" className="button button--flex footer__button">
        {text} <RiArrowRightDownLine className="button__icon" />
      </a>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .button {
    display: inline-block;
    background-color: var(--first-color);
    color: #fff;
    padding: 1rem 1.75rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);
    transition: 0.3s;
  }

  .button:hover {
    background-color: var(--first-color-alt);
  }

  .button__icon {
    transition: 0.3s;
  }

  .button:hover .button__icon {
    transform: translate(0.25rem);
  }

  .button--flex {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  .button--link {
    color: var(--first-color);
    font-weight: var(--font-medium);
  }

  .button--link:hover .button__icon {
    transform: translateX(0.25rem);
  }
`;

export default Button;
