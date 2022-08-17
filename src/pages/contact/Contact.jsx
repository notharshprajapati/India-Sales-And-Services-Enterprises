import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { RiPhoneLine, RiMailLine } from "react-icons/ri";
const Contact = () => {
  return (
    <Wrapper>
      <section className="contact section container">
        <div className="contact__container grid">
          <div className="contact__box">
            <h2 className="section__title">
              Reach out to us today <br />
              via any of the given <br />
              information
            </h2>

            <div className="contact__data">
              <div className="contact__information">
                <h3 className="contact__subtitle">
                  Call us for instant support
                </h3>
                <span className="contact__description">
                  <RiPhoneLine className="contact__icon" />
                  +999 888 777
                </span>
              </div>

              <div className="contact__information">
                <h3 className="contact__subtitle">Write us by mail</h3>
                <span className="contact__description">
                  <RiMailLine className="contact__icon" />
                  user@gmail.com
                </span>
              </div>
            </div>
          </div>

          <form action="" className="contact__form">
            <div className="contact__inputs">
              <div className="contact__content">
                <input
                  type="email"
                  placeholder=" "
                  className="contact__input"
                />
                <label className="contact__label">Email</label>
              </div>

              <div className="contact__content">
                <input type="text" placeholder=" " className="contact__input" />
                <label className="contact__label">Subject</label>
              </div>

              <div className="contact__content contact__area">
                <textarea
                  name="message"
                  placeholder=" "
                  className="contact__input"
                ></textarea>
                <label className="contact__label">Message</label>
              </div>
            </div>
            <Button text="Send Message" />
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .contact__container {
    row-gap: 3.5rem;
  }

  .contact__data {
    display: grid;
    row-gap: 2rem;
  }

  .contact__subtitle {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--text-color);
    margin-bottom: var(--mb-0-5);
    transition: 0.4s;
  }

  .contact__description {
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    color: var(--title-color);
    font-weight: var(--font-medium);
  }

  .contact__icon {
    font-size: 1.25rem;
  }

  .contact__inputs {
    display: grid;
    row-gap: 2rem;
    margin-bottom: var(--mb-2-5);
  }

  .contact__content {
    position: relative;
    height: 3rem;
    border-bottom: 1px solid var(--text-color-light);
  }

  .contact__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 1rem 0;
    background: none;
    color: var(--text-color);
    border: none;
    outline: none;
    z-index: 1;
  }

  .contact__label {
    position: absolute;
    top: 0.75rem;
    width: 100%;
    font-size: var(--small-font-size);
    color: var(--text-color-light);
    transition: 0.3s;
  }

  .contact__area {
    height: 7rem;
  }

  .contact__area textarea {
    resize: none;
  }

  /*Input focus move up label*/
  .contact__input:focus + .contact__label {
    top: -0.75rem;
    left: 0;
    font-size: var(--smaller-font-size);
    z-index: 10;
  }

  /*Input focus sticky top label*/
  .contact__input:not(:placeholder-shown).contact__input:not(:focus)
    + .contact__label {
    top: -0.75rem;
    font-size: var(--smaller-font-size);
    z-index: 10;
  }

  @media screen and (min-width: 767px) {
    .contact__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
export default Contact;
