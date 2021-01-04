import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
//import TabNavigator from './TabNavigator'
import Notification from '../screens/NotificatonsScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginNavigator from './LoginNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import ResturatStackNavigator from './ResturantStackNavigator'

import Login from '../screens/Login'

const Drawer = createDrawerNavigator()

const MyDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Login" component={LoginNavigator} />
      <Drawer.Screen name="Resturant" component={ResturatStackNavigator} />
      {/* <Drawer.Screen name="Notifications" /> */}
    </Drawer.Navigator>
  )
}
export default MyDrawerNavigator
