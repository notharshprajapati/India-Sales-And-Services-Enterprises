import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";

import styled from "styled-components";

const data = [
  {
    question: "What causes brown crispy leaves?",
    answer:
      "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
  },
  {
    question: "My flowers are falling off or dying?",
    answer:
      "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
  },
  {
    question: "What causes leaves to become pale?",
    answer:
      "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant. ",
  },
  {
    question: "How do i choose a plant?",
    answer:
      "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
  },
  {
    question: "How do I change the pots?",
    answer:
      "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
  },
  {
    question: "Why are gnats flying around my plant?",
    answer:
      "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.",
  },
];

const Question = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    } else {
      setSelected(i);
    }
  };
  return (
    <Wrapper>
      <section className="questions section " id="faqs">
        <h2 className="section__title-center questions__title container">
          Some common questions <br />
          were often asked
        </h2>
        <div className="container grid">
          <div className="group">
            {data.map((item, i) => (
              <div
                className={
                  selected === i
                    ? " questions__item accordion-open"
                    : "questions__item "
                }
                onClick={() => toggle(i)}
                key={i}
              >
                <header className="questions__header">
                  <RiAddLine className="questions__icon" />
                  <h3 className="questions__item-title">{item.question}</h3>
                </header>
                <div
                  className="questions__content "
                  style={{
                    height: `${selected === i ? "80px" : "0px "}`,
                  }}
                >
                  <p className="questions__description ">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .group {
    margin: 2rem 0rem 2rem 0rem;
  }
  .questions {
    background-color: var(--question-container-color);
  }

  .questions__item {
    margin: 2rem 0rem 2rem 0rem;
    background-color: var(--container-color);
    border-radius: 0.25rem;
  }

  .questions__item-title {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
  }

  .questions__icon {
    font-size: 1.25rem;
    color: var(--title-color);
  }

  .questions__description {
    font-size: var(--smaller-font-size);
    padding: 0 1.25rem 1.25rem 2.5rem;
  }

  .questions__header {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;
  }

  .questions__content {
    overflow: hidden;
    height: 0;
  }

  .questions__item,
  .questions__header,
  .questions__item-title,
  .questions__icon,
  .questions__description,
  .questions__content {
    transition: 0.4s;
  }

  .questions__item:hover {
    box-shadow: 0 2px 8px hsla(var(--hue), 4%, 15%, 0.15);
  }

  /*Rotate icon, change color of titles and background*/
  .accordion-open .questions__header,
  .accordion-open .questions__content {
    background-color: var(--first-color);
  }

  .accordion-open .questions__item-title,
  .accordion-open .questions__description,
  .accordion-open .questions__icon {
    color: #fff;
  }

  .accordion-open .questions__icon {
    transform: rotate(45deg);
  }

  @media screen and (min-width: 767px) {
    .group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    .questions__item {
      margin: 0rem;
      background-color: var(--container-color);
      border-radius: 0.25rem;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .questions__title {
      text-align: initial;
    }

    .questions__group {
      row-gap: 2rem;
    }

    .questions__header {
      padding: 1rem;
    }

    .questions__description {
      padding: 0 3.5rem 2.25rem 2.75rem;
    }
  }
`;

export default Question;
