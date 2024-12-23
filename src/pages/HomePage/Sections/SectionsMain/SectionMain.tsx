import React, { useState, useEffect } from "react";
import * as S from "./styles";
import ImagemFundoSectionMain from "../../../../assets/img/img-fundo-main.png";
import ImagemFundoCelularResponsivo from "../../../../assets/img/fundo-main-celular.png";

export const SectionMain: React.FC = () => {

  return (
    <S.SectionMain>
      <S.ImagemFundoCelular src={ImagemFundoCelularResponsivo} />
      <S.ImagemFundo src={ImagemFundoSectionMain} />
      <S.WraperTextAndButom>
        <S.TextMain>
          Liberta o teu potencial! <S.Spantextmain>junta-se a nós</S.Spantextmain> e sente a diferença.
        </S.TextMain>
        <S.ParagrafoSlogan>Estás pronto para começar a ver resultados reais no treino?</S.ParagrafoSlogan>
        <S.ButtonQueroTreinar>Quero treinar agora!</S.ButtonQueroTreinar>
      </S.WraperTextAndButom>
    </S.SectionMain>
  );
};
