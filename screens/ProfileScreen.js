import React, {useState} from 'react'
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import BallRow from '../BallRow'

function ProfileScreen({navigation}) {    
    const [data, setData] = useState({name: 'Иван', surname: 'Иванов', patronymic: 'Иванович', born: '2000/01/01', city: 'г.Казань', level: 'Начальное', institution: 'Лицей №1', group: "А-11"})

    function ClassOr() {
        if (data.level === 'Начальное' || data.level === 'Среднее')
            return <View><Text style={styles.textNewProfile}>Класс</Text><Text style={styles.inputNewProfile}>{data.group}</Text></View>
        else return <View><Text style={styles.textNewProfile}>Группа</Text><Text style={styles.inputNewProfile}>{data.group}</Text></View>
    }

    return(
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Личный кабинет</Text>
                <BallRow></BallRow>
            </View>
            <View style={styles.container}>
                <View style={styles.mainContent}>
                    <Text style={styles.textNewProfile}>Фамилия</Text>
                    <Text style={styles.inputNewProfile}>{data.surname}</Text>
                    <Text style={styles.textNewProfile}>Имя</Text>
                    <Text style={styles.inputNewProfile}>{data.name}</Text>
                    <Text style={styles.textNewProfile}>Отчество</Text>
                    <Text style={styles.inputNewProfile}>{data.patronymic}</Text>
                    <Text style={styles.textNewProfile}>Дата рождения</Text>
                    <Text style={styles.inputNewProfile}>{data.born}</Text>
                    <Text style={styles.textNewProfile}>Уровень образования</Text>
                    <Text style={styles.inputNewProfile}>{data.level}</Text>
                    <Text style={styles.textNewProfile}>Город</Text>
                    <Text style={styles.inputNewProfile}>{data.city}</Text>
                    <Text style={styles.textNewProfile}>Учебное заведение</Text>
                    <Text style={styles.inputNewProfile}>{data.institution}</Text>
                    {ClassOr()}
                    <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('NewProfile')}>
                    <Text style={styles.textSignIn}>Изменить данные</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
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

    ballContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10
    },

    imgStyle: {
        width: 25,
        height: 20,
        paddingLeft: 25,
        resizeMode: 'contain'
    },

    textImg: {
        color: '#fff',
        marginLeft: 5,
        marginRight: 25,
        fontWeight: 'bold',
        fontSize: 16
    },

    mainContent: {
        width: 350,
        paddingLeft: 25,
        paddingTop: 5,
        paddingRight: 25,
        paddingBottom: 45,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
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

    NewProfileButton: {
        height:35,
        width: 320,
        borderRadius: 5,
        marginTop: 25,
        backgroundColor: '#6F51ED',
        alignItems: 'center',
        justifyContent: 'center'
    },

    NewProfileButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },

    signIn: {
        width: '100%',
        height: 35,
        borderRadius: 5,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6F51ED'
      },
    
      textSignIn: {
        fontSize: 20,
        color: '#fff'
      },
})

export default ProfileScreen