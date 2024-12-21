import React from "react";
import * as S from "./styles"
import { FaCheckCircle } from 'react-icons/fa';


export const CardVerificacao: React.FC = () =>{
    return(
        <S.CardVerificacao>
            <S.IconVerification><FaCheckCircle></FaCheckCircle></S.IconVerification>
            <S.TextofVerication>FIGMA IPSUM COMPONENTS</S.TextofVerication>
        </S.CardVerificacao>
    )
}