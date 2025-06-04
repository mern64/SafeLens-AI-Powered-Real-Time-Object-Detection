import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation, route }) {
  // Initialize state with current settings from route params or default values
  const [isHdrEnabled, setIsHdrEnabled] = useState(
    route.params?.isHdrEnabled || false
  );
  const [isGridEnabled, setIsGridEnabled] = useState(
    route.params?.isGridEnabled || true
  );

  const handleBackPress = () => {
    // Pass the current settings back to CameraScreen
    navigation.navigate('Camera', {
      isHdrEnabled,
      isGridEnabled
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={handleBackPress}  // Changed from navigation.goBack()
      >
        <Ionicons name="arrow-back" size={28} color="#2c3e50" />
      </TouchableOpacity>

      <Text style={styles.title}>Camera Settings</Text>
      
      <View style={styles.settingItem}>
        <View style={styles.settingTextContainer}>
          <Ionicons name="sunny" size={24} color="#3498db" />
          <Text style={styles.settingText}>HDR Mode</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isHdrEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => setIsHdrEnabled(!isHdrEnabled)}
          value={isHdrEnabled}
        />
      </View>

      <View style={styles.settingItem}>
        <View style={styles.settingTextContainer}>
          <Ionicons name="grid" size={24} color="#3498db" />
          <Text style={styles.settingText}>Grid Lines</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isGridEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => setIsGridEnabled(!isGridEnabled)}
          value={isGridEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 80,
    marginBottom: 40,
    textAlign: 'center'
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  settingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  settingText: {
    fontSize: 18,
    marginLeft: 15,
    color: '#34495e'
  }
});