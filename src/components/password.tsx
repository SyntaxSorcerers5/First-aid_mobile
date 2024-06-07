import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Password = () => {
  return (
    <View>
      <TextInput style={{
        backgroundColor:'#e3e359',
        color: '#000',
        width: 390,
        height:50,
        marginTop: 50,
        borderRadius: 20,
        paddingLeft:10,
        marginLeft:20 
      }}  
      placeholder='Password'
      placeholderTextColor={'#444'}    
      />
    </View>
  )
}



export default Password