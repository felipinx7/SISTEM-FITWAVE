import React, { useState } from "react";
import { SectionMain } from "./Sections/SectionsMain/SectionMain";
import { Header } from "../../components/Header/Header";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { MobileNavbar } from "../../components/HeaderMobile/HeaderMobile";
import { SectionBeneficiosAcademia } from "./Sections/Beneficio/SectionBeneficio";
import { SectionPlanos } from "./Sections/SectionPlanos/SectionPlanos";
import { SectionPrecoAcademiaEacessorios } from "./Sections/PrecoAcademia/SectionPrecoAcademia";
import { SectionCadastro } from "./Sections/SectionCadastro/SectionCadastro";
import { Footer } from "./Sections/footer/footer";

export const HomePage: React.FC = () => {
  const [ShowNav, setShowNav] = useState(false); 

  return (
    <>
      <GlobalStyles />
      <MobileNavbar/>
      <Header ShowNav={ShowNav} setShowNav={setShowNav} />
      <SectionMain />
      <SectionBeneficiosAcademia/>
      <SectionPlanos/>
      <SectionPrecoAcademiaEacessorios/>
      <SectionCadastro/>
      <Footer/>
    </>
  );
};
