import React from 'react'
import { View, Text, Button } from 'react-native'

const Screen = ({ navigation }) => {
  return (
    <View>
      <Text>setting Screen</Text>
      <Button
        title="Notification"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  )
}

export default Screen
