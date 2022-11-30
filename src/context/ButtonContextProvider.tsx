import {createContext, ReactElement, useReducer} from 'react';
import {ButtonReducer} from '../reducer/ButtonReducer';

export const ButtonContext = createContext<IButtonContext>(
  {} as IButtonContext,
);

interface IButonContexProvider {
  children: React.ReactElement | ReactElement[];
}

export const ButtonContextProvider = ({children}: IButonContexProvider) => {
  const initialState = {secondaryRow: '0', primaryRow: '0'};
  const [state, dispatch] = useReducer(ButtonReducer, initialState);

  return (
    <ButtonContext.Provider value={{dispatch, state}}>
      {children}
    </ButtonContext.Provider>
  );
};
