import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import MyDrawerNavigator from './navigations/MyDrawerNavigator'
import RootStackNavigator from './navigations/RootStackNavigator'
import { CartProvider } from './Context/CartContext'
import { UserProvider } from './Context/UserContext'

//import LoginNavigator from './navigations/LoginStackNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <CartProvider>
          <MyDrawerNavigator />
        </CartProvider>
      </UserProvider>
    </NavigationContainer>
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
