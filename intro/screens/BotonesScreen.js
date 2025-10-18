import { Text, StyleSheet, View,Button,Switch } from 'react-native'
import React,{useState} from 'react';

export default function BotonesScreen() {
    const [esEncendido,cambiarEncendido] = useState(false);  
    const [color, cambiarColor] = useState('yellow');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo} >Control de luz</Text>
        <Text style={[styles.luz,{color:esEncendido ? color : 'black'}]}>{ esEncendido ? "Encendido" : " Luz Apagada" }</Text>

        <Switch
          value={esEncendido}
          onValueChange={()=> cambiarEncendido(!esEncendido)}
          trackColor={{true: 'yellow', false: 'gray'}}> </Switch>

        <View style={styles.cajaBotones}>
            <Button title='Amarillo' onPress={ () => cambiarColor('yellow') } color='#d7ca41ff'></Button>
            <Button title='Azul' onPress={ () => cambiarColor('blue') } color='#42a5f5'></Button>
            <Button title='Rojo' onPress={ () => cambiarColor('red') } color='#ef5350'></Button>
        </View> 
    </View>
  )
}
   
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#b0a4a4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaBotones:{
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
  titulo:{
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  luz:{
    fontSize: 30,
    marginBottom: 15,
  },
})
