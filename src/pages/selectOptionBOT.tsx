import { View, Text, Pressable, Alert, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import BottomNavBar from '../components/bottomnav';


function Selectbot({navigation}): React.JSX.Element {
    return (

        <ScrollView>
            <View style={{flex:1, flexDirection:'column', backgroundColor:'white'}}>
                <View style={{ flex: 8 }}>
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
                    }} source={require('../../assets/images/man.png')} />
                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#8C05D3',
                    borderRadius: 20,
                    marginBottom: 40,
                    marginLeft: 60,
                    marginRight: 60
                }}>
                    <Pressable style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onPress={() => navigation.navigate('Advisor bot select first aid')}>
                        <Image style={{
                            width: 10,
                            height: 10,
                            flex: 1,
                            padding: 30
                        }} source={require('../../assets/images/Logo.png')} />

                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            paddingLeft: 10,
                            flex: 5,
                            padding: 20,

                        }}>
                            Advisor Bot
                        </Text>
                    </Pressable>
                </View>





                <View style={{
                    flex: 2,
                    backgroundColor: '#8C05D3',
                    borderRadius: 20,
                    marginBottom: 40,
                    marginLeft: 60,
                    marginRight: 60,


                }} >
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
                        }} source={require('../../assets/images/van.png')} />

                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            paddingLeft: 10,
                            flex: 5,
                            padding: 20,
                            paddingTop: 5

                        }}>
                            Contact Ambulance
                        </Text>
                    </Pressable>

                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#8C05D3',
                    borderRadius: 20,
                    marginBottom: 40,
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
                        }} source={require('../../assets/images/report.png')} />

                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            paddingLeft: 10,
                            flex: 5,
                            padding: 20,
                            paddingTop: 4

                        }}>
                            First Aid Reports
                        </Text>
                    </Pressable>


                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#8C05D3',
                    borderRadius: 20,
                    marginBottom: 40,
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
                        }} source={require('../../assets/images/learn.png')} />

                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            paddingLeft: 10,
                            flex: 5,
                            padding: 20,
                            paddingTop: 4

                        }}>
                            Learn First Aid
                        </Text>
                    </Pressable>
                </View>
                <BottomNavBar/>
            </View>
        </ScrollView>

    );
}


export default Selectbot;
