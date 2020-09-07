import React from 'react'
import {View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import BallRow from '../BallRow'

const AddAttainmentScreen = () => {
    return(
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Добавить достижение</Text>
                <BallRow></BallRow>
            </View>
            <View style={styles.container}>
                <View style={styles.mainContent}>
                    <Text style={styles.textNewProfile}>Направление</Text>
                    <TextInput style={styles.inputNewProfile}></TextInput>
                    <Text style={styles.textNewProfile}>Масштаб</Text>
                    <TextInput style={styles.inputNewProfile}></TextInput>
                    <Text style={styles.textNewProfile}>Результат</Text>
                    <TextInput style={styles.inputNewProfile}></TextInput>
                    <Text style={styles.textQr}>Просканируйте QR-код</Text>
                    <TouchableOpacity style={styles.buttom}>
                        <Text style={styles.textButtom}>Считать код</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerView: {
        height: 80,
        marginBottom: 30,
        backgroundColor: '#373B54',
        justifyContent: 'center'
    },

    headerText: {
        color: '#fff',
        fontSize: 25,
        paddingLeft: 20,
        fontWeight: 'bold'
    },

    mainContent: {
        width: 350,
        paddingLeft: 25,
        paddingTop: 5,
        paddingRight: 25,
        paddingBottom: 45,
        borderRadius: 5,
        backgroundColor: '#fff'
    },

    textNewProfile: {
        fontSize: 16, 
        color: 'gray',
        paddingTop: 15,
        opacity: 0.5,
    },

    inputNewProfile: {
        height: 25,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },

    textQr: {
        textAlign: 'center',
        fontSize: 16, 
        color: 'gray',
        paddingTop: 25,
        opacity: 0.5
    },

    buttom: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#6F51ED',
        padding: 10,
        borderRadius: 5,
        marginTop: 20
    },

    textButtom: {
        color: '#6F51ED',
        textAlign: 'center'
    }
})

export default AddAttainmentScreen