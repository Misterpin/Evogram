import React, {useState} from 'react'
import {View, Text, ScrollView, FlatList, StyleSheet, TouchableHighlight} from 'react-native'
import BallRow from '../BallRow'
import TaskModal from '../TaskModal'

const TasksScreen = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const DATA = [
        {
            id: '1',
            title: 'Решение уравнений и задач',
            info: 'Урок об этом и этом и этом...',
            task: '25',
            value: '10 баллов'
        },
        {
            id: '2',
            title: 'Решение уравнений и задач',
            info: 'Урок об этом и этом и этом...',
            task: '25',
            value: '10 баллов'
        }, 
        {
            id: '3',
            title: 'Решение уравнений и задач',
            info: 'Урок об этом и этом и этом...',
            task: '25',
            value: '50 баллов'
        }, 
        {
            id: '4',
            title: 'Решение уравнений и задач',
            info: 'Урок об этом и этом и этом...',
            task: '25',
            value: '50 баллов'
        },
        {
            id: '5',
            title: 'Решение уравнений и задач',
            info: 'Урок об этом и этом и этом...',
            task: '25',
            value: '10 баллов'
        }, 
        {
            id: '6',
            title: 'Решение уравнений и задач',
            info: 'Урок об этом и этом и этом...',
            task: '25',
            value: '10 баллов'
        }, 
        {
            id: '7',
            title: 'Решение уравнений и задач',
            info: 'Урок об этом и этом и этом...',
            task: '25',
            value: '10 баллов'
        }, 
        {
            id: '8',
            title: 'Решение уравнений и задач',
            info: 'Урок об этом и этом и этом...',
            task: '25',
            value: '10 баллов'
        }
    ]

    const Item = ({ title, info, value, task }) => (
            <View style={styles.listmainConteiner}>
                <TouchableHighlight underlayColor='#fff' onPress={ () => setModalVisible(true)} >
                    <View style={styles.listmainTextContainer}>
                        <View style={styles.pyrpurMainText}>
                            <Text style={styles.listmainTitle}>{title}</Text>
                        </View>
                        <Text style={styles.mainInfo}>Краткое описание:</Text>
                        <Text style={styles.secondInfo}>{info}</Text>
                        <Text style={styles.mainInfo}>Количество вопросов: {task}</Text>
                        <View style={styles.listRow}>
                            <Text style={styles.listmainValue}>{value}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
    )

    const renderItem = ({ item }) => (
        <Item title={item.title} info={item.info} value={item.value} task={item.task}/>
    )

    return(
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Активность</Text>
                <BallRow></BallRow>
            </View>
            <TaskModal visible={modalVisible} onCancel={() => setModalVisible(false)}></TaskModal>
            <FlatList
            contentContainerStyle={styles.flatList}
            numColumns={2} 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
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

    pyrpurMainText: {
        backgroundColor: '#6F51ED',
        marginLeft: 0,
        padding: 0,
    },

    mainInfo: {
        opacity: 0.5,
        fontSize: 11,
        marginTop: 7,
        marginLeft: 5
    },

    flatList: {
        marginLeft: 40
    },

    listmainConteiner: {
        width: '43%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6F51ED',
        borderRadius: 5,
        marginRight: 20,
        marginBottom: 20,
    },

    listmainImg: {
        width: '100%',
        height: 100,
        borderRadius: 5
    },

    listmainValue: {
        fontSize: 10,
        margin: 5,
        marginLeft: 0,
        color: '#6F51ED',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#6F51ED'
    },

    listmainTitle: {
        fontSize: 13,
        marginVertical: 3,
        color: '#fff',
        textAlign: 'center'
    },  

    secondInfo: {
        fontSize: 10,
        marginLeft: 5
    },

    listRow: {
        marginTop: 15,
        marginRight: 10,
        alignItems: 'flex-end'
    },
})

export default TasksScreen