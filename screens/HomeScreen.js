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
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from 'react-native'
import { useUser } from '../Context/UserContext'
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
export default function Home({ navigation, route }) {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const { user, setUser, ipaddress } = useUser()
  const [value, setvalue] = useState(null)
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout)
    })
  }
  const [refreshing, setRefreshing] = React.useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    wait(0).then(() => setRefreshing(false))
  }, [])

  useEffect(() => {
    fetch('http://' + ipaddress + '/fypapi/api/resturant/allresturant')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => alert(error))
  }, [])

  function searchresturant(svalue) {
    // const search = data.filter(
    //   (element) => element.rcname.toLowerCase() === value.toLowerCase()
    // )
    // return search
    fetch(
      'http://' +
        ipaddress +
        '/fypapi/api/resturant/Searchresturant?name=' +
        svalue +
        ''
    )
      .then((response) => response.json())
      .then((json) => {
        setData([])
        setData(json)
      })
      .catch((error) => alert(error))
  }
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
          }}
        >
          {isLoading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <Card key={item.rid.toString()} style={{ margin: 20 }}>
              <Card.Cover
                source={{ uri: 'data:image/jpeg;base64,' + item.rcImage }}
                style={{ width: wp('75%'), height: 100 }}
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
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View
          style={{ flexDirection: 'row', paddingBottom: 10, width: wp('100%') }}
        >
          <Searchbar
            style={{
              borderRadius: 25,
              width: 250,
              borderWidth: 1,
              height: 50,
            }}
            onChangeText={setvalue}
          />
          <TouchableOpacity
            //     onPress={() => navigation.navigate('showschadule')}
            onPress={() => {
              searchresturant(value)
            }}
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text>{carddata(item)}</Text>}
          />
        )}
        <StatusBar backgroundColor="#1c313a" />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: wp('6%'),
    backgroundColor: '#fff',
    width: wp('100%'),
  },
})
