import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo

export default function CameraScreen({ navigation, route }) { // Add navigation prop
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [facing, setFacing] = useState('back');
  const [detectionResults, setDetectionResults] = useState([
    "Object detected: Person (85% confidence)",
    "Object detected: Chair (72% confidence)",
    "Color: Blue (dominant)",
    "Scene: Indoor office environment"
  ]);
  const {
  isHdrEnabled = false,
  isGridEnabled = true,
} = route.params || {};

    const [hdrEnabled, setHdrEnabled] = useState(isHdrEnabled);
    const [gridEnabled, setGridEnabled] = useState(isGridEnabled);

    {gridEnabled && <View style={styles.gridOverlay} />}

    {hdrEnabled && <Text style={styles.hdrText}>HDR On</Text>}

  
  if (!permission) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          We need your permission to use the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const handleBackPress = () => {
    // Implement your navigation back logic here
    navigation.goBack(); // This assumes you're using React Navigation
  };

  return (
    <View style={styles.mainContainer}>
      {/* Camera Preview Section (Top) */}
      <View style={styles.cameraContainer}>
        <CameraView
  style={styles.camera}
  ref={cameraRef}
  facing={facing}
>
  {/* Back Button */}
  <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
    <Ionicons name="arrow-back" size={24} color="white" />
  </TouchableOpacity>

  {/* Flip Camera Button */}
  <View style={styles.buttonContainer}>
    <View style={styles.flipButton} onTouchEnd={toggleCameraFacing}>
      <Text style={styles.buttonText}>Flip</Text>
    </View>
  </View>

  {/* Grid Overlay */}
  {gridEnabled && (
    <View pointerEvents="none" style={styles.gridOverlay}>
      {/* Vertical Lines */}
      <View style={[styles.gridLineVertical, { left: '33.33%' }]} />
      <View style={[styles.gridLineVertical, { left: '66.66%' }]} />
      {/* Horizontal Lines */}
      <View style={[styles.gridLineHorizontal, { top: '33.33%' }]} />
      <View style={[styles.gridLineHorizontal, { top: '66.66%' }]} />
    </View>
  )}
</CameraView>

      </View>
      
      {/* Detection Description Section (Bottom) */}
      <View style={styles.detectionContainer}>
        <Text style={styles.detectionTitle}>Detection Results</Text>
        <ScrollView style={styles.resultsContainer}>
          {detectionResults.map((result, index) => (
            <View key={index} style={styles.resultItem}>
              <Text style={styles.resultText}>• {result}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  cameraContainer: {
    flex: 0.7,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 10,
    zIndex: 1,
  },
  detectionContainer: {
    flex: 0.3,
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  detectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  resultsContainer: {
    flex: 1,
  },
  resultItem: {
    paddingVertical: 5,
  },
  resultText: {
    fontSize: 14,
    color: '#444',
  },
  permissionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  flipButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },

  gridOverlay: {
  ...StyleSheet.absoluteFillObject,
  zIndex: 10,
},
gridLineVertical: {
  position: 'absolute',
  width: 1,
  height: '100%',
  backgroundColor: 'white',
  opacity: 0.6,
},

gridLineHorizontal: {
  position: 'absolute',
  height: 1,
  width: '100%',
  backgroundColor: 'white',
  opacity: 0.6,
},

});