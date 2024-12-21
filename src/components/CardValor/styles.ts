import styled from "styled-components";

export const DivCardValor = styled.article`
  height: 27rem;
  margin-top: -40rem;
  width: 380px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: white;
  transform: translate(45rem, 20rem);

  @media (max-width: 1164px) {
    transform: translate(37rem, 20rem);
  }
  @media (max-width: 1073px) {
    width: 520px;
    transform: translate(0rem, 45rem);
  }
  @media (max-width: 501px) {
    width: 438px;
    transform: translate(-3.5rem, 45rem);
  }
  @media (max-width: 425px) {
    width: 405px;
    transform: translate(-2rem, 45rem);
  }
  @media (max-width: 401px) {
    width: 370px;
    transform: translate(-0.2rem, 45rem);
  }
`;

export const Title = styled.p`
  color: #00d939;
  font-size: 1.3rem;
  font-family: "Goldman", sans-serif;
  margin-top: 2rem;
`;

export const price = styled.h1`
  font-family: "Goldman", sans-serif;
  font-weight: bold;
  font-size: 3.5rem;
`;

export const spanmes = styled.span`
  font-family: "Goldman", sans-serif;
  font-size: 1rem;
`;

export const wraperCardConfere = styled.div`
  @media (max-width: 808px) {
    margin-left: -125px;
  }
`;
