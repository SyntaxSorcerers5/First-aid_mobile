
import { View, Text, Pressable, Alert, Image, ScrollView } from 'react-native'
import React from 'react'



function Notify(): React.JSX.Element {
    return (
        
            <View style={{ backgroundColor: 'white', height: '100%' }}>

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <Text style={{ color: 'red', fontSize: 50, paddingLeft: 40 }}>Notification comes here</Text>
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <View style={{
                            flex: 2,
                            backgroundColor: '#8C05D3',
                            borderRadius: 10,
                            marginBottom: 20,
                            marginLeft: 60,
                            marginRight: 60
                        }}>
                            <Pressable style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => alert("hi 2")}>
                                <Image style={{
                                    width: 10,
                                    height: 10,
                                    flex: 1,
                                    padding: 30
                                }} source={require('../../assets/images/mandown.png')} />

                                <Text style={{
                                    fontSize: 25,
                                    color: 'white',
                                    paddingLeft: 5,
                                    flex: 12,
                                    padding: 10


                                }}>
                                    Nature of Accident
                                </Text>
                            </Pressable>
                        </View>


                        <View style={{
                            flex: 2,
                            backgroundColor: '#8C05D3',
                            borderRadius: 10,
                            marginBottom: 20,
                            marginLeft: 60,
                            marginRight: 60
                        }}>
                            <Pressable style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => alert("hi 2")}>
                                <Image style={{
                                    width: 10,
                                    height: 10,
                                    flex: 1,
                                    padding: 30
                                }} source={require('../../assets/images/Location.png')} />

                                <Text style={{
                                    fontSize: 25,
                                    color: 'white',
                                    paddingLeft: 10,
                                    flex: 12,
                                    padding: 20,

                                }}>
                                    View Location
                                </Text>
                            </Pressable>
                        </View>

                        <View style={{
                            flex: 2,
                            backgroundColor: '#8C05D3',
                            borderRadius: 10,
                            marginBottom: 20,
                            marginLeft: 60,
                            marginRight: 60,
                        }}>

                            <Pressable style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => alert("hi 2")}>
                                <Image style={{
                                    width: 10,
                                    height: 10,
                                    flex: 1,
                                    padding: 30
                                }} source={require('../../assets/images/phone.png')} />

                                <Text style={{
                                    fontSize: 25,
                                    color: 'white',
                                    paddingLeft: 10,
                                    flex: 12,
                                    padding: 20,

                                }}>
                                    Call to Patient
                                </Text>
                            </Pressable>
                        </View>
                    </View>


                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Text style={{
                                fontSize: 40,
                                color: '#8C05D3',
                                paddingLeft: 10,
                                padding: 20,


                            }}>
                                Can You Help Them ?
                            </Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                            <View style={{
                                flex: 1,
                                backgroundColor: '#D21E5F',
                                borderRadius: 10,
                                marginBottom: 20,
                                marginLeft: 60,
                                marginRight: 60,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>

                                <Pressable style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                    onPress={() => alert("hi 2")}>

                                    <Text style={{
                                        fontSize: 25,
                                        color: 'white'
                                    }}>
                                        Accept
                                    </Text>
                                </Pressable>
                            </View>
                        </View>

                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                            <View style={{
                                flex: 1,
                                backgroundColor: '#D21E5F',
                                borderRadius: 10,
                                marginBottom: 30,
                                marginLeft: 60,
                                marginRight: 60,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>

                                <Pressable style={{
                                    flex: 1,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                                    onPress={() => alert("hi 2")}>

                                    <Text style={{
                                        fontSize: 25,
                                        color: 'white'
                                    }}>
                                        Decline
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        



    );
}


export default Notify;