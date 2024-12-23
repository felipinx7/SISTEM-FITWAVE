import styled from "styled-components";

export const Label = styled.label`
  position: absolute;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  margin-top: 2rem;
  margin-left: -58rem;
`;

export const Input = styled.input`
  display: none;

  &:checked + div {
    background-color: #525252;
  }

  &:checked + div:after {
    background: linear-gradient(to right, #111, #111);
    left: calc(100% - 10px);
    transform: translateX(-100%);
  }
`;

export const Slider = styled.div`
  position: relative;
  width: 140px;
  height: 50px;
  background: #ffffff;
  border-radius: 25px;
  transition: background 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    top: 5px;
    left: 5px;
    background: linear-gradient(to right, #f97316, #facc15);
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Icon = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  transition: opacity 0.3s ease;

  &.left {
    left: 13px;
    fill: white;
    top: 13px;
  }

  &.right {
    right: 13px;
    top: 13px;
    fill: #111;
    opacity: 0.6;

    input:checked + & {
      fill: white;
      opacity: 0.7;
    }
  }
`;
