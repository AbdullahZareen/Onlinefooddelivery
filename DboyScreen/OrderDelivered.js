import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useUser } from '../Context/UserContext'
import { Card, Title, Paragraph, Searchbar, Divider } from 'react-native-paper'

export default function Delivered({ navigation, route }) {
  const item = route.params.paramkey
  console.log(item)
  return (
    <View style={styles.mainConatinerStyle}>
      <Card style={{ margin: 20 }}>
        <Card.Content>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('resturantmap', {
                paramkey: { lat: item.rclattitude, long: item.rclongitude },
              })
            }
          >
            <View style={{ flexDirection: 'row' }}>
              <Title ali>
                {'Customer Data'} {'\t\t\t\t'}
              </Title>
              <Image
                style={styles.logo}
                source={require('../components/images/resturant.png')}
              />
            </View>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
          </TouchableOpacity>
          <Divider style={{ borderWidth: 1 }} />
          <Title>{'Customer Name :'}</Title>
          <Paragraph>
            {item.cname}
            {'\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'}
            {item.Totalbill} PKR
          </Paragraph>

          <Divider style={{ borderWidth: 1 }} />
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <TouchableOpacity style={{ marginTop: 30 }}>
            <Button title="pickup" />
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  )
}
const styles = StyleSheet.create({
  mainConatinerStyle: {
    flexDirection: 'column',
    flex: 1,
    height: hp('100%'), // 70% of height device screen
    width: wp('100%'), // 80% of width device screen
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  logo: {
    width: 66,
    height: 58,
  },
})
