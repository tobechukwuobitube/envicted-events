import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  margin-top: 5.875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #240d57;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.25rem;
    margin-bottom: 1rem;

    span {
      background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    @media (min-width: 992px) {
      text-align: right;
    }
  }

  .home-page-image {
    display: flex;
    justify-content: center;
  }

  img {
    width: 10.352rem;
    height: 18.25rem;

    @media (min-width: 992px) {
      display: none;
    }
  }

  p {
    width: 20.0625rem;
    font-size: 1rem;
    font-weight: 300;
    color: #4f4f4f;
    line-height: 1.15rem;
    margin-bottom: 2.25rem;

    @media (min-width: 992px) {
      text-align: right;
    }
  }

  .create-event {
    display: flex;
    justify-content: center;
  }

  .show-on-desktop {
    display: none;

    img {
      display: none;
    }
  }

  @media (min-width: 576px) and (max-width: 992px) {
    margin-top: 3.75rem;
    height: 100vh;

    h1 {
      font-size: 4rem;
      line-height: 4rem;
    }

    p {
      width: 32.5625rem;
      font-size: 1.5rem;
      line-height: 1.725rem;
    }

    img {
      width: 19.438rem;
      height: 34.267rem;
    }
  }

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100vh;
    width: 80vw;
    margin: 0 auto;

    h1 {
      font-size: 4rem;
      line-height: 4rem;
    }

    p {
      width: 32.5625rem;
      font-size: 1.5rem;
      line-height: 1.725rem;
    }

    .show-on-desktop {
      display: block;

      img {
        display: block;
        height: 48.48rem;
        width: 27.5rem;
      }
    }

    .create-event {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const CreateEventButton = styled.button`
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.15rem;
  padding: 1rem;
  margin-top: 2.125rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%);

  @media (min-width: 576px) and (max-width: 992px) {
    margin-top: 3.3rem;
    width: 20rem;
    height: 3.44rem;
    font-size: 1.25rem;
    line-height: 1.44rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 992px) {
    margin-top: 3.25rem;
    width: 20rem;
    height: 3.44rem;
    font-size: 1.25rem;
    line-height: 1.44rem;
    margin-bottom: 1.5rem;
  }
`;
