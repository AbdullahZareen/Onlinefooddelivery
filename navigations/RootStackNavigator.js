import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/Login'
import SignUpScreen from '../screens/CustomerSignup'

const RootStack = createStackNavigator()

const RootStackNavigator = ({ navigation }) => (
  <RootStack.Navigator>
    {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="SignUp" component={SignUpScreen} />
  </RootStack.Navigator>
)

export default RootStackNavigator
