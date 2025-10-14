// zona 1 imports: zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';
// zona 2 Main: zona de componentes
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>

     <Text style={styles.texto}>Contador</Text>
     <Text style={styles.texto2}>{count}</Text>

      <View style={styles.contenedorBotones}> 
        <Button color="#841584" title= 'incrementar' onPress={() => setCount(count + 1)}></Button>
        <Button color="#386b2aff" title= 'decrementar' onPress={() => setCount(count - 1)}></Button>
        <Button color="#59719dff" title= 'reiniciar' onPress={() => setCount(0)}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
//zona 3 styles: zona de estilos y posicionamiento  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0a4a4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto :{
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through'
  },
  texto2 :{
    fontFamily: 'courier',
    fontSize: 40,
    color: '#2f90a6ff',
    fontWeight: '500',
    textDecorationLine: 'underline'
  },
  contenedorBotones:{
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,

  },
});
