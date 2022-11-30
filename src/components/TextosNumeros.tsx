import {useContext} from 'react';
import {Text} from 'react-native';
import {ButtonContext} from '../context/ButtonContextProvider';
import {styles} from '../theme/appTheme';

export const TextosNumeros = () => {
  const {state} = useContext(ButtonContext);
  return (
    <>
      {state.secondaryRow !== '0' && (
        <Text style={styles.resultadoPequeno}>{state.secondaryRow}</Text>
      )}
      <Text style={styles.resultado} adjustsFontSizeToFit numberOfLines={1}>
        {state.primaryRow}
      </Text>
    </>
  );
};
