import React from "react";
import styled from "styled-components";

import Button from "./Button";

import {
  RiLeafLine,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
} from "react-icons/ri";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <a href="#" className="footer__logo">
              <RiLeafLine className=" footer__logo-icon" />
              Plantex
            </a>
            <h3 className="footer__title">
              Subscribe to our newsletter <br />
              to stay update
            </h3>
            <div className="footer__subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
              />
              <Button text="Subscribe" />
            </div>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Our Address</h3>
            <ul className="footer__data">
              <li className="footer__information">1234 - Peru</li>
              <li className="footer__information">La Libertad - 43210</li>
              <li className="footer__information">123-456-789</li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Contact Us</h3>
            <ul className="footer__data">
              <li className="footer__information">+999 888 777</li>
              <div className="footer__social">
                <a
                  href="https://www.facebook.com/"
                  className="footer__social-link"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="footer__social-link"
                >
                  <RiInstagramLine />
                </a>
                <a href="https://twitter.com/" className="footer__social-link">
                  <RiTwitterFill />
                </a>
              </div>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">We accept all credit cards</h3>
            <div className="footer__cards">
              <img src={card1} alt="" className="footer__card" />
              <img src={card2} alt="" className="footer__card" />
              <img src={card3} alt="" className="footer__card" />
              <img src={card4} alt="" className="footer__card" />
            </div>
          </div>
        </div>
        <p className="footer__copy">
          &#169; notHarshPrajapati. All rigths reserved
        </p>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .footer__container {
    row-gap: 3rem;
  }

  .footer__logo {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    color: var(--title-color);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: var(--mb-2-5);
    transition: 0.3s;
  }

  .footer__logo-icon {
    font-size: 1.15rem;
    color: var(--first-color);
  }

  .footer__logo:hover {
    color: var(--first-color);
  }

  .footer__title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-1-5);
    transition: 0.4s;
  }

  .footer__subscribe {
    background-color: var(--lighten-container-color);
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
    transition: 0.4s;
  }

  .footer__input {
    width: 70%;
    padding: 0 0.5rem;
    background: none;
    color: var(--text-color);
    border: none;
    outline: none;
  }

  .footer__button {
    padding: 1rem;
  }

  .footer__data {
    display: grid;
    row-gap: 0.75rem;
  }

  .footer__information {
    font-size: var(--small-font-size);
  }

  .footer__social {
    display: inline-flex;
    column-gap: 0.75rem;
  }

  .footer__social-link {
    font-size: 1rem;
    color: var(--text-color);
    transition: 0.3s;
  }

  .footer__social-link:hover {
    transform: translateY(-0.25rem);
  }

  .footer__cards {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
  }

  .footer__card {
    width: 35px;
  }

  .footer__copy {
    text-align: center;
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
    margin: 5rem 0 1rem;
  }

  /*=============== BREAKPOINTS ===============*/

  /* For medium devices */
  @media screen and (min-width: 576px) {
    .footer__subscribe {
      width: 400px;
    }
  }

  @media screen and (min-width: 767px) {
    .footer__container {
      grid-template-columns: repeat(2, 1fr);
    }

    .footer__container {
      column-gap: 3rem;
    }

    .footer__subscribe {
      width: initial;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .footer__logo {
      font-size: var(--h3-font-size);
    }

    .footer__container {
      grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr;
    }

    .footer__copy {
      margin: 7rem 0 2rem;
    }
  }
`;
export default Footer;
