import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import { Ionicons } from '@expo/vector-icons';
import GameInitScreen from './pages/GameInit';
import LoginScreen from './pages/Login';
import { AuthContextProvider } from './context/authContext';
import Cadastro from './pages/NewUser';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="GameInit" component={GameInitScreen}  />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />

        </Stack.Navigator>
      </AuthContextProvider>
    </NavigationContainer>
  );
};

const App = () => {


  return (
    <AuthContextProvider>
      <View style={styles.container}>
        <View style={styles.content}>
          <MyStack />
        </View>
      </View>
    </AuthContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default App;