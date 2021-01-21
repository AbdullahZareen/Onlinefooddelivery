import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { useUser } from '../Context/UserContext'
import { Card, Paragraph, Title, Button } from 'react-native-paper'
export default function ResturantFoodScreen({ navigation }) {
  const [data, setData] = useState()
  const id = 2
  const { user, setUser, ipaddress } = useUser()
  useEffect(() => {
    fetch(
      'http://' +
        ipaddress +
        '/fypapi/api/resturant/resturantfood?id=' +
        id +
        ''
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => alert(error))
  }, [])
  const carddata = (item) => {
    return (
      <View style={{}}>
        <Card key={item.fid.toString()} style={{ margin: 20 }}>
          <Card.Cover
            source={require('../components/images/biryani.jpg')}
            style={{ width: 300, height: 100 }}
          />
          <Card.Content>
            <Title>{item.fname}</Title>
            <Paragraph>Price :{item.fprice}</Paragraph>
            <Paragraph>Type :{item.ftype}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <TouchableOpacity onPress={() => navigation.navigate('update')}>
              <Button>Edit</Button>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('' + item.fname + ' delete permanent')}
            >
              <Button>Delete</Button>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
        {/* </TouchableOpacity> */}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ borderWidth: 1 }}
        onPress={() => navigation.navigate('AddFoodItem')}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          Add Food Items +
        </Text>
      </TouchableOpacity>
      <View style={{}}></View>
      <FlatList
        data={data}
        //  keyExtractor={(item) => item.fid.toString()}
        keyExtractor={({ fid }, index) => fid}
        renderItem={({ item }) => <Text>{carddata(item)}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    width: 350,
  },
})
