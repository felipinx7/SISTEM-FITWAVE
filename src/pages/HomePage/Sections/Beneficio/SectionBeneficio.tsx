import React from "react";
import * as S from "./styles";
import ImagemFundoListra from "../../../../assets/img/Textura-linhas.png";
import { CardBeneficio } from "../../../../components/CardBeneficio/CardBeneficio";
import ImagemMulher from "../../../../assets/img/imagem-mulher.png";
import { CardVerificacao } from "../../../../components/CardVerificacao/CardVerificacao";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();
sr.reveal(".reveal", {
  origin: "rigth",
  distance: "600px",
  duration: 1000,
  delay: 0,
  reset: true,
});

export const SectionBeneficiosAcademia: React.FC = () => {
  return (
    <S.SectionBeneficio>
      <S.WraperCards className="reveal">
        <CardBeneficio />
        <CardBeneficio />
        <CardBeneficio />
      </S.WraperCards>

      <S.WraperMain>
        <S.ContainerTextAndCards>
          <S.WraperTextMainsSectionBeneficio className="reveal">
            <S.TextFitwave className="reveal">FIT WAVE</S.TextFitwave>
            <S.TextEspacoIdeal className="reveal">
              <S.spanideal>
                O ESPAÇO IDEAL <br />
              </S.spanideal>
              PARA TREINAR <br /> COMO QUERES!
            </S.TextEspacoIdeal>
          </S.WraperTextMainsSectionBeneficio>

          <S.WraperVerficacaoCard className="reveal">
            <CardVerificacao />
            <CardVerificacao />
            <CardVerificacao />
            <CardVerificacao />
            <CardVerificacao />
            <CardVerificacao />
          </S.WraperVerficacaoCard>
        </S.ContainerTextAndCards>
       
        <S.WraperMulher className="reveal">
          <S.ImagemMulher src={ImagemMulher} />
        </S.WraperMulher>
      </S.WraperMain>
      <S.ImagemFundoListras src={ImagemFundoListra} />
    </S.SectionBeneficio>
  );
};
