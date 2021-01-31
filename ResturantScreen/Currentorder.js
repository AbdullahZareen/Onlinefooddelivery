import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useUser } from '../Context/UserContext'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
const Screen = ({ navigation }) => {
  const [data, setdata] = useState()
  const { ipaddress, user } = useUser()
  useEffect(() => {
    fetch(
      'http://' +
        ipaddress +
        '/fypapi/api/resturant/resturantsimpleorder?id=' +
        user.u_id +
        ''
    )
      .then((response) => response.json())
      .then((json) => {
        setdata(json)
      })
      .catch((error) => alert(error))
  }, [])
  console.log(data)
  return (
    <View style={styles.container}>
      <Text>current orders</Text>
      {/* <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>
        Order Details
      </Text>
      {data == null ? (
        // <Image source={require('../components/images/norder.png')} />
        <Text>nodata</Text>
      ) : (
        <View>
          <DataTable.Header>
            <DataTable.Title>Orderdate</DataTable.Title>
            <DataTable.Title>Ordertime</DataTable.Title>
            <DataTable.Title>Bill</DataTable.Title>
            <DataTable.Title></DataTable.Title>
          </DataTable.Header>

          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell>{item.odate}</DataTable.Cell>
                  <DataTable.Cell>{item.odeliverytime}</DataTable.Cell>
                  <DataTable.Cell>{item.Totalbill}</DataTable.Cell>
                  <DataTable.Cell>
                    <Button
                      title="Detail"
                      onPress={() =>
                        navigation.navigate('orderfood', { paramkey: item.oid })
                      }
                    />
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            )}
          />
        </View>
      )} */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingTop: 20,
    backgroundColor: '#fff',
    width: wp('100%'),
    height: hp('100%'),
  },
})

export default Screen
