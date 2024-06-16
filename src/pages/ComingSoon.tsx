import { Text, View } from "react-native";
import BottomNavBar from "../components/bottomnav";

export default function ComingSoon({ navigation }) {
    return (
        <View>
            <Text style={{ color: 'red' }}>
                Coming soon.
            </Text>
            <BottomNavBar navigation={navigation} />
        </View>
    )
}