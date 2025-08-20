import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import { StyleSheet } from 'react-native';
import Login from './src/screens/Login';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    topBar: {
        height: 50,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topBarText: {
        color: '#fff',
        fontSize: 18,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginVertical: 20,
    },
}); 