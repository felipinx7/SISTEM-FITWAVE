import styled from "styled-components";

export const CardPlanos = styled.div`
  width: 50%;
  height: 24rem;
  margin-top: -40rem;
  width: 320px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: white;

  @media (max-width: 960px) {
    width: 95%;
    text-align: left;
    padding: 2rem 3rem;
  }
`;

export const Icon = styled.svg`
  font-size: 5rem;
  color: #00d939;
  margin-left: 95px;
  text-align: center;

  @media (max-width: 960px) {
    margin-left: 4px;
  }
  @media (max-width: 432px) {
    margin-left: -26px;
  }
`;

export const WraperPassoEetapa = styled.div`
  margin-top: -55px;


  @media (max-width: 431px) {
    margin-left: -22px;
  }
`;

export const SpanPasso = styled.span`
  font-family: "Goldman", sans-serif;
  color: #00d939;
  font-size: 1.3rem;
`;

export const TextEtapa = styled.h3`
  font-size: 1.8rem;
  font-family: "Goldman", sans-serif;
`;

export const WraperConfere = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    transform: translate(-14.5rem, -1.5rem);
  }
  @media (max-width: 858px) {
    transform: translate(-12.5rem, -1.5rem);
  }
  @media (max-width: 781px) {
    transform: translate(-10.5rem, -1.5rem);
  }
  @media (max-width: 628px) {
    transform: translate(-7.5rem, -1rem);
  }
  @media (max-width: 567px) {
    transform: translate(-4.5rem, -1rem);
  }
`;
