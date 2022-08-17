import React from "react";
import styled from "styled-components";
import { RiShoppingBagLine } from "react-icons/ri";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";

const Products = () => {
  return (
    <Wrapper>
      <section className="product section container" id="products">
        <h2 className="section__title-center">
          Check out our <br />
          products
        </h2>

        <p className="product__description">
          Here are some selected plants from our showroom, all are in excellent
          shape and has a long life span. Buy and enjoy best quality.
        </p>

        <div className="product__container grid">
          <article className="product__card">
            <div className="product__circle"></div>
            <img src={product1} alt="" className="product__img" />
            <h3 className="product__title">Cacti Plant</h3>
            <span className="product__price">$19.99</span>
            <button className="button--flex product__button">
              <RiShoppingBagLine />
            </button>
          </article>

          <article className="product__card">
            <div className="product__circle"></div>
            <img src={product2} alt="" className="product__img" />
            <h3 className="product__title">Cactus Plant</h3>
            <span className="product__price">$11.99</span>
            <button className="button--flex product__button">
              <RiShoppingBagLine />
            </button>
          </article>

          <article className="product__card">
            <div className="product__circle"></div>
            <img src={product3} alt="" className="product__img" />
            <h3 className="product__title">Aloe Vera Plant</h3>
            <span className="product__price">$7.99</span>
            <button className="button--flex product__button">
              <RiShoppingBagLine />
            </button>
          </article>

          <article className="product__card">
            <div className="product__circle"></div>
            <img src={product4} alt="" className="product__img" />
            <h3 className="product__title">Succulent Plant</h3>
            <span className="product__price">$4.99</span>
            <button className="button--flex product__button">
              <RiShoppingBagLine />
            </button>
          </article>

          <article className="product__card">
            <div className="product__circle"></div>
            <img src={product5} alt="" className="product__img" />
            <h3 className="product__title">Succulent Plant</h3>
            <span className="product__price">$11.99</span>
            <button className="button--flex product__button">
              <RiShoppingBagLine />
            </button>
          </article>

          <article className="product__card">
            <div className="product__circle"></div>
            <img src={product6} alt="" className="product__img" />
            <h3 className="product__title">Green Plant</h3>
            <span className="product__price">$8.99</span>
            <button className="button--flex product__button">
              <RiShoppingBagLine />
            </button>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .button--flex {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
  }
  .product__description {
    text-align: center;
  }

  .product__container {
    padding: 3rem 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem 3rem;
  }

  .product__card {
    display: grid;
    position: relative;
  }

  .product__img {
    position: relative;
    width: 120px;
    justify-self: center;
    margin-bottom: var(--mb-0-75);
    transition: 0.3s;
  }

  .product__title,
  .product__price {
    font-size: var(--small-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--first-color-alt);
  }

  .product__title {
    margin-bottom: 0.25rem;
  }

  .product__button {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--first-color);
    color: #fff;
    padding: 0.25rem;
    border-radius: 0.35rem;
    font-size: 1.15rem;
  }

  .product__button:hover {
    background-color: var(--first-color-alt);
  }

  .product__circle {
    width: 90px;
    height: 90px;
    background-color: var(--lighten-container-color);
    border-radius: 50%;
    position: absolute;
    top: 18%;
    left: 5%;
    transition: 0.4s;
  }

  .product__card:hover .product__img {
    transform: translateY(-0.5rem);
  }

  @media screen and (max-width: 320px) {
    .product__container {
      grid-template-columns: 0.6fr;
      justify-content: center;
    }
  }

  /* For medium devices */
  @media screen and (min-width: 576px) {
    .product__description {
      padding: 0 4rem;
    }

    .product__container {
      grid-template-columns: repeat(2, 170px);
      justify-content: center;
      column-gap: 5rem;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .product__description {
      padding: 0 16rem;
    }

    .product__container {
      padding: 4rem 0;
      grid-template-columns: repeat(3, 185px);
      gap: 4rem 6rem;
    }

    .product__img {
      width: 160px;
    }

    .product__circle {
      width: 110px;
      height: 110px;
    }

    .product__title,
    .product__price {
      font-size: var(--normal-font-size);
    }
  }
`;

export default Products;
