import React from "react";
import * as S from "./styles";
import ImagemFundoListras from "../../../../assets/img/Textura-linhas.png";
import Primeiraimagame from "../../../../assets/img/primeira-imagem.png";
import SegundaImagem from "../../../../assets/img/segunda-imagem.png";
import TerceiraImagem from "../../../../assets/img/terceira-imagem.png";
import QuartaImagem from "../../../../assets/img/quarta-imagem.png";
import QuintaImagem from "../../../../assets/img/quinta-imagem.png";
import { SectionsPrecoParte2 } from "../SectionprecoAcademiaP2/SectionPrecoP2";
import { CardValor } from "../../../../components/CardValor/CardValor";

export const SectionPrecoAcademiaEacessorios: React.FC = () => {
  return (
    <S.SectionMain>
      <S.TextoMain data-text="INSTALAÇÕES">
        CONHEÇA AS NOSSAS <br />
        <S.SpanInstalacao>INSTALAÇÕES</S.SpanInstalacao>
      </S.TextoMain>
      <S.WraperImagens>
        <S.ImagemEquipamentos src={Primeiraimagame} />
        <S.ImagemEquipamentos src={SegundaImagem} />
        <S.ImagemEquipamentos src={TerceiraImagem} />
        <S.ImagemEquipamentos src={QuartaImagem} />
        <S.ImagemEquipamentos src={QuintaImagem} />
      </S.WraperImagens>
      <S.WraperCardETexto>
        <S.TextTudo>
          TUDO ISSO <br />
          <S.SpanAlcance>
            ESTÁ AO SEU <br />
            ALCANCE,
          </S.SpanAlcance>
        POR:
        </S.TextTudo>
        <CardValor/>
      </S.WraperCardETexto>
      <S.FundoComListra src={ImagemFundoListras} />
    </S.SectionMain>
  );
};
