import React, { useEffect } from "react";
import * as S from "./style"
import { BiTimer } from "react-icons/bi";
import { scrollConfig } from "../../styles/ConfigReveal";
import ScrollReveal from "scrollreveal";


interface Cardprops{
    icone: React.ComponentType<any>; 
    tituloCard: string,
    description: string
}

export const CardBeneficio: React.FC = (props) =>{

    useEffect(() => {
        const sr = ScrollReveal();  
        sr.reveal(".reveal", scrollConfig);
    
        return () => {
          sr.destroy(); 
        };
      }, []);
    
    

    return(
        <S.DivCard className="reveal">
            <S.Icone><BiTimer /></S.Icone>
            <S.TituloCard>TREINAR NO TEU <br /><S.span >PRÓPIO TEMPO</S.span></S.TituloCard>
            <S.Description>Treinar no seu próprio tempo oferece uma série de benefícios que não só favorecem seu bem-estar físico, mas também ajudam a melhorar sua saúde mental e qualidade de vida.</S.Description>
        </S.DivCard>
    )
}