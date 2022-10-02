import styled from "styled-components";

export const EventContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) and (max-width: 992px) {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const EventImageContainer = styled.section`
  img {
    height: 50vh;
  }
`;

export const EventDetails = styled.section`
  padding: 0.6875rem 1.75rem 0.25rem 1.25rem;
  width: 100%;
`;

export const EventTitle = styled.section`
  h1 {
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2.0125rem;
  }

  p {
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.000625rem;
    color: #828282;
    margin-top: 0.25rem;

    span {
      font-weight: 900 !importnat;
    }
  }
`;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  p {
    font-size: 1rem;
    color: #240d57;

    span {
      font-size: 0.875rem;
      color: #828282;
    }
  }
`;

export const EventTimeIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-right: 1.25rem;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
