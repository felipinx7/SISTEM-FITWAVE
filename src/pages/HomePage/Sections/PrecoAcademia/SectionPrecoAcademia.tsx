import React, { useEffect } from "react";
import * as S from "./styles";
import ImagemFundoListras from "../../../../assets/img/Textura-linhas.png";
import Primeiraimagame from "../../../../assets/img/primeira-imagem.png";
import SegundaImagem from "../../../../assets/img/segunda-imagem.png";
import TerceiraImagem from "../../../../assets/img/terceira-imagem.png";
import QuartaImagem from "../../../../assets/img/quarta-imagem.png";
import QuintaImagem from "../../../../assets/img/quinta-imagem.png";
import { SectionsPrecoParte2 } from "../SectionprecoAcademiaP2/SectionPrecoP2";
import { CardValor } from "../../../../components/CardValor/CardValor";
import ScrollReveal from "scrollreveal";

export const SectionPrecoAcademiaEacessorios: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".reveal-left", {
      origin: "left",
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
    <S.SectionMain>
      <S.TextoMain className="reveal-left" data-text="INSTALAÇÕES">
        CONHEÇA AS NOSSAS <br />
        <S.SpanInstalacao>INSTALAÇÕES</S.SpanInstalacao>
      </S.TextoMain>
      <S.WraperImagens className="reveal-left">
        <S.ImagemEquipamentos src={Primeiraimagame} className="reveal-left" />
        <S.ImagemEquipamentos src={SegundaImagem} className="reveal-left" />
        <S.ImagemEquipamentos src={TerceiraImagem} className="reveal-left" />
        <S.ImagemEquipamentos src={QuartaImagem} className="reveal-left" />
        <S.ImagemEquipamentos src={QuintaImagem} className="reveal-left" />
      </S.WraperImagens>
      <S.WraperCardETexto className="reveal-left">
        <S.TextTudo className="reveal-left">
          TUDO ISSO <br />
          <S.SpanAlcance>
            ESTÁ AO SEU <br />
            ALCANCE,
          </S.SpanAlcance>
          POR:
        </S.TextTudo>
        <CardValor />
      </S.WraperCardETexto>
      <S.FundoComListra src={ImagemFundoListras}  />
    </S.SectionMain>
  );
};
