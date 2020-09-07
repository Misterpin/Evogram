import React, {useState} from 'react'
import {View, Text, ScrollView, TextInput, Picker, TouchableOpacity, StyleSheet} from 'react-native'
import MyDatePicker from '../DatePicker'

function NewProfileScreen({navigation}) {  
    const [selectedValue, setSelectedValue] = useState(false)

    function ClassOr() {
        if (selectedValue === 'Начальное' || selectedValue === 'Среднее' || selectedValue == false)
            return <View><Text style={styles.textNewProfile}>Класс</Text><TextInput style={styles.inputNewProfile}></TextInput></View>
        else return <View><Text style={styles.textNewProfile}>Группа</Text><TextInput style={styles.inputNewProfile}></TextInput></View>
    }

    return(
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Заполнение профиля</Text>
            </View>
            <Text style={styles.back} onPress={() => navigation.navigate('SignUp')}>Назад</Text>
            <View style={styles.container}>
                <View style={styles.mainContent}>
                    <Text style={styles.textNewProfile}>Фамилия</Text>
                    <TextInput style={styles.inputNewProfile}></TextInput>
                    <Text style={styles.textNewProfile}>Имя</Text>
                    <TextInput style={styles.inputNewProfile}></TextInput>
                    <Text style={styles.textNewProfile}>Отчество</Text>
                    <TextInput style={styles.inputNewProfile}></TextInput>
                    <Text style={styles.textNewProfile}>Дата рождения</Text>
                    <MyDatePicker style={styles.date}></MyDatePicker>
                    <Text style={styles.textNewProfile}>Уровень образования</Text>
                    <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '105%', opacity: 0.7, marginLeft: 5 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                    <Picker.Item label="Начальное" value="Начальное" />
                    <Picker.Item label="Среднее" value="Среднее" />
                    <Picker.Item label="Высшее" value="Высшее" />
                    </Picker>
                    {ClassOr()}
                    <Text style={styles.textNewProfile}>Город</Text>
                    <TextInput style={styles.inputNewProfile}></TextInput>
                    <Text style={styles.textNewProfile}>Учебное заведение</Text>
                    <TextInput style={styles.inputNewProfile}></TextInput>
                    <TouchableOpacity  onPress={() => navigation.navigate('Enter')} style={styles.NewProfileButton}>
                        <Text style={styles.NewProfileButtonText}>Сохранить</Text>
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
        width: 350,
        paddingLeft: 10,
        paddingTop: 5,
        paddingRight: 25,
        paddingBottom: 25,
        borderRadius: 5,
        marginBottom: 25,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },

    textNewProfile: {
        fontSize: 16, 
        color: 'gray',
        paddingTop: 10,
        opacity: 0.5,
    },

    inputNewProfile: {
        height: 30,
        fontSize: 16,
        color: 'gray',
        paddingLeft: 10,
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

    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(1,1,1,0.7)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10
    },
    modalText: {
        fontSize: 18,
        margin: 5,
        marginHorizontal: 20
    }
})

export default NewProfileScreen