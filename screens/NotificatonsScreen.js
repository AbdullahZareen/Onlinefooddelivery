import React from 'react'
import { View, Text, Button } from 'react-native'

const Screen = ({ navigation }) => {
  return (
    <View>
      <Text>Notifications</Text>
      <Button title="Setting" onPress={() => navigation.navigate('Setting')} />
    </View>
  )
}
export default Screen
