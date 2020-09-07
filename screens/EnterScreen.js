import React from 'react'
import { StyleSheet, BackHandler, Text, View, ScrollView, Image, StatusBar, TouchableOpacity } from 'react-native'

function EnterScreen({navigation}) {
    return (
        <ScrollView>
        <StatusBar hidden={true}></StatusBar>
        <View style={styles.container}>
          <Image source={require('../public/logo.png')} style={styles.imageLogo}></Image>
          <Text style={styles.textLogo}>Evogram</Text>
          <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textSignIn}>ВХОД</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textSignUp}>РЕГИСТРАЦИЯ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exit} onPress={() => BackHandler.exitApp()}>
            <Text style={styles.textExit}>ВЫХОД</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  
    imageLogo: {
      width: 300,
      height: 250,
      marginTop: 60
    },
  
    textLogo: {
      fontSize: 50,
      opacity: 0.4,
      marginBottom: 50,
      fontWeight: 'bold'
    },
  
    signIn: {
      width: 250,
      height: 40,
      borderRadius: 5,
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6F51ED'
    },
  
    textSignIn: {
      fontSize: 20,
      color: '#fff'
    },
  
    signUp: {
      width: 250,
      height: 40,
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 30,
      alignItems: 'center',
      borderColor: '#6F51ED',
      justifyContent: 'center',
    },
  
    textSignUp: {
      fontSize: 20,
      color: '#6F51ED'
    },
  
    exit: {
      width: 250,
      height: 40,
      borderRadius: 5,
      marginBottom: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#373B54'
    },
  
    textExit: {
      fontSize: 20,
      color: '#fff'
    }
  });

export default EnterScreen