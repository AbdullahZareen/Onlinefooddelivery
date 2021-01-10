import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ResturantFoodScreen() {
  const [data, setData] = useState()
  const id = 2
  useEffect(() => {
    fetch(
      'http://192.168.2.103/fypapi/api/resturant/resturantfood?id=' + id + ''
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
      .catch((error) => alert(error))
  }, [])

  return <View></View>
}
