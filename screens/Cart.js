import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import { DataTable } from 'react-native-paper'
import { useCart } from '../Context/CartContext'
import { useUser } from '../Context/UserContext'
import { Card, Paragraph, Title, Button } from 'react-native-paper'
const Screen = () => {
  const { cart, setCart } = useCart()
  const { user, setUser, ipaddress } = useUser()
  const [result, setResult] = useState()

  function tabledata(item) {
    return (
      <View
        style={{
          alignItems: 'center',
          width: 350,
        }}
      >
        <Card style={{ width: 350 }}>
          {/* <Card.Cover
            // source={require('' + item.fImagepath + '')}
            style={{ width: 310, height: 100 }}
          /> */}
          <Card.Content style={{}}>
            <Title style={{ marginRight: 30 }}>
              {item.key}: {item.name}
            </Title>
            <Title style={{ marginRight: 30 }}>Price :{item.price}</Title>
            <Title style={{ marginRight: 30 }}>Qty :{item.qty}</Title>
            <Title>Total:{item.price * item.qty}</Title>
            <Card.Actions>
              <Button>Edit</Button>
              <Button
                onPress={() => {
                  cart.splice(item, 1)
                }}
              >
                Remove
              </Button>
            </Card.Actions>
          </Card.Content>
        </Card>
      </View>
    )
  }
  const order = () => {
    try {
      fetch('http://' + ipaddress + '/fypapi/api/order/addorders', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          odate: '2020-10-13T00:00:00',
          subscribtion: false,
          otime: '12:00:00',
          cid: user.u_id,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          orderdetail(json)
        })
        .catch((error) => alert(error)),
        alert('saved')
    } catch (e) {
      console.log(e)
    }
  }
  function orderdetail(json) {
    for (let i = 0; i < cart.length; i++) {
      try {
        fetch('http://' + ipaddress + '/fypapi/api/order/Addorderdetail', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            oid: json,
            fid: cart[i].id,
            foodqantity: cart[i].qty,
          }),
        })
        alert('saved')

        console.log('fid>>>', cart[i].id)
        console.log('qty>>>', cart[i].qty)
        console.log('oi>>>>>', json)
      } catch (e) {
        console.log(e)
      }
    }
    return
  }
  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        //  keyExtractor={({ rid }, index) => rid.toString()}
        renderItem={({ item }) => <Text>{tabledata(item)}</Text>}
      />
      <TouchableOpacity style={styles.btnbox} onPress={() => order()}>
        <Text style={styles.btntext}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnbox} onPress={() => order()}>
        <Text style={styles.btntext}>Total Bill</Text>
      </TouchableOpacity>
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
  },
  btnbox: {
    backgroundColor: '#1c313a',
    width: 300,
    margin: 10,
    marginLeft: 10,
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
  },
})

export default Screen
