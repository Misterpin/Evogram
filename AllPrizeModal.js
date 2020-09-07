import React from 'react'
import {View, Text, Modal, StyleSheet, Image} from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

function AllPrizeModal({visible, onCancel}) {
    return (
        <Modal visible={visible} animationType='slide' transparent={true}>
            <View style={styles.container}>
                <View style={styles.background}>
                    <View style={styles.space}>
                        <Text style={styles.name}>Название приза</Text>
                        <TouchableHighlight>
                            <Text style={styles.iconExit} onPress={ () => onCancel()}><Image style={styles.exit} source={require('./public/exit.png')}></Image></Text>
                        </TouchableHighlight>
                    </View>
                    <Image style={styles.img} resizeMode='contain' backgroundColor={'#C4C4C4'} source={require('./public/prize.png')}></Image>
                    <View style={styles.end}>
                        <Text style={styles.value}>5 баллов</Text>
                    </View>
                    <View style={styles.link}>
                        <Text style={styles.grayText}>Ссылка </Text>
                        <Text style={styles.valueGrayTextLink}>https://vsekonkursy.ru/</Text>
                    </View>
                    <View>
                    <Text style={styles.direction}>Краткое описание</Text>
                    <Text style={styles.smallText}>Выставка посвящена гражданско-правовым аспектам такого социального явления, как коррупционная деятельность</Text>
                    </View>
                    <View style={styles.centerButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Перейти на сайт рекламодателя</Text>
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
    iconExit: {
        height: 35
    },
    end: {
        alignItems: 'flex-end',
        marginRight: '5%'
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
        height: 200,
        marginLeft: '5%',
        marginVertical: 10
    },
    location: {
        fontSize: 10
    },
    value: {
        color: '#16BD1D',
        fontWeight: 'bold',
        marginBottom: 5,
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
    centerButton: {
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#6F51ED',
        width: '100%',
        marginBottom: 25
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        margin: 5,
        marginHorizontal: '5.5%'
    }
})

export default AllPrizeModal