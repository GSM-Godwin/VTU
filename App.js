import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Onboarding from './components/Onboarding';
import HomeScreen from './app/(tabs)/index'

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size='large' />
    </View>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');

      if (value !== null) {
        setViewedOnboarding(true)
      }
    } catch (err) {
        console.log('Error @checkOnboarding: ', err);
    } finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    checkOnboarding();
  }, [])

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : viewedOnboarding ? <HomeScreen /> : <Onboarding />}
      <StatusBar style="dark" backgroundColor='white' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
