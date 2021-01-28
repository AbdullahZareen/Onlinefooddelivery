import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useUser } from '../Context/UserContext'
import { useIsFocused } from '@react-navigation/native'
export default function orderfood({ route }) {
  let oid = route.params.paramkey
  const [data, setdata] = useState()
  const { ipaddress } = useUser()
  useEffect(() => {
    fetch('http://' + ipaddress + '/fypapi/api/order/orderfood?oid=' + oid + '')
      .then((response) => response.json())
      .then((json) => {
        setdata(json)
      })
      .catch((error) => alert(error))
  }, [])
  console.log(data)

  return (
    <View>
      <Text>orderfood</Text>
    </View>
  )
}
