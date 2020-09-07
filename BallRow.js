import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

function BallRow() {
    return(
        <View style={styles.ballContainer}>
            <Image source={require('./public/activity.png')} style={styles.imgStyle}></Image>
            <Text style={styles.textImg}>365</Text>
            <Image source={require('./public/sport.png')} style={styles.imgStyle}></Image>
            <Text style={styles.textImg}>65</Text>
            <Image source={require('./public/intelligence.png')} style={styles.imgStyle}></Image>
            <Text style={styles.textImg}>88</Text>
            <Image source={require('./public/culture.png')} style={styles.imgStyle}></Image>
            <Text style={styles.textImg}>123</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ballContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10
    },

    imgStyle: {
        width: 25,
        height: 20,
        paddingLeft: 25,
        resizeMode: 'contain'
    },

    textImg: {
        color: '#fff',
        marginLeft: 5,
        marginRight: 25,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default BallRow