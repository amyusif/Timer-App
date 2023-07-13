import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'



const ButtonAdd = ({press, title, width, height}) => {
  return (
    <View>
    <TouchableOpacity style = {{
    borderRadius: '50%',
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height
    }} onPress={press}>
    <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default ButtonAdd



const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})