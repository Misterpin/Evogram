import React from 'react'
import {View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'

function LoginScreen({navigation}) {
    return (
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Вход</Text>
            </View>
            <Text style={styles.back} onPress={() => navigation.navigate('Enter')}>Назад</Text>
            <View style={styles.mainContent}>
                <TextInput placeholder='Логин' style={styles.textInputLogin}></TextInput>
                <TextInput placeholder='Пароль' style={styles.textInputPassword} secureTextEntry={true}></TextInput>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.loginButtonText}>Войти</Text>
                </TouchableOpacity>
            <Text style={styles.newPassword} onPress={() => navigation.navigate('NewPassword')}>Забыли пароль?</Text>
            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerView: {
        height: 70,
        marginBottom: 5,
        backgroundColor: '#373B54',
        justifyContent: 'center'
    },

    headerText: {
        color: '#fff',
        fontSize: 25,
        paddingLeft: 20,
        fontWeight: 'bold'
    },

    back: {
        color: '#6F51ED',
        marginLeft: 10,
        marginBottom: 40,
        width: 50
    },

    newPassword: {
        marginTop: 10,
        color: '#6F51ED'
    },

    mainContent: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    textInputLogin: {
        height: 40,
        width: 300,
        fontSize: 16,
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        marginBottom: 35,
        borderColor: 'grey',
        backgroundColor: '#fff'
    },

    textInputPassword: {
        height: 40,
        width: 300,
        fontSize: 16,
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        marginBottom: 30,
        borderColor: 'grey',
        backgroundColor: '#fff'
    },

    loginButton: {
        height:35,
        width: 300,
        borderRadius: 5,
        backgroundColor: '#6F51ED',
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default LoginScreen