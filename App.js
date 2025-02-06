import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import { Ionicons } from '@expo/vector-icons';
import GameInitScreen from './pages/GameInit';
import LoginPage from './pages/Login';
import { AuthContextProvider } from './context/authContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabsNavigator = () => {

  return (
    <AuthContextProvider>

      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) =>
              focused ? (
                <Ionicons name="home" size={size} color={color} />
              ) : (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
          }}
        />
      </Tab.Navigator>
    </AuthContextProvider>


  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="MainTabs"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="GameInit" component={GameInitScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />

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