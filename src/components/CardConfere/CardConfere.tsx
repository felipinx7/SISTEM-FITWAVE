import React from "react";
import * as S from "./styles"
import IconDeVerificacao from "../../assets/img//icone verificação.svg"



export const CardConfere: React.FC = () =>{
    return(
        <S.CardConfere>
            <S.IconVerification src={IconDeVerificacao}/>
            <S.TextofVerication>FIGMA IPSUM COMPONENTS</S.TextofVerication>
        </S.CardConfere>
    )
}