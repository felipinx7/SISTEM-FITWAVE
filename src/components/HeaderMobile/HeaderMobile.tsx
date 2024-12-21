import React, { useState } from "react";
import * as S from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";

export const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Nav>
      <S.Logo>Academia</S.Logo>
      <S.Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </S.Hamburger>
      <S.Menu isOpen={isOpen}>
        <S.MenuItem href="/">PLANO</S.MenuItem>
        <S.MenuItem href="/#sobre-nos">PREÇO</S.MenuItem>
        <S.MenuItem href="/#servicos">HORÁRIO</S.MenuItem>
      </S.Menu>
    </S.Nav>
  );
};
