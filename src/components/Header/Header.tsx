import React, { useState } from "react";
import * as S from "./styles";
import { FaBars } from "react-icons/fa";



interface HeaderProps {
  ShowNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ ShowNav, setShowNav })  => {
  return (
    <S.Header>
      <S.Figure>
        <S.LogoImage
          alt="Logo"
          src="/_next/image?url=%2Fassets%2Fimages%2Fux-logo-cian-solid.png&amp;w=640&amp;q=75"
          width="240"
          height="32"
        />
      </S.Figure>

      <S.Nav ShowNav={ShowNav}>
        <a href="/">PLANO</a>
        <a href="/#sobre-nos">PREÇO</a>
        <a href="/#servicos">HORÁRIO</a>
      </S.Nav>

      <S.WhatsAppButton>Entrar em Contato</S.WhatsAppButton>
    </S.Header>
  );
};
