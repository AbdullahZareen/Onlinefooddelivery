import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import FoodItemScreen from '../screens/FoodItemScreen'
import BillScreen from '../screens/CalculateBill'
import { Image } from 'react-native'
import CartScreen from '../screens/Cart'
const Stack = createStackNavigator()
import Orderdetail from '../screens/Orderdetail'

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
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Home Activity',
          headerLeft: (props) => <ActionBarIcon {...props} />,
        }}
      />
      <Stack.Screen name="fooditem" component={FoodItemScreen} />
      <Stack.Screen name="BillCal" component={BillScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Order" component={Orderdetail} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
