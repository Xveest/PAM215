import { Text, StyleSheet, View, ImageBackground, Animated, Easing} from 'react-native'
import React, { useEffect,useState } from 'react'



export default function ImageScreen() {
    const [cargando, setCargando] = useState(true);
    const desvanecido= new Animated.Value(1);

    useEffect(() => {
      Animated.timing(desvanecido, {
        toValue: 0,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => setCargando(false));
    }, []); 

    if(cargando){
      return(
        <Animated.View style={[styles.splashcontainer, {opacity: desvanecido}]}>
          <ImageBackground 
          source={require('../assets/imagenpractica2.jpeg')} 
          resizeMode='contain'
          style={styles.splashimage}
          >
          <Text style={styles.splashtext} >Cargando Imagen...</Text>
          </ImageBackground>
        </Animated.View>
      );
    }
  return (
   <ImageBackground
    source={require('../assets/imagenpractica1.jpeg')}
    resizeMode='cover'
    style={styles.background}
   >
    <Text style={styles.texto}>Bienvenido a mi app </Text>
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
    borderRadius: 10
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