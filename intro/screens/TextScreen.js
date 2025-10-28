import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React,{useState} from 'react';




export default function TextInputAlertScreen() {
  const [nombre, setNombre]= useState('');
  const [password, setPassword]= useState('');
  const [Telefono, setTelefono]= useState('');

  const mostrarAlerta = () => {
     if(nombre.trim() === '' || password.trim() === '' || Telefono.trim() === '') {
        Alert.alert("Error , Por favor completa todos los campos (movil)");
        alert("Error,Por favor completa todos los campos (web)");
        return;
     } else {
        
        Alert.alert("Datos Ingresados \n" +
        `Nombre: ${nombre}\n Password: ${password}
        \nTelefono: ${Telefono}`
        );
        alert("Datos Ingresados \n" +
        `Nombre: ${nombre}\nPassword: ${password}
         \nTelefono: ${Telefono}`
        );

    }
   }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo} >TextInput & Alert</Text>
        <Text style={styles.etiquetas}>Nombre:</Text>
        <TextInput style={styles.input}
           placeholder='Escribe tu nombre aquí'
           value={nombre}
           onChangeText={setNombre}      
        />
       <Text style={styles.etiquetas}>Password:</Text>
        <TextInput style={styles.input}
           placeholder='Escribe tu password aquí'
            secureTextEntry={true}
           value={password}
           onChangeText={setPassword}

        />    
       <Text style={styles.etiquetas}>Telefono:</Text>
        <TextInput style={styles.input}
           placeholder='Escribe tu telefono aquí'
           keyboardType='phone-pad'
           value={Telefono}
           onChangeText={setTelefono}
        />
        <Button
          title='Mostrar Alerta'
           onPress={mostrarAlerta}
        
        />     
      </View>
    )
  
}

const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',  
       alignItems: 'center',
       backgroundColor: '#0b4819ff',
     },
    titulo:{
       fontSize: 24,
       fontFamily: 'Times New Roman',
       fontWeight: 'bold',
       color: 'white',
        marginBottom: 20,
        textDecorationLine: 'underline'
     },
     etiquetas:{
       fontSize: 18,
       marginBottom: 5,
       marginTop: 10,
     },
     input:{
       width: '50%',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      backgroundColor: 'white',
     },
   })