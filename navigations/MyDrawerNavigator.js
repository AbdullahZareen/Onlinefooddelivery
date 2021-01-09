import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
//import TabNavigator from './TabNavigator'
import Notification from '../screens/NotificatonsScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginStackNavigator from './LoginStackNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import ResturatStackNavigator from './ResturantStackNavigator'
import { DrawerContent } from '../components/DrawerContent'
const Drawer = createDrawerNavigator()

const MyDrawerNavigator = () => {
  return (
    // drawerContent={(props) => <DrawerContent {...props} />}
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="Login" component={LoginStackNavigator} />
      <Drawer.Screen name="Resturant" component={ResturatStackNavigator} />

      {/* <Drawer.Screen name="Notifications" /> */}
    </Drawer.Navigator>
  )
}
export default MyDrawerNavigator
