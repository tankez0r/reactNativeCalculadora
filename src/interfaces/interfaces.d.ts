interface IshowNumbersState {
  secondaryRow: string;
  primaryRow: string;
  previousAction?: actions;
}

interface IButtonReducerDispatch {
  text: string;
}

interface Iaction {
  type: actions;
  payload?: IButtonReducerDispatch;
}

interface TypeButtonReducer {
  initialState: IshowNumbersState;
  action: actions;
}