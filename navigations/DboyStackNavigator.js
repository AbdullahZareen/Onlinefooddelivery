import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Status from '../DboyScreen/Status'
import Status1 from '../DboyScreen/Status1'
import Deliveries from '../DboyScreen/Deliveries'
import Order from '../DboyScreen/orders'
import Pickuporder from '../DboyScreen/OrderPickup'
import ResturantMap from '../DboyScreen/ResturantMap'
const Stack = createStackNavigator()

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="status"
        component={Status}
        options={{
          headerTitle: 'Status',
        }}
      />
      <Stack.Screen
        name="status1"
        component={Status1}
        options={{
          headerTitle: 'Status',
        }}
      />
      <Stack.Screen name="Deliveries" component={Deliveries} />
      <Stack.Screen name="order" component={Order} />
      <Stack.Screen name="PICKUPDETAIL" component={Pickuporder} />
      <Stack.Screen name="resturantmap" component={ResturantMap} />
    </Stack.Navigator>
  )
}

export default ProfileStackNavigator
