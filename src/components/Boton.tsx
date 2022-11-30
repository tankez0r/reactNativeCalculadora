import {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ButtonContext} from '../context/ButtonContextProvider';

type colors = 'light' | 'orange' | 'dark';

interface props {
  text: string;
  color?: colors;
  long?: boolean;
  action: actions;
}

export const Boton = ({text, color = 'dark', long = false, action}: props) => {
  const {dispatch} = useContext(ButtonContext);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch({type: action, payload: {text}});
        }}
        style={styles(color, long).boton}>
        <Text style={styles(color, long).botonTexto}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = (color: colors, long: boolean) => {
  const bgColor = {orange: '#FF9427', dark: '#2D2D2D', light: '#a8a8a8'};

  const SSheet = StyleSheet.create({
    boton: {
      height: 70,
      width: long ? 150 : 70,
      borderRadius: 100,
      justifyContent: 'center',
      marginHorizontal: 10,
      backgroundColor: bgColor[color],
    },
    botonTexto: {
      textAlign: long ? 'left' : 'center',
      padding: 10,
      fontSize: 30,
      color: color === 'light' ? 'black' : 'white',
      fontWeight: '700',
      marginLeft: long ? 20 : 0,
    },
  });

  return SSheet;
};
