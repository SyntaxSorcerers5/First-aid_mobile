import { View, Text, TouchableOpacity, Alert, Image, SafeAreaView, ScrollView } from 'react-native'
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
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onPress={() => navigation.navigate('Chatbot')}>
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
                            padding: 30,

                        }}>
                            Advisor Bot
                        </Text>
                    </TouchableOpacity>
                </View>





                <View style={{
                    flex: 2,
                    backgroundColor: '#8C05D3',
                    borderRadius: 20,
                    marginBottom: 40,
                    marginLeft: 60,
                    marginRight: 60,


                }} >
                    <TouchableOpacity style={{
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
                        }} source={require('../../assets/images/van2.png')} />

                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            paddingLeft: 10,
                            flex: 5,
                            padding: 20,
                            paddingTop: 12

                        }}>
                            Contact Ambulance
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#8C05D3',
                    borderRadius: 20,
                    marginBottom: 40,
                    marginLeft: 60,
                    marginRight: 60
                }}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onPress={() => navigation.navigate('FirstaidReport')}>
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
                            paddingTop: 12

                        }}>
                            First Aid Reports
                        </Text>
                    </TouchableOpacity>


                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#8C05D3',
                    borderRadius: 20,
                    marginBottom: 40,
                    marginLeft: 60,
                    marginRight: 60
                }}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onPress={() => navigation.navigate('Learn first aid')}>
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
                            paddingTop: 12

                        }}>
                            Learn First Aid
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 2,
                    backgroundColor: '#8C05D3',
                    borderRadius: 20,
                    marginBottom: 40,
                    marginLeft: 60,
                    marginRight: 60
                }}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onPress={() => navigation.navigate('Give feedback')}>
                        {/* <Image style={{
                            width: 10,
                            height: 10,
                            flex: 1,
                            padding: 30
                        }} source={require('../../assets/images/feedback.png')} /> */}

                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            paddingLeft: 30,
                            flex: 5,
                            padding: 20,
                            paddingTop: 12

                        }}>
                            Give your feedback
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#8C05D3',
                    borderRadius: 20,
                    marginBottom: 40,
                    marginLeft: 60,
                    marginRight: 60
                }}>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onPress={() => navigation.navigate('Log out')}>
                        {/* <Image style={{
                            width: 10,
                            height: 10,
                            flex: 1,
                            padding: 30
                        }} source={require('../../assets/images/feedback.png')} /> */}

                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            paddingLeft: 90,
                            flex: 5,
                            padding: 10,
                            paddingTop: 12

                        }}>
                            Log out
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
}


export default Selectbot;
