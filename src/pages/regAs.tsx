import { View, Text, Pressable, Alert, Image } from 'react-native'
import React from 'react'
import Welcome from '../components/welcome';


function RegAs({navigation}): React.JSX.Element {
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
        <View style={{
            flex: 1,

        }}>
            <Welcome />
            <View style={{ flex: 1 }}>
                <Text style={{
                    color: '#D21E5F',
                    fontSize: 50,
                    margin: "auto",
                    marginBottom: 40
                }}> Register as a</Text>
            </View>
            <View style={{
                flex: 2,
                backgroundColor: '#FFFFC6',
                borderRadius: 50,
                marginBottom: 40,
                marginLeft: 20,
                marginRight: 20
            }}> 
                <Pressable style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    onPress={() => navigation.navigate('Register User')}>
                    <Image style={{
                        width: 100,
                        height: 100,
                        flex: 1,
                        padding: 30
                    }} source={require('../../assets/images/user.png')} />
                    <Text style={{
                        fontSize: 50,
                        color: '#D21E5F',
                        paddingLeft: 10,
                        flex: 5,
                        padding: 20,

                    }}>
                        General User
                    </Text>
                </Pressable>
            </View>

            <View style={{
                flex: 2, backgroundColor: '#FFFFC6',
                borderRadius: 50,
                marginBottom: 40,
                marginLeft: 20,
                marginRight: 20
            }}>
                <Pressable style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    onPress={() => navigation.navigate('Register Emergency')}>
                    <Image style={{
                        width: 100,
                        height: 100,
                        flex: 1,
                        padding: 30
                    }} source={require('../../assets/images/van.png')} />
                    <Text style={{
                        backgroundColor: '#FFFFC6',
                        color: '#D21E5F',
                        fontSize: 50,
                        flex: 5,
                        padding: 20
                    }}>Emergency Service</Text>
                </Pressable>
            </View>
        </View >
        </View>
    );
}


export default RegAs;
