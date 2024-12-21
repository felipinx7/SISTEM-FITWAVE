import React from "react";
import * as S from "./styles";
import ImagemFundoListra from "../../../../assets/img/Textura-linhas.png";
import { CardBeneficio } from "../../../../components/CardBeneficio/CardBeneficio";
import ImagemMulher from "../../../../assets/img/imagem-mulher.png";
import { CardVerificacao } from "../../../../components/CardVerificacao/CardVerificacao";

export const SectionBeneficiosAcademia: React.FC = () => {
  return (
    <S.SectionBeneficio>
      <S.WraperCards>
        <CardBeneficio />
        <CardBeneficio />
        <CardBeneficio />
      </S.WraperCards>

      <S.WraperMain>
        <S.ContainerTextAndCards>
             <S.WraperTextMainsSectionBeneficio>
          <S.TextFitwave>FIT WAVE</S.TextFitwave>
          <S.TextEspacoIdeal>
            <S.spanideal>
              O ESPAÇO IDEAL <br />
            </S.spanideal>
            PARA TREINAR <br /> COMO QUERES!
          </S.TextEspacoIdeal>
        </S.WraperTextMainsSectionBeneficio>
        <S.WraperVerficacaoCard>
          <CardVerificacao />
          <CardVerificacao />
          <CardVerificacao />
          <CardVerificacao />
          <CardVerificacao />
          <CardVerificacao />
        </S.WraperVerficacaoCard>
        </S.ContainerTextAndCards>
       
        <S.WraperMulher>
          <S.ImagemMulher src={ImagemMulher} />
        </S.WraperMulher>
      </S.WraperMain>
      <S.ImagemFundoListras src={ImagemFundoListra} />
    </S.SectionBeneficio>
  );
};
