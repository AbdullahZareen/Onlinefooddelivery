import React, { useState, useEffect } from 'react'
import MapView, { Marker, Circle } from 'react-native-maps'
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native'
import * as Location from 'expo-location'
export default function App() {
  const [location, setLocation] = useState(null)
  var [latt, setlatt] = useState(33.6495176)
  var [longi, setlongi] = useState(73.0702265)
  const [errorMsg, setErrorMsg] = useState(null)

  // useEffect(() => {
  //   ;(async () => {
  //     let { status } = await Location.requestPermissionsAsync()
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied')
  //       return
  //     }

  //     let location = await Location.getCurrentPositionAsync({})
  //     setlongi(JSON.stringify(location.coords.longitude))
  //     setlatt(JSON.stringify(location.coords.latitude))
  //     setLocation(location)
  //   })()
  // }, [])
  let text = 'Waiting.' + (0 + 1) + ''
  // if (errorMsg) {
  //   text = errorMsg
  // } else if (location) {
  //   text = JSON.stringify(location.coords.latitude)
  // }

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
        onPress={(e) => {
          setlatt(e.nativeEvent.coordinate.latitude),
            setlongi(e.nativeEvent.coordinate.longitude)
          console.log('newlatitiude', e.nativeEvent.coordinate.latitude)
          console.log('newlongitutde', e.nativeEvent.coordinate.longitude)
        }}
      >
        <Marker
          coordinate={{
            latitude: latt,
            longitude: longi,
          }}
          title={'title'}
          description={'description'}
        />
        <Circle
          center={{
            latitude: latt,
            longitude: longi,
          }}
          radius={5000}
          strokeWidth={2}
          strokeColor="aqua"
          fillColor={'brown'}
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
