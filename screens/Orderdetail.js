import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DataTable } from 'react-native-paper'
const Screen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Current Order Detail
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>orderno</DataTable.Title>
          <DataTable.Title>Food item</DataTable.Title>
          <DataTable.Title numeric>order time</DataTable.Title>
          <DataTable.Title numeric>delivery time</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell> 2</DataTable.Cell>
          <DataTable.Cell> zinger burger , Pizza</DataTable.Cell>
          <DataTable.Cell numeric>12:15</DataTable.Cell>
          <DataTable.Cell numeric>30</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <View style={{ marginTop: 100 }}></View>
      <TouchableOpacity style={styles.btnbox}>
        <Text style={styles.btntext}>Track Order</Text>
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
  },
})

export default Screen
