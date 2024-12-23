import React, { useState } from "react";
import * as S from "./styles";
import { ButtonLogin } from "../../../../components/ButtonLogin/ButtonLogin";
import { MdAlternateEmail, MdLock } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { ToglleThemer } from "../../../../components/ToggleThemer/ToggleThemer";



export const SectionLogin: React.FC = () => {
  const [ShowPassword, setShowPassword] = useState(true);
  const ToggleIcone = () => {
    setShowPassword(!ShowPassword);
  };

  return (
    <S.SectionMain>
      <S.SectionLogin>
        <S.TextoBoasVindas>
          Boas-Vindas <br />a <S.SpanFitwave>FITWAVE.</S.SpanFitwave>
        </S.TextoBoasVindas>
        <S.InstrucaoFormulario>
          Adicione seus dados a baixo:
        </S.InstrucaoFormulario>

        <S.WraperLogin>
          <S.Formulario>
            <S.LabelLogin>E-mail</S.LabelLogin>
            <S.InputWraper>
              <MdAlternateEmail />
              <S.InputLogin type="email" placeholder="Informe seu e-mail" />
            </S.InputWraper>
            <S.LabelLogin>Senha</S.LabelLogin>
            <S.InputWraper>
              <MdLock />
              <S.InputLogin
                type={ShowPassword ? "password" : "text"}
                placeholder="Informe sua senha"
              />
              <S.WraperIcone onClick={ToggleIcone}>
                {ShowPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}
              </S.WraperIcone>
            </S.InputWraper>
            <S.EsqueciSenha>Esqueci a senha? </S.EsqueciSenha>
            <ButtonLogin />
            <S.TextNaoTemConta>
              Ainda não tem uma conta?{" "}
              <S.spancontato>Entrar em Contato</S.spancontato>
            </S.TextNaoTemConta>
          </S.Formulario>
        </S.WraperLogin>
      </S.SectionLogin>

      <S.WraperImagem />
    </S.SectionMain>
  );
};
