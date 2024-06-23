import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default HomeScreen = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log('Error @clearOnboarding: ', err);
    }
  }
    return (
      <View style={styles.container}>
        <Text> Home Screen </Text>
        <TouchableOpacity onPress={clearOnboarding} style={{backgroundColor: 'red', padding: 10, borderRadius: 10}}>
          <Text style={{color: 'white', fontWeight: '800'}}>Clear Onboarding Cache</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
