import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/main';
import Login from './appComponents/login';
import Registeruser from './appComponents/Generalregister';
import RegisterEmergency from './appComponents/Emergencyregister';
import Welcome from './src/components/welcome';
import RegAs from './src/components/regAs';

function App(): React.JSX.Element {


    return (
        <View style={{backgroundColor:'white', height:'100%'}}>
            

        <RegAs/>



        </View>

    );
}


export default App;
