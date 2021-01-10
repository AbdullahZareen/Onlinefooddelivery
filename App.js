import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler'

import MyDrawerNavigator from './navigations/MyDrawerNavigator'
import { CartProvider } from './Context/CartContext'
import { UserProvider } from './Context/UserContext'
import ResturantDrawerNavigator from './navigations/ResutrantDrawerNavigator'
//import LoginNavigator from './navigations/LoginStackNavigator'
export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <MyDrawerNavigator />
        {/* <ResturantDrawerNavigator /> */}
      </CartProvider>
    </UserProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
