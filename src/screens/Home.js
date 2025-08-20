import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';

export default function Home({ navigation }) {
    const handleAcessar = () => {
        Alert.alert('Você clicou em "Como deseja acessar?"');
    };

    const handleOutrasOpcoes = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}></Text>
            </View>
            <Image
                source={require('../../assets/casual_dog.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.button} onPress={handleAcessar}>
                <View style={styles.buttonContent}>
                    <Image
                        source={require('../../assets/Google.png')}
                        style={styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Como deseja acessar?</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.outlineButton} onPress={handleOutrasOpcoes}>
                <Text style={styles.outlineButtonText}>Outras opções</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({ 
          container: { 
          flex: 1, 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
        },
        title: { 
          fontSize: 40, 
          fontWeight: 'bold', 
          marginBottom: 10, 
          color: '#333', 
        },
        image: { 
          width: 355, 
          height: 300, 
          marginBottom: 20, 
          marginTop: 200, 
        },
        subtitle: { 
          fontSize: 18, 
          marginBottom: 20, 
          color: '#555', 
        },
        button: { 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: 300, 
          height: 50, 
          backgroundColor: '#2cb859', 
          borderRadius: 5, 
          marginVertical: 10, 
        },
        buttonContent: { 
          flexDirection: 'row', 
          alignItems: 'center', 
        },
        buttonImage: { 
          backgroundColor: '#fff', 
          width: 24, 
          height: 24, 
          marginRight: 10, 
        },
        outlineButton: { 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: 300, 
          height: 50, 
          backgroundColor: '#fff', 
          borderWidth: 2, 
          borderColor: '#2cb859', 
          borderRadius: 5, 
          marginVertical: 10, 
        },
        outlineButtonText: { 
          color: '#131a20', 
          fontSize: 16, 
          textAlign: 'center', 
        },
        buttonText: { 
          color: '#fff', 
          fontSize: 16, 
          textAlign: 'center', 
        },
        topBar: { 
          width: '100%', 
          height: 60, 
          backgroundColor: '#ccc', 
          justifyContent: 'center', 
          alignItems: 'center', 
          position: 'absolute', 
          top: 0, 
          zIndex: 1, 
        },
        topBarText: { 
          fontSize: 18, 
          fontWeight: 'bold', 
        },
      });
      