import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { RiCheckboxFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import why from "../../assets/why.jpg";
import { Fade } from "react-reveal";

const Why = () => {
  return (
    <Wrapper>
      <section className="why section container" id="why">
        <div className="why__container grid">
          <Fade left>
            <img src={why} alt="" className="why__img" />
          </Fade>

          <div className="why__data">
            <Fade right>
              <h2 className="section__title why__title">
                Who we really are & <br />
                why choose us
              </h2>
            </Fade>
            <Fade right delay={125}>
              <p className="why__description">
                We have a large network all over North Region India with Skilled
                & Qualified Technical staff to provide, Quick Service & Precise
                Support. Our Company conduct Sales, Service, Retro-fitments etc.
              </p>
            </Fade>
            <Fade right cascade delay={250}>
              <div className="why__details">
                <p className="why__details-description">
                  <RiCheckboxFill className="why__details-icon" />
                  Sale of industrial trucks.
                </p>
                <p className="why__details-description">
                  <RiCheckboxFill className="why__details-icon" />
                  Parts for Indian battery operated industrial trucks.
                </p>
                <p className="why__details-description">
                  <RiCheckboxFill className="why__details-icon" />
                  Wide inventory of parts ready in stock .
                </p>
                <p className="why__details-description">
                  <RiCheckboxFill className="why__details-icon" />
                  Annual Service Contract.
                </p>
              </div>
            </Fade>
            <Fade right delay={750}>
              <NavLink to="/services">
                <Button text="Shop Now" />
              </NavLink>
            </Fade>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .why__container {
    row-gap: 2rem;
  }

  .why__img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    padding: 1rem;
    border-radius: 2rem;
  }

  .why__title {
    margin-bottom: var(--mb-1);
  }

  .why__description {
    margin-bottom: var(--mb-2);
  }

  .why__details {
    display: grid;
    row-gap: 1rem;
    margin-bottom: var(--mb-2-5);
  }

  .why__details-description {
    display: inline-flex;
    column-gap: 0.5rem;
    font-size: var(--small-font-size);
  }

  .why__details-icon {
    font-size: 1rem;
    color: var(--first-color);
    margin-top: 0.15rem;
  }

  @media screen and (min-width: 767px) {
    .why__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 1200px) {
    .why__container {
      column-gap: 7rem;
    }
  }
`;
export default Why;
