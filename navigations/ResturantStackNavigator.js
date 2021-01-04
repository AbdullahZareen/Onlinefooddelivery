import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import FoodItemScreen from '../screens/FoodItemScreen'
import BillScreen from '../screens/CalculateBill'
import { Image } from 'react-native'
import ResturantSignup from '../screens/ResturantSignup'
import AddFoodScreen from '../screens/AddFoodScreen'

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
  function ActionBarIcon() {
    return (
      <Image
        source={require('../components/images/1.png')}
        style={{ width: 40, height: 40, borderRadius: 40 / 2, marginLeft: 15 }}
      />
    )
  }
  function cart() {
    return (
      <Image
        source={require('../components/images/cart.jpg')}
        style={{ width: 40, height: 40, borderRadius: 40 / 2, marginLeft: 15 }}
      />
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Addresturant" component={ResturantSignup} />
      <Stack.Screen name="BillCal" component={BillScreen} />
      <Stack.Screen name="AddFoodItem" component={AddFoodScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
