type IButtonContext = {
  dispatch: React.Dispatch<Iaction>;
  state: IshowNumbersState;
};

type actions =
  | 'limpiar'
  | 'createNumber'
  | 'positivoNegativo'
  | 'borrarEntrada'
  | 'sumar'
  | 'restar'
  | 'dividir'
  | 'multiplicar'
  | 'igual';

type TypeButtonReducer = (
  initialState: IshowNumbersState,
  action: actions,
) => IshowNumbersState | undefined;
