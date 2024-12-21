import React from "react";
import * as S from "./styles";
import ImagemFundoListras from "../../../../assets/img/Textura-linhas.png";

export const SectionsPrecoParte2: React.FC = () => {
  return (
    <S.SectionsPrecoParte2>
      <S.ImagemListras src={ImagemFundoListras} />
      <S.WraperCardETexto>
        <S.TextTudo>
          TUDO ISSO <br />
          <S.SpanAlcance>
            ESTÁ AO SEU <br />
            ALCANCE
          </S.SpanAlcance>
          POR:
        </S.TextTudo>
        {/* <CardValor/> */}
      </S.WraperCardETexto>
    </S.SectionsPrecoParte2>
  );
};
