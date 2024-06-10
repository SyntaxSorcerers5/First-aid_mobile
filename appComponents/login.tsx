import React, { useState } from 'react';
import { Alert, Button, Pressable, Text, TextInput, View } from 'react-native';
import Welcome from '../src/components/welcome';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function Login(): React.JSX.Element {

    function OnUsernameChanged(changedUsername) {
        setUsername(changedUsername)

    }
    function OnPassswordChanged(changedPassword) {
        setPassword(changedPassword)

    }
    const [username, setUsername] = useState()
    const [Password, setPassword] = useState()


    return (
        <View >

            <TextInput
                style={{
                    backgroundColor: '#FFFFC6',
                    color: '#000',
                    width: 390,
                    height: 50,
                    marginTop: 50,
                    borderRadius: 20,
                    paddingLeft: 10,
                    marginLeft: 20
                }}

                onChangeText={OnUsernameChanged}
                placeholder='Username'
                placeholderTextColor={'#444'}

            />




            <TextInput style={{
                backgroundColor: '#FFFFC6',
                color: '#000',
                width: 390,
                height: 50,
                marginTop: 50,
                borderRadius: 20,
                paddingLeft: 10,
                marginLeft: 20
            }}

                onChangeText={OnPassswordChanged}
                placeholder='Password'
                placeholderTextColor={'#444'}
            />

            
                <Pressable style={{ marginLeft: 80, marginRight: 80 }} onPress={() => alert("hi")}>
                    <Text style={{
                        backgroundColor: '#D21E5F',
                        color: 'white',
                        fontSize: 70,
                        alignItems: 'center',
                        borderRadius: 40,
                        paddingLeft: 30,
                        marginTop: 80
                    }}> Login</Text>
                </Pressable>

                
    

        </View>

    );
}


export default Login;
