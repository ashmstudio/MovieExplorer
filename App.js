import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import MovieListScreen from './MovieListScreen';
import MovieDetailsScreen from './MovieDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#111111',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#080808',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'REELSCAPE' }}
        />

        <Stack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{ title: 'Movie Explorer' }}
        />

        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{ title: 'Movie Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}