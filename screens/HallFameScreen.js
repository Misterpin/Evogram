import React from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import BallRow from '../BallRow'

const HallFameScreen = () => {
    const DATA = [
        {
            id: '1',
            title: '1Название приза',
            info: 'Выставка посвящена этому и этому и этому...',
            value: '1000 баллов'
        },
        {
            id: '2',
            title: '2Название приза',
            info: 'Выставка посвящена этому и этому и этому...',
            value: '300 баллов'
        }, 
        {
            id: '3',
            title: '3Название приза',
            info: 'Выставка посвящена этому и этому и этому...',
            value: '100 баллов'
        }, 
        {
            id: '4',
            title: '4Название приза',
            info: 'Выставка посвящена этому и этому и этому...',
            value: '100 баллов'
        }
    ]

    const Item = ({ title, info, value }) => (
            <View style={styles.listmainConteiner}>
                <Image style={styles.listmainImg} resizeMode={'contain'} backgroundColor={'#C4C4C4'} source={require('../public/prize.png')}></Image>
                <View style={styles.listmainTextContainer}>
                    <Text style={styles.listmainTitle}>{title}</Text>
                    <Text style={styles.mainInfo}>Краткое описание:</Text>
                    <Text style={styles.secondInfo}>{info}</Text>
                    <View style={styles.listRow}>
                        <Text style={styles.listmainValue}>{value}</Text>
                    </View>
                </View>
            </View>
    )

    const renderItem = ({ item }) => (
        <Item title={item.title} info={item.info} value={item.value}/>
    )

    return(
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Зал славы</Text>
                <BallRow></BallRow>
            </View>
            <Text style={styles.containerText}>Заработанные призы</Text>
            <FlatList
            contentContainerStyle={styles.flatList}
            numColumns={2} 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>
            <Text style={styles.containerText}>Последнее мероприятие</Text>
            <View style={styles.container}>
                <View style={styles.mainActivityConteiner}>
                    <Image source={require('../public/img-1.webp')} style={styles.img}></Image>
                    <View style={styles.secondMainContainer}>
                        <Text style={styles.mainActivityText}>Борьба с коррупцией</Text>
                        <Text style={styles.secondActivityText}>Культурно-общественная деятельность</Text>
                        <Text style={styles.secondActivityText}>Районный</Text>
                        <View style={styles.mainBottomContainer}>
                            <Text style={styles.purpur}>20 сентября 13:00</Text>
                            <Text style={styles.green}>5 баллов</Text>
                        </View>
                    </View>
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

    flatList: {
        marginLeft: 40
    },

    headerText: {
        color: '#fff',
        fontSize: 25,
        paddingLeft: 20,
        fontWeight: 'bold'
    },

    listmainConteiner: {
        width: '43%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 20
    },

    listmainImg: {
        width: '100%',
        height: 100,
        borderRadius: 5
    },

    listmainTextContainer: {
        width: '100%'
    },

    listmainValue: {
        fontSize: 10,
        margin: 3,
        marginLeft: 0,
        color: '#6F51ED',
        fontWeight: 'bold'
    },

    listmainTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 3
    },  

    secondInfo: {
        fontSize: 10
    },

    listRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3
    },

    mainInfo: {
        width: '100%',
        fontSize: 10,
        opacity: 0.5
    },

    containerText: {
        fontWeight: 'bold',
        paddingLeft: 40,
        opacity: 0.7,
        marginHorizontal: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#6F51ED',
        marginBottom: 20
    },

    mainActivityConteiner: {
        width: '80%',
        alignItems: 'center',
        marginTop: 10,
    },

    img: {
        width: '100%',
        height: 150,
        borderRadius: 5
    },

    secondMainContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },

    mainActivityText: {
        fontWeight: 'bold',
        marginLeft: 10,
        margin: 5
    },

    secondActivityText: {
        marginLeft: 10,
        opacity: 0.6,
        fontSize: 12,
        marginBottom: 3
    },

    purpur: {
        fontSize: 11,
        color: '#6F51ED',
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    },

    green: {
        fontSize: 12,
        color: '#16BD1D',
        marginBottom: 10,
        marginRight: 10,
        fontWeight: 'bold'
    },

    mainBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default HallFameScreen