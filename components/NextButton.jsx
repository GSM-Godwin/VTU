import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default NextButton = ({ scrollTo }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={scrollTo} style={styles.btn}>
            <Text style={styles.text}>Start Now</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: -70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: "#2E18E7",
        width: '75%',
        paddingVertical:20,
        alignItems: 'center',
        borderRadius: 50
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
    }
})
