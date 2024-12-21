import styled from "styled-components";
import ImagemFundo from "../../../../assets/img/Fundo-section-cadastro.png";

export const SectionMain = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${ImagemFundo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  background-color: black;
  margin-top: 1000px;

  @media (max-width: 1081px) {
    margin-top: 880px;
  }
  @media (max-width: 900px) {
    height: 100rem;
    margin-top: 40rem;
  }
`;

export const FrameDeluz = styled.img`
  position: absolute;
`;

export const WraperEnglobaImgPessoaAndForumlario = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;

  @media (max-width: 1081px) {
    flex-direction: column-reverse;
    margin-top: 36rem;
  }
`;

export const WraperImgPessoas = styled.div`
  width: 40%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;

  @media (max-width: 873px) {
    width: 43%;
  }
  @media (max-width: 819px) {
    width: 46%;
  }
  @media (max-width: 771px) {
    width: 49%;
  }
  @media (max-width: 729px) {
    width: 52%;
  }
  @media (max-width: 687px) {
    width: 55%;
  }
  @media (max-width: 656px) {
    width: 58%;
  }
  @media (max-width: 620px) {
    width: 61%;
  }
  @media (max-width: 594px) {
    width: 64%;
  }
  @media (max-width: 567px) {
    width: 67%;
  }
  @media (max-width: 538px) {
    width: 70%;
  }
  @media (max-width: 529px) {
    width: 71%;
  }
  @media (max-width: 507px) {
    width: 75%;
  }
  @media (max-width: 480px) {
    width: 79%;
  }
  @media (max-width: 458px) {
    width: 82%;
  }
  @media (max-width: 440px) {
    width: 85%;
  }
  @media (max-width: 421px) {
    width: 90%;
  }
  @media (max-width: 401px) {
    width: 93%;
  }
`;

export const TextFundoCardMulher = styled.h1`
  position: absolute;
  transform: rotate(90deg);
  font-size: 152.08px;
  width: 100%;
  text-align: center;
  color: #fff;
  margin: 0;
  margin-top: -385px;
  margin-left: -695px;

  @media (max-width: 1474px) {
    margin-left: -668px;
  }
  @media (max-width: 1426px) {
    margin-left: -45%;
  }
  @media (max-width: 954px) {
    margin-left: -42%;
  }
  @media (max-width: 637px) {
    margin-left: -39%;
  }
  @media (max-width: 548px) {
    margin-left: -34%;
  }
`;

export const WraperFormulario = styled.div`
  max-width: 700px;
  width: 100%;

  /* margin-top: 10rem; */

  @media (min-width: 1948px) {
    margin-top: -32rem;
  }
  @media (max-width: 1249px) {
    margin-top: -33rem;
  }
  @media (max-width: 1081px) {
    padding: 0 2rem;
  }
  @media (max-width: 672px) {
    padding: 0 1rem;
  }
  @media (max-width: 656px) {
    padding: 0 0.5rem;
  }
  @media (max-width: 637px) {
    padding: 0 2rem;
  }
`;

export const ImagemPessoa = styled.img`
  position: relative;
  margin-top: 8rem;
`;

export const ImageMulhereHomem = styled.img`
  margin-top: 9.5rem;
  margin-left: -531px;

  z-index: 1;
  position: absolute;

  @media (max-width: 953px) {
    margin-top: -514.5px;
    margin-left: -140px;
  }
`;

export const TextMain = styled.h1`
  font-size: 36.32px;
  font-family: "Goldman", sans-serif;
`;

export const spanLiberttar = styled.span`
  color: #00d939;
  font-family: "Goldman", sans-serif;
`;

export const paragrafomotivador = styled.p``;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const Lablenome = styled.label`
  font-size: 18.41px;
  font-weight: bold;
`;

export const InputNome = styled.input`
  width: 637.93px;
  height: 44.71px;
  padding: 17.53px;
  border-radius: 7.01px;
  border: none;
  font-weight: 500;
  font-size: 14.03px;
  transition: all 0.3s ease;

  &::placeholder {
    font-weight: 500;
    font-size: 14.03px;
  }

  &:focus {
    outline: 3px solid #00d939;
    box-shadow: 0 0 8px rgba(0, 217, 57, 0.6);
    transform: scale(1.05);
    background-color: white;
  }
  @media (max-width: 637px) {
    width: 557.93px;
  }
  @media (max-width: 601px) {
    width: 100%;
  }
  @media (max-width: 594px) {
    width: 539.93px;
  }
  @media (max-width: 577px) {
    width: 102%;
  }
`;

export const LabelEmail = styled.label`
  font-size: 18.41px;
  font-weight: bold;
`;

export const InputEmail = styled.input`
  width: 637.93px;
  height: 44.71px;
  padding: 17.53px;
  border-radius: 7.01px;
  border: none;
  font-weight: 500;
  font-size: 14.03px;
  transition: all 0.3s ease;

  &::placeholder {
    font-weight: 500;
    font-size: 14.03px;
  }

  &:focus {
    outline: 3px solid #00d939;
    box-shadow: 0 0 8px rgba(0, 217, 57, 0.6);
    transform: scale(1.05);
    background-color: white;
  }

  @media (max-width: 637px) {
    width: 557.93px;
  }
  @media (max-width: 601px) {
    width: 100%;
  }
  @media (max-width: 594px) {
    width: 539.93px;
  }
  @media (max-width: 577px) {
    width: 102%;
  }
`;

export const LabelContato = styled.label`
  font-size: 18.41px;
  font-weight: bold;
`;

export const InputContato = styled.input`
  width: 637.93px;
  height: 44.71px;
  padding: 17.53px;
  border-radius: 7.01px;
  border: none;
  font-weight: 500;
  font-size: 14.03px;
  transition: all 0.3s ease;

  &::placeholder {
    font-weight: 500;
    font-size: 14.03px;
  }

  &:focus {
    outline: 3px solid #00d939;
    box-shadow: 0 0 8px rgba(0, 217, 57, 0.6);
    transform: scale(1.05);
    background-color: white;
  }

  @media (max-width: 637px) {
    width: 557.93px;
  }
  @media (max-width: 601px) {
    width: 100%;
  }
  @media (max-width: 594px) {
    width: 539.93px;
  }
  @media (max-width: 577px) {
    width: 102%;
  }
`;

export const WraperButton = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
