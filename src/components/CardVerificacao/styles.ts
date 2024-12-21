import styled from "styled-components";

export const CardVerificacao = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  height: 3rem;

  @media (max-width: 864px) {
    height: 5rem;
    gap: 3rem;
  }
  @media (max-width: 457px) {
    margin-left: 3rem;
  }
`;

export const IconVerification = styled.svg`
  color: #14ae5c;
  font-size: 2rem;
  transform: translateX(16rem);

  @media (max-width: 864px) {
    font-size: 4rem;
  }
  @media (max-width: 749px) {
    margin-left: -2rem;
  }
  @media (max-width: 714px) {
    margin-left: -7rem;
    margin-top: -0.7rem;
  }
  @media (max-width: 630px) {
    margin-left: -9rem;
  }
  @media (max-width: 540px) {
    font-size: 3.5rem;
  }
  @media (max-width: 495px) {
    margin-left: -11rem;
    font-size: 3rem;
  }
  @media (max-width: 457px) {
    margin-left: -13rem;
  }
`;

export const TextofVerication = styled.h3`
  letter-spacing: 2px;
  font-weight: 400;
  color: white;
  letter-spacing: 5px;

  @media (max-width: 1086px) {
    font-size: 1rem;
  }
  @media (max-width: 864px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px){
    font-size: 1.4rem;
  }
  @media (max-width: 588px) {
    font-size: 1.2rem;
  }
  @media (max-width: 540px) {
    font-size: 1rem;
  }
  @media (max-width: 419px) {
    font-size: 0.96rem;
  }
  @media (max-width: 404px) {
    font-size: 0.9rem;
  }
  @media (max-width: 390px) {
    font-size: 0.8rem;
  }
`;
