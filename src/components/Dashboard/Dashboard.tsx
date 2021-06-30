import React from "react";
import styled from "styled-components";
import ButtonsWrapper from "../ButtonsWrapper";
import Link from "../Link";
import Item from "../Item";
import { Store } from "../../store/context";
import Loader from "../Loader";
import APICall from "../../lib/APICall";
import { ContextI } from "../../types";

const Dashboard = (): JSX.Element => {
  const {
    state: { loading },
    dispatch,
  } = React.useContext<ContextI>(Store);

  React.useEffect(() => {
    APICall(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainS>
      {loading === true ? <Loader /> : <Item />}
      <ButtonsWrapper />
      <Link />
    </MainS>
  );
};

const MainS = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default Dashboard;
