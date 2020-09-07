import React, {useState} from 'react'
import {View, Text, Image, FlatList, ScrollView, TouchableHighlight, YellowBox, StyleSheet} from 'react-native'
import BallRow from '../BallRow'
import ActivityModal from '../ActivityModal'
import AllActivityModal from '../AllActivityModal'

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested'])

const AllActivityScreen = () => {
    const [mainModalVisible, setMainModalVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const DATA = [
        {
            id: '0',
            title: '1Борьба с коррупцией',
            cost: 'Бесплатное',
            date: '01/01/2020',
            time: '13:00',
            info: 'Выставка посвящена гражданско-правовым аспектам такого социального явления, как коррупционная деятельность',
            type: 'Культурно-общественная деятельность',
            scale: 'Районный',
            adres: 'ул.Мечникова,84 | 20 сентября 13:00',
            values: '15 баллов',
            img: '../public/img-1.webp'
        },
        {
            id: '1',
            title: '2Борьба с коррупцией',
            cost: 'Бесплатное',
            date: '01/01/2020',
            time: '13:00',
            info: 'Выставка посвящена гражданско-правовым аспектам такого социального явления, как коррупционная деятельность',
            type: 'Культурно-общественная деятельность',
            scale: 'Районный',
            adres: 'ул.Мечникова,84 | 20 сентября 13:00',
            values: '15 баллов',
            img: '../public/img-1.webp'
        }, 
        {
            id: '2',
            title: '3Борьба с коррупцией',
            cost: 'Бесплатное',
            date: '01/01/2020',
            time: '13:00',
            info: 'Выставка посвящена гражданско-правовым аспектам такого социального явления, как коррупционная деятельность',
            type: 'Культурно-общественная деятельность',
            scale: 'Районный',
            adres: 'ул.Мечникова,84 | 20 сентября 13:00',
            values: '15 баллов',
            img: '../public/img-1.webp'
        }, 
        {
            id: '3',
            title: '4Борьба с коррупцией',
            cost: 'Бесплатное',
            date: '01/01/2020',
            time: '13:00',
            info: 'Выставка посвящена гражданско-правовым аспектам такого социального явления, как коррупционная деятельность',
            type: 'Культурно-общественная деятельность',
            scale: 'Районный',
            adres: 'ул.Мечникова,84 | 20 сентября 13:00',
            values: '15 баллов',
            img: '../public/img-1.webp'
        }]
    
    const Item = ({ title, type, scale, adres, values }) => (
        <View style={styles.listContainer}>
            <TouchableHighlight underlayColor='#fff' onPress={ () => setModalVisible(true)}>
                <View style={styles.mainlistActivityConteiner}>
                    <Image source={require('../public/img-1.webp')} style={styles.mainlistImg}></Image>
                    <View style={styles.secondlistMainContainer}>
                        <Text style={styles.mainlistActivityText}>{title}</Text>
                        <Text style={styles.secondlistActivityText}>{type}</Text>
                        <Text style={styles.secondlistActivityText}>{scale}</Text>
                        <View style={styles.mainlistBottomContainer}>
                            <Text style={styles.listpurpur}>{adres}</Text>
                            <Text style={styles.listgreen}>{values}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )

    const renderItem = ({ item }) => (
        <Item id={item.id} title={item.title} type={item.type} scale={item.scale} adres={item.adres} values={item.values}/>
    )

    return(
        <ScrollView>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Афиша мероприятий</Text>
                <BallRow></BallRow>
            </View>
            <View style={styles.container}>
            <AllActivityModal visible={modalVisible} onCancel={() => setModalVisible(false)}></AllActivityModal>
                <ActivityModal visible={mainModalVisible} onCancel={() => setMainModalVisible(false)}></ActivityModal>
                <Text style={styles.containerText}>Главное событие</Text>
                <TouchableHighlight underlayColor='#fff' onPress={ () => setMainModalVisible(true)}>
                    <View style={styles.mainActivityConteiner}>
                        <Image source={require('../public/img-1.webp')} style={styles.mainImg}></Image>
                        <View style={styles.secondMainContainer}>
                            <Text style={styles.mainActivityText}>Борьба с коррупцией</Text>
                            <Text style={styles.secondActivityText}>Культурно-общественная деятельность</Text>
                            <Text style={styles.secondActivityText}>Районный</Text>
                            <View style={styles.mainBottomContainer}>
                                <Text style={styles.purpur}>ул.Мечникова,84 | 20 сентября 13:00</Text>
                                <Text style={styles.green}>5 баллов</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
            <Text style={styles.containerText}>Рекомендуемые события</Text>
            <FlatList
            contentContainerStyle={{marginLeft: 30, marginRight: 10, marginTop: 10}}
            horizontal={false}
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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

    containerText: {
        fontWeight: 'bold',
        paddingLeft: 40,
        opacity: 0.7,
        marginHorizontal: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#6F51ED'
    },

    mainActivityConteiner: {
        alignItems: 'center',
        marginTop: 10,
    },

    mainImg: {
        width: '85%',
        height: 150,
        borderRadius: 5
    },

    secondMainContainer: {
        width: '85%',
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

    mainBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    purpur: {
        fontSize: 12,
        color: '#6F51ED',
        marginLeft: 10,
        marginBottom: 10
    },

    green: {
        fontSize: 12,
        color: '#16BD1D',
        marginBottom: 10,
        marginRight: 10
    },

    listContainer: {
        width: '45%',
        marginRight: 20
    },

    mainlistActivityConteiner: {
        marginBottom: 20
    },

    secondlistMainContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    mainlistImg: {
        width: '100%',
        height: 100,
        borderRadius: 5,
    },

    mainlistActivityText: {
        fontWeight: 'bold',
        fontSize: 13,
        margin: 2
    },

    secondlistActivityText: {
        marginLeft: 5,
        opacity: 0.6,
        fontSize: 11,
        marginBottom: 1
    },

    listpurpur: {
        fontSize: 8,
        color: '#6F51ED',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
    },

    listgreen: {
        fontSize: 11,
        color: '#16BD1D',
        marginBottom: 5,
        marginRight: 5,
        marginLeft: 100
    }
})

export default AllActivityScreen