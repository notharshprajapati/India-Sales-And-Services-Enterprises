import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";

import home from "../../assets/home.jpg";
import Underline from "../../UI/Underline";

const Intro = () => {
  return (
    <Wrapper>
      <section className="home">
        <div className="home__container container grid">
          <Fade right>
            <img src={home} alt="" className="home__img" />
          </Fade>
          <Fade left>
            <div className="home__data">
              <h3>Material Handling Equipment Services</h3>
              <h1 className="home__title">
                Pioneers of the
                <br /> material handling <br />
                industry in india
              </h1>
              <Underline />
              <p className="home__description">
                We are the best when it comes to material handling solutions in
                India.
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    padding-bottom: 1rem;
    color: var(--first-color);
  }
  .home {
    padding: 3.5rem 0 2rem;
  }

  .home__container {
    position: relative;
    row-gap: 2rem;
  }

  .home__img {
    width: 600px;
    justify-self: center;
    border-radius: 1rem;
  }

  .home__title {
    font-size: 3rem;
    line-height: 140%;
    margin-bottom: 2rem;
    transition: 0.4s;
  }

  .home__description {
    margin-top: 1rem;
    margin-bottom: var(--mb-2-5);
  }

  /*=============== BREAKPOINTS ===============*/
  /* For small devices */
  @media screen and (max-width: 320px) {
    .home__img {
      width: 200px;
    }

    .home__title {
      font-size: var(--h1-font-size);
    }
  }

  @media screen and (min-width: 767px) {
    .home__container {
      grid-template-columns: repeat(2, 1fr);
    }

    .home {
      padding: 10rem 0 5rem;
    }
    .home__title {
      font-size: 2rem;
    }
    .home__container {
      align-items: center;
    }

    .home__img {
      width: 400px;
      order: 1;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .home {
      padding: 13rem 0 5rem;
    }
    .home__title {
      font-size: 3rem;
    }
    .home__img {
      width: 500px;
    }

    .home__description {
      padding-right: 7rem;
    }
  }
`;

export default Intro;
