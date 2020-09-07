import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, TouchableHighlight, FlatList, Image} from 'react-native'
import BallRow from '../BallRow'
import PrizeModal from '../PrizeModal'
import AllPrizeModal from '../AllPrizeModal'
import TakePrizeModal from '../TakePrizeModal'

const AllPrizeScreen = () => {
    const [mainModalVisible, setMainModalVisible] = useState(false)
    const [takeModalVisible, setTakeModalVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
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
        },
        {
            id: '5',
            title: '5Название приза',
            info: 'Выставка посвящена этому и этому и этому...',
            value: '1000 баллов'
        }
    ]

    const Item = ({ title, info, value }) => (
            <View style={styles.listmainConteiner}>
                <TouchableHighlight underlayColor='#fff' onPress={ () => setModalVisible(true)}>
                    <View>
                        <Image style={styles.listmainImg} resizeMode={'contain'} backgroundColor={'#C4C4C4'} source={require('../public/prize.png')}></Image>
                        <View style={styles.listmainTextContainer}>
                            <Text style={styles.listmainTitle}>{title}</Text>
                            <Text style={styles.mainInfo}>Краткое описание:</Text>
                            <Text style={styles.secondInfo}>{info}</Text>
                            <View style={styles.listRow}>
                                <Text style={styles.listmainValue}>{value}</Text>
                                <TouchableOpacity style={styles.mainButton}  underlayColor='#fff' onPress={ () => setTakeModalVisible(true)}>
                                    <Text style={styles.listmainTextButton}>Получить</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
    )

    const renderItem = ({ item }) => (
        <Item title={item.title} info={item.info} value={item.value}/>
    )

    return(
        <ScrollView>
            <PrizeModal visible={mainModalVisible} onCancel={() => setMainModalVisible(false)}></PrizeModal>
            <AllPrizeModal visible={modalVisible} onCancel={() => setModalVisible(false)}></AllPrizeModal>
            <TakePrizeModal visible={takeModalVisible} onCancel={() => setTakeModalVisible(false)}></TakePrizeModal>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Витрина призов</Text>
                <BallRow></BallRow>
            </View>
            <Text style={styles.containerText}>Главный приз</Text>
            <TouchableHighlight underlayColor='#fff' onPress={ () => setMainModalVisible(true)}>
            <View style={styles.container}>
                <View style={styles.mainConteiner}>
                    <Image style={styles.mainImg} resizeMode={'contain'} backgroundColor={'#C4C4C4'} source={require('../public/prize.png')}></Image>
                    <View style={styles.mainTextContainer}>
                        <View>
                            <Text style={styles.mainTitle}>Название приза</Text>
                            <Text style={styles.mainInfo}>Краткое описание:</Text>
                            <Text style={styles.secondInfo}>выставка посвящена этому и этому и этому...</Text>
                        </View>
                        <View>
                            <Text style={styles.mainValue}>1000 баллов</Text>
                            <TouchableOpacity style={styles.mainButton} underlayColor='#fff' onPress={ () => setTakeModalVisible(true)}>
                                <Text style={styles.mainTextButton}>Получить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            </TouchableHighlight>
            <Text style={styles.containerText}>Все призы</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    flatList: {
        marginLeft: 40
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

    containerText: {
        fontWeight: 'bold',
        paddingLeft: 40,
        opacity: 0.7,
        marginHorizontal: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#6F51ED',
        marginBottom: 20
    },

    mainConteiner: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 5
    },

    listmainConteiner: {
        width: '43%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 20
    },

    mainImg: {
        width: '45%',
        height: 200,
        borderRadius: 5,
        marginRight: 20
    },

    listmainImg: {
        width: '100%',
        height: 100,
        borderRadius: 5
    },

    mainTextContainer: {
        width: '48%',
        justifyContent: 'space-between'
    },

    listmainTextContainer: {
        width: '100%'
    },

    mainTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10
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

    mainInfo: {
        width: '100%',
        fontSize: 10,
        opacity: 0.5
    },

    secondInfo: {
        fontSize: 10
    },

    mainValue: {
        color: '#6F51ED',
        marginBottom: 10,
        fontWeight: 'bold'
    },

    mainButton: {
        backgroundColor: '#16BD1D',
        borderRadius: 5,
        alignItems: 'center'
    },

    mainTextButton: {
        color: '#fff',
        marginBottom: 5,
        marginTop: 3,
        fontWeight: 'bold'
    },

    listmainTextButton: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        margin: 3,
        marginHorizontal: 10
    },

    listRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3
    }
})

export default AllPrizeScreen