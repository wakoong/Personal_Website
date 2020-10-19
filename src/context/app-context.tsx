import * as React from 'react';
import { DefaultTheme, IThemeProps } from '../utils';

const AppContext = React.createContext();

interface IReducer {
  state: {
    theme: IThemeProps;
  };
  action: ActionTheme;
}

interface ActionTheme {
  type: 'select themes';
  theme: string;
}

const initialState = {
  theme: DefaultTheme,
};

const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'select themes':
      return { ...state, theme: action.theme };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AppProvider = ({ ...props }: any) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  const value = [state, dispatch];
  return <AppContext.Provider value={value} {...props} />;
};

const useApp = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useApp must be used within a AppProvider`);
  }
  return context;
};

export { AppProvider, useApp };
