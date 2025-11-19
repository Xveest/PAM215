import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, Animated, Easing, ScrollView, Switch } from 'react-native';
import React, { useEffect, useState } from 'react';


export default function App() {
  const[esCompletadoTrabajo, setEsCompletadoTrabajo]= useState(false);
  const[esCompletadoSegundoTrabajo, setEsCompletadoSegundoTrabajo]= useState(false);
  const[esCompletadoEstudio, setEsCompletadoEstudio]= useState(false);
  const[esCompletadoSegundoEstudio, setEsCompletadoSegundoEstudio]= useState(false);
  const[esCompletadoHogar, setEsCompletadoHogar]= useState(false);
  const[esCompletadoSegundoHogar, setEsCompletadoSegundoHogar]= useState(false);
  const [cargando, setCargando] = useState(true);
  const desvanecido= new Animated.Value(1);

  const reiniciarTodos = () => {
    setEsCompletadoTrabajo(false);
    setEsCompletadoSegundoTrabajo(false);
    setEsCompletadoEstudio(false);
    setEsCompletadoSegundoEstudio(false);
    setEsCompletadoHogar(false);
    setEsCompletadoSegundoHogar(false);
  };

    useEffect(() => {
      Animated.timing(desvanecido, {
        toValue: 0,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => setCargando(false));
    }, []); 

    if(cargando){
      return(
        <Animated.View style={[styles.splashcontainer, { opacity: desvanecido }]}>
          <Text style={styles.splashtext} >el exito es la suma de pequeños esfuerzos repetidos dia tras dia</Text>  
        </Animated.View>
      );
    }
  return (
    <ImageBackground
      source={{ uri: 'data:image/jpeg;base64,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' }}
    resizeMode='cover'
    style={styles.background}
   > 
   
       <Text style={styles.texto}>Mis deseos </Text>
       <Text style={styles.texto}>7/11/2025</Text>
       
       <View style={styles.botonReinicio}>
         <Button 
           title="Reiniciar Todos" 
           onPress={reiniciarTodos}
           color="#ff6b6b"
         />
       </View>

       <ScrollView style={styles.scrollContainer}> 
        <View style={styles.contenedorcat1}>
          <Text style={styles.tituloCategoria}>1. Trabajo</Text>
          
          <View style={styles.tareaContainer}>
            <Text style={styles.tareaTexto}>
              {esCompletadoTrabajo ? "✓ Terminé el trabajo" : "Tengo que terminar el trabajo (prioridad media)"}
            </Text>
            <Switch
              value={esCompletadoTrabajo}
              onValueChange={() => setEsCompletadoTrabajo(!esCompletadoTrabajo)}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={esCompletadoTrabajo ? "#2196F3" : "#f4f3f4"}
            />
          </View>

          <View style={styles.tareaContainer}>
            <Text style={styles.tareaTexto}>
              {esCompletadoSegundoTrabajo ? "✓ Terminé el segundo trabajo" : "Tengo que terminar el segundo trabajo (prioridad alta)"}
            </Text>
            <Switch
              value={esCompletadoSegundoTrabajo}
              onValueChange={() => setEsCompletadoSegundoTrabajo(!esCompletadoSegundoTrabajo)}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={esCompletadoSegundoTrabajo ? "#2196F3" : "#f4f3f4"}
            />
          </View>
        </View>

        <View style={styles.contenedorcat2}>
          <Text style={styles.tituloCategoria}>2. Estudios</Text>
          
          <View style={styles.tareaContainer}>
            <Text style={styles.tareaTexto}>
              {esCompletadoEstudio ? "✓ Completé el estudio" : "Tengo que completar el estudio"}
            </Text>
            <Switch
              value={esCompletadoEstudio}
              onValueChange={() => setEsCompletadoEstudio(!esCompletadoEstudio)}
              trackColor={{ false: "#767577", true: "#e91eff" }}
              thumbColor={esCompletadoEstudio ? "#d500f9" : "#f4f3f4"}
            />
          </View>

          <View style={styles.tareaContainer}>
            <Text style={styles.tareaTexto}>
              {esCompletadoSegundoEstudio ? "✓ Completé el segundo estudio" : "Tengo que completar el segundo estudio"}
            </Text>
            <Switch
              value={esCompletadoSegundoEstudio}
              onValueChange={() => setEsCompletadoSegundoEstudio(!esCompletadoSegundoEstudio)}
              trackColor={{ false: "#767577", true: "#e91eff" }}
              thumbColor={esCompletadoSegundoEstudio ? "#d500f9" : "#f4f3f4"}
            />
          </View>
        </View>

        <View style={styles.contenedorcat3}>
          <Text style={styles.tituloCategoria}>3. Hogar</Text>
          
          <View style={styles.tareaContainer}>
            <Text style={styles.tareaTexto}>
              {esCompletadoHogar ? "✓ Completé tarea del hogar" : "Tengo que completar tarea del hogar"}
            </Text>
            <Switch
              value={esCompletadoHogar}
              onValueChange={() => setEsCompletadoHogar(!esCompletadoHogar)}
              trackColor={{ false: "#767577", true: "#90EE90" }}
              thumbColor={esCompletadoHogar ? "#00ff00" : "#f4f3f4"}
            />
          </View>

          <View style={styles.tareaContainer}>
            <Text style={styles.tareaTexto}>
              {esCompletadoSegundoHogar ? "✓ Completé segunda tarea del hogar" : "Tengo que completar segunda tarea del hogar"}
            </Text>
            <Switch
              value={esCompletadoSegundoHogar}
              onValueChange={() => setEsCompletadoSegundoHogar(!esCompletadoSegundoHogar)}
              trackColor={{ false: "#767577", true: "#90EE90" }}
              thumbColor={esCompletadoSegundoHogar ? "#00ff00" : "#f4f3f4"}
            />
          </View>
        </View>
       </ScrollView>

    
    </ImageBackground>
  )
}
   

const styles = StyleSheet.create({
  contenedorcat1:{
    backgroundColor: 'rgba(3, 19, 247, 0.7)',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  contenedorcat2:{
    backgroundColor: 'rgba(247, 3, 231, 0.7)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  contenedorcat3:{
    backgroundColor: 'rgba(0, 255, 0, 0.7)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    marginHorizontal: 10,
  },  
  tituloCategoria: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  tareaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  tareaTexto: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    width: '100%',
  },
  texto: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 40,
  },
  botonReinicio: {
    marginVertical: 15,
    marginHorizontal: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  splashcontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#1a1a2e',
  },
  splashimage:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashtext:{
    position: 'absolute',
    marginBottom: 60,
    fontSize: 24,
    color: '#ff6b6b',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
})