import React from "react";
import styled from "styled-components";
import Button from "../Buttons/Buttons";
import addToFav from "../../lib/addToFav";
import APICall from "../../lib/APICall";
import { Store } from "../../store/context";
import { ContextI } from "../../types";

type ClickableT = boolean;

const ButtonsWrapper = (): JSX.Element => {
  const { state, dispatch } = React.useContext<ContextI>(Store);
  const [clickable, setClickable] = React.useState<ClickableT>(true);

  return (
    <ButtonsWrapperS>
      <Button
        clickable
        text="Następne"
        handleClick={() => {
          setClickable(true);
          APICall(dispatch);
        }}
      />
      <Button
        clickable={clickable}
        text="Zapisz"
        handleClick={() => {
          setClickable(false);
          addToFav(state);
        }}
      />
    </ButtonsWrapperS>
  );
};

const ButtonsWrapperS = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  max-width: 300px;
  justify-content: space-between;
`;

export default ButtonsWrapper;
