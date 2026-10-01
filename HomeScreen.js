import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.topCircle} />
      <View style={styles.smallCircle} />

      <Text style={styles.smallText}>
        MY MOVIE SPACE
      </Text>

      <Text style={styles.title}>
        ASH<Text style={styles.red}>FLIX</Text>
      </Text>

      <View style={styles.line} />

      <Text style={styles.description}>
        My kind of movie night.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MovieList')}
      >
        <Text style={styles.buttonText}>
          EXPLORE MOVIES →
        </Text>
      </TouchableOpacity>

      <View style={styles.bottomInfo}>
        <Text style={styles.movieCount}>
          8 MOVIES
        </Text>

        <Text style={styles.footer}>
          ASH MOVIE EXPLORER • 2026
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    overflow: 'hidden',
  },

  topCircle: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#181818',
    top: -100,
    right: -80,
  },

  smallCircle: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#163522',
    bottom: 90,
    left: -35,
  },

  smallText: {
    color: '#69966C',
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 10,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 44,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  red: {
    color: '#DC143C',
  },

  line: {
    width: 45,
    height: 3,
    backgroundColor: '#DC143C',
    marginTop: 16,
    marginBottom: 15,
  },

  description: {
    color: '#BBBBBB',
    fontSize: 15,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#DC143C',
    paddingVertical: 15,
    paddingHorizontal: 27,
    borderRadius: 8,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  bottomInfo: {
    position: 'absolute',
    bottom: 25,
    alignItems: 'center',
  },

  movieCount: {
    color: '#555555',
    fontSize: 10,
    letterSpacing: 2,
    marginBottom: 6,
  },

  footer: {
    color: '#777777',
    fontSize: 10,
    letterSpacing: 1,
  },
});