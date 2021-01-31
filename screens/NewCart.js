import React from 'react'
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from 'react-native-vector-icons'
import {
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
  TextInput,
  Alert,
} from 'react-native'

export default function mycart() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f6f6f6', paddingTop: 30 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginBottom: 2,
            height: 120,
          }}
        >
          <View style={[styles.centerElement, { width: 60 }]}>
            <TouchableOpacity
              style={[styles.centerElement, { width: 32, height: 32 }]}
              onPress={() => this.selectHandler(i, item.checked)}
            >
              <Text>tick</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              alignSelf: 'center',
            }}
          >
            <TouchableOpacity onPress={() => {}} style={{ paddingRight: 10 }}>
              <Image
                style={[
                  styles.centerElement,
                  { height: 60, width: 60, backgroundColor: '#eeeeee' },
                ]}
              />
            </TouchableOpacity>
            <View
              style={{
                flexGrow: 1,
                flexShrink: 1,
                alignSelf: 'center',
              }}
            >
              <Text numberOfLines={1} style={{ fontSize: 15 }}>
                name
              </Text>
              <Text numberOfLines={1} style={{ color: '#8f8f8f' }}>
                color
              </Text>
              <Text
                numberOfLines={1}
                style={{ color: '#333333', marginBottom: 10 }}
              >
                totalprice
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  //onPress={() => this.quantityHandler('less', i)}
                  style={{ borderWidth: 1, borderColor: '#cccccc' }}
                >
                  <MaterialIcons name="remove" size={22} color="#cccccc" />
                </TouchableOpacity>
                <Text
                  style={{
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: '#cccccc',
                    paddingHorizontal: 7,
                    paddingTop: 3,
                    color: '#bbbbbb',
                    fontSize: 13,
                  }}
                >
                  quantity
                </Text>
                <TouchableOpacity
                  // onPress={() => this.quantityHandler('more', i)}
                  style={{ borderWidth: 1, borderColor: '#cccccc' }}
                >
                  <MaterialIcons name="add" size={22} color="#cccccc" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.centerElement, { width: 60 }]}>
            <TouchableOpacity
              style={[styles.centerElement, { width: 32, height: 32 }]}
              onPress={() => {}}
            >
              <Ionicons name="md-trash" size={25} color="#ee4d2d" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#fff',
          borderTopWidth: 2,
          borderColor: '#f6f6f6',
          paddingVertical: 5,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          {/* <View style={[styles.centerElement, { width: 60 }]}>
            <View style={[styles.centerElement, { width: 32, height: 32 }]}>
              <MaterialCommunityIcons name="ticket" size={25} color="#f0ac12" />
            </View>
          </View> */}
          {/* <View
            style={{
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text>Voucher</Text>
            <View style={{ paddingRight: 20 }}>
              <TextInput
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: '#f0f0f0',
                  height: 25,
                  borderRadius: 4,
                }}
                placeholder="Enter voucher code"
                value={''}
                onChangeText={(searchKeyword) => {}}
              />
            </View> */}
          {/* </View> */}
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.centerElement, { width: 60 }]}>
            <TouchableOpacity
              style={[styles.centerElement, { width: 32, height: 32 }]}
              //  onPress={() => this.selectHandlerAll(selectAll)}
            ></TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text>Select All</Text>
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 20,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#8f8f8f' }}>SubTotal: </Text>
              <Text></Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 32,
            paddingRight: 20,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={[
              styles.centerElement,
              {
                backgroundColor: '#0faf9a',
                width: 100,
                height: 25,
                borderRadius: 5,
              },
            ]}
            onPress={() => console.log('test')}
          >
            <Text style={{ color: '#ffffff' }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  centerElement: { justifyContent: 'center', alignItems: 'center' },
})
