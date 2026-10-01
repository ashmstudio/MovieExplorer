import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function MovieDetailsScreen({
  route,
  navigation,
}) {
  const { movie } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Image
        source={{ uri: movie.poster }}
        style={styles.poster}
      />

      <Text style={styles.title}>
        {movie.title}
      </Text>

      <Text style={styles.subtitle}>
        {movie.year} • {movie.genre}
      </Text>

      <View style={styles.ratingBox}>

        <Text style={styles.label}>
          MOVIE RATING
        </Text>

        <Text style={styles.rating}>
          ★ {movie.rating} / 10
        </Text>

      </View>

      <Text style={styles.label}>
        ABOUT THIS MOVIE
      </Text>

      <Text style={styles.description}>
        {movie.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          ← BACK TO MOVIES
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },

  content: {
    padding: 22,
    paddingBottom: 35,
  },

  poster: {
    width: '100%',
    height: 390,
    borderRadius: 10,
    backgroundColor: '#222222',
    marginBottom: 22,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    color: '#AAAAAA',
    fontSize: 14,
    marginBottom: 22,
  },

  ratingBox: {
    backgroundColor: '#163522',
    borderLeftWidth: 4,
    borderLeftColor: '#DC143C',
    padding: 15,
    borderRadius: 7,
    marginBottom: 25,
  },

  label: {
    color: '#777777',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 9,
  },

  rating: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  description: {
    color: '#BBBBBB',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 28,
  },

  button: {
    backgroundColor: '#DC143C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});