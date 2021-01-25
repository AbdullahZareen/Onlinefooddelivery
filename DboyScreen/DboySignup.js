import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Platform,
  ScrollView,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { useUser } from '../Context/UserContext'
export default function ResturantSignup() {
  const [name, onchangename] = useState('')
  const [number, onchangenumber] = useState('')
  const [address, onchangeadress] = useState('')
  const [password, onchangepassword] = useState('')
  const [email, onChangeemail] = useState('')
  const [city, oncitychange] = useState('')
  const [image, onImagePick] = useState(null)
  const [bikenumber, setbikenumber] = useState('')
  const { ipaddress } = useUser()
  useEffect(() => {
    // ;(async () => {
    //   if (Platform.OS !== 'web') {
    //     const {
    //       status,
    //     } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    //     if (status !== 'granted') {
    //       alert('Sorry, we need camera roll permissions to make this work!')
    //     }
    //   }
    // })()
  }, [])
  const Postdata = () => {
    if ((password == '') | (email == '') | (image == null)) {
      alert('fill the feilds')
    } else {
      try {
        let result = fetch(
          'http://' + ipaddress + '/fypapi/api/DeliveryBoy/AdddeliveryBoy',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              dname: name,
              daddress: address,
              dcity: city,
              dbikenumber: bikenumber,
              dnumber: number,
              demail: email,
              dpassword: password,
            }),
          }
        )
        alert('saved')
      } catch (e) {
        console.log(e)
      }
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      base64: false,
      allowsEditing: false,
      aspect: [4, 3],
    })

    if (!result.cancelled) {
      onImagePick(result.uri)
    }
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.setText}>Image</Text>

      {image !== null ? (
        <Image
          source={{ uri: image }}
          style={{ width: 350, height: 100, alignItems: 'center' }}
        />
      ) : null}
      <Button
        style={{ Color: '#1c313a' }}
        title="Browse Image"
        onPress={pickImage}
      />
      <Text style={styles.setText}>Name</Text>
      <TextInput style={styles.inputBox} onChangeText={onchangename} />
      <Text style={styles.setText}>Phone Number</Text>
      <TextInput style={styles.inputBox} onChangeText={onchangenumber} />
      <Text style={styles.setText}>Email</Text>
      <TextInput style={styles.inputBox} onChangeText={onChangeemail} />
      <Text style={styles.setText}>Address</Text>
      <TextInput style={styles.inputBox} onChangeText={onchangeadress} />
      <Text style={styles.setText}>Bike Number</Text>
      <TextInput style={styles.inputBox} onChangeText={setbikenumber} />

      <Text style={styles.setText}>City</Text>
      <DropDownPicker
        items={[
          { label: 'Islamabad', value: 'Islamabad', hidden: true },
          { label: 'Rawalpindi', value: 'Rawalpindi' },
          { label: 'karachi', value: 'karachi' },
          { label: 'Lahore', value: 'Lahore' },
          { label: 'Haripur', value: 'Haripur' },
        ]}
        placeholder="select city"
        containerStyle={{ height: 50 }}
        style={{
          width: 350,
          justifyContent: 'center',
          color: 'black',
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexGrow: 1,
    backgroundColor: '#fff',
    marginTop: 10,
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
