import React from 'react'
import {View, Text, Modal, StyleSheet, Image} from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

function ActivityModal({visible, onCancel}) {
    return (
        <Modal visible={visible} animationType='slide' transparent={true}>
            <View style={styles.container}>
                <View style={styles.background}>
                    <View style={styles.space}>
                        <Text style={styles.name}>Борьба с коррупцией</Text>
                        <TouchableHighlight style={styles.button}>
                            <Text style={styles.button} onPress={ () => onCancel()}><Image style={styles.exit} source={require('./public/exit.png')}></Image></Text>
                        </TouchableHighlight>
                    </View>
                    <Image style={styles.img} source={require('./public/img-1.webp')}></Image>
                    <View style={styles.space}>
                        <Text style={styles.location}>ул. М.Горького,79</Text>
                        <Text style={styles.value}>5 баллов</Text>
                    </View>
                    <View style={styles.space}>
                        <View style={styles.spaceText}>
                            <Text style={styles.grayText}>Дата</Text>
                            <Text style={styles.valueGrayText}>01/01/2020</Text>
                        </View>
                        <View style={styles.spaceText}>
                            <Text style={styles.grayText}>Время</Text>
                            <Text style={styles.valueGrayText}>15:00</Text>
                        </View>
                    </View>
                    <View style={styles.link}>
                        <Text style={styles.grayText}>Ссылка </Text>
                        <Text style={styles.valueGrayTextLink}>https://vsekonkursy.ru/</Text>
                    </View>
                    <View>
                    <Text style={styles.direction}>Направление</Text>
                    <Text style={styles.directionText}>Культурно-общественная деятельность</Text>
                    </View>
                    <View style={styles.space}>
                        <View>
                            <Text style={styles.grayText}>Тип мероприятия</Text>
                            <Text style={styles.typeText}>Бесплатное</Text>
                        </View>
                        <View>
                            <Text style={styles.grayText}>Масштаб</Text>
                            <Text style={styles.typeText}>Всероссийский</Text>
                        </View>
                    </View>
                    <View>
                    <Text style={styles.direction}>Краткое описание</Text>
                    <Text style={styles.smallText}>Выставка посвящена гражданско-правовым аспектам такого социального явления, как коррупционная деятельность</Text>
                    </View>
                    <View style={styles.goCenter}>
                        <TouchableOpacity style={styles.goView}>
                            <Text style={styles.goText}>Пойду</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(1,1,1,0.7)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 35
    },
    background: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '80%'
    },
    space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%'
    },
    spaceText: {
        flexDirection: 'row',
    },
    name: {
        margin: 10,
        marginLeft: 0,
        fontSize: 17,
        fontWeight: 'bold'
    },
    exit: {
        opacity: 0.2
    },
    img: {
        width: '90%',
        height: 150,
        marginLeft: '5%',
        marginVertical: 10
    },
    location: {
        fontSize: 10
    },
    value: {
        color: '#16BD1D',
        fontWeight: 'bold',
        marginBottom: 5
    },
    grayText: {
        opacity: 0.5,
        fontSize: 13,
    },
    valueGrayText: {
        marginBottom: 10,
        fontSize: 13,
        marginLeft: 10,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        paddingBottom: 2
    },
    valueGrayTextLink: {
        marginBottom: 10,
        fontSize: 13,
        marginLeft: 10,
        borderBottomWidth: 1,
        width: '79%',
        paddingHorizontal: 5,
        paddingBottom: 2
    },
    link: {
        flexDirection: 'row',
        marginHorizontal: '5%',
    },
    direction: {
        marginLeft: '5%',
        opacity: 0.5,
        fontSize: 13,
    },
    directionText: {
        marginBottom: 10,
        fontSize: 13,
        marginLeft: 10,
        borderBottomWidth: 1,
        marginHorizontal: '5%',
        marginLeft: '5%',
        paddingBottom: 2
    },
    typeText: {
        marginBottom: 10,
        fontSize: 13,
        borderBottomWidth: 1,
        paddingRight: 50,
        paddingBottom: 2
    },
    smallText: {
        marginBottom: 20,
        fontSize: 13,
        marginLeft: 10,
        marginHorizontal: '5%',
        marginLeft: '5%'
    },
    goCenter: {
        alignItems: 'center'
    },
    goView: {
        marginBottom: 15,
        backgroundColor: '#6F51ED',
        alignItems: 'center',
        width: 275,
        borderRadius: 5
    },
    goText: {
        margin: 5,
        color: '#fff'
    }
})

export default ActivityModal