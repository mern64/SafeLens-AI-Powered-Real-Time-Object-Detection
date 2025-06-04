import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

        {/* Logo */}
        <Image 
            source={require('../assets/SafeLens-logo.png')} 
            style={styles.logo} 
            resizeMode="contain"
        />

        {/* App Description */}
        <Text style={styles.description}>
            Your AI-powered camera assistant for detecting potential hazards in real time.
        </Text>

      <Text style={styles.title}>SafeLens Camera</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Camera')}    
      >
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4ff',
    padding: 20
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  button: {
    backgroundColor: '#3498db',
    padding: 18,
    borderRadius: 12,
    marginVertical: 12,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  },

  logo: {
  width: 300,
  height: 300,
  marginBottom: 10,
  borderRadius: 60,
},

description: {
  fontSize: 14,
  textAlign: 'center',
  color: '#555',
  marginBottom: 10,
  paddingHorizontal: 20,
},

});