import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { NavLink } from "react-router-dom";
import about_about from "../../assets/about_about.jpg";
import Underline from "../../UI/Underline";
import { Fade } from "react-reveal";
const About1 = () => {
  return (
    <Wrapper>
      <section className="home">
        <div className="home__container container grid">
          <Fade right>
            <img src={about_about} alt="" className="home__img" />
          </Fade>
          <Fade left>
            <div className="home__data">
              <h1 className="home__title">About us</h1>
              <Underline />

              <p
                className="home__description"
                style={{ margin: "2rem 2rem 2rem 0rem" }}
              >
                India Sales and Services Enterprises was established in the year
                2016 in Delhi, India. From its humble beginnings, the company
                now aims at achieving the pinnacle in the material handling
                equipment industry. Since its inception, ISSE’s primary goal has
                been to provide best quality at competitive prices combined with
                impeccable services. Customers’ feedback and support has made us
                one of the reputed names in the material handling industry
              </p>

              <NavLink to="/about">
                <Button text="Read more" />
              </NavLink>
            </div>
          </Fade>
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
    text-align: justify;
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
      margin-left: 5vh;
      order: 1;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .home {
      padding: 10rem 0 5rem;
    }

    .home__img {
      width: 450px;
      margin-right: 7vh;
    }
    .home__data {
      padding-right: 1rem;
    }
  }
`;

export default About1;
