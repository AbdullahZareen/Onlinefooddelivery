import React, { useState, useEffect } from 'react'
import MapView, { Marker, Circle } from 'react-native-maps'
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'
import * as Location from 'expo-location'
export default function App({ navigation, route }) {
  const [location, setLocation] = useState(null)
  const [latt, setlatt] = useState()
  const [longi, setlongi] = useState()
  const [errorMsg, setErrorMsg] = useState(null)
  const loc = route.params.paramkey
  console.log(loc)
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
