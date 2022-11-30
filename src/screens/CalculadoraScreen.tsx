import { StatusBar, View} from 'react-native';
import {Botones} from '../components/Botones';
import {TextosNumeros} from '../components/TextosNumeros';
import {ButtonContextProvider} from '../context/ButtonContextProvider';

import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <ButtonContextProvider>
      <StatusBar barStyle='default' backgroundColor='black'/>
      <View style={styles.calculadoraContainer}>
        <TextosNumeros />
        <Botones />
      </View>
    </ButtonContextProvider>
  );
};
