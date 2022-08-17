import React from "react";
import styled from "styled-components";

import home from "../../assets/home.png";

import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";
const Intro = () => {
  return (
    <Wrapper>
      <section className="home">
        <div className="home__container container grid">
          <img src={home} alt="" className="home__img" />
          <div className="home__data">
            <h1 className="home__title">
              Plants will make <br />
              your life better
            </h1>
            <p className="home__description">
              Create incredible plant design for your offices or apastaments.
              Add fresness to your new ideas.
            </p>
          </div>
          <div className="home__social">
            <span className="home__social-follow">Follow Us</span>
            <div className="home__social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="home__social-link"
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="home__social-link"
              >
                <RiInstagramLine />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="home__social-link"
              >
                <RiTwitterFill />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .home {
    padding: 3.5rem 0 2rem;
  }

  .home__container {
    position: relative;
    row-gap: 2rem;
  }

  .home__img {
    width: 200px;
    justify-self: center;
  }

  .home__title {
    font-size: var(--big-font-size);
    line-height: 140%;
    margin-bottom: var(--mb-1);
    transition: 0.4s;
  }

  .home__description {
    margin-bottom: var(--mb-2-5);
  }

  .home__social {
    position: absolute;
    top: 2rem;
    right: -1rem;
    display: grid;
    justify-items: center;
    row-gap: 3.5rem;
  }

  .home__social-follow {
    font-weight: var(--font-medium);
    font-size: var(--smaller-font-size);
    color: var(--first-color);
    position: relative;
    transform: rotate(90deg);
  }

  .home__social-follow::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 2px;
    background-color: var(--first-color);
    right: -45%;
    top: 50%;
  }

  .home__social-links {
    display: inline-flex;
    flex-direction: column;
    row-gap: 0.25rem;
  }

  .home__social-link {
    background-color: 1rem;
    color: var(--first-color);
    transition: 0.3s;
  }

  .home__social-link:hover {
    transform: translateX(0.25rem);
  }

  /*=============== BREAKPOINTS ===============*/
  /* For small devices */
  @media screen and (max-width: 320px) {
    .home__img {
      width: 180px;
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

    .home__container {
      align-items: center;
    }

    .home__img {
      width: 280px;
      order: 1;
    }

    .home__social {
      top: 30%;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .home {
      padding: 13rem 0 5rem;
    }

    .home__img {
      width: 350px;
    }

    .home__description {
      padding-right: 7rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .home__social {
      right: -3rem;
      row-gap: 4.5rem;
    }

    .home__social-follow {
      font-size: var(--small-font-size);
    }

    .home__social-follow::after {
      width: 1.5rem;
      right: -60%;
    }

    .home__social-link {
      font-size: 1.15rem;
    }
  }
`;

export default Intro;
