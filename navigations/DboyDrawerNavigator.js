import React from 'react'
import { ActivityIndicator } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
//import TabNavigator from './TabNavigator'
import { useUser } from '../Context/UserContext'
import DboyStackNavigator from '../navigations/DboyStackNavigator'
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

export default function MyDrawerNavigator() {
  const { setUser, setIsLoggedIn } = useUser()

  const logoutAction = async () => {
    await AsyncStorage.removeItem('user')
    setUser(null)
    setIsLoggedIn(false)
  }

  return (
    // drawerContent={(props) => <DrawerContent {...props} />}
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={logoutAction} />
          </DrawerContentScrollView>
        )
      }}
    >
      <Drawer.Screen name="Dhome" component={DboyStackNavigator} />
    </Drawer.Navigator>
  )
}
