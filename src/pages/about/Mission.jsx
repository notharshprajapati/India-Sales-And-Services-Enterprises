import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
const Mission = () => {
  return (
    <Wrapper>
      <section className="mission section container">
        <div className="mission__bg">
          <Fade bottom>
            <h2 className="section__title-center mission__title">
              Company Mission
            </h2>
          </Fade>
          <Fade bottom cascade delay={250}>
            <div className="mission__container grid">
              <div className="mission__card">
                <div className="mission__card-number">01</div>
                <h3 className="mission__card-title">Expansion</h3>
                <p className="mission__card-description">
                  We have expanded our skills & expertise in Material Handling
                  Equipments.
                </p>
              </div>
              <div className="mission__card">
                <div className="mission__card-number">02</div>
                <h3 className="mission__card-title">Solution provider</h3>
                <p className="mission__card-description">
                  fully transformed as Complete Solution provider for
                  requirement of Spares & Services of Material Handling
                  Equipments
                </p>
              </div>
              <div className="mission__card">
                <div className="mission__card-number">03</div>
                <h3 className="mission__card-title">Quick Delivery</h3>
                <p className="mission__card-description">
                  Our delivery process is easy, you receive the equipments
                  direct to your desired location.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .mission__bg {
    background-color: var(--first-color-dark);
    padding: 3rem 2rem 2rem;
    border-radius: 1rem;
    transition: 0.4s;
  }

  .mission__container {
    gap: 2rem;
    padding-top: 1rem;
  }

  .mission__title {
    color: #fff;
  }

  .mission__card {
    background-color: var(--container-color);
    padding: 2.5rem 3rem 2rem 1.5rem;
    border-radius: 1rem;
    transition: 0.4s;
  }

  .mission__card-number {
    display: inline-block;
    background-color: var(--first-color-alt);
    color: #fff;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-1-5);
    transition: 0.3s;
  }

  .mission__card-title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
    transition: 0.4s;
  }

  .mission__card-description {
    font-size: var(--small-font-size);
  }

  .mission__card:hover .mission__card-number {
    transform: translateY(-0.25rem);
  }

  @media screen and (max-width: 320px) {
    .mission__bg {
      padding: 2rem 1rem;
    }

    .mission__card {
      padding: 1.5rem;
    }
  }

  /* For medium devices */
  @media screen and (min-width: 576px) {
    .mission__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .mission__container {
      grid-template-columns: repeat(3, 1fr);
    }

    .mission__bg {
      padding: 3.5rem 2.5rem;
    }

    .mission__card-title {
      font-size: var(--normal-font-size);
    }
  }
`;
export default Mission;
