import React, { useState } from 'react';
import { Alert, Button, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Welcome from '../components/welcome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { users } from '../utils/data';

function Login({ navigation }): React.JSX.Element {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function onUsernameChanged(changedUsername) {
        setUsername(changedUsername);
    }

    function onPasswordChanged(changedPassword) {
        setPassword(changedPassword);
    }

    function onClickLogin() {
        if (!username) {
            alert("Username is required");
            return;
        }

        if (!password) {
            alert("Password is required");
            return;
        }

        const foundUser = users.find(user => user.username === username);

        if (!foundUser) {
            alert("User not found");
            return;
        }

        if (foundUser.password !== password) {
            alert("Invalid password");
            return;
        }

        if (foundUser.usertype === "general") {
            navigation.navigate("Option selection");
        } else if (foundUser.usertype === "emergency") {
            navigation.navigate("Notification");
        }
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <Welcome />
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
                    onChangeText={onUsernameChanged}
                    placeholder='Username'
                    placeholderTextColor={'#444'}
                    value={username}
                />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#FFFFC6',
                    color: '#000',
                    width: 390,
                    height: 50,
                    marginTop: 50,
                    borderRadius: 20,
                    paddingLeft: 10,
                    marginLeft: 20,
                }}>
                    <TextInput
                        style={{ flex: 1 }}
                        onChangeText={onPasswordChanged}
                        placeholder='Password'
                        placeholderTextColor={'#444'}
                        secureTextEntry={!showPassword}
                        value={password}
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={{ padding: 10 }}>
                        <Text style={{ color: '#D21E5F', fontSize: 18 }}>
                            {showPassword ? "Hide" : "Show"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ marginLeft: 80, marginRight: 80 }}
                    onPress={onClickLogin}
                >
                    <Text
                        style={{
                            backgroundColor: '#D21E5F',
                            color: 'white',
                            fontSize: 60,
                            alignItems: 'center',
                            borderRadius: 30,
                            paddingLeft: 50,
                            marginTop: 80
                        }}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register As')}>
                    <Text
                        style={{
                            backgroundColor: 'white',
                            color: '#8C05D3',
                            fontSize: 30,
                            alignItems: 'center',
                            marginLeft: 50,
                            marginTop: 80
                        }}
                    >
                        New user? Register first
                    </Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'white', height: 100 }} />
            </View>
        </ScrollView>
    );
}

export default Login;
