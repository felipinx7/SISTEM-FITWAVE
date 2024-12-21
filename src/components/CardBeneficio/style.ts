import styled from "styled-components";

export const DivCard = styled.article`
  width: 30%;
  height: 100%;
  background-color: #00D939;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  justify-content: flex-start;
  z-index: 1;
  border-radius: 20px;

  @media (max-width: 864px) {
    width: 100%;
    transform: translateY(-7rem);
  }
  @media (max-width: 458px) {
    height: 20rem;
  }
`;

export const Icone = styled.svg`
  font-size: 6.5rem;
  color: white;
  line-height: 1;
  @media (max-width: 1142px) {
    font-size: 5rem;
  }
  @media (max-width: 964px) {
    font-size: 5rem;
  }
  @media (max-width: 588px) {
    font-size: 5rem;
  }
`;

export const TituloCard = styled.h1`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 2rem;
  transform: translateY(-3.5rem);
  @media (max-width: 1208px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1142px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1106px) {
    font-size: 1.5rem;
    transform: translateY(-3.5rem);
  }
  @media (max-width: 955px) {
    font-size: 1.2rem;
  }
  @media (max-width: 864px) {
    font-size: 1.7rem;
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 588px) {
    transform: translateY(-4.5rem);
  }
  @media (max-width: 540px) {
    white-space: nowrap;
    font-size: 1.5rem;
  }
  @media (max-width: 569px) {
    white-space: nowrap;
  }
  @media (max-width: 595px) {
    font-size: 1.2rem;
  }
  @media (max-width: 404px) {
    font-size: 1.1rem;
}
  @media (max-width: 390px) {
    font-size: 1.1rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-top: -3.5rem;
  transform: translateY(-1rem);

  @media (max-width: 1106px) {
    font-size: 0.8rem;
    margin-top: -3.5rem;
    transform: translateY(-1rem);
  }
  @media (max-width: 864px) {
    font-size: 1.3rem;
  }
  @media (max-width: 588px) {
    font-size: 1.2rem;
    margin-top: -4rem;
  }
`;

export const span = styled.span`
  color: #05714f;
`;
