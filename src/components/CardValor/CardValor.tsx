import React from "react";
import * as S from "./styles"
import { CardConfere } from "../CardConfere/CardConfere";
import { ButtonQueroTreinar } from "../Button/Button";


export const CardValor: React.FC = () =>{
    return(
        <S.DivCardValor>
            <S.Title>MENSALIDADE FIXA</S.Title>
            <S.price>R$49,99<S.spanmes>/MÊS</S.spanmes></S.price>
            <S.wraperCardConfere>
                <CardConfere/>
                <CardConfere/>
                <CardConfere/>
            </S.wraperCardConfere>
            <ButtonQueroTreinar/>
        </S.DivCardValor>
    )
}   