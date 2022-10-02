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
  }

  img {
    width: 10.352rem;
    height: 18.25rem;
  }

  p {
    width: 20.0625rem;
    font-size: 1rem;
    font-weight: 300;
    color: #4f4f4f;
    line-height: 1.15rem;
    margin-bottom: 2.25rem;
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

  @media and (min-width: 992px) {
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
`;
