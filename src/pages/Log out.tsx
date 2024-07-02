// Logout.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Logout(): React.JSX.Element {
    const navigation = useNavigation();

    function handleLogout() {
        // Implement any necessary cleanup here, such as clearing user data or tokens
        navigation.navigate('Home');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Are you sure you want to log out?</Text>
            <TouchableOpacity
                style={{
                    backgroundColor: '#D21E5F',
                    borderRadius: 30,
                    padding: 15,
                    width: '80%',
                    alignItems: 'center',
                }}
                onPress={handleLogout}
            >
                <Text style={{ color: 'white', fontSize: 18 }}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Logout;
