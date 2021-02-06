import React, { useState, useEffect } from 'react'
import MapView, { Marker, Circle } from 'react-native-maps'
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'
import * as Location from 'expo-location'
export default function App() {
  const [location, setLocation] = useState(null)
  const [latt, setlatt] = useState()
  const [longi, setlongi] = useState()
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setlongi(JSON.stringify(location.coords.longitude))
      setlatt(JSON.stringify(location.coords.latitude))
      setLocation(location)
    })()
  }, [])
  let text = 'Waiting.' + (0 + 1) + ''
  // if (errorMsg) {
  //   text = errorMsg
  // } else if (location) {
  //   text = JSON.stringify(location.coords.latitude)
  // }
  console.log(longi)
  console.log(latt)

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.6007,
          longitude: 73.0679,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 33.6007,
            longitude: 73.0679,
          }}
          title={'title'}
          description={'description'}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
