import React, { useState } from 'react';
import { Button, Pressable, Text, TextInput, View } from 'react-native';
import Welcome from '../src/components/welcome';


function Registeruser(): React.JSX.Element {

    function onUsernameChanged(changedUsername) {
        setUsername(changedUsername)

    }

    function onEmailChanged(changedEmail) {
        setEmail(changedEmail)

    }
    function onPassswordChanged(changedPassword) {
        setPassword(changedPassword)

    }
    const [username, setUsername] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()



    return (
        <View >

            <Text style={{
                color: '#D21E5F',
                fontSize: 50,
                marginTop: 50,
                marginLeft: 20
            }}> General User </Text>
            <TextInput
                style={{
                    backgroundColor: '#FFFFC6',
                    color: '#000',
                    width: 390,
                    height: 50,
                    marginTop: 30,
                    borderRadius: 20,
                    paddingLeft: 10,
                    marginLeft: 20
                }}

                onChangeText={onUsernameChanged}
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

                onChangeText={onEmailChanged}
                placeholder='Email Adress'
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

                onChangeText={onPassswordChanged}
                placeholder='Password'
                placeholderTextColor={'#444'}
            />
            <Pressable style={{ marginLeft: 80, marginRight: 80 }} onPress={() => alert("hi")}>
                <Text style={{
                    backgroundColor: '#D21E5F',
                    color: 'white',
                    fontSize: 50,
                    alignItems: 'center',
                    borderRadius: 40,
                    paddingLeft: 30,
                    marginTop: 70
                }}> Register</Text>
            </Pressable>




        </View>

    );
}


export default Registeruser;
