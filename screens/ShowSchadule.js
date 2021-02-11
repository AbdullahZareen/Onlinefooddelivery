import React, { useEffect, useState } from 'react'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native'
import { MaterialIcons, Ionicons } from 'react-native-vector-icons'
import { useIsFocused } from '@react-navigation/native'
import { Card, Paragraph, Title, Button } from 'react-native-paper'
import { useUser } from '../Context/UserContext'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import DropDownPicker from 'react-native-dropdown-picker'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  SwipeRow,
} from 'native-base'
import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Warning: ...'])
export default function show({ navigation }) {
  const { user, ipaddress } = useUser()
  const [data, setdata] = useState()
  const isFocused = useIsFocused()
  useEffect(() => {
    fetch('http://' + ipaddress + '/fypapi/api/Customers/showschedule?id=58')
      .then((response) => response.json())
      .then((json) => {
        setdata(json)
      })
      .catch((error) => alert(error))
    return () => setdata(null)
  }, [])
  const [daydata, setdaydata] = useState()
  function dropdowndaysearch(day) {
    fetch(
      'http://' + ipaddress + '/fypapi/api/schedule/showschedule?d=' + day + ''
    )
      .then((response) => response.json())
      .then((json) => {
        setdaydata(json)
      })
      .catch((error) => alert(error))
  }
  function deleteschedule(mid) {
    fetch(
      'http://' +
        ipaddress +
        '/fypapi/api/schedule/Deleteschedule?mid=' +
        mid +
        ''
    ).catch((error) => alert(error))
  }
  return (
    <View style={styles.mainConatinerStyle}>
      <View>
        <FlatList
          data={data}
          //  keyExtractor={(item) => item.fid.toString()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail
                    source={{ uri: 'data:image/jpeg;base64,' + item.FImage }}
                  />
                </Left>

                <Body>
                  <Text style={{ fontWeight: 'bold' }}>Food name:</Text>
                  <Text>Qty: </Text>
                  <Text>Meal:</Text>
                  <Text>Day: </Text>
                </Body>
                <Body>
                  <Text style={{ fontWeight: 'bold' }}>{item.fName}</Text>
                  <Text>{item.quantity}</Text>
                  <Text>{item.Routinetype}</Text>
                  <Text>{item.Deleiveryday}</Text>
                </Body>
                <Right></Right>
              </ListItem>
            </List>
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.floatingMenuButtonStyle}
        onPress={() => navigation.navigate('schadule')}
      >
        <Text style={{ fontSize: 60 }}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1,
    height: hp('70%'), // 70% of height device screen
    width: wp('100%'), // 80% of width device screen
  },
  floatingMenuButtonStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 25,
    backgroundColor: 'grey',
    width: 80,
    borderRadius: 100,
    alignItems: 'center',
  },
})
