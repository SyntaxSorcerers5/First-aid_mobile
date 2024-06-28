import { View, Text, Pressable, Alert, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BottomNavBar from '../components/bottomnav'



function Feedback2(): React.JSX.Element {
    function OnFeedbackChanged1(changedFeedback1) {
        setMessage(changedFeedback1)
    }

    function OnFeedbackChanged2(changedFeedback2) {
        setMessage(changedFeedback2)
    }


    const [Message, setMessage] = useState()
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* Title */}
                <View style={{ flex: 1, backgroundColor: '#FFFFC6', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{
                        marginLeft: 20,
                        marginTop: 20,
                        width: 40,
                        height: 40
                    }} source={require('../../assets/images/Logo.png')} />

                    <Text style={{
                        marginTop: 20,
                        marginLeft: 20,
                        color: '#8C05D3',
                        fontSize: 40,
                        textAlign: 'center'
                    }}>Give Feedback</Text>
                </View>

                {/* Description */}
                <View style={{ flex: 1, backgroundColor: '#FFFFC6', paddingTop: 20 }}>
                    <Text style={{ color: 'black', fontSize: 20, paddingLeft: 20, flex: 1 }}>Your feedback matters!</Text>
                    <Text style={{ color: 'black', fontSize: 15, paddingLeft: 20, flex: 2 }}>Thank you for using our First Aid Advisor App. Your feedback
                        helps us improve our services to better meet your needs. Please
                        take a moment to share your thoughts with us.</Text>
                </View>

                {/* Q1 */}
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 20
                    }}>
                        1. Did our application help you in your time of need?
                    </Text>
                </View>

                {/* Q1 Answer */}
                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: '#8C05D3',
                        borderRadius: 20,
                        marginVertical: 1,
                        marginHorizontal: 1,
                    }} >
                        <TouchableOpacity style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                            onPress={() => alert("hi 2")}>

                            <Text style={{
                                fontSize: 15,
                                color: 'white',
                                paddingLeft: 10,
                                flex: 5,
                                padding: 20,
                            }}>
                                Yes
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 1,
                        backgroundColor: '#8C05D3',
                        borderRadius: 20,
                    }} >
                        <TouchableOpacity style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                            onPress={() => alert("hi 2")}>

                            <Text style={{
                                fontSize: 15,
                                color: 'white',
                            }}>
                                No
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


                {/* Q2 */}
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 20
                    }}>
                        2 . Did you find the app easy to navigate and use?
                    </Text>
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
                        onPress={() => alert("hi 2")}>

                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            paddingLeft: 10,
                            flex: 5,
                            padding: 20,

                        }}>
                            Yes, Very easy
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
                        onPress={() => alert("hi 2")}>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            paddingLeft: 10,
                            flex: 5,
                            padding: 20,

                        }}>
                            Yes, Somewhat Easy
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
                        onPress={() => alert("hi 2")}>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            paddingLeft: 10,
                            flex: 5,
                            padding: 20,

                        }}>
                            No, Somewhat Difficult
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
                        onPress={() => alert("hi 2")}>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            paddingLeft: 10,
                            flex: 5,
                            padding: 20,

                        }}>
                            No, Very Difficult
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 15
                    }}>
                        3.Do you have any suggestions for improving the app's
                        functionality or user experience?
                    </Text>
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

                        onChangeText={OnFeedbackChanged1}
                        placeholder='Type a message'
                        placeholderTextColor={'#444'} />
                </View>

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 15
                    }}>
                        4. What is the Rate you can give about app?
                    </Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'red',
                        paddingLeft: 15
                    }}>
                        Five stars come here
                    </Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Text style={{
                        fontSize: 20,
                        color: '#8C05D3',
                        paddingLeft: 15
                    }}>
                        5.Do you have any suggestions for improving the app's
                        functionality or user experience?
                    </Text>
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

                        onChangeText={OnFeedbackChanged2}
                        placeholder='Type a message'
                        placeholderTextColor={'#444'} />
                </View>


                <View style={{ flex: 1, backgroundColor: 'white' }} >
                    <TouchableOpacity style={{ marginLeft: 80, marginRight: 80 }} onPress={() => navigation.navigate('Login')}>
                        <Text style={{
                            backgroundColor: '#D21E5F',
                            color: 'white',
                            fontSize: 70,
                            alignItems: 'center',
                            borderRadius: 40,
                            paddingLeft: 30,
                            marginTop: 15
                        }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
}


export default Feedback2;