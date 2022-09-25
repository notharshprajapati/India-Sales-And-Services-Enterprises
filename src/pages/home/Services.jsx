import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { Fade } from "react-reveal";

import styled from "styled-components";

const data = [
  {
    question: "Sale of material handling equipment",
    answer:
      "We facilitate sale of all Indian and imported material handling equipment, such as forklift, stacker, hand pallet truck and rich truck.",
  },
  {
    question: "Spares for material handling equipment",
    answer: "We also deal in spare parts for all material handling equipment",
  },
  {
    question: "AC & DC motor repair",
    answer:
      "We also carry out repair work for AC and DC motor for material handling equipment’s ",
  },
  {
    question: "All type battery repair",
    answer:
      "We do all type of battery repair work of Indian and Imported make.",
  },
  {
    question: "Safety equipment for material handling.",
    answer:
      "We also sell safety equipment for carrying out material handling activities.",
  },
  {
    question: "Maintenance contracts for MHE",
    answer:
      "We provide annual , bi-annual and time based  service contracts for the maintenance of material handling equipment’s.",
  },
];

const Services = () => {
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
        <Fade bottom>
          <h2 className="section__title-center questions__title container">
            Our Services
          </h2>
        </Fade>
        <div className="container grid">
          <Fade bottom cascade>
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
          </Fade>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h2 {
    text-decoration: underline;
    text-underline-offset: 2rem;
    text-decoration-color: Var(--first-color);
  }
  .group {
    margin: 2rem 0rem 2rem 0rem;
  }
  .questions {
    background-color: var(--question-container-color);
    padding-bottom: 2rem;
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

export default Services;
