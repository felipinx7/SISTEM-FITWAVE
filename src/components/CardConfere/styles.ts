import styled from "styled-components";

export const CardConfere = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  height: 3rem;
  flex-direction: column;
  line-height: 80px;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
    height: 3rem;
    line-height: 55px;
  }

  @media (max-width: 864px) {
    height: 5rem;
    gap: 3rem;
  }
  @media (max-width: 858px) {
    height: 3rem;
    gap: 1rem;
  }
`;

export const IconVerification = styled.img`
  width: 10%;
  transform: translateX(-3px);
  margin-left: -270px;
  margin-top: 150px;

  @media (max-width: 960px) {
    width: 6%;
    transform: translateX(-12px);
  }
  @media (max-width: 864px) {
    font-size: 4rem;
  }
  @media (max-width: 749px) {
    margin-left: -14rem;
  }
  @media (max-width: 431px) {
    margin-left: -11.5rem;
  }
  @media (max-width: 400px) {
    margin-left: -9.5rem;
  }
`;

export const TextofVerication = styled.h3`
  letter-spacing: 2px;
  font-weight: 400;
  color: white;
  letter-spacing: 5px;
  font-size: 0.8rem;
  white-space: nowrap;
  transform: translate(20px, -65px);

  @media (max-width: 816px) {
    font-size: 1.3rem;
    margin-left: 8rem;
    transform: translate(45px, -65px);
  }
  @media (max-width: 749px) {
    margin-left: 5rem;
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
  @media (max-width: 431px) {
    margin-left: 6rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
