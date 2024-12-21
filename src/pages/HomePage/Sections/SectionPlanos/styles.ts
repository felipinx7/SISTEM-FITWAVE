import styled from "styled-components";

export const SectionDePlanos = styled.section`
  background-color: black;
  margin-top: -45rem;

  @media (max-width: 895px) {
    margin-top: -40rem;
  }
  @media (max-width: 960px) {
    margin-top: 0;
  }
  @media (max-width: 419px) {
    margin-top: -5rem;
  }
`;

export const ImagemFundo = styled.img`
  width: 100%;
  height: 100%;
  background: black;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const DivEnglobadoraDoTextoeCard = styled.div``;

export const WraperTextsmain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: -8rem;
  transform: translateY(-55rem);

  @media (max-width: 1182px) {
    margin-top: 0rem;
  }
  @media (max-width: 647px) {
    padding: 0 1rem;
  }
  @media (max-width: 419px) {
    margin-top: 5rem;
  }
`;

export const TextFitwave = styled.p`
  color: white;
  font-family: "Goldman", sans-serif;
  letter-spacing: 5px;
  transform: translateY(1rem);
`;

export const SpanPlano = styled.span`
  color: #00ff00;
  font-family: "Goldman", sans-serif;
`;

const TextNossoPlano = styled.h1`
  font-size: 4rem;
  font-family: "Goldman", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  color: white;

  @media (max-width: 601px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`;

export const TextDuplicado = styled(TextNossoPlano)`
  &::before {
    content: attr(data-text);
    font-family: "Goldman", sans-serif;
    position: absolute;
    top: -10px;
    color: white;
    opacity: 0.1;
    z-index: -1;
    transform: scale(1.2);

    @media (max-width: 431px) {
      left: 0;
    }
  }
`;

export const ParagrafoPlano = styled.p`
  color: white;
  font-size: 1.3rem;
`;

export const WraperCardsPlanos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  margin-top: -14rem;

  @media (max-width: 1134px) {
    gap: 2rem;
  }
  @media (max-width: 1028px) {
    gap: 1rem;
  }
  @media (max-width: 1002px) {
    gap: 0;
  }
  @media (max-width: 960px) {
    display: flex;
    margin-top: 15rem;
    transform: translateY(-26rem);
    flex-direction: column;
    gap: 44rem;
  }
`;
