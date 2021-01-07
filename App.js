import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
//import TabNavigator from './navigations/TabNavigator'
import MyDrawerNavigator from './navigations/MyDrawerNavigator'
import RootStackNavigator from './navigations/RootStackNavigator'
import Login from './screens/Login'
import AddFoodScreen from './screens/AddFoodScreen'
import Customersignup from './screens/CustomerSignup'
import Homescreen from './screens/HomeScreen'
import Orderdetail from './screens/Orderdetail'
import { UserProvider } from './Context/UserContext'
//import LoginNavigator from './navigations/LoginStackNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        {/* <TabNavigator /> */}
        {/* <RootStackNavigator/> */}
        <MyDrawerNavigator />
        {/* <LoginNavigator /> */}

        {/* <Login /> */}
        {/* <Homescreen /> */}
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
