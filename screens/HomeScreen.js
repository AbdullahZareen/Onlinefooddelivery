import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
  Card,
  Title,
  Paragraph,
  ActivityIndicator,
  Searchbar,
} from 'react-native-paper'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native'
import { useUser } from '../Context/UserContext'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'
export default function Home({ navigation, route }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const { user, setUser, ipaddress } = useUser()
  useEffect(() => {
    fetch('http://' + ipaddress + '/fypapi/api/resturant/allresturant')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => alert(error))
      .finally(setLoading(false))
  }, [])
  const carddata = (item) => {
    return (
      <View style={{}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('fooditem', { paramkey: item.rid })
          }
          style={{
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            width: 320,
          }}
        >
          {isLoading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <Card key={item.rid.toString()} style={{ margin: 20 }}>
              <Card.Cover
                source={require('../components/images/resturant2.jpg')}
                style={{ width: 280, height: 100 }}
              />
              <Card.Content>
                <Title>{item.rcname}</Title>
                <Paragraph>{item.rccity}</Paragraph>
                <Paragraph>{item.rcemail}</Paragraph>
              </Card.Content>
            </Card>
          )}
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <KeyboardAvoidingScrollView behavoir="position">
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Searchbar style={{ borderRadius: 25, width: 250 }} />
          <TouchableOpacity
            onPress={() => navigation.navigate('showschadule')}
            style={{
              margin: 10,
              width: 50,
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: 50, height: 30, borderRadius: 10 }}
              source={require('../components/images/schdule.png')}
            />
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.rid.toString()}
            //  keyExtractor={({ rid }, index) => rid.toString()}
            renderItem={({ item }) => <Text>{carddata(item)}</Text>}
          />
        )}
        <StatusBar backgroundColor="#1c313a" />
      </View>
    </KeyboardAvoidingScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
})
