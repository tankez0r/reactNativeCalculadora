import {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ButtonContext} from '../context/ButtonContextProvider';
import {Boton} from './Boton';

export const Botones = () => {
  const {dispatch} = useContext(ButtonContext);
  return (
    <>
      <View style={styles.container}>
        <Boton action="limpiar" color="light" text="C" />
        <Boton action="positivoNegativo" color="light" text="+/-" />
        <Boton action="borrarEntrada" color="light" text="del" />
        <Boton action="dividir" color="orange" text="/" />
      </View>
      <View style={styles.container}>
        <Boton action="createNumber" color="dark" text="7" />
        <Boton action="createNumber" color="dark" text="8" />
        <Boton action="createNumber" color="dark" text="9" />
        <Boton action="multiplicar" color="orange" text="x" />
      </View>
      <View style={styles.container}>
        <Boton action="createNumber" color="dark" text="4" />
        <Boton action="createNumber" color="dark" text="5" />
        <Boton action="createNumber" color="dark" text="6" />
        <Boton action="restar" color="orange" text="-" />
      </View>
      <View style={styles.container}>
        <Boton action="createNumber" color="dark" text="1" />
        <Boton action="createNumber" color="dark" text="2" />
        <Boton action="createNumber" color="dark" text="3" />
        <Boton action="sumar" color="orange" text="+" />
      </View>
      <View style={styles.container}>
        <Boton action="createNumber" color="dark" long={true} text="0" />
        <Boton action="createNumber" color="dark" text="." />
        <Boton action="igual" color="orange" text="=" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
