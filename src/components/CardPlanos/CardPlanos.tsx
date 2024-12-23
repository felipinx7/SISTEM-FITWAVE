import React, { useEffect } from "react";
import * as S from "./styles";
import { CardVerificacao } from "../CardVerificacao/CardVerificacao";
import { LuNewspaper } from "react-icons/lu";
import { CardConfere } from "../CardConfere/CardConfere";
import ScrollReveal from "scrollreveal";

export const CardPlanos: React.FC = () => {
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
    <S.CardPlanos className="reveal-right">
      <S.Icon><LuNewspaper /></S.Icon>
      <S.WraperPassoEetapa className="reveal-right">
        <S.SpanPasso className="reveal-right">1° PASSO</S.SpanPasso>
        <S.TextEtapa className="reveal-right">INSCRIÇÃO</S.TextEtapa>
        <S.WraperConfere className="reveal-right">
          <CardConfere />
          <CardConfere />
          <CardConfere />
        </S.WraperConfere>
      </S.WraperPassoEetapa>
    </S.CardPlanos>
  );
};
