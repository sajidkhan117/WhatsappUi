import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons, Feather, Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';



export default function Footer() {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.whatsappIcons}>
        <Ionicons name="chatbox" size={26} color="green" />
        <Feather name="phone-call" size={24} color="black" />
        <Entypo name="camera" size={24} color="black" />
        <AntDesign name="contacts" size={24} color="black" />
        <MaterialIcons name="account-circle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    // backgroundColor: 'red',
    // height: '200',

  },

  whatsappIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '100',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    padding: 12,
  }
})