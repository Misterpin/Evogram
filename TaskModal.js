import React, {useState} from 'react'
import {View, Text, Modal, ScrollView, Switch, FlatList, StyleSheet} from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import BallRow from './BallRow'

function TaskModal({visible, onCancel}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const DATA = [
        {
            id: '0',
            title: 'В каком году родился А. С. Пушкин?',
            values: [1699,1799,1899]
        },
        {
            id: '1',
            title: 'В каком году родился А. С. Пушкин?',
            values: [1699,1799,1899]
        }, 
        {
            id: '2',
            title: 'В каком году родился А. С. Пушкин?',
            values: [1699,1799,1899]
        }, 
        {
            id: '3',
            title: 'В каком году родился А. С. Пушкин?',
            values: [1699,1799,1899]
        }]
    let i = 0

    const Item = ({ title, values }) => (
        <View style={styles.question}>
            <Text style={styles.numberQuestion}>Вопрос №{++i}</Text>
            <Text style={styles.titleQuestion}>{title}</Text>
            <View style={styles.row}>
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <Text>{values[0]}</Text>
            </View>
            <View style={styles.row}>
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <Text>{values[1]}</Text>
            </View>
            <View style={styles.row}>
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                <Text>{values[2]}</Text>
            </View>
        </View>
    )

    const renderItem = ({ item }) => (
        <Item title={item.title} values={item.values}/>
    )

    return(
        <Modal visible={visible}>
            <ScrollView style={styles.modal}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>Активность</Text>
                    <BallRow></BallRow>
                </View>
                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
                <View style={ styles.conteinerButton}>
                    <TouchableHighlight style={styles.button}  onPress={ () => onCancel()}>
                        <Text  onPress={ () => onCancel()} style={styles.textButton}>Отправить</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#ddd'
    },
    container: {
        justifyContent: 'center',
        marginBottom: 20,
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
    row: {
        flexDirection: 'row',
        margin: 3
    },
    question: {
        marginHorizontal: '5%',
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 20
    },
    numberQuestion: {
        color: '#6F51ED',
        margin: 3
    },
    titleQuestion: {
        fontSize: 14,
        margin: 3
    },
    conteinerButton: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#6F51ED',
        width: 340,
        borderRadius: 5,
        marginBottom: 25,
        padding: 5
    },
    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    }
})

export default TaskModal