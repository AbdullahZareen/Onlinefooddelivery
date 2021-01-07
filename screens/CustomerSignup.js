import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
export default function UserSignup() {
  const [name, onchangename] = useState('')
  const [number, onchangenumber] = useState('')
  const [address, onchangeadress] = useState('')
  const [password, onchangepassword] = useState('')
  const [email, onChangeemail] = useState('')
  const [city, oncitychange] = useState('')

  const Postdata = () => {
    if (password == '' && email == '') {
      alert('fill the feilds')
    } else {
      try {
        let result = fetch(
          'http://192.168.2.121/fypapi/api/customers/addcustomers',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              cname: name,
              cemail: email,
              cAddrees: address,
              ccity: city,
              cnumber: number,
              cpassword: password,
            }),
          }
        )
        console.log(result)
        alert('saved')
      } catch (e) {
        console.log(e)
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.setText}>Name</Text>
      <TextInput style={styles.inputBox} onChangeText={onchangename} />
      <Text style={styles.setText}>Phone Number</Text>
      <TextInput style={styles.inputBox} onChangeText={onchangenumber} />
      <Text style={styles.setText}>Email</Text>
      <TextInput style={styles.inputBox} onChangeText={onChangeemail} />
      <Text style={styles.setText}>Address</Text>
      <TextInput style={styles.inputBox} onChangeText={onchangeadress} />
      <Text style={styles.setText}>City</Text>

      <DropDownPicker
        items={[
          { label: 'Islamabad', value: 'Islamabad', hidden: true },
          { label: 'Rawalpindi', value: 'Rawalpindi' },
          { label: 'karachi', value: 'karachi' },
          { label: 'Lahore', value: 'Lahore' },
          { label: 'Haripur', value: 'Haripur' },
        ]}
        containerStyle={{ height: 40 }}
        style={{
          backgroundColor: '#fafafa',
          width: 350,
          justifyContent: 'center',
        }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(city) => oncitychange(city.value)}
      />

      <Text style={styles.setText}>Password</Text>
      <TextInput
        style={styles.inputBox}
        secureTextEntry={true}
        onChangeText={onchangepassword}
      />
      <TouchableOpacity style={styles.btnbox} onPress={Postdata}>
        <Text style={styles.btntext}>SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexGrow: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  setText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputBox: {
    marginVertical: 10,
    width: 350,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    backgroundColor: '#fafafa',
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
