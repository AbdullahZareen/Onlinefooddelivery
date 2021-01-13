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

const Screen = () => {
  const { cart, setCart } = useCart()
  const { user, setUser, ipaddress } = useUser()
  const [result, setResult] = useState()
  function tabledata(item) {
    return (
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell numeric>{item.key}</DataTable.Cell>
          <DataTable.Cell> {item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.price}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
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
          setResult(json)
        })
        .catch((error) => alert(error)),
        alert('saved')
    } catch (e) {
      console.log(e)
      for (let i = 0; i < cart.length; i++) {
        try {
          fetch('http://' + ipaddress + '/fypapi/api/order/addorderdetail', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              oid: result,
              foodquantity: cart[i].qty,
              fid: cart[i].id,
              // odate: '2020-10-13T00:00:00',
              // subscribtion: false,
              // otime: '12:00:00',
              // cid: user.u_id,
            }),
          })
            .then((response) => response.json())
            .then((json) => {
              setResult(json)
            })
            .catch((error) => alert(error)),
            alert('saved')
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
  console.log(cart[0].id)
  console.log(cart[0].qty)

  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title></DataTable.Title>
          <DataTable.Title>Food Name</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
        </DataTable.Header>
      </DataTable>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        //  keyExtractor={({ rid }, index) => rid.toString()}
        renderItem={({ item }) => <Text>{tabledata(item)}</Text>}
      />
      <TouchableOpacity style={styles.btnbox} onPress={() => order()}>
        <Text>Order</Text>
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
