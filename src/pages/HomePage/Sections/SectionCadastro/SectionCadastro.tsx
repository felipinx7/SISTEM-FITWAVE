import React, { useState, useEffect } from "react";
import * as S from "./styles";
import ImagemFundo from "../../../../assets/img/Fundo-section-cadastro.png";
import FundoVerde from "../../../../assets/img/FundoCardCadastro.png";
import FrameDeLuz from "../../../../assets/img/frame-luz-section-cadastro.png";
import ImagemMulhereHomem from "../../../../assets/img/home-e-mulher.svg";
import { ButtonQueroTreinar } from "../../../../components/Button/Button";
import ScrollReveal from "scrollreveal";

export const SectionCadastro: React.FC = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: any) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length <= 2) {
      value = value.replace(/(\d{2})(\d{0,0})/, "($1)$2");
    } else if (value.length <= 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,0})/, "($1)$2-$3");
    } else {
      value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1)$2-$3");
    }

    setPhone(value);
  };

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".reveal-right", {
      origin: "right",
      distance: "600px",
      duration: 1000,
      delay: 0,
      reset: true,
    });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <S.SectionMain id="contato">
      <S.FrameDeluz src={FrameDeLuz} />
      <S.WraperEnglobaImgPessoaAndForumlario>
        <S.WraperImgPessoas>
          <S.ImagemPessoa src={FundoVerde} />
          <S.TextFundoCardMulher>WAVE</S.TextFundoCardMulher>
          <S.ImageMulhereHomem src={ImagemMulhereHomem} />
        </S.WraperImgPessoas>
        <S.WraperFormulario className="reveal-right">
          <S.TextMain className="reveal-right">
            PRONTO PARA
            <S.spanLiberttar className="reveal-right">
              {" "}
              LIBERTAR <br />
              SEU POTENCIAL?
            </S.spanLiberttar>
          </S.TextMain>
          <S.paragrafomotivador className="reveal-right">
            Fitwave é a academia perfeita para seu treino. Inscreva-se agora e
            tenha acesso a ótimos resultados, com estrutura moderna e
            profissionais altamente qualificados! A melhor escolha para alcançar
            seus objetivos, superar limites e transformar sua saúde e bem-estar.
          </S.paragrafomotivador>
          <S.Formulario>
            <S.Lablenome className="reveal-right">Nome</S.Lablenome>
            <S.InputNome type="text" placeholder="Digite seu nome completo." />
            <S.LabelEmail className="reveal-right">E-mail</S.LabelEmail>
            <S.InputEmail type="email" placeholder="Digite seu email." />
            <S.LabelContato className="reveal-right">
              Contato Telefônico
            </S.LabelContato>
            <S.InputContato
              type="tel"
              placeholder="Informe seu contato."
              value={phone}
              onChange={handlePhoneChange}
            />
            <S.WraperButton>
              <ButtonQueroTreinar />
            </S.WraperButton>
          </S.Formulario>
        </S.WraperFormulario>
      </S.WraperEnglobaImgPessoaAndForumlario>
    </S.SectionMain>
  );
};
