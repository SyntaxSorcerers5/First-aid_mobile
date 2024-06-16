import React from 'react';
import { Button, Text, View } from 'react-native';
import BottomNavBar from './src/components/bottomnav';
import ComingSoon from './src/pages/ComingSoon';
import Advisorbot from './src/pages/AdvisorBot';
import Notify from './src/pages/Notify';
import Feedback2 from './src/pages/feedbacktwo';
import Registeruser from './src/pages/Generalregister';
import RegisterEmergency from './src/pages/Emergencyregister';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import RegAs from './src/pages/regAs';
import Selectbot from './src/pages/selectOptionBOT';


const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Register As"
                    component={RegAs}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Register User"
                    component={Registeruser}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Register Emergency"
                    component={RegisterEmergency}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Option selection"
                    component={Selectbot}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Notification"
                    component={Notify}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Advisor bot select first aid"
                    component={Advisorbot}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;
