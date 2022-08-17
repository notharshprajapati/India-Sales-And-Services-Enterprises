import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { RiCheckboxFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import about from "../../assets/about.png";

const About = () => {
  return (
    <Wrapper>
      <section className="about section container" id="about">
        <div className="about__container grid">
          <img src={about} alt="" className="about__img" />
          <div className="about__data">
            <h2 className="section__title about__title">
              Who we really are & <br />
              why choose us
            </h2>
            <p className="about__description">
              We have over 4000+ unbiased reviews and our customers trust our
              plant process and delivery service every time
            </p>
            <div className="about__details">
              <p className="about__details-description">
                <RiCheckboxFill className="about__details-icon" />
                We always deliver on time.
              </p>
              <p className="about__details-description">
                <RiCheckboxFill className="about__details-icon" />
                We give you guides to protect and care for your plants.
              </p>
              <p className="about__details-description">
                <RiCheckboxFill className="about__details-icon" />
                We always come over for a check-up after sale.
              </p>
              <p className="about__details-description">
                <RiCheckboxFill className="about__details-icon" />
                100% money back guaranteed.
              </p>
            </div>
            <NavLink to="/services">
              <Button text="Shop Now" />
            </NavLink>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .about__container {
    row-gap: 2rem;
  }

  .about__img {
    width: 280px;
    justify-self: center;
  }

  .about__title {
    margin-bottom: var(--mb-1);
  }

  .about__description {
    margin-bottom: var(--mb-2);
  }

  .about__details {
    display: grid;
    row-gap: 1rem;
    margin-bottom: var(--mb-2-5);
  }

  .about__details-description {
    display: inline-flex;
    column-gap: 0.5rem;
    font-size: var(--small-font-size);
  }

  .about__details-icon {
    font-size: 1rem;
    color: var(--first-color);
    margin-top: 0.15rem;
  }

  @media screen and (min-width: 767px) {
    .about__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .about__img {
      width: 380px;
    }
  }

  @media screen and (min-width: 1200px) {
    .about__container {
      column-gap: 7rem;
    }
  }
`;
export default About;
