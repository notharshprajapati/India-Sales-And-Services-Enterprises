import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { RiLeafLine, RiCloseLine, RiMenuLine } from "react-icons/ri";

import links from "../Const.js";
import Theme from "./Theme.jsx";

const Navbar = ({ scrollPosition }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <Wrapper>
      <header
        className={`${
          scrollPosition < 200 ? "header" : "header scroll-header"
        }`}
      >
        <nav className="nav container">
          <NavLink to="/" className="nav__logo">
            <RiLeafLine /> Plantex
          </NavLink>

          <div className={`${showNav ? "nav__menu show-menu" : "nav__menu"}`}>
            <ul className="nav__list">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li className="nav__item" key={id}>
                    <NavLink
                      to={url}
                      className={({ isActive }) =>
                        isActive ? "active-link" : "nav__link"
                      }
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <RiCloseLine
              className="nav__close"
              onClick={() => setShowNav(false)}
            />
          </div>

          <div className="nav__btns">
            <Theme />
            <RiMenuLine
              className="nav__toggle"
              onClick={() => setShowNav(true)}
            />
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    width: 100%;
    background-color: var(--body-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    transition: 0.4s;
  }

  .nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__logo,
  .nav__toggle,
  .nav__close {
    color: var(--title-color);
  }

  .nav__logo {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -1px;
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    transition: 0.3s;
  }

  .nav__logo-icon {
    font-size: 1.15rem;
    color: var(--first-color);
  }

  .nav__logo:hover {
    color: var(--first-color);
  }

  .nav__toggle {
    display: inline-flex;
    font-size: 1.25rem;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    .nav__menu {
      position: fixed;
      background-color: var(--container-color);
      width: 80%;
      height: 100%;
      top: 0;
      right: -100%;
      box-shadow: -2px 0 4px hsla(var(--hue), 24%, 15%, 0.1);
      padding: 4rem 0 0 3rem;
      border-radius: 1rem 0 0 1rem;
      transition: 0.3s;
      z-index: var(--z-fixed);
    }
  }

  .nav__close {
    font-size: 1.5rem;
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    cursor: pointer;
  }

  .nav__list {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
  }

  .nav__link {
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: 0.3s;
  }

  .nav__link:hover {
    color: var(--first-color);
  }

  /* Show menu */
  .show-menu {
    right: 0;
  }

  /* Change background header */
  .scroll-header {
    box-shadow: 0 1px 4px hsla(var(--hue), 24%, 15%, 0.1);
  }

  /* Active link */
  .active-link {
    position: relative;
    color: var(--first-color);
  }

  .active-link::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: var(--first-color);
  }
  @media screen and (min-width: 767px) {
    .nav {
      height: calc(var(--header-height) + 1.5rem);
      column-gap: 3rem;
    }
  }
  @media screen and (min-width: 767px) {
    .nav__toggle,
    .nav__close {
      display: none;
    }

    .nav__list {
      flex-direction: row;
      column-gap: 3rem;
    }

    .nav__menu {
      margin-left: auto;
    }
  }
`;
export default Navbar;
