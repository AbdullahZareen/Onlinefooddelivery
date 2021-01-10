import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import FoodItemScreen from '../screens/FoodItemScreen'
import { Image } from 'react-native'
import AddFoodScreen from '../screens/AddFoodScreen'
import ResturantFoodScreen from '../screens/ResturantFoodScreen'

const Stack = createStackNavigator()

const ResturantStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ResturantFoodScreen} />
      <Stack.Screen name="AddFoodItem" component={AddFoodScreen} />
    </Stack.Navigator>
  )
}

export default ResturantStackNavigator
