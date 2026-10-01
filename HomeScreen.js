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

      <Text style={styles.smallText}>
        MY MOVIE SPACE
      </Text>

      <Text style={styles.title}>
        ASH<Text style={styles.red}>FLIX</Text>
      </Text>

      <View style={styles.accentLine} />

      <Text style={styles.description}>
        My kind of movie <Text style={styles.italic}>night.</Text>
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MovieList')}
      >
        <Text style={styles.buttonText}>
          EXPLORE MOVIES →
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        ASH MOVIE EXPLORER • 2026
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  smallText: {
    color: '#69966C',
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 25,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },

  red: {
    color: '#FF5A52',
  },

  accentLine: {
    width: 80,
    height: 5,
    backgroundColor: '#FF5A52',
    marginTop: 30,
    marginBottom: 28,
    borderRadius: 3,
  },

  description: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 55,
  },

  italic: {
    fontStyle: 'italic',
  },

  button: {
    backgroundColor: '#FF6B61',
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderRadius: 14,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  footer: {
    position: 'absolute',
    bottom: 30,
    color: '#AAAAAA',
    fontSize: 12,
    letterSpacing: 1,
  },
});