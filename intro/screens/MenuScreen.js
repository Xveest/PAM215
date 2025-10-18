import { Text, StyleSheet, View,Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextScreen from './TextScreen'   
import ImageScreen from './ImageScreen'
import ScrollScreen from './ScrollScreen'
import ActivityScreen from './ActivityScreen'
import FlatScreen from './FlatScreen'
import ModalScreen from './ModalScreen'
import BottomScreen from './BottomScreen'

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

switch (screen) {
    case 'contador':
        return <ContadorScreen />;
    case 'botones':
        return <BotonesScreen  />;
    case 'text':  
        return <TextScreen  />;
    case 'image':  
        return <ImageScreen  />;
    case 'scroll':  
        return <ScrollScreen  />;
    case 'activity':  
        return <ActivityScreen  />;
    case 'flat':  
        return <FlatScreen  />;
    case 'modal':  
        return <ModalScreen  />;
    case 'bottom':  
        return <BottomScreen  />;
    case 'menu':
        default:
            return (
             <View>
               <Text>MenuScreen</Text>
                <Button onPress={() => setScreen('contador') } title='Pract: Contador'/>
                <Button onPress={() => setScreen('botones') } title='Pract: Buttons'/>
                <Button onPress={() => setScreen('text') } title='Pract: Text'/>
                <Button onPress={() => setScreen('image') } title='Pract: Image'/>
                <Button onPress={() => setScreen('scroll') } title='Pract: Scroll'/>    
                <Button onPress={() => setScreen('activity') } title='Pract: Activity'/>
                <Button onPress={() => setScreen('flat') } title='Pract: FlatList'/>
                <Button onPress={() => setScreen('modal') } title='Pract: Modal'/>
                <Button onPress={() => setScreen('bottom') } title='Pract: Bottom'/>
             </View>
  )
}

  
}

const styles = StyleSheet.create({})