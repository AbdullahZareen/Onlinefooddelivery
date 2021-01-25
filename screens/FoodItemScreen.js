import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect, useContext } from 'react'
import { Card, Title, Paragraph, Button } from 'react-native-paper'

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { useUser } from '../Context/UserContext'

import { ScrollView } from 'react-native-gesture-handler'
export default function fooditem({ navigation, route }) {
  const [isLoading, setLoading] = useState(true)
  const [fooddata, setfoodData] = useState([])
  const id = route.params.paramkey
  const { user, setUser, ipaddress } = useUser()
  useEffect(() => {
    fetch('http://' + ipaddress + '/fypapi/api/fooditem/getfood?id=' + id + '')
      .then((response) => response.json())
      .then((json) => {
        setfoodData(json)
      })
      .catch((error) => alert(error))
  }, [])

  const carddata = (item) => {
    return (
      <View style={{}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BillCal', { paramkey: item })}
          style={{
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
          }}
        >
          <Card key={item.fid.toString()} style={{ margin: 20 }}>
            <Card.Cover
              source={{ uri: item.fImagepath }}
              style={{ width: 310, height: 100 }}
            />
            <Card.Content>
              <Title>{item.fname}</Title>
              <Paragraph>Price :{item.fprice}</Paragraph>
              <Paragraph>Type {item.ftype}</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,

          textAlign: 'center',
        }}
      ></Text>
      <View style={{}}></View>
      <FlatList
        data={fooddata}
        //  keyExtractor={(item) => item.fid.toString()}
        keyExtractor={({ fid }, index) => fid}
        renderItem={({ item }) => <Text>{carddata(item)}</Text>}
      />
      <StatusBar backgroundColor="#1c313a" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
})
