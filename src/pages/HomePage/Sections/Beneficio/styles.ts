import styled from "styled-components";

export const SectionBeneficio = styled.section`
  background-color: black;
  margin-top: -19.78rem;
  width: 100%;
  height: auto;

  @media (min-width: 1247px) {
    margin-top: -23.78rem;
  }
  @media (max-width: 1247px) {
    margin-top: -23.78rem;
  }
  @media (max-width: 1184px) {
    margin-top: -0.78rem;
  }
  @media (max-width: 1081px) {
    margin-top: -18.78rem;
  }
`;

export const ImagemFundoListras = styled.img`
  z-index: 0;
  transform: translateY(-50rem);
`;

export const WraperCards = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 300px;
  padding: 0 2rem;
  transform: translateY(-5rem);

  @media (max-width: 1106px) {
    height: 280px;
    padding: 0 2rem;
    transform: translateY(14rem);
  }
  @media (max-width: 1185px) {
    transform: translateY(14rem);
  }
  @media (max-width: 1184px) {
    transform: translateY(-5rem);
  }
  @media (max-width: 1081px) {
    transform: translateY(14rem);
  }

  @media (max-width: 867px) {
    transform: translateY(35rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
  }
  @media (max-width: 864px) {
    transform: translateY(41rem);
  }
`;

export const WraperMain = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1086px) {
    margin-top: 20rem;
    margin-left: 6rem;
  }
  @media (max-width: 1081px) {
    margin-left: -1rem;
  }
  @media (max-width: 864px) {
    display: flex;
    margin-top: 52rem;
    margin-left: -1rem;
    flex-direction: column;
  }
`;

export const WraperTextMainsSectionBeneficio = styled.div`
  width: 30%;

  @media (max-width: 1119px) {
    width: 364px;
  }
  @media (max-width: 1086px) {
    width: 65%;
    padding: 0 0 0 14rem;
  }
  @media (max-width: 864px) {
    width: 100%;
    padding: 0 0 0 14rem;
    text-align: center;
    margin-left: 295px;
  }
  @media (max-width: 823px) {
    margin-left: 419px;
  }
  @media (max-width: 714px) {
    margin-left: 18rem;
  }
  @media (max-width: 657px) {
    margin-left: 13.8rem;
  }
  @media (max-width: 495px) {
    margin-left: 14rem;
  }
  @media (max-width: 457px) {
    margin-left: 14rem;
    margin-top: 3rem;
  }
  @media (max-width: 404px) {
    margin-left: 13rem;
  }
`;

export const WraperVerficacaoCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  align-items: center;
  margin-left: 34rem;
  transform: translateX(-6.5rem);
  letter-spacing: 20px;

  @media (margin: 1086px) {
    margin-top: -3rem;
    transform: translateX(-7.5rem);
  }
  @media (max-width: 1119px) {
    transform: translateX(-9.5rem);
    margin-top: -53px;
  }
  @media (max-width: 864px) {
    transform: translateX(-3rem);
  }
  @media (max-width: 657px) {
    transform: translateX(-0.5rem);
  }
  @media (max-width: 495px) {
    transform: translateX(0.5rem);
  }
`;

export const TextFitwave = styled.p`
  color: white;
  letter-spacing: 4px;
  white-space: nowrap;

  @media (max-width: 864px) {
    font-size: 1.4rem;
    margin-left: 110px;
  }
  @media (max-width: 824px) {
    margin-left: 21px;
  }
  @media (max-width: 714px) {
    margin-left: 7rem;
  }
  @media (max-width: 657px) {
    margin-left: 9rem;
  }
  @media (max-width: 495px) {
    margin-left: 11rem;
  }
  @media (max-width: 457px) {
    margin-left: 9rem;
  }
  @media (max-width: 390px) {
    margin-left: 6rem;
  }
`;

export const TextEspacoIdeal = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-family: "Goldman", sans-serif;
  font-weight: bold;

  @media (max-width: 864px) {
    font-size: 4rem;
    text-align: center;
    white-space: nowrap;
  }
  @media (max-width: 630px) {
    font-size: 3.5rem;
    margin-left: 1rem;
  }
  @media (max-width: 540px) {
    font-size: 3rem;
  }
  @media (max-width: 457px) {
    font-size: 2.5rem;
  }
  @media (max-width: 390px) {
    font-size: 2.1rem;
  }
`;

export const spanideal = styled.span`
  color: #00d939;
  font-family: "Goldman", sans-serif;
  white-space: nowrap;
`;

export const ImagemMulher = styled.img`
  position: relative;
  width: 50vw;
  margin-left: -5rem;

  @media (max-width: 1086px) {
    width: 65vw;
    margin-left: -13rem;
    margin-top: 1rem;
  }
  @media (max-width: 1185px) {
    margin-left: -15rem;
  }
  @media (max-width: 995px) {
    width: 60vw;
    margin-left: -9rem;
    margin-top: 4rem;
  }
  @media (max-width: 897px) {
    width: 58vw;
    margin-left: -5rem;
    margin-top: 5rem;
  }
  @media (max-width: 864px) {
    width: 100vw;
    margin-left: 65px;
  }
`;

export const ImagemMetrometro = styled.img``;

export const Imagemgrafico = styled.img``;

export const WraperMulher = styled.div``;

export const ContainerTextAndCards = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -27rem;
  gap: 5rem;
  transform: translateY(3rem);

  @media (max-width: 1184px) {
    margin-left: -19rem;
  }
`;
