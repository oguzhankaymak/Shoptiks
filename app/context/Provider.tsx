import React, {FC, createContext, useReducer} from 'react';
import {InitialState} from './auth/initialStates/InitialStates';
import AuthReducers from './auth/reducers/AuthReducers';

export const GlobalContext = createContext({});

export const GlobalProvider: FC = ({children}) => {
  const [authState, authDispatch] = useReducer<any | null>(
    AuthReducers,
    InitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
