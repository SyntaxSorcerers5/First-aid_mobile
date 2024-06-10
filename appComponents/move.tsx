import { View, Text, Pressable, Image, Alert } from 'react-native'
import React from 'react'

// BottomNavBar
const Moveamong = () => {
    return (
        <View style={{backgroundColor: 'white', flexDirection: 'row', justifyContent:'space-around' }} >
            <View >
                <Pressable
                    onPress={() => alert("hi 2")}>
                    <Image style={{
                        width: 2,
                        height: 2,
                        padding: 30,

                    }} source={require('../assets/images/Logo.png')} />
                </Pressable>
            </View>

            <View>
                <Pressable
                    onPress={() => alert("hi 2")}>
                    <Image style={{
                        width: 2,
                        height: 2,
                        padding: 30
                    }} source={require('../assets/images/van.png')} />
                </Pressable>
            </View>

            <View>
                <Pressable
                    onPress={() => alert("hi 2")}>
                    <Image style={{
                        width: 2,
                        height: 2,
                        padding: 30
                    }} source={require('../assets/images/report.png')} />
                </Pressable>
            </View>

            <View>
                <Pressable
                    onPress={() => alert("hi 2")}>
                    <Image style={{
                        width: 2,
                        height: 2,
                        padding: 30
                    }} source={require('../assets/images/learn.png')} />
                </Pressable>
            </View>
        </View>
    )
}

export default Moveamong