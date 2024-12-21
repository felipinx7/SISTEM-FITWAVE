import React from "react";
import * as S from "./styles"
import { CardVerificacao } from "../CardVerificacao/CardVerificacao";
import { LuNewspaper } from "react-icons/lu";
import { CardConfere } from "../CardConfere/CardConfere";


export const CardPlanos: React.FC = () =>{
    return(
        <S.CardPlanos>
            <S.Icon><LuNewspaper /></S.Icon>
            <S.WraperPassoEetapa>
                <S.SpanPasso>1° PASSO</S.SpanPasso>
                <S.TextEtapa>INSRIÇÃO</S.TextEtapa>
                <S.WraperConfere>
                  <CardConfere/>
                  <CardConfere/>
                  <CardConfere/>
                </S.WraperConfere>
            </S.WraperPassoEetapa>
        </S.CardPlanos>
    )
}