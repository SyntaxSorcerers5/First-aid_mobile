import { View, Text, Pressable, Alert, Image} from 'react-native'
import React from 'react'
import Welcome from './welcome';


function RegAs(): React.JSX.Element {
    return (
        <View>
            <Welcome />
            <Text style={{
                color: '#D21E5F',
                fontSize: 50,
                marginTop: 20,
                marginLeft: 40
            }}> Register as a</Text>

            <Pressable style={{ marginLeft: 10, marginRight: 50 }} onPress={() => alert("hi")}>

                
                    <Image style={{
                        width: 50,
                        height: 50,


                    }} source={require('../../assets/images/user.png')}

                    />

                    <Text style={{
                        backgroundColor: '#FFFFC6',
                        color: '#D21E5F',
                        fontSize: 50,

                        borderRadius: 20,
                        paddingTop: 50,
                        paddingLeft: 10,
                        marginTop: 20,
                        paddingBottom: 50,
                        marginLeft: 20

                    }}> General User </Text>


            
            </Pressable>

            <Pressable style={{ marginLeft: 20, marginRight: 50 }} onPress={() => alert("hi")}>
                <Text style={{
                    backgroundColor: '#FFFFC6',
                    color: '#D21E5F',
                    fontSize: 50,
                    paddingBottom: 50,
                    paddingTop: 50,
                    borderRadius: 20,
                    paddingLeft: 10,
                    marginTop: 20
                }}>Emergency Service</Text>
            </Pressable>








        </View>
    );
}


export default RegAs;
