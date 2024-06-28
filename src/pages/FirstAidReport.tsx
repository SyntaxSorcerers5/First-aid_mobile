import { View, Text, Pressable, Alert, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Welcome from '../components/welcome';
import BottomNavBar from '../components/bottomnav';


function Report({navigation}): React.JSX.Element {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
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
                }}>Firstaid Report</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: '#FFFFC6', paddingTop: 20 }}>

                <Text style={{ color: 'black', fontSize: 15, paddingLeft: 20, flex: 2 }}>
                    If you want to download, click save button.</Text>
            </View>

            <View style={{ flex: 9, backgroundColor: 'pink' }}>
                <Text style={{ fontSize: 50, color: 'black', textAlign: 'center' }}> First aid report comes here</Text>
            </View>


            <View style={{ flex: 2, backgroundColor: 'white', flexDirection:'column' }}>
            
                        <TouchableOpacity style={{
                            flex: 1,
                            marginLeft:100,
                            marginRight:100,
                            marginTop:30,
                            marginBottom:30,
                            backgroundColor: '#8C05D3',
                            borderRadius: 20,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                            onPress={() => alert("hi 2")}>

                            <Text style={{
                                fontSize: 30,
                                color: 'white',
                                paddingLeft: 70,
                                flex: 5,
                                padding: 20,
                            }}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <BottomNavBar/>
                
        </View>

    );
}


export default Report;