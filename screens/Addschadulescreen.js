import React from 'react'
import { Checkbox, View } from 'react-native-paper'
export const Addschadule = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <View>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked)
        }}
      />
    </View>
  )
}
