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
import InputSpinner from 'react-native-input-spinner'

export default function Home({ navigation }) {
  const [qval, setqval] = useState(1)
  //   const [data, setData] = useState([])
  //   useEffect(() => {
  //     fetch('http://192.168.2.102/fypapi/api/resturant/allresturant')
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setData(json)
  //         console.log(json)
  //       })
  //       .catch((error) => alert(error))
  //   }, [])
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
              <Paragraph>discount :10%</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
        <InputSpinner
          max={10}
          min={1}
          step={1}
          // colorMax={'#f04048'}
          // colorMin={'#40c5f4'}
          onChange={setqval}
          style={{ borderColor: 'black', marginTop: 50, marginLeft: 100 }}
        />
        <Text>Bill:{qval * 190}</Text>

        <TouchableOpacity
          style={styles.btnbox}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.btntext}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <StatusBar backgroundColor="#1c313a" />
    </ScrollView>
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
