import React from 'react'
//import TabNavigator from './TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useUser } from '../Context/UserContext'
import LoginStackNavigator from './LoginStackNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import ResturatStackNavigator from './ResturantStackNavigator'
import { DrawerContent } from '../components/DrawerContent'
import ProfileScreen from '../ResturantScreen/ProfileScreen'
import AsyncStorage from '@react-native-community/async-storage'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const ResturantDrawerNavigator = () => {
  const { setUser, setIsLoggedIn, user } = useUser()

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
            <DrawerItem
              label="ScheduleOrder"
              onPress={() => props.navigation.navigate('ScheduleOrder')}
            />
          </DrawerContentScrollView>
        )
      }}
    >
      <Drawer.Screen name="Resturant" component={ResturatStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />

      {/* <Drawer.Screen name="Notifications" /> */}
    </Drawer.Navigator>
  )
}
export default ResturantDrawerNavigator
