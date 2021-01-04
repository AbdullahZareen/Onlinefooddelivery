import React from 'react'
import { View, Text, Button } from 'react-native'

const Screen = ({ navigation }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Settings" onPress={() => navigation.navigate('Setting')} />
    </View>
  )
}
export default Screen
