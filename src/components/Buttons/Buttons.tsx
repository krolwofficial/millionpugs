import React from "react";
import styled from "styled-components";

interface ButtonSI {
  clickable: boolean;
}

interface ButtonI extends ButtonSI {
  text: string;
  handleClick: () => void;
}

const Button = ({ clickable, text, handleClick }: ButtonI): JSX.Element => {
  return (
    <ButtonS clickable={clickable} onClick={handleClick}>
      <p>{text}</p>
    </ButtonS>
  );
};

const ButtonS = styled.div<ButtonSI>`
  height: 30px;
  width: 45%;
  display: flex;
  background: #efefef;
  border: 1px solid #ddd;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  box-shadow: 0px 2px 4px -2px #000000;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 100ms linear;

  ${({ clickable }) =>
    clickable === false ? "pointer-events: none" : "pointer-events: auto"};

  &:hover {
    background: #ccc;
  }
`;

export default Button;
