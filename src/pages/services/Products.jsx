import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import { ProductsData } from "../../Const";
const Products = () => {
  return (
    <Wrapper>
      <section className="product section container">
        <Fade bottom>
          <h2 className="section__title-center">
            Check out our <br />
            products
          </h2>
        </Fade>
        <Fade bottom delay={250}>
          <p className="product__description" style={{ marginBottom: "2rem" }}>
            Here are some selected plants from our showroom, all are in
            excellent shape and has a long life span. Buy and enjoy best
            quality.
          </p>
        </Fade>
        <div className="card">
          <Fade bottom cascade delay={250}>
            <div className="product__container grid">
              {ProductsData.map((item, i) => (
                <article className="product__card" key={i}>
                  <img src={item.img} alt="" className="product__img" />
                  <h3 className="product__title">{item.name}</h3>
                </article>
              ))}
            </div>
          </Fade>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .card {
    background-color: var(--card-color);
    border-radius: 2rem;
    padding-top: 3rem;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
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
    border-radius: 2rem;
  }

  .product__title {
    font-size: var(--small-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--first-color);
    text-align: center;
  }

  .product__title {
    margin-bottom: 0.25rem;
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

    .product__title {
      font-size: var(--normal-font-size);
    }
  }
`;

export default Products;
