import React from "react";
import * as S from "./style"
import { BiTimer } from "react-icons/bi";

interface Cardprops{
    icone: React.ComponentType<any>; 
    tituloCard: string,
    description: string
}

export const CardBeneficio: React.FC = (props) =>{
    return(
        <S.DivCard>
            <S.Icone><BiTimer /></S.Icone>
            <S.TituloCard>TREINAR NO TEU <br /><S.span >PRÓPIO TEMPO</S.span></S.TituloCard>
            <S.Description>Treinar no seu próprio tempo oferece uma série de benefícios que não só favorecem seu bem-estar físico, mas também ajudam a melhorar sua saúde mental e qualidade de vida.</S.Description>
        </S.DivCard>
    )
}