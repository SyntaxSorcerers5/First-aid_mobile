import React, { useState } from 'react';
import { Button, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Welcome from '../components/welcome';


function RegisterEmergency({navigation}): React.JSX.Element {

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
        <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <Welcome />
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={{
                        color: '#D21E5F',
                        fontSize: 50,
                        marginTop: 50,
                        marginLeft: 10
                    }}> Emergency Service </Text>
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
                    <Pressable style={{ marginLeft: 80, marginRight: 80 }} onPress={() => navigation.navigate('Login')}>
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
                    <View style={{ backgroundColor: 'white', height: 70 }} />
                </View>
            </View>
        </ScrollView>






    );
}


export default RegisterEmergency;
