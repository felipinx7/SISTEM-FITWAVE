import styled from "styled-components";
import ImagemMulher from "../../../../assets/img/imgem-mulher-login.png";
import ListrasImagem from "../../../../assets/img/Textura-linhas.png";
import e from "express";

export const SectionMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 801px) {
    flex-direction: column-reverse;
  }
`;
export const WraperImagem = styled.section`
  background-image: url(${ImagemMulher});
  background-size: cover;
  width: 50%;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  height: 100%;

  @media (max-width: 801px) {
    width: 100%;
    z-index: 0;
    height: 100%;
  }
`;

export const SectionLogin = styled.section`
  background-image: url(${ListrasImagem});
  width: 70%;
  height: 100%;
  background-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s;

  @media (max-width: 801px) {
    width: 100%;
    height: 60%;
    z-index: 1;
    margin-top: 35rem;
    border-radius: 50px 50px 0 0;
    position: absolute;
    top: 0;
    padding: 0 1rem;
  }
  @media (max-width: 508px) {
    height: 70%;
    margin-top: 31rem;
  }
  @media (max-width: 401px) {
    height: 90%;
      }
`;

export const TextoBoasVindas = styled.h1`
  font-size: 53.12px;
  color: white;
  line-height: 1;
  font-weight: 400;
  transform: translateX(-40px);

  @media (max-width: 801px) {
    text-align: center;
    transform: translateX(0);
  }
`;

export const SpanFitwave = styled.span`
  color: #00d939;
  font-weight: 800;
  font-family: "Goldman", sans-serif;
`;
export const InstrucaoFormulario = styled.p`
  font-size: 25px;
  font-weight: 500;
  color: white;
  transform: translateX(-30px);

  @media (max-width: 801px) {
    text-align: center;
    transform: translateX(0);
  }
`;

export const WraperLogin = styled.div``;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;

  @media (max-width: 425px) {
    width: 100%;
  }
  @media (max-width: 455px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const LabelLogin = styled.label`
  color: white;
  font-size: 20px;
  transform: translateY(1rem);

  @media (max-width: 455px) {
    margin-left: 28px;
  }
`;

export const InputWraper = styled.div`
  display: flex;
  position: relative;
  width: 436px;
  height: 53.1px;

  svg {
    position: absolute;
    color: #797979;
    font-size: 1.7rem;
    margin-top: 0.8rem;
    pointer-events: all;
    margin-left: 0.4rem;
  }

  @media (max-width: 454px) {
    width: 380px;
  }
  @media (max-width: 397px) {
    width: 95%;
  }
`;

export const InputLogin = styled.input`
  width: 436px;
  height: 53.1px;
  border-radius: 9.32px;
  background-color: #e4e4e4;
  border: 2px solid #e4e4e4;
  padding: 9.32px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  transition: all 0.3s ease;
  padding: 0 2.3rem;

  &:focus {
    border-color: #00d939;
    background-color: #fff;
  }

  &::placeholder {
    color: #999;
    transition: color 0.3s ease;
  }

  &:focus::placeholder {
    color: #00d939;
  }

  @media (max-width: 455px) {
    width: 100%;
  }
  @media (max-width: 397px) {
    width: 95%;
  }
`;

export const EsqueciSenha = styled.a`
  color: white;
  font-size: 13.04px;
  font-weight: 600;
`;

export const TextNaoTemConta = styled.p`
  color: white;
  display: flex;
  white-space: nowrap;
  gap: 0.5rem;
  font-size: 18.63px;
  font-weight: 600;

  @media (max-width: 455px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const spancontato = styled.a`
  color: #00d939;
  cursor: pointer;
`;

export const WraperIcone = styled.div`
  position: absolute;
  cursor: pointer;

  svg {
    margin-left: 24rem;
  }

  @media (max-width: 455px) {
    svg {
      margin-left: 21rem;
    }
  }
  @media (max-width: 396px) {
    svg {
      margin-left: 242px;
    }
  }
  @media (max-width: 326px) {
    svg {
      margin-left: 225px;
    }
  }
`;
