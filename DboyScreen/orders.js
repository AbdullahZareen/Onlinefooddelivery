import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { useUser } from '../Context/UserContext'
import { DataTable } from 'react-native-paper'
import {
  Card,
  Title,
  Paragraph,
  ActivityIndicator,
  Searchbar,
} from 'react-native-paper'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
const Screen = ({ navigation }) => {
  const [data, setdata] = useState()
  const [food, setfood] = useState()
  const { ipaddress, user } = useUser()
  useEffect(() => {
    fetch('http://' + ipaddress + '/fypapi/api/deliveryboy/dboyorder')
      .then((response) => response.json())
      .then((json) => {
        setdata(json)
      })
      .catch((error) => alert(error))
  }, [])

  const statusupdate = (item) => {
    fetch('http://' + ipaddress + '/fypapi/api/deliveryboy/updateorderstatus', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oid: item.oid,
        status: 'pending',
        did: user.u_id,
      }),
    })
    navigation.navigate('PICKUPDETAIL', { paramkey: item })
  }

  return (
    <View style={styles.container}>
      {data == null ? (
        // <Image source={require('../components/images/norder.png')} />
        <Text>nodata</Text>
      ) : (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Card style={{ margin: 20 }}>
                <Card.Content>
                  <Title>
                    {'Ordernumber :'}
                    {item.oid}
                  </Title>
                  <Paragraph>
                    {'Name :'}
                    {item.rcname}
                  </Paragraph>
                  <Button title="Accept" onPress={() => statusupdate(item)} />
                </Card.Content>
              </Card>
            )}
          />
        </View>
      )}
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
