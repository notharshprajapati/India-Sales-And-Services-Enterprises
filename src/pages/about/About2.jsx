import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
import about2 from "../../assets/about2.jpg";
const About2 = () => {
  return (
    <Wrapper>
      <section className="home">
        <div className="home__container container grid">
          <Fade left delay={250}>
            <img src={about2} alt="" className="home__img" />
          </Fade>
          <Fade right delay={250}>
            <div className="home__data">
              <p className="home__description" style={{ marginTop: "1rem" }}>
                Our experience and the market analysis helped us to pioneer in
                the retro-fitment services, and we delivered this service all
                over India. The performance of these machines is one of the best
                retro-fitments in the Industry.
              </p>
              <p className="home__description">
                The boost in the Industrial sector pushed growth demanded
                additional specialized services and that led to dramatic growth
                of the company. Our presence in all major industrial hubs was
                established by launching Offices across India and making the
                best technician available. Considering the quality of service
                and the organizational strength, associations and
                representations forIndian market were offered by world renowned
                companies.
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

export default About2;
