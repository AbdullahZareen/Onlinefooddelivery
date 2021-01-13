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
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
export default function ResturantSignup() {
  const [name, onchangename] = useState('')
  const [number, onchangenumber] = useState('')
  const [address, onchangeadress] = useState('')
  const [password, onchangepassword] = useState('')
  const [email, onChangeemail] = useState('')
  const [city, oncitychange] = useState('')
  const [image, onImagePick] = useState(null)
  console.log(image)
  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])
  const Postdata = () => {
    if (password == '' && email == '') {
      alert('fill the feilds')
    } else {
      try {
        let result = fetch(
          'http://' + ipaddress + '/fypapi/api/resturat/addresturant',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              rcname: name,
              rcemail: email,
              rcAddrees: address,
              rccity: city,
              rcnumber: number,
              rpassword: password,
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

  //   const Postdata = () => {
  //     if (password == '' && email == '' && number == '') {
  //       alert('fill the feilds')
  //     } else {
  //       try {
  //         let result = fetch(
  //           'http://192.168.2.103/fypapi/api/customers/addcustomers',
  //           {
  //             method: 'POST',
  //             headers: {
  //               Accept: 'application/json',
  //               'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({
  //               cname: name,
  //               cnumber: number,
  //               cemail: email,
  //               cAddrees: address,
  //               cpassward: password,
  //               ccity: city,
  //             }),
  //           }
  //         )
  //       console.log(result)
  //       } catch (e) {
  //         console.log(e)
  //       }
  //     }
  //   }
  return (
    <View style={styles.container}>
      <Text>{image}</Text>
      <Text style={styles.setText}> Owner Name</Text>
      <TextInput style={styles.inputBox} onChangeText={onchangename} />
      <Text style={styles.setText}>Bussiness Name</Text>
      <TextInput style={styles.inputBox} />
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
          width: 300,
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
      <TouchableOpacity style={styles.btnbox}>
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
