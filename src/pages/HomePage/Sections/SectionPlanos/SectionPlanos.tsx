import React from "react";
import * as S from "./styles";
import ImagemFundo from "../../../../assets/img/Imagem-fundo-planos.png";
import { CardPlanos } from "../../../../components/CardPlanos/CardPlanos";

export const SectionPlanos: React.FC = () => {
  return (
    <S.SectionDePlanos>
      <S.ImagemFundo src={ImagemFundo} />
      <S.DivEnglobadoraDoTextoeCard>
        <S.WraperTextsmain>
          <S.TextFitwave>FIT WAVE</S.TextFitwave>
          <S.TextDuplicado data-text="O NOSSO PLANO">
            O NOSSO <S.SpanPlano>PLANO</S.SpanPlano>
          </S.TextDuplicado>
          <S.ParagrafoPlano>
            Deixe que a Fitwave te guie para um caminho mais saudável e feliz.
          </S.ParagrafoPlano>
        </S.WraperTextsmain>
        <S.WraperCardsPlanos>
            <CardPlanos/>
            <CardPlanos/>
            <CardPlanos/>
        </S.WraperCardsPlanos>
      </S.DivEnglobadoraDoTextoeCard>
    </S.SectionDePlanos>
  );
};
