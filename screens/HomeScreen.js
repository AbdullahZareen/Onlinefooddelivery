import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
export default function Home({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://192.168.2.139/fypapi/api/resturant/allresturant')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        console.log(json)
      })
      .catch((error) => alert(error))
      .finally(setLoading(false))
  }, [])
  const carddata = (item) => {
    return (
      <View style={{}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('fooditem')}
          style={{
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
          }}
        >
          <Card key={item.rid} style={{ margin: 20 }}>
            <Card.Cover
              source={require('../components/images/resturant3.jpg')}
              style={{ width: 310, height: 100 }}
            />
            <Card.Content>
              <Title>{item.rcname}</Title>
              <Paragraph>{item.rccity}</Paragraph>
              <Paragraph>{item.rcemail}</Paragraph>
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
          marginBottom: 50,
          textAlign: 'center',
        }}
      >
        RESTURANTS
      </Text>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ rid }, index) => rid}
          renderItem={({ item }) => <Text>{carddata(item)}</Text>}
        />
      )}
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
