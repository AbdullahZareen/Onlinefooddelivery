import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
export default function AddFoodScreen() {
  const [image, onImagePick] = useState(null)
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
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
    })

    if (!result.cancelled) {
      onImagePick(result.uri)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.setText}>Image</Text>
      {image !== null ? (
        <Image source={{ uri: image }} style={{ width: 200, height: 100 }} />
      ) : null}
      <Button style={{ Color: '#1c313a' }} title="Browse" onPress={pickImage} />
      <Text style={styles.setText}>Food Name</Text>
      <TextInput style={styles.inputBox} />
      <Text style={styles.setText}>Type</Text>
      <TextInput style={styles.inputBox} />
      <Text style={styles.setText}>Pirce</Text>
      <TextInput style={styles.inputBox} />
      <Text style={styles.setText}>Discount</Text>
      <TextInput style={styles.inputBox} />
      <Text style={styles.setText}>Cooking Time</Text>
      <TextInput style={styles.inputBox} />
      <TouchableOpacity style={styles.btnbox}>
        <Text style={styles.btntext}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  setbtn: {
    color: '#1c313a',
  },
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
