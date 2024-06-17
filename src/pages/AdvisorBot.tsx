import React, { useState } from 'react';
import { View, Text, Pressable, Alert, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'



function Advisorbot(): React.JSX.Element {

    function OnMessageChanged(changedMessage) {
        setMessage(changedMessage)
    }

    const [Message, setMessage] = useState()



    return (

        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ flex: 1, backgroundColor: 'white' }}>

                    <View style={{ flex: 1, backgroundColor: '#FFFFC6', flexDirection: 'row', borderBottomLeftRadius: 70, borderBottomRightRadius: 70 }} >
                        <Text style={{
                            fontSize: 40,
                            color: '#8C05D3',
                            marginLeft: 60,
                            flex: 3,
                            textAlign: 'center',
                            padding: 28


                        }}>
                            Advisor Bot</Text>
                        <Image style={{
                            flex: 1,
                            width: 90,
                            height: 90,
                            marginLeft: 10,
                            marginTop: 20
                        }} source={require('../../assets/images/vanchat.png')} />
                    </View>

                    <View style={{ flex: 2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
                        <Image style={{
                            width: 200,
                            height: 200,
                        }} source={require('../../assets/images/Logo.png')} />
                    </View>


                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{
                            fontSize: 40,
                            color: '#8C05D3',
                        }}>
                            How Can I Help You ? </Text>
                    </View>

                    <View style={{ flex: 3, backgroundColor: 'white' }} >

                        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                            <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => alert("hi 2")}>
                                <Text style={{
                                    fontSize: 30,
                                    color: 'white',
                                    paddingLeft: 40,
                                    flex: 1,
                                    padding: 30,
                                    borderRadius: 20,
                                    backgroundColor: '#8C05D3',
                                    marginLeft: 20,
                                    marginRight: 10
                                }}>
                                    Bleeding
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => alert("hi 2")}>
                                <Text style={{
                                    fontSize: 30,
                                    color: 'white',
                                    paddingLeft: 40,
                                    flex: 1,
                                    padding: 30,
                                    borderRadius: 20,
                                    backgroundColor: '#8C05D3',
                                    marginLeft: 5,
                                    marginRight: 10

                                }}>
                                    Fainting
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                            <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => alert("hi 2")}>
                                <Text style={{
                                    fontSize: 30,
                                    color: 'white',
                                    paddingLeft: 40,
                                    flex: 1,
                                    padding: 30,
                                    borderRadius: 20,
                                    backgroundColor: '#8C05D3',
                                    marginLeft: 20,
                                    marginRight: 10
                                }}>
                                    Shock
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => alert("hi 2")}>
                                <Text style={{
                                    fontSize: 30,
                                    color: 'white',
                                    paddingLeft: 40,
                                    flex: 1,
                                    padding: 30,
                                    borderRadius: 20,
                                    backgroundColor: '#8C05D3',
                                    marginLeft: 5,
                                    marginRight: 10

                                }}>
                                    Fractures
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                            <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => alert("hi 2")}>
                                <Text style={{
                                    fontSize: 27,
                                    color: 'white',
                                    paddingLeft: 30,
                                    flex: 1,
                                    padding: 30,
                                    borderRadius: 20,
                                    backgroundColor: '#8C05D3',
                                    marginLeft: 20,
                                    marginRight: 10
                                }}>
                                    Burn
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => alert("hi 2")}>
                                <Text style={{
                                    fontSize: 30,
                                    color: 'white',
                                    paddingLeft: 40,
                                    flex: 1,
                                    padding: 30,
                                    borderRadius: 20,
                                    backgroundColor: '#8C05D3',
                                    marginLeft: 5,
                                    marginRight: 10

                                }}>
                                    Drowning
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }} >
                        <TextInput
                            style={{
                                backgroundColor: '#FFFFC6',
                                color: 'black',
                                width: 370,
                                height: 70,
                                marginTop: 10,
                                borderRadius: 30,
                                marginLeft: 20,
                                marginRight: 20,
                                paddingLeft: 50,
                                fontSize: 25,
                                flex: 9
                            }}

                            onChangeText={OnMessageChanged}
                            placeholder='Type a message'
                            placeholderTextColor={'#444'} />

                        <TouchableOpacity style={{
                            flex: 2,
                            flexDirection: "row",

                        }}
                            onPress={() => alert("hi 2")}>
                            <Image style={{
                                width: 20,
                                height: 60,
                                flex: 1,
                                paddingTop: 80
                            }} source={require('../../assets/images/sendmsg.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

        </View>













    );
}


export default Advisorbot;
