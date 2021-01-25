import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { Checkbox, RadioButton } from 'react-native-paper'

import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useSchedule } from '../Context/Schedulecontext'
import { useUser } from '../Context/UserContext'
const Screen = ({ navigation }) => {
  const [day, setDay] = useState('')
  const [meal, setMeal] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const { menu, setMenu } = useSchedule()
  const { pickfood, setPickfood } = useSchedule()
  const { user, ipaddress } = useUser()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (time) => {
    const arr = time.split('T')
    console.log('A date has been picked: ', arr[0])

    //console.log('A date has been picked: ', time)
    hideDatePicker()
  }
  function postschedule() {
    for (let i = 0; i < pickfood.length; i++) {
      try {
        let result = fetch(
          'http://' + ipaddress + '/fypapi/api/schedule/addschedule',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Deleiveryday: day,
              dtime: time,
              Routinetype: meal,
              quantity: pickfood[i].qty,
              fid: pickfood[i].fid,
              cid: user.u_id,
            }),
          }
        )
          .then((response) => response.json())
          .then((json) => {
            console.log('data save id>>>>>>>>>>>>>', json)
            console.log('day>>>time', day, time)
          })
      } catch (e) {
        console.log(e)
      }
      setPickfood([])
    }
    // for (let i = 0; i < pickfood.length; i++) {
    //   console.log('pickfood>>>>>>>>>>', pickfood[0].fid)
    // }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Day</Text>
      <DropDownPicker
        items={[
          { label: 'Monday', value: 'Monday' },
          { label: 'Tuesday', value: 'Tuesday' },
          { label: 'Wednesday', value: 'Wednesday' },
          { label: 'Thurday', value: 'Thursday' },
          { label: 'Friday', value: 'Friday' },
        ]}
        containerStyle={{ height: 50 }}
        style={{
          backgroundColor: '#fafafa',
          width: 350,
          justifyContent: 'center',
        }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(day) => setDay(day.value)}
      />
      <Text style={styles.text}>Meal</Text>
      <DropDownPicker
        items={[
          { label: 'Break Fast', value: 'breakfast', hidden: true },
          { label: 'Lunch', value: 'lunch' },
          { label: 'Dinner', value: 'dinner' },
        ]}
        containerStyle={{ height: 50 }}
        style={{
          backgroundColor: '#fafafa',
          width: 350,
          justifyContent: 'center',
        }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(meal) => setMeal(meal.value)}
      />

      <Button title="Pick Time" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={{ marginTop: 150 }}>
        <TouchableOpacity
          style={styles.btnbox}
          onPress={() => navigation.navigate('Resturant')}
        >
          <Text style={styles.btntext}>Choose Food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnbox} onPress={postschedule}>
          <Text style={styles.btntext}>Save to schedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 50,
    justifyContent: 'center',
  },
  btntext: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnbox: {
    width: 350,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
  },
})

export default Screen
