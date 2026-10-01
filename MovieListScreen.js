import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const movies = [
  {
    id: '1',
    title: 'Inception',
    year: '2010',
    genre: 'Sci-Fi / Thriller',
    rating: '8.8',
    poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    description:
      'A skilled thief enters the dreams of others to steal secrets. He is offered a chance to erase his past by completing a difficult mission.',
  },

  {
    id: '2',
    title: 'Interstellar',
    year: '2014',
    genre: 'Sci-Fi / Adventure',
    rating: '8.7',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    description:
      'A group of explorers travels beyond the galaxy to search for a new home for humanity.',
  },

  {
    id: '3',
    title: 'Spider-Man: Into the Spider-Verse',
    year: '2018',
    genre: 'Animation / Action',
    rating: '8.4',
    poster: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    description:
      'Miles Morales discovers his abilities and meets other Spider-Man heroes from different dimensions.',
  },

  {
    id: '4',
    title: 'The Batman',
    year: '2022',
    genre: 'Action / Crime',
    rating: '7.8',
    poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    description:
      'Batman investigates a series of crimes in Gotham City and discovers secrets connected to its powerful citizens.',
  },

  {
    id: '5',
    title: 'Avengers: Endgame',
    year: '2019',
    genre: 'Action / Adventure',
    rating: '8.4',
    poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    description:
      'The Avengers attempt to reverse the destruction caused by Thanos and restore what was lost.',
  },

  {
    id: '6',
    title: 'How to Train Your Dragon',
    year: '2010',
    genre: 'Animation / Adventure',
    rating: '8.1',
    poster: 'https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqLGSZS6qRw3mR3H.jpg',
    description:
      'A young Viking forms an unexpected friendship with a dragon and begins to see his world differently.',
  },

  {
    id: '7',
    title: 'The Hunger Games',
    year: '2012',
    genre: 'Action / Drama',
    rating: '7.2',
    poster: 'https://image.tmdb.org/t/p/w500/yXCbOiVDCxO71zI7cuwBRXlIr2n.jpg',
    description:
      'Katniss Everdeen volunteers to compete in a dangerous televised competition to protect her sister.',
  },

  {
    id: '8',
    title: 'The Greatest Showman',
    year: '2017',
    genre: 'Musical / Drama',
    rating: '7.5',
    poster: 'https://image.tmdb.org/t/p/w500/b9CeobiihCx1uG1tpw8hXmpi7vR.jpg',
    description:
      'A visionary performer creates a spectacular show and brings together people who want to be seen and accepted.',
  },
];

export default function MovieListScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >

      <Text style={styles.heading}>
        MOVIE COLLECTION
      </Text>

      <Text style={styles.subtitle}>
        Pick something for your next movie night.
      </Text>

      {movies.map((movie) => (
        <TouchableOpacity
          key={movie.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate('MovieDetails', {
              movie: movie,
            })
          }
        >

          <Image
            source={{ uri: movie.poster }}
            style={styles.poster}
          />

          <View style={styles.info}>

            <Text style={styles.title}>
              {movie.title}
            </Text>

            <Text style={styles.genre}>
              {movie.genre}
            </Text>

            <Text style={styles.year}>
              {movie.year} • ★ {movie.rating}
            </Text>

            <Text style={styles.details}>
              VIEW DETAILS →
            </Text>

          </View>

        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },

  content: {
    padding: 18,
    paddingBottom: 30,
  },

  heading: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },

  subtitle: {
    color: '#888888',
    fontSize: 13,
    marginTop: 7,
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#171717',
    borderRadius: 10,
    padding: 10,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#292929',
  },

  poster: {
    width: 82,
    height: 116,
    borderRadius: 7,
    backgroundColor: '#222222',
  },

  info: {
    flex: 1,
    paddingLeft: 14,
    justifyContent: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  genre: {
    color: '#AAAAAA',
    fontSize: 12,
    marginBottom: 7,
  },

  year: {
    color: '#69966C',
    fontSize: 12,
    marginBottom: 12,
  },

  details: {
    color: '#DC143C',
    fontSize: 11,
    fontWeight: 'bold',
  },
});