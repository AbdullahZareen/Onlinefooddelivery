import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'
//import MyDrawerNavigator from './MyDrawerNavigator'
import Notification from '../screens/NotificatonsScreen'

const Tabs = createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackNavigator} />
      <Tabs.Screen name="Profile" component={ProfileStackNavigator} />
      <Tabs.Screen name="Notifications" component={Notification} />
    </Tabs.Navigator>
  )
}

export default TabNavigator
