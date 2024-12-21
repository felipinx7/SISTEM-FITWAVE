import styled from "styled-components";

export const SectionMain = styled.main``;

export const ImagemFundo = styled.img`
  width: 100%;
  height: 100%;
  margin-top: -5rem;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const ImagemFundoCelular = styled.img`
  display: none;

  @media (max-width: 769px) {
    background-color: black;
    display: block;
    width: 115%;
    height: 100%;
    margin-top: -9rem;
  }
  @media (max-width: 695px) {
    width: 144%;
    margin-left: -5rem;
  }
`;
export const WraperTextAndButom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateY(-37rem);
  padding-left: 12rem;

  max-width: 60%;

  @media (max-width: 1246px) {
    transform: translateY(-31rem);
    padding-left: 3rem;
  }

  @media (max-width: 1240px) {
    transform: translateY(-32rem);
    padding-left: 4rem;
  }

  @media (max-width: 1185px) {
    transform: translateY(-9rem);
    margin-top: -20rem;
  }

  @media (max-width: 1104px) {
    margin-top: -26%;
  }
  @media (max-width: 867px) {
    margin-top: -23%;
  }
  @media (max-width: 769px) {
    padding: 0 3rem;
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 1rem;
    margin-top: -1.2%;
    z-index: 0;
  }
  @media (max-width: 686px) {
    transform: translateY(-12rem);
  }
  @media (max-width: 621px) {
    transform: translateY(-13.5rem);
  }
  @media (max-width: 650px) {
    transform: translateY(-16.5rem);
  }
  @media (max-width: 600px) {
    transform: translateY(-13.5rem);
  }
  @media (max-width: 562px) {
    transform: translateY(-13.5rem);
  }
  @media (max-width: 506px) {
    transform: translateY(-16.5rem);
  }
`;

export const TextMain = styled.h1`
  font-family: "Goldman", serif;
  color: white;
  font-size: 3rem;
  font-weight: 400;

  @media (max-width: 1104px) {
    font-size: 2.5rem;
  }
  @media (max-width: 920px) {
    font-size: 2.3rem;
  }
  @media (max-width: 867px) {
    text-align: center;
    font-size: 2.4rem;
  }
  @media (max-width: 557px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

export const ParagrafoSlogan = styled.p`
  color: white;
  font-size: 1.7rem;

  @media (max-width: 920px) {
    font-size: 1.23rem;
  }
  @media (max-width: 867px) {
    font-size: 1.1rem;
  }
`;

export const ButtonQueroTreinar = styled.button`
  font-family: "Goldman", serif;
  width: 60%;
  background-color: #32cd32;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0 20px 5px rgba(50, 205, 50, 0.7);
  transition: box-shadow 0.3s ease;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 0 30px 10px rgba(50, 205, 50, 0.6);
  }
  @media (max-width: 920px) {
    font-size: 1rem;
  }
  @media (max-width: 499px) {
    width: 80%;
  }
  @media (max-width: 404px) {
    width: 100%;
  }
  @media (max-width: 390px) {
    width: 100%;
  }

`;

export const Spantextmain = styled.span`
  font-family: "Goldman", serif;

  @media (max-width: 769px) {
    color: rgba(0, 217, 57, 1);
    font-family: "Goldman", serif;
  }
`;
