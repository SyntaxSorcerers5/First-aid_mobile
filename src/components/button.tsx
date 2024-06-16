import { View, Text, ButtonProps, Pressable } from 'react-native'
import React from 'react'

const Button = ({ onclick, title, bgcolor }) => {
  return (
    <View style={{ borderRadius: 20, marginHorizontal: 20, backgroundColor: bgcolor }}>
      <Pressable style={{
        marginVertical: 12,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:20
      }}
        onPress={onclick}>

        <Text style={{
          fontSize: 24,
          color: 'white',
          padding: 10
        }}>
          {title}
        </Text>
      </Pressable>
    </View>
  )
}

export default Button