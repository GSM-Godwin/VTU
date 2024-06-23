import React, { useRef } from 'react'
import { Text, StyleSheet, View, useWindowDimensions, ImageBackground, Animated } from 'react-native'


export default OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();

    return (
      <View style={[styles.container, { width }]}>
        <ImageBackground source={item.bg} style={[styles.bg, { width }]} >
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.bold}>{item.bold}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 20,
        marginTop: -100
    },
    title: {
        fontSize: 70,
        lineHeight: 70,
        fontWeight: '300',
        color: '#060B16',
        marginBottom: 10,
    },
    bold: {
        fontSize: 70,
        lineHeight: 70,
        fontWeight: '500',
        color: '#060B16',
        marginBottom: 15,
    },
    desc: {
        fontSize: 20,
        fontWeight: '200',
        color: '#060B16',
        marginBottom: 40,
    }
})
