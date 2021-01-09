import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Checkbox, RadioButton } from 'react-native-paper'
const Screen = ({ navigation }) => {
  const [subs, setsubs] = useState('first')
  const [checked, setChecked] = useState(false)
  const [Lchecked, setLChecked] = useState(false)
  const [Dchecked, setDChecked] = useState(false)
  const check = () => {
    if ((checked == false) & (Lchecked == false) & (Dchecked == false)) {
      alert('check atleast one field')
    }
  }

  console.log(checked)
  return (
    <View>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <Text>Break Fast </Text>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked)
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <Text>Lunch </Text>
        <Checkbox
          status={Lchecked ? 'checked' : 'unchecked'}
          onPress={() => {
            setLChecked(!Lchecked)
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <Text>Lunch </Text>
        <Checkbox
          status={Dchecked ? 'checked' : 'unchecked'}
          onPress={() => {
            setDChecked(!Dchecked)
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <Text>One time Order</Text>
        <RadioButton
          value="first"
          status={subs === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setsubs('first')}
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <Text>7 days subscribtion</Text>
        <RadioButton
          value="second"
          status={subs === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setsubs('second')}
        />
      </View>
      <TouchableOpacity style={styles.btnbox} onPress={check}>
        <Text style={styles.btntext}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  btntext: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  btnbox: {
    width: 350,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
  },
})

export default Screen
