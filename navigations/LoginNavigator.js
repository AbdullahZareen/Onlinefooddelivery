import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen'
import UserScreen from '../screens/UserScreen'
import UsersSignup from '../screens/UsersSignup'
import cussignup from '../screens/CustomerSignup'
import Login from '../screens/Login'
import resSignup from '../screens/ResturantSignup'
import AddFoodScreen from '../screens/AddFoodScreen'
const Stack = createStackNavigator()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Usersignup" component={UsersSignup} />

      <Stack.Screen
        name="Signup"
        component={cussignup}
        options={{
          headerTitle: 'Customer Signup',
        }}
      />
      <Stack.Screen
        name="addfooditem"
        component={AddFoodScreen}
        options={{
          headerTitle: 'Add Food Item',
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
