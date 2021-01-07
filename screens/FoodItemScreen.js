import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { Card, Title, Paragraph } from 'react-native-paper'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
export default function fooditem({ navigation, route }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const id = route.params.paramkey
  useEffect(() => {
    fetch('http://192.168.43.68/fypapi/api/fooditem/allfood?id=2')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        console.log(json)
      })
      .catch((error) => alert(error))
  }, [])
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,

          textAlign: 'center',
        }}
      ></Text>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BillCal')}
          style={{
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
          }}
        >
          <Card>
            <Card.Cover
              source={require('../components/images/burger.jpg')}
              style={{ width: 310, height: 150 }}
            />
            <Card.Content>
              <Title>zinger Burger</Title>
              <Paragraph>Price:190</Paragraph>
              <Paragraph>discount :5%</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
          }}
        >
          <Card>
            <Card.Cover
              source={require('../components/images/tikka.jpg')}
              style={{ width: 310, height: 150 }}
            />
            <Card.Content>
              <Title>Tikka Boti</Title>
              <Paragraph>Pice:100</Paragraph>
              <Paragraph>discount :15%</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
          }}
        >
          <Card>
            <Card.Cover
              source={require('../components/images/pizza.jpg')}
              style={{ width: 310, height: 100 }}
            />
            <Card.Content>
              <Title>pizza</Title>
              <Paragraph>price:550</Paragraph>
              <Paragraph>discount :10%</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
      {/* <FlatList
        data={data}
        keyExtractor={({ rid }, index) => rid}
        renderItem={({ item }) => <Text>{carddata(item)}</Text>}
      /> */}
      <StatusBar backgroundColor="#1c313a" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
})
