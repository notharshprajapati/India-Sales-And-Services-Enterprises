import React from "react";
import styled from "styled-components";
const Steps = () => {
  return (
    <Wrapper>
      <section className="steps section container">
        <div className="steps__bg">
          <h2 className="section__title-center steps__title">
            Steps to start your <br />
            plants off right
          </h2>
          <div className="steps__container grid">
            <div className="steps__card">
              <div className="steps__card-number">01</div>
              <h3 className="steps__card-title">Choose Plant</h3>
              <p className="steps__card-description">
                We have several varieties plants you can choose from
              </p>
            </div>
            <div className="steps__card">
              <div className="steps__card-number">02</div>
              <h3 className="steps__card-title">Place an order</h3>
              <p className="steps__card-description">
                Once your order is set, we move to the next step which is the
                shipping
              </p>
            </div>
            <div className="steps__card">
              <div className="steps__card-number">03</div>
              <h3 className="steps__card-title">Get plants delivered</h3>
              <p className="steps__card-description">
                Our delivery process is easy, you receive the plant direct to
                your door.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .steps__bg {
    background-color: var(--first-color-dark);
    padding: 3rem 2rem 2rem;
    border-radius: 1rem;
    transition: 0.4s;
  }

  .steps__container {
    gap: 2rem;
    padding-top: 1rem;
  }

  .steps__title {
    color: #fff;
  }

  .steps__card {
    background-color: var(--container-color);
    padding: 2.5rem 3rem 2rem 1.5rem;
    border-radius: 1rem;
    transition: 0.4s;
  }

  .steps__card-number {
    display: inline-block;
    background-color: var(--first-color-alt);
    color: #fff;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-1-5);
    transition: 0.3s;
  }

  .steps__card-title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
    transition: 0.4s;
  }

  .steps__card-description {
    font-size: var(--small-font-size);
  }

  .steps__card:hover .steps__card-number {
    transform: translateY(-0.25rem);
  }

  @media screen and (max-width: 320px) {
    .steps__bg {
      padding: 2rem 1rem;
    }

    .steps__card {
      padding: 1.5rem;
    }
  }

  /* For medium devices */
  @media screen and (min-width: 576px) {
    .steps__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .steps__container {
      grid-template-columns: repeat(3, 1fr);
    }

    .steps__bg {
      padding: 3.5rem 2.5rem;
    }

    .steps__card-title {
      font-size: var(--normal-font-size);
    }
  }
`;
export default Steps;
