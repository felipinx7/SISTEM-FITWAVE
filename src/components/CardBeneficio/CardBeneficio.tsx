import React, { useEffect } from "react";
import * as S from "./style";
import { BiTimer } from "react-icons/bi";
import ScrollReveal from "scrollreveal";

interface Cardprops {
  icone: React.ComponentType<any>;
  tituloCard: string;
  description: string;
}

export const CardBeneficio: React.FC = (props) => {
  useEffect(() => {
    const sr = ScrollReveal();

    const localScrollConfig = {
      origin: "left",
      distance: "600px",
      duration: 1000,
      delay: 200,
      reset: false,  
    };

    sr.reveal(".reveal", localScrollConfig);

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <S.DivCard className="reveal">
      <S.Icone>
        <BiTimer />
      </S.Icone>
      <S.TituloCard>
        TREINAR NO TEU <br />
        <S.span>PRÓPRIO TEMPO</S.span>
      </S.TituloCard>
      <S.Description>
        Treinar no seu próprio tempo oferece uma série de benefícios que não só favorecem seu bem-estar físico, mas também ajudam a melhorar sua saúde mental e qualidade de vida.
      </S.Description>
    </S.DivCard>
  );
};
