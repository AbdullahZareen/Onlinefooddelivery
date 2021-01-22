import React from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import FoodItemScreen from '../screens/FoodItemScreen'
import BillScreen from '../screens/CalculateBill'
import { Image } from 'react-native'
import CartScreen from '../screens/Cart'
const Stack = createStackNavigator()
import Orderdetail from '../screens/Orderdetail'
import ShoppingCartIcon from '../Container/ShoppingCartIcon'
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerContent } from '../components/DrawerContent'
import Schadule from '../screens/Schedule'
import ScheduleFood from '../screens/ScheduleFood'
import showschadule from '../screens/ShowSchadule'
import PickFood from '../screens/PickFood'
import Order from '../screens/Order'
const HomeStackNavigator = ({ navigation }) => {
  function ActionBarIcon() {
    return (
      <Image
        source={require('../components/images/1.png')}
        style={{ width: 40, height: 40, borderRadius: 40 / 2, marginLeft: 15 }}
      />
    )
  }
  function Cart() {
    return (
      <View>
        <TouchableOpacity>
          <Image
            source={require('../components/images/cart.jpg')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
              marginLeft: 15,
            }}
          />
        </TouchableOpacity>
        <ShoppingCartIcon />
      </View>
    )
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Home Activity',
          headerLeft: (sss) => (
            <Icon
              name={Platform.OS === 'ios' ? 'ios-menu-outline' : 'md-menu'}
              onPress={() => navigation.openDrawer()}
              size={30}
              style={{ marginLeft: 10 }}
            />
          ),
          headerRight: (props) => <ShoppingCartIcon />,
        }}
      />
      <Stack.Screen name="fooditem" component={FoodItemScreen} />
      <Stack.Screen name="BillCal" component={BillScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Order" component={Orderdetail} />

      <Stack.Screen
        name="schadule"
        component={Schadule}
        options={{
          headerTitle: 'Add Schadule',
          headerRight: () => (
            <TouchableOpacity>
              <Text
                style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}
              >
                Save
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="cart" component={CartScreen} />
      <Stack.Screen
        name="Resturant"
        component={ScheduleFood}
        options={{
          headerTitle: 'Food Items',
        }}
      />
      <Stack.Screen
        name="showschadule"
        component={showschadule}
        options={{
          headerTitle: 'Week Schadule',
          headerRight: () => (
            <TouchableOpacity>
              <Text
                style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}
              >
                Activate
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="pickfood" component={PickFood} />
      <Stack.Screen name="order" component={Order} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
