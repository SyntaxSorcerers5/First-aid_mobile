import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Pressable, Alert, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import BottomNavBar from '../components/bottomnav';



function Learn({navigation}): React.JSX.Element {


    return (

        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ flex: 1, backgroundColor: 'white' }}>

                    <View style={{ flex: 1, backgroundColor: '#FFFFC6', flexDirection: 'row', 
                        borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }} >
                        <Text style={{
                            fontSize: 50,
                            color: '#8C05D3',
                            marginLeft: 60,
                            flex: 3,
                            textAlign: 'center',
                            padding: 28


                        }}>
                            Learn First Aid</Text>
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
                            width: 100,
                            height: 100,
                        }} source={require('../../assets/images/Logo.png')} />
                    </View>


                    <View style={{ flex: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{
                            fontSize: 40,
                            color: '#8C05D3',
                        }}>
                            How Can I Help You ? </Text>
                    </View>

                    <View style={{ flex: 8, backgroundColor: 'white' }} >

                        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                            <TouchableOpacity style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                onPress={() => navigation.navigate('Bleed')}>
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
                                onPress={() => navigation.navigate('Faint')}>
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
                                onPress={() => navigation.navigate('Shocking')}>
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
                                onPress={() => navigation.navigate('Fract')}>
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
                                onPress={() => navigation.navigate('Burning')}>
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
                                onPress={() => navigation.navigate('Drown')}>
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
                </View>

            </ScrollView>

        </View>













    );
}


export default Learn;
