import styled from "styled-components";

export const SectionMain = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 70rem;
  width: 100vw;

  @media (max-width: 1073px) {
    height: 115rem;
  }
  @media (max-width: 922px) {
    margin-top: -24rem;
  }
`;

const TextoBase = styled.h1`
  font-family: "Goldman", sans-serif;
  font-size: 4rem;
  font-weight: 500;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  line-height: 1;
  margin-top: -33rem;
  margin-left: 1900px;
  white-space: nowrap;
  transform: translateX(44.5rem);

  @media (max-width: 1072px) {
    transform: translateX(35.5rem);
    margin-top: -89rem;
  }
  @media (max-width: 817px) {
    transform: translateX(18.5rem);
  }
  @media (max-width: 817px) {
    transform: translateX(34.5rem);
  }
  @media (max-width: 766px) {
    position: relative;
    font-size: 3.5rem;
    transform: translateX(526.5px);
  }
  @media (max-width: 674px) {
    font-size: 3rem;
    transform: translateX(218.5px);
  }
  @media (max-width: 616px) {
    font-size: 2.7rem;
  }
  @media (max-width: 540px) {
    font-size: 2.1rem;
  }
  @media (max-width: 423px) {
    white-space: break-spaces;
  }
`;

export const TextoMain = styled(TextoBase)`
  &::before {
    font-family: "Goldman", sans-serif;
    content: attr(data-text);
    position: absolute;
    white-space: nowrap;
    top: -20px;
    left: 130px;
    color: white;
    opacity: 0.1;
    font-weight: bold;
    z-index: -1;
    transform: scale(1.2);

    @media (max-width: 674px) {
      left: 86px;
    }
    @media (max-width: 423px) {
      left: 25px;
    }
  }
  @media (max-width: 712px) {
    transform: translateX(503.5px);
  }
  @media (max-width: 674px) {
    transform: translateX(479.5px);
  }
  @media (max-width: 616px) {
    transform: translateX(461.5px);
  }
  @media (max-width: 601px) {
    transform: translateX(443.5px);
  }
  @media (max-width: 581px) {
    transform: translateX(445.5px);
  }
  @media (max-width: 540px) {
    transform: translateX(391.5px);
  }
  @media (max-width: 460px) {
    transform: translateX(102.5px);
  }
  @media (max-width: 381px) {
    transform: translateX(78.5px);
  }
  @media (max-width: 495px) {
    transform: translateX(356.5px);
  }
  @media (max-width: 457px) {
    transform: translateX(323.5px);
  }
  @media (max-width: 425px) {
    transform: translateX(303.5px);
  }
  @media (max-width: 401px) {
    transform: translateX(272.5px);
  }
`;

export const SpanInstalacao = styled.span`
  color: #00d939;
  font-family: "Goldman", sans-serif;
  font-size: 69.21px;
  font-weight: bold;

  @media (max-width: 540px) {
    font-size: 52.21px;
  }
  @media (max-width: 423px) {
    font-size: 40.21px;
  }
`;

export const FundoComListra = styled.img`
  width: 150rem !important;
  height: 210%;
  transform: translate(-98rem, 46.5rem);
  background-color: black;
  z-index: 0;

  @media (max-width: 1073px) {
    transform: translate(-98rem, 62.5rem);
  }
`;

export const WraperImagens = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  height: 20rem;
  z-index: 1;
  margin-left: -45rem;
  transform: translateX(520px);
  margin-top: 5rem;

  @media (max-width: 1164px) {
    transform: translateX(492px);
  }

  @media (max-width: 1079px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  @media (max-width: 1072px) {
    transform: translate(496px, -390px);
  }
  @media (max-width: 766px) {
    transform: translate(534px, -390px);
  }
  @media (max-width: 674px) {
    transform: translate(586px, -390px);
  }
  @media (max-width: 616px) {
    transform: translate(590px, -390px);
  }
  @media (max-width: 540px) {
    transform: translate(662px, -390px);
  }
  @media (max-width: 495px) {
    transform: translate(617px, -390px);
  }
  @media (max-width: 425px) {
    transform: translate(601px, -390px);
  }
  @media (max-width: 423px) {
    transform: translate(646px, -390px);
  }
  @media (max-width: 401px) {
    transform: translate(631px, -390px);
  }
`;
export const ImagemEquipamentos = styled.img`
  width: auto;
  height: auto;
  object-fit: cover;

  @media (max-width: 1078px) {
    &:nth-child(1) {
      width: 105%;
      height: 72%;
      border-radius: 20px;
    }
    &:nth-child(3) {
      width: 100%;
      height: 68%;
      border-radius: 20px;
    }
    &:nth-child(5) {
      width: 101%;
      height: 68%;
      border-radius: 20px;
    }
  }
  @media (max-width: 817px) {
    &:nth-child(2) {
      width: 99%;
      height: 72%;
      border-radius: 20px;
    }
    &:nth-child(4) {
      height: 66%;
      border-radius: 20px;
    }
  }
  @media (max-width: 766px) {
    &:nth-child(4) {
      height: 62%;
    }
  }
  @media (max-width: 674px) {
    &:nth-child(4) {
      height: 54%;
    }
  }
  @media (max-width: 616px) {
    &:nth-child(4) {
      height: 50%;
    }
  }
  @media (max-width: 581px) {
    &:nth-child(4) {
      height: 47%;
    }
  }
  @media (max-width: 601px) {
    &:nth-child(4) {
      height: 47%;
    }
  }
  @media (max-width: 540px) {
    &:nth-child(4) {
      height: 40%;
    }
  }
  @media (max-width: 460px) {
    &:nth-child(4) {
      height: 34%;
    }
  }
  @media (max-width: 381px) {
    &:nth-child(4) {
      height: 30%;
    }
  }
  @media (max-width: 401px) {
    &:nth-child(4) {
      height: 30%;
    }
  }
`;

export const WraperCardETexto = styled.div`
  color: white;
  font-size: 40px;
  z-index: 1;
  margin-top: 130rem;
  transform: translateX(-40rem);

  @media (max-width: 1164px) {
    transform: translateX(-34rem);
  }
  @media (max-width: 1073px) {
    transform: translate(-9rem, -18rem);
  }
  @media (max-width: 766px) {
    transform: translate(-6rem, -18rem);
  }
  @media (max-width: 674px) {
    transform: translate(-1rem, -18rem);
  }
  @media (max-width: 615px) {
    transform: translate(1.5rem, -18rem);
  }
  @media (max-width: 555px) {
    transform: translate(3.5rem, -18rem);
  }
  @media (max-width: 541px) {
    transform: translate(9.5rem, -18rem);
  }
  @media (max-width: 501px) {
    transform: translate(12.5rem, -18rem);
  }
  @media (max-width: 457px) {
    transform: translate(15rem, -18rem);
  }
  @media (max-width: 425px) {
    transform: translate(13.5rem, -18rem);
  }
  @media (max-width: 423px) {
    transform: translate(16rem, -18rem);
  }
`;
export const TextTudo = styled.h1`
  font-family: "Goldman", sans-serif;

  @media (max-width: 501px) {
    font-size: 2.5rem;
  }
`;

export const SpanAlcance = styled.span`
  color: #00d939;
  font-family: "Goldman", sans-serif;
`;
