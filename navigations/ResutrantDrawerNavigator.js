import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
//import TabNavigator from './TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useUser } from '../Context/UserContext'
import LoginStackNavigator from './LoginStackNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import ResturatStackNavigator from './ResturantStackNavigator'
import { DrawerContent } from '../components/DrawerContent'
const Drawer = createDrawerNavigator()

const ResturantDrawerNavigator = () => {
  const { isLoggedIn, tokken } = useUser()
  console.log(isLoggedIn)
  return (
    // drawerContent={(props) => <DrawerContent {...props} />}
    <NavigationContainer>
      {!isLoggedIn ? (
        <LoginStackNavigator />
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen name="Resturant" component={ResturatStackNavigator} />
          {/* <Drawer.Screen name="Notifications" /> */}
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  )
}
export default ResturantDrawerNavigator
