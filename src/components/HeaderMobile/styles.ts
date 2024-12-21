import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  z-index: 5;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (max-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    color: white;
    position: relative;
    z-index: 10;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: transparent;
`;

export const Hamburger = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 15;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: 100%;
  background-color: #444;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 8rem;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(100%)"};
  animation: ${({ isOpen }) =>
    isOpen ? css`${slideIn} 0.3s ease-out` : "none"};
  z-index: 10;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-align: right;
  font-size: 1.2rem;

  &:hover {
    color: #7ad84b;
  }
`;
