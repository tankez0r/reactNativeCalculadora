export const ButtonReducer = (
  state: IshowNumbersState,
  action: Iaction,
): IshowNumbersState => {
  const {type, payload} = action;
  const num1 = Number(state.primaryRow);
  const num2 = Number(state.secondaryRow);

  switch (type) {
    case 'limpiar':
      return {
        secondaryRow: '0',
        primaryRow: '0',
      };

    case 'createNumber':
      if (state.primaryRow === '0' && payload?.text !== '.') {
        return {...state, primaryRow: action.payload?.text!};
      }
      if (state.primaryRow.includes('.') && payload?.text === '.')
        return {...state};
      return {...state, primaryRow: state.primaryRow + action.payload?.text};

    case 'positivoNegativo': {
      if (state.primaryRow.includes('-')) {
        return {...state, primaryRow: state.primaryRow.replace('-', '')};
      } else if (state.primaryRow !== '0') {
        return {...state, primaryRow: '-' + state.primaryRow};
      }
    }

    case 'borrarEntrada': {
      if (
        state.primaryRow.length === 1 ||
        (state.primaryRow.includes('-', 0) && state.primaryRow.length <= 2)
      ) {
        return {...state, primaryRow: '0'};
      }
      return {
        ...state,
        primaryRow: state.primaryRow.slice(0, -1),
      };
    }
    case 'sumar':
      if (state.secondaryRow === '0' || state.previousAction === 'igual') {
        return {
          ...state,
          secondaryRow: state.primaryRow,
          primaryRow: '0',
          previousAction: 'sumar',
        };
      }

      return {
        ...state,
        secondaryRow: (num1 + num2).toString(),
        primaryRow: '0',
      };

    case 'restar':
      if (state.secondaryRow === '0' || state.previousAction === 'igual') {
        return {
          ...state,
          secondaryRow: state.primaryRow,
          primaryRow: '0',
          previousAction: 'restar',
        };
      }
      return {
        ...state,
        secondaryRow: (num2 - num1).toString(),
        primaryRow: '0',
      };

    case 'dividir': {
      if (state.secondaryRow === '0' || state.previousAction === 'igual') {
        return {
          ...state,
          secondaryRow: state.primaryRow,
          primaryRow: '0',
          previousAction: 'dividir',
        };
      }
      return {
        ...state,
        secondaryRow: (num2 / num1).toString(),
        primaryRow: '0',
      };
    }

    case 'multiplicar': {
      if (state.secondaryRow === '0' || state.previousAction === 'igual') {
        return {
          ...state,
          secondaryRow: state.primaryRow,
          primaryRow: '0',
          previousAction: 'multiplicar',
        };
      }
      return {
        ...state,
        secondaryRow: (num2 * num1).toString(),
        primaryRow: '0',
      };
    }

    case 'igual': {
      switch (state.previousAction) {
        case 'sumar':
          return {
            ...state,
            secondaryRow: `${num1}+${num2}`,
            primaryRow: `${num1 + num2}`,
            previousAction: 'igual',
          };
        case 'restar':
          return {
            ...state,
            secondaryRow: `${num2}-${num1}`,
            primaryRow: `${num2 - num1}`,
            previousAction: 'igual',
          };
        case 'dividir':
          return {
            ...state,
            secondaryRow: `${num2}/${num1}`,
            primaryRow: `${num2 / num1}`,
            previousAction: 'igual',
          };
        case 'multiplicar':
          return {
            ...state,
            secondaryRow: `${num2}*${num1}`,
            primaryRow: `${num2 * num1}`,
            previousAction: 'igual',
          };

        default:
          break;
      }
    }

    default:
      return state;
  }
};

// TO-DO: Realizar optimizacion y quitar codigo que se repita (operaciones)
