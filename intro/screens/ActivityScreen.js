import { Text, StyleSheet, View, Button, ActivityIndicator } from "react-native"
import React, {useState} from "react";

export default function ActScreen() {
    const [loading, setLoading] = useState(false);
    const startLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000)
    };

    if (loading) {
        return (
        <View style={styles.container}>
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color="#1212e7ff"
                    animating={true}
                    hidesWhenStopped={true}
                />

                <Text color= '#9f90e0ff'>Cargando...</Text>
            </View>
        </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text> ActivityIndicator </Text>
            <Button title="Carga de datos" onPress={startLoading} />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5d2e2eff',
    },
    texto:{
        color: '#9f90e0ff',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },      
    loadingContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})