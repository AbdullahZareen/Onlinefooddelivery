import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import UsersSignup from '../screens/UsersSignup'
import cussignup from '../screens/CustomerSignup'
import Login from '../screens/Login'
import AddFoodScreen from '../screens/AddFoodScreen'
const Stack = createStackNavigator()

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} headerMode="none" />
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

export default LoginNavigator
