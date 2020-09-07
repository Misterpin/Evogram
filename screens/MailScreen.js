import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import BallRow from '../BallRow'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/EvilIcons';


const MailScreen = () => {
    const DATA = [
        {
            id: '1',
            title: 'Уведомление от сервиса',
            info: 'Вы только что зарегистрировались ...',
            img: 'bell',
            date: '11/08'
        },
        {
            id: '2',
            title: 'Уведомление от сервиса',
            info: 'Вы только что зарегистрировались...',
            img: 'bell',
            date: '11/08'
        }, 
        {
            id: '3',
            title: 'Уведомление от сервиса',
            info: 'Вы только что зарегистрировались...',
            img: 'bell',
            date: '11/08'
        }, 
        {
            id: '4',
            title: 'Информация о призе',
            info: 'Ваш приз ожидает вас...',
            img: 'trophy',
            date: '11/08'
        },
        {
            id: '5',
            title: 'Информация о призе',
            info: 'Ваш приз ожидает вас...',
            img: 'trophy',
            date: '11/08'
        },
        {
            id: '6',
            title: 'Информация о призе',
            info: 'Ваш приз ожидает вас...',
            img: 'trophy',
            date: '11/08'
        },
        {
            id: '7',
            title: 'Уведомление от сервиса',
            info: 'Вы только что зарегистрировались...',
            img: 'bell',
            date: '11/08'
        }, 
        {
            id: '8',
            title: 'Уведомление от сервиса',
            info: 'Вы только что зарегистрировались...',
            img: 'bell',
            date: '11/08'
        }, 
    ]

    const Item = ({ title, info, img, date }) => (
        <View style={styles.notification}>
            <View style={styles.widthContainer}> 
                <View style={styles.img}>
                {img === 'bell' ? <Icon style={styles.bellImg} name='bell' color={'#373B54'} size={35}></Icon> : <Icon style={styles.trophyImg} name='trophy' color={'#373B54'} size={35}></Icon>}
            </View>
            <View>
                <View style={styles.width}>
                <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.width}>
                <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.width}>
                <Text style={styles.info}>{info}</Text>
                </View>
            </View>
            </View>
        </View>
    )

    const renderItem = ({ item }) => (
        <Item title={item.title} info={item.info} img={item.img} date={item.date}/>
    )

    return(
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Почта</Text>
                <BallRow></BallRow>
            </View>
            <FlatList
            contentContainerStyle={{alignItems: 'center'}}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
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

    notification: {
        width: '90%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 5,
        paddingBottom: 10
    },

    widthContainer: {
        width: '100%',
        flexDirection: 'row',

    },

    width: {
        width: '100%'
    },

    img: {
        margin: 10,
        marginTop: 25,
        backgroundColor: '#eee',
        borderRadius: 90
    },

    bellImg: {
        backgroundColor: '#5EDDF9',
        padding: 4,
        borderRadius: 30,
        opacity: 0.5
    },

    trophyImg: {
        backgroundColor: '#16BD1D',
        padding: 4,
        borderRadius: 30,
        opacity: 0.5
    },

    info: {
        fontSize: 12,
        opacity: 0.5,
    },

    date: {
        fontSize: 12,
        paddingVertical: 5,
        opacity: 0.5
    },

    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 10
    }
})

export default MailScreen