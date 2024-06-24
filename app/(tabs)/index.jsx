import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground, Image, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import bell from "../../assets/icons/notification.png"
import user from "../../assets/images/user.png"
import card from "../../assets/images/Card.png"
import wallet from "../../assets/icons/card-wallet.png"
import eye from "../../assets/icons/eye.png"
import plus from "../../assets/icons/fund-wallet.png"
import cart from "../../assets/icons/cart.png"
import orders from "../../assets/icons/orders.png"
import send from "../../assets/icons/send.png"
import share from "../../assets/icons/share.png"
import wallets from "../../assets/icons/wallet.png"
import airtime from "../../assets/icons/airtime.png"
import betting from "../../assets/icons/betting.png"
import bulb from "../../assets/icons/bulb.png"
import education from "../../assets/icons/education.png"
import loans from "../../assets/icons/loans.png"
import media from "../../assets/icons/media.png"
import outlinesend from "../../assets/icons/outline-send.png"

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
        <StatusBar backgroundColor='white' />
        <View style={styles.header}>
          <Text style={styles.headerText}>NetBills</Text>
          <View style={styles.headerIcons}>
            <Image source={bell} style={styles.headerIcon} />
            <View style={styles.userIconContainer}>
              <Image source={user} style={styles.userIcon} />
            </View>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <ImageBackground source={card} style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.bal}>
                <View style={styles.row}>
                  <Image source={wallet}  />
                  <Text>Balance</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.balanceText}>0.000</Text>
                  <Pressable>
                    <Image source={eye} style={styles.eyeIcon} />
                  </Pressable>
                </View>
              </View>

              <View style={styles.rowBetween}>
                <Pressable style={styles.fundWalletButton}>
                  <Image source={plus} style={styles.plusIcon} />
                  <Text style={styles.fundWalletText}>Fund Wallet</Text>
                </Pressable>
                <View style={styles.accountTypeContainer}>
                  <Text style={styles.accountTypeLabel}>Account Type</Text>
                  <Text style={styles.accountType}>PREMIUM</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.serviceContainer}>
          <ServiceItem imageSource={send} text="Send Money" />
          <ServiceItem imageSource={wallets} text="Wallets" />
          <ServiceItem imageSource={orders} text="My Orders" />
          <ServiceItem imageSource={cart} text="Cart" />
        </View>

        <View style={styles.resellerContainer}>
          <View style={styles.rowBetween}>
            <Text style={styles.resellerText}>Become a reseller today</Text>
            <Pressable style={styles.shareButton}>
              <Image source={share} style={styles.shareIcon} />
              <Text style={styles.shareText}>Share</Text>
            </Pressable>
          </View>
          <Text style={styles.extraCashText}>Would you like to make extra cash?</Text>
        </View>

        <View style={styles.servicesGroup}>
          <View style={styles.flex}>
            <ServiceItem imageSource={outlinesend} text="Send" />
            <ServiceItem imageSource={airtime} text="Airtime 4 Cash" />
            <ServiceItem imageSource={bulb} text="Electricity" />
            <ServiceItem imageSource={media} text="Media" />
          </View>
          <View style={styles.flex}>
            <ServiceItem imageSource={betting} text="Betting" />
            <ServiceItem imageSource={media} text="Media & Cables" />
            <ServiceItem imageSource={education} text="Education" />
            <ServiceItem imageSource={loans} text="Loans" />
          </View>
        </View>

        {/* <TouchableOpacity onPress={clearOnboarding} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear Onboarding Cache</Text>
        </TouchableOpacity> */}
      </View>
    )
}

const ServiceItem = ({ imageSource, text }) => (
  <View style={styles.serviceItem}>
    <View style={styles.serviceIconContainer}>
      <Image source={imageSource} />
    </View>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FFF9E8',
        justifyContent: 'space-between'
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingBottom: 20,
      paddingTop: 60,
    },
    headerText: {
      fontSize: 34,
      fontWeight: 'bold',
    },
    headerIcons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      gap: 15,
    },
    headerIcon: {
      width: 32,
      height: 23,
    },
    userIconContainer: {
      width: 42,
      height: 42,
      borderRadius: 42,
      borderColor: '#FFC119',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    userIcon: {
      borderRadius: 40,
      width: 40,
      height: 40,
    },
    cardContainer: {
      height: 170,
      width: '100%',
      borderRadius: 20,
      overflow: 'hidden',
    },
    card: {
      flex: 1,
      width: '100%',
    },
    cardContent: {
      flex: 1,
      margin: 20,
      justifyContent: 'space-between',
    },
    bal: {
      gap: 10,
    },
    row: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    balanceText: {
      fontSize: 23,
    },
    eyeIcon: {
      width: 20,
      height: 20,
    },
    fundWalletButton: {
      flexDirection: 'row',
      gap: 5,
      backgroundColor: '#2E18E7',
      padding: 10,
      borderRadius: 5,
    },
    plusIcon: {
      width: 15,
      height: 15,
    },
    fundWalletText: {
      color: '#FFF9E8',
      fontSize: 14,
    },
    accountTypeContainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    accountTypeLabel: {
      fontSize: 12,
    },
    accountType: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#100851',
    },
    serviceContainer: {
      flexDirection: 'row',
      paddingVertical: 20,
      justifyContent: 'space-between',
      width: '100%',
    },
    serviceItem: {
      alignItems: 'center',
    },
    serviceIconContainer: {
      width: 40,
      height: 40,
      backgroundColor: '#100851',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    resellerContainer: {
      backgroundColor: '#100851',
      width: '100%',
      padding: 20,
      borderWidth: 2,
      borderColor: '#FFC119',
      borderRadius: 20,
    },
    resellerText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    shareButton: {
      backgroundColor: '#FFC119',
      flexDirection: 'row',
      padding: 10,
      gap: 5,
      borderRadius: 5,
    },
    shareIcon: {
      width: 16,
      height: 16,
    },
    shareText: {
      fontSize: 13,
    },
    extraCashText: {
      color: '#FFF9E8',
      paddingVertical: 10,
    },
    servicesGroup: {
      backgroundColor: '#FFF6DD',
      width: '100%',
      padding: 10,
      borderWidth: 2,
      borderColor: '#FFC119',
      borderRadius: 20,
      marginVertical: 20,
      justifyContent: 'space-between',
      gap: 30
    },
    flex: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
     justifyContent: 'space-between' 
    },
    clearButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 10,
    },
    clearButtonText: {
      color: 'white',
      fontWeight: '800',
    },
})

