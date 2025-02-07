import { View, Text, Pressable, Image, Alert, TouchableOpacity } from 'react-native'
import React from 'react'


const BottomNavBar = ({navigation}) => {
    return (
        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around' }} >

            <View>  
                <Pressable
                    onPress={() => navigation.navigate("Option selection")}>
                    <Image style={{
                        width: 2,
                        height: 2,
                        padding: 30
                    }} source={require('../../assets/images/home.png')} />
                </Pressable>
            </View>
            <View >
                <Pressable
                    onPress={() => navigation.navigate("Login")}>
                    <Image style={{
                        width: 2,
                        height: 2,
                        padding: 30,

                    }} source={require('../../assets/images/Logo.png')} />
                </Pressable>
            </View>

            <View>
                <Pressable
                    onPress={() => navigation.navigate("Register")}>
                    <Image style={{
                        width: 2,
                        height: 2,
                        padding: 30
                    }} source={require('../../assets/images/van.png')} />
                </Pressable>
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("ComingSoon")}>
                    <Image style={{
                        width: 2,
                        height: 2,
                        padding: 30
                    }} source={require('../../assets/images/report.png')} />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => alert("hi 2")}>
                    <Image style={{
                        width: 2,
                        height: 2,
                        padding: 30
                    }} source={require('../../assets/images/learn.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomNavBar