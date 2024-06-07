import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Username = () => {

  const [username, setUsername] =  useState()


  function onUsernameChanged(e){
    console.log(e)
    setUsername(e)
  }

  return (
    <View>
      <TextInput style={{
        backgroundColor:'#e3e359',
        color: '#000',
        width: 390,
        height:50,
        marginTop: 250,
        borderRadius: 20,
        paddingLeft:10,
        marginLeft:20 
      }} 
      value={username}
      onChangeText={onUsernameChanged}
      placeholder='Username'
      placeholderTextColor={'#444'}    
      />

      
    </View>
  )
}



export default Username