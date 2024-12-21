import exp from "constants";
import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #141313;
  width: 100%;
  height: 311px;

  @media (max-width: 1073px) {
    height: 322px;
  }
  @media (max-width: 885px) {
    height: 352px;
  }
  @media (max-width: 769px) {
    height: 763px;
  }
  @media  (max-width: 660px){
    height: 900px;
  }
  @media (max-width: 435px) {
    height: 1070px;
  }
`;

export const WraperMain = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 2rem;

  @media (max-width: 1204px) {
    justify-content: center;
    gap: 7rem;
    padding: 0 2rem;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const WraperRedesSociais = styled.div`
  max-width: 33.33%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  padding: 4rem 0;

  @media (max-width: 769px) {
    max-width: 80%;
  }
`;

export const ImgLogo = styled.img``;

export const DescriptionAcademy = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 500;
  font-family: "Goldman", sans-serif;
  white-space: break-spaces;

  @media (max-width: 769px) {
    font-size: 19px;
  }
`;

export const WraperButtonsRedesSociais = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonRedesSociais = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: white;
  }
`;

export const WraperLocalizacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const TextMainLocalizacao = styled.h1`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 21px;
  font-weight: 500;
`;

export const ParagarfosLocalizacao = styled.p`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  gap: 0.5rem;

  svg {
    font-size: 2rem;
  }
`;

export const WraperHorario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 0.5rem;
`;

export const TextMainHorario = styled.h1`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 21px;
`;
export const ParagarfosHorarios = styled.p`
  font-family: "Goldman", sans-serif;
  color: white;
  font-size: 11.39px;
`;
