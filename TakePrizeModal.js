import React from 'react'
import {View, Text, Modal, StyleSheet, TextInput, Image} from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

function TakePrizeModal({visible, onCancel}) {
    return (
        <Modal visible={visible} animationType='slide' transparent={true}>
            <View style={styles.container} onPress={() => onCancel()}>
                <View style={styles.background}>
                    <View style={styles.space}>
                        <Text style={styles.name}>Инструкция о получению приза</Text>
                        <TouchableHighlight onPress={ () => Alert.alert("Закрытие окна") }>
                            <Text style={styles.iconExit} onPress={ () => Alert.alert("Закрытие окна") }><Image style={styles.exit} source={require('./public/exit.png')}></Image></Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                    <Text style={styles.titleText}>Название приза</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.titleText}>Условия получения</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.titleText}>Способ передачи приза</Text>
                    <Text style={styles.text}></Text>
                    </View>
                    <View style={styles.promoRow}>
                        <View>
                            <Text style={styles.promoText}>Кодовое слово</Text>
                            <TextInput style={styles.textWidth}></TextInput>
                        </View>
                        <Text style={styles.promoText}>или</Text>
                        <View>
                            <Text style={styles.promoText}>Промокод</Text>
                            <TextInput style={styles.textWidth}></TextInput>
                        </View>
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.promoText}>Будет списано: <Text style={styles.green}>50 баллов</Text></Text>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Получить</Text>
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
    name: {
        margin: 10,
        marginBottom: 25,
        marginLeft: 0,
        fontSize: 16,
        fontWeight: 'bold'
    },
    exit: {
        opacity: 0.2
    },
    titleText: {
        marginLeft: '5%',
        marginBottom: 5,
        opacity: 0.5,
        fontSize: 13,
    },
    promoText: {
        marginBottom: 5,
        opacity: 0.5,
        fontSize: 13,
    },
    text: {
        borderBottomWidth: 1,
        opacity: 0.5,
        marginHorizontal: '5%',
        marginBottom: 10
    },
    promoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%'
    },
    textWidth: {
        borderWidth: 1,
        opacity: 0.5,
        marginBottom: 25,
        width: 120,
        height: 25
    },
    value: {
        marginHorizontal: '5%',
        marginBottom: 20
    },
    green: {
        color: '#16BD1D',
        fontWeight: 'bold'
    },
    buttonView: {
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        backgroundColor: '#16BD1D',
        width: 275,
        borderRadius: 5
    },
    textButton: {
        color: '#fff',
        margin: 5
    }
})

export default TakePrizeModal