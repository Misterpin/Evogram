import React from 'react'
import {View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['componentWillReceiveProps has been'])
YellowBox.ignoreWarnings(['Failed prop type'])

function SignUpScreen({navigation}) {
    return(
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Регистрация</Text>
            </View>
            <Text style={styles.back} onPress={() => navigation.navigate('Enter')}>Назад</Text>
            <View style={styles.mainContent}>
                <TextInput placeholder='E-mail' style={styles.textInputLogin}></TextInput>
                <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUpSecond')}>
                    <Text style={styles.signUpButtonText}>Подтвердить</Text>
                </TouchableOpacity>
            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    headerView: {
        height: 70,
        marginBottom: 10,
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
        marginBottom: 25,
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

    signUpButton: {
        height:35,
        width: 300,
        borderRadius: 5,
        marginBottom: 25,
        backgroundColor: '#6F51ED',
        alignItems: 'center',
        justifyContent: 'center'
    },

    signUpButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },

    text: {
        width: 300,
        fontSize: 14,
        color: 'gray',
        lineHeight: 20,
        marginBottom: 25,
    }
})

export default SignUpScreen