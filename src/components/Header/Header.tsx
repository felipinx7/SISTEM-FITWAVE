import React from "react";
import * as S from "./styles";
import { FaBars } from "react-icons/fa";

interface HeaderProps {
  ShowNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ ShowNav, setShowNav }) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <a onClick={() => handleScroll("plano")}>PLANO</a>
        <a onClick={() => handleScroll("preco")}>PREÇO</a>
        <a onClick={() => handleScroll("horario")}>HORÁRIO</a>
      </S.Nav>

      <S.WhatsAppButton onClick={() => handleScroll("contato")}>
        Entrar em Contato
      </S.WhatsAppButton>
    </S.Header>
  );
};
