import React, { useContext } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { useCart } from '../Context/CartContext'
import Icon from 'react-native-vector-icons/Ionicons'
import { CartProvider } from '../Context/CartContext'

const ShoppingCartIcon = (props) => {
  const { cart } = useCart()
  return (
    <View
      style={[
        { padding: 5 },
        Platform.OS == 'android' ? styles.iconContainer : null,
      ]}
    >
      <View
        style={{
          position: 'absolute',
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: 'rgba(95,197,123,0.8)',
          right: 15,
          bottom: 15,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {cart.length}
        </Text>
      </View>
      <Icon
        // onPress={() => props.navigation.navigate()}
        name="ios-cart"
        size={30}
      />
    </View>
  )
}
export default ShoppingCartIcon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5,
  },
})
