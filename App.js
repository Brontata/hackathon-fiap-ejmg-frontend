import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import { Ionicons } from '@expo/vector-icons';
import GameInitScreen from './pages/GameInit';
import Header from './components/Header';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabsNavigator = () => {

  return (
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
        <Tab.Screen
        name="login"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="game-controller" size={size} color={color} />
            ) : (
              <Ionicons name="game-controller" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="GameInit" component={GameInitScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <MyStack />
        </View>
      </View>
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