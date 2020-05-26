import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Home from './pages/Home';

const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer>{
            <Stack.Navigator initialRouteName="Main" headerMode="none">
                  <Stack.Screen name="Main" component={Main} />
                  <Stack.Screen name="Home" component={Home} />
             </Stack.Navigator>
        }</NavigationContainer>
      );
}

export default App;