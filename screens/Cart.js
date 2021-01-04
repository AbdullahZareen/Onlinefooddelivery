import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DataTable } from 'react-native-paper'
const Screen = () => {
  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title></DataTable.Title>
          <DataTable.Title>Food Name</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell numberic>1</DataTable.Cell>
          <DataTable.Cell> Zinger Burger</DataTable.Cell>
          <DataTable.Cell numeric>380</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>Pizza Large</DataTable.Cell>
          <DataTable.Cell numeric>1100</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell></DataTable.Cell>
          <DataTable.Cell>Delivery charges</DataTable.Cell>
          <DataTable.Cell numeric>120</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell></DataTable.Cell>
          <DataTable.Cell>Total Bill</DataTable.Cell>
          <DataTable.Cell numeric>1480</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <View style={{ marginTop: 100 }}>
        <TouchableOpacity style={styles.btnbox}>
          <Text style={styles.btntext}>Add FoodItem</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnbox}>
          <Text style={styles.btntext}>Place Order</Text>
        </TouchableOpacity>
      </View>
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
  },
})

export default Screen
