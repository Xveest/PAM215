import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button, Animated, Easing, } from 'react-native';
import { ScrollView } from 'react-native-web';
import React, { useEffect, useState } from 'react';


export default function App() {
    const [cargando, setCargando] = useState(true);
    const desvanecido= new Animated.Value(1);

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
      
    > 
       <Text style={styles.texto}>Mis deseos </Text>
       <ScrollView> 
        <Text style={styles.texto}> 1.Trabajo {"\n"}</Text>
        <Text style={styles.texto}> 2. Estudios {"\n"}</Text>
        <Text style={styles.texto}> 3. Hogar {"\n"}</Text>
       </ScrollView>

  
    </ImageBackground>
  )
}
   

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',

  },
  texto: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',

  },
  splashcontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
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
    fontSize: 20,
    color: 'red',

  },
})