import React from "react";
import styled from "styled-components";

import partners1 from "../../assets/Partners/partners1.png";
import partners2 from "../../assets/Partners/partners2.png";
import partners3 from "../../assets/Partners/partners3.png";
import partners4 from "../../assets/Partners/partners4.png";
import partners5 from "../../assets/Partners/partners5.png";
import partners6 from "../../assets/Partners/partners6.png";

const data = [
  {
    img: partners1,
  },
  {
    img: partners2,
  },
  {
    img: partners3,
  },
  {
    img: partners4,
  },
  {
    img: partners5,
  },
  {
    img: partners6,
  },
];

const Products = () => {
  return (
    <Wrapper>
      <section className="product section container" id="products">
        <div className="card">
          <h2 className="section__title-center">Our Partners</h2>

          <div className="product__container grid">
            {data.map((item, i) => (
              <article className="product__card" key={i}>
                <img src={item.img} alt="" className="product__img" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  h2 {
    text-decoration: underline;
    text-underline-offset: 2rem;
    text-decoration-color: Var(--first-color);
  }
  .card {
    border-radius: 2rem;
    padding-top: 3rem;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
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

  @media screen and (max-width: 320px) {
    .product__container {
      grid-template-columns: 0.6fr;
      justify-content: center;
    }
  }

  /* For medium devices */
  @media screen and (min-width: 576px) {
    .product__container {
      grid-template-columns: repeat(2, 170px);
      justify-content: center;
      column-gap: 5rem;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .product__container {
      padding: 4rem 0;
      grid-template-columns: repeat(3, 185px);
      gap: 4rem 6rem;
    }

    .product__img {
      width: 160px;
    }
  }
`;

export default Products;
