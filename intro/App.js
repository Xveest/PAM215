// zona 1 imports: zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';
// zona 2 Main: zona de componentes
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Contador: {count}</Text>
      <Button title= 'incrementar' onPress={() => setCount(count + 1)}></Button>
      <Button title= 'decrementar' onPress={() => setCount(count - 1)}></Button>
      <Button title= 'reiniciar' onPress={() => setCount(0)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}
//zona 3 styles: zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

