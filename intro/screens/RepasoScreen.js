import { Text, StyleSheet, View, Button, ImageBackground, TextInput, Alert, Image, Switch } from 'react-native'
import React, { useState } from 'react'

export default function RepasoScreen() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
    
  const registrarUsuario = () => {

    if (nombre.trim() === '') {
      Alert.alert("Error por favor ingresa tu nombre ");
      alert("Error por favor ingresa tu nombre ");
      return;
    }
    if(correo.trim() === '') {
      Alert.alert("Error por favor ingresa un correo electrónico");
      alert("Error por favor ingresa un correo electrónico");
      return;
    }
    
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      Alert.alert("Error por favor ingresa un correo electrónico válido");
      alert("Error por favor ingresa un correo electrónico válido");
      return;
    }
    
    if (!aceptaTerminos) {
      Alert.alert("Terminos no aceptados tienes que aceptar los términos y condiciones para registrarte");
      alert("Terminos no aceptados tienes que aceptar los términos y condiciones para registrarte");
      return;
    }
    
   
    Alert.alert(
      "Registro Exitoso ",
      `Datos Ingresados:\n\nNombre Completo: ${nombre}\nCorreo Electrónico: ${correo}\n\nTérminos aceptados: Sí`
    );
    alert(
      "Registro Exitoso \n" +
      `Datos Ingresados:\n\nNombre Completo: ${nombre}\nCorreo Electrónico: ${correo}\n\nTérminos aceptados: Sí`
    );  
  }
  return (
    <ImageBackground
      source={require('../assets/imagenpractica1.jpeg')}
      resizeMode='cover'
      style={styles.background}
    >
      <View style={styles.container}>
       
        
        
        <Text style={styles.titulo}>Registro de Usuario</Text>
        
      
        <Text style={styles.etiquetas}>Nombre:</Text>
        <TextInput 
          style={styles.input}
          placeholder='Escribe tu nombre'
          placeholderTextColor="#999"
          value={nombre}
          onChangeText={setNombre}      
        />


        <Text style={styles.etiquetas}>Correo:</Text>
        <TextInput
          style={styles.input}
          placeholder='ejemplo@correo.com'
          placeholderTextColor="#999"
          keyboardType='email-address'
          autoCapitalize='none'
          inputType='email'
          value={correo}
          onChangeText={setCorreo}
        />
        
       
        <View style={styles.terminosContainer}>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={aceptaTerminos ? '#2196F3' : '#f4f3f4'}
          />
          <Text style={styles.terminosTexto}>
            Acepto los terminos y condiciones
          </Text>
        </View>
        
        
        <View style={styles.botonContainer}>
          <Button
            title='Registrarse'
            onPress={registrarUsuario}
            color='#2196F3'
          />
        </View>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
  },
  titulo: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  etiquetas: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  terminosTexto: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
  botonContainer: {
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
})