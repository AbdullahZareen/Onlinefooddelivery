import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { useUser } from '../Context/UserContext'
import { Card, Paragraph, Title, Button, Action } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
export default function ResturantFoodScreen() {
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
        {/* <TouchableOpacity
          //  onPress={() => navigation.navigate('BillCal', { paramkey: item })}
          style={{
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
          }}
        > */}
        <Card key={item.fid.toString()} style={{ margin: 20 }}>
          <Card.Cover
            // source={require('' + item.fImagepath + '')}
            style={{ width: 310, height: 100 }}
          />
          <Card.Content>
            <Title>{item.fname}</Title>
            <Paragraph>Price :{item.fprice}</Paragraph>
            <Paragraph>Type {item.ftype}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <TouchableOpacity>
              <Button>Edit</Button>
            </TouchableOpacity>
            <TouchableOpacity>
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
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,

          textAlign: 'center',
        }}
      ></Text>
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
  },
})
