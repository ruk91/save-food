import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ImagePicker } from 'react-native';
import { Camera } from 'expo-camera';
import { request, PERMISSIONS } from 'react-native-permissions';
import TesseractOcr, { LANG_ENGLISH } from 'react-native-tesseract-ocr';

export default function App() {
  const [scannedText, setScannedText] = useState('');
  const [isCameraPermissionGranted, setIsCameraPermissionGranted] = useState(false);

  const requestCameraPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.CAMERA);
    if (result === 'granted') {
      setIsCameraPermissionGranted(true);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const takePictureAndRecognize = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.5 });
      const recognizedText = await TesseractOcr.recognize(
        photo.uri,
        LANG_ENGLISH,
        TesseractOcr.OEM.TESSERACT_ONLY
      );
      setScannedText(recognizedText);
    }
  };

  return (
    <View style={styles.container}>
      {isCameraPermissionGranted ? (
        <Camera style={styles.camera} ref={cameraRef}>
          <Button title="Take Picture" onPress={takePictureAndRecognize} />
        </Camera>
      ) : (
        <Text>Camera permission not granted.</Text>
      )}
      {scannedText !== '' && (
        <View style={styles.textContainer}>
          <Text>Scanned Text: {scannedText}</Text>
          <Button title="Scan Again" onPress={() => setScannedText('')} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: 300,
    height: 400,
  },
  textContainer: {
    marginTop: 20,
  },
});
