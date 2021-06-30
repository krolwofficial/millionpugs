import React from "react";
import { StateI, ActionsI } from "../types";

const initialState: StateI = {
  item: {
    url: "",
    title: "",
    date: "",
    explanation: "",
  },
  test: "test",
  loading: true,
};

const reducer = (state: StateI, { type, payload }: ActionsI): any => {
  switch (type) {
    case "SET_ITEM":
      return { ...state, item: payload };
    case "SET_LOADING":
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export const Store = React.createContext<StateI | any>({});

const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(
    reducer,
    props.initialValue ? props.initialValue : initialState
  );
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};

export default StoreProvider;
