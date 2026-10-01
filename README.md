# ASHFLIX

A simple mobile movie explorer application built with React Native and Expo.

## About

ASHFLIX is a multi-screen movie application where users can browse movies and view information about a selected movie.

The project demonstrates basic React Native navigation, screen interaction, and passing data between screens.

## Features

- Movie collection
- Movie posters
- Movie ratings and genres
- Movie details
- Multiple screens
- Stack navigation
- Route parameters
- Custom back button
- Dark movie-themed interface

## Navigation Flow

Home → Movie Collection → Movie Details → Back to Movies

## Main Files

### App.js
Sets up the application's navigation using `NavigationContainer` and `createNativeStackNavigator`.

### HomeScreen.js
Displays the ASHFLIX home screen and uses `navigation.navigate()` to open the movie collection.

### MovieListScreen.js
Displays the movie collection using a JavaScript array and `.map()`.

When a movie is selected, its information is passed to the details screen using route parameters.

### MovieDetailsScreen.js
Displays the selected movie's poster, title, year, genre, rating, and description.

It uses `route.params` to receive the selected movie and `navigation.goBack()` to return to the movie list.

## Technologies

- React Native
- Expo
- JavaScript
- React Navigation
- Native Stack Navigator

## Movie Collection

The current collection includes:

- Inception
- Interstellar
- Spider-Man: Into the Spider-Verse
- The Batman
- Avengers: Endgame
- How to Train Your Dragon
- The Hunger Games
- The Greatest Showman

## How It Works

The user starts on the Home screen and selects **Explore Movies**.

The Movie Collection screen displays the available movies.

Selecting a movie opens the Movie Details screen. The selected movie's information is passed through navigation parameters.

The **Back to Movies** button uses `navigation.goBack()` to return to the movie collection.

## Project Purpose

The project was created to demonstrate basic mobile application development, multi-screen navigation, user interaction, and data passing in React Native.

## Future Improvements

- Search movies
- Movie categories
- Favorites
- More movie collections
- Improved filtering

## Author

**Ash**

**ASH MOVIE EXPLORER • 2026**