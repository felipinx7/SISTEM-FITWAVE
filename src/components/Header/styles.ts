import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  position: relative;
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const LogoImage = styled.img`
  width: 240px;
  height: 32px;
  object-fit: contain;
  display: block;

  @media (max-width: 769px) {
    transform: translateY(-4rem);
  }
`;

interface ShowNavProps {
  ShowNav: boolean;
}

export const Nav = styled.nav<ShowNavProps>`
  display: flex;
  gap: 12rem;
  align-items: center;
  color: white;

  a {
    text-decoration: none;
    font-weight: 600;
    color: white;
    &:hover {
      color: #7ad84b;
    }
  }

  @media (max-width: 1080px) {
    gap: 5rem;
  }

  @media (max-width: 826px) {
    margin-left: -7rem;
  }

  @media (max-width: 769px) {
    display: ${(props) => (props.ShowNav ? "flex" : "none")};
    flex-direction: column;
    text-align: end;
    margin-top: -12rem;
    transform: translateY(163%);
  }
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  background: rgba(0, 217, 57, 1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  z-index: 10;
  white-space: nowrap;

  span {
    display: block;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: rgb(2, 168, 46);
  }

  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 769px) {
    transform: translate(-86px, -70px);
    z-index: 9;
  }
  @media (max-width: 425px) {
    transform: translate(-143px, -70px);
  }
  @media (max-width: 361px) {
    font-size: 0.8rem;
    width: 60%;
    transform: translate(-159px, -70px);
  }
`;

export const SandwichMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const ButtonAbrirNavBar = styled.button`
  border: none;
  background-color: transparent;
  display: block;

  svg {
    font-size: 2.5rem;
    transform: translateY(7%);
    display: none;
  }

  @media (max-width: 769px) {
    svg {
      display: block;
      transform: translateY(7%);
    }
  }
`;
