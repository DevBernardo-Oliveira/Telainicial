import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context/ThemeContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from './src/screens/FavoritesScreen';
import HomeScreen from './src/screens/HomeScreen';
import Petscreen from './src/screens/Petscreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FavoritesScreen">
          <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Petscreen" component={Petscreen} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}