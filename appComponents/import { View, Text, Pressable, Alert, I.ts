import { View, Text, Pressable, Alert, Image } from 'react-native'
import React from 'react'


function Selectbot(): React.JSX.Element {
    return (

        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
            <View style={{ flex: 1 }} />
            <Text style={{
                fontSize: 30,
                color: '#8C05D3',
                marginLeft: 60
            }}>
                Virtual First Aid Advisor</Text>
            <Image style={{
                width: 300,
                height: 300,
                marginLeft: 50
            }} source={require('../assets/images/man.png')} />


            <View style={{
                flex: 3,

                backgroundColor: '#8C05D3',
                borderRadius: 20,
                marginBottom: 40,
                marginLeft: 60,
                marginRight: 60
            }} />



            <View style={{
                flex: 3,

                backgroundColor: '#8C05D3',
                borderRadius: 20,
                marginBottom: 40,
                marginLeft: 60,
                marginRight: 60,

            }} />

            <View style={{
                flex: 3,

                backgroundColor: '#8C05D3',
                borderRadius: 20,
                marginBottom: 40,
                marginLeft: 60,
                marginRight: 60
            }} />

            <View style={{
                flex: 3,

                backgroundColor: '#8C05D3',
                borderRadius: 20,
                marginBottom: 40,
                marginLeft: 60,
                marginRight: 60
            }} />




            <View style={{ flex: 3, backgroundColor: 'white' }} />












        </View>
    );
}


export default Selectbot;
