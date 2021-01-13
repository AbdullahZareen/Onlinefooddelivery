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
import Addschadule from '../screens/Addschadulescreen'
import ShoppingCartIcon from '../Container/ShoppingCartIcon'
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerContent } from '../components/DrawerContent'
import ResturantSignup from '../screens/ResturantSignup'

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
      <Stack.Screen name="ResturantSignup" component={ResturantSignup} />
      <Stack.Screen name="BillCal" component={BillScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Order" component={Orderdetail} />
      <Stack.Screen name="schadule" component={Addschadule} />
      <Stack.Screen name="cart" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
