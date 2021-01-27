import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import FoodItemScreen from '../screens/FoodItemScreen'
import { Image } from 'react-native'
import AddFoodScreen from '../ResturantScreen/AddFoodScreen'
import ResturantFoodScreen from '../ResturantScreen/ResturantFoodScreen'
import ResturantFoodUpdate from '../ResturantScreen/ResutrantFoodUpdate'
import scheduleorder from '../ResturantScreen/ScheduleOrder'

const Stack = createStackNavigator()

const ResturantStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ResturantFoodScreen}
        options={{
          headerTitle: 'Resturant Home',
        }}
      />
      <Stack.Screen name="AddFoodItem" component={AddFoodScreen} />
      <Stack.Screen name="update" component={ResturantFoodUpdate} />
      <Stack.Screen name="ScheduleOrder" component={scheduleorder} />
    </Stack.Navigator>
  )
}

export default ResturantStackNavigator
