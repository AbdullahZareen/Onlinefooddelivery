import React from 'react'
import { View, Text, Button, ScrollView, StyleSheet, Image } from 'react-native'
import { useUser } from '../Context/UserContext'
const Screen = () => {
  const { user } = useUser()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      {/* <Image style={styles.avatar} source={{ uri: APP_URL + user.image }} /> */}
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}> Abc</Text>
          <Text style={styles.name}>customers</Text>

          <Text style={styles.info}>BSCS-8B (BATCH: 2017)</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'teal',
    height: 100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#393939',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: 'teal',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
export default Screen
