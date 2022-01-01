import React, { useReducer, createContext } from "react";
import initialState from "./initialState";

interface IAction {
  type: string;
  newState: any;
}

interface IValue {
  state: any;
  dispatch?: React.Dispatch<IAction>;
}

const AppContext = createContext<IValue>({
  state: initialState,
});

const reducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setSubTitlePrefix":
      return { ...state, subTitlePrefix: action.newState };
    case "setDateRange":
      return { ...state, dateRange: action.newState };
    case "setLanguage":
      return { ...state, language: action.newState };
    default:
      return;
  }
};

const AppContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value: IValue = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
