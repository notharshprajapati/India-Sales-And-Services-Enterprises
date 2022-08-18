import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { NavLink } from "react-router-dom";
import home_about from "../../assets/home_about.jpg";
import Underline from "../../UI/Underline";
const About = () => {
  return (
    <Wrapper>
      <section className="home">
        <div className="home__container container grid">
          <img src={home_about} alt="" className="home__img" />
          <div className="home__data">
            <h1 className="home__title">About us</h1>
            <Underline />
            <h3>
              India sales and services enterprises established in the year 2016
            </h3>
            <p className="home__description">
              in Delhi, India, with an average office setup to serve the
              Material Handling Industry.
            </p>
            <p className="home__description" style={{ marginBottom: "2rem" }}>
              Since inception the company&#39;s goal has been “Best Quality at
              Economical Cost with Quick Service” and this is the Success
              Mantra. Customers&#39; feedback and support has made us one of the
              reputed names in the material handling industry.
            </p>
            <NavLink to="/about">
              <Button text="Read more" />
            </NavLink>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    padding-top: 1rem;
    padding-bottom: 1rem;
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
    font-size: 2rem;
    line-height: 140%;
    margin-bottom: 2rem;
    transition: 0.4s;
  }

  .home__description {
    margin-bottom: 1rem;
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
      padding: 5rem 0 5rem;
    }

    .home__container {
      align-items: center;
    }

    .home__img {
      width: 400px;
      margin-right: 5vh;
      order: -1;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .home {
      padding: 5rem 0 5rem;
    }

    .home__img {
      width: 450px;
      margin-right: 7vh;
    }
    .home__data {
      padding-right: 1rem;
      text-align: justify;
    }
  }
`;

export default About;
