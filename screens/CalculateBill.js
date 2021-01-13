import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import { Card, Title, Paragraph } from 'react-native-paper'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import InputSpinner from 'react-native-input-spinner'
export default function calculate({ navigation, route }) {
  const [qval, setqval] = useState(1)
  const { cart, setCart } = useCart()
  const food = route.params.paramkey
  const k = cart.length
  console.log(k)
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          textAlign: 'center',
        }}
      ></Text>

      <View style={{}}>
        <Card>
          <Card.Cover
            source={require('../components/images/burger.jpg')}
            style={{ width: 310, height: 150 }}
          />

          <Card.Content>
            <Title>{food.fname}</Title>
            <Title>{food.fid}</Title>
            <Paragraph>Price:{food.fprice}</Paragraph>
            <Paragraph>discount :{food.ftype}</Paragraph>
          </Card.Content>
        </Card>
        <InputSpinner
          max={10}
          min={1}
          step={1}
          onChange={setqval}
          style={{ borderColor: 'black', marginTop: 50, marginLeft: 100 }}
        />

        <Text>Bill:{qval * food.fprice}</Text>

        {/* <TouchableOpacity
          style={styles.btnbox}
          onPress={add(food.fname, food.price)}
        >
          <Text style={styles.btntext}>Add to Cart</Text>
        </TouchableOpacity> */}
      </View>
      <Button
        title="add"
        onPress={() =>
          setCart((current) => [
            ...current,
            {
              key: k + 1,
              id: food.fid,
              name: food.fname,
              price: food.fprice,
              qty: qval,
            },
          ])
        }
      />
      <Button title="Cart" onPress={() => navigation.navigate('Cart')} />
      <StatusBar backgroundColor="#1c313a" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  btntext: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 50,
  },
  btnbox: {
    backgroundColor: '#1c313a',
    marginTop: 100,
    borderRadius: 25,
    paddingVertical: 10,
  },
})
