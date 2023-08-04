import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SiteHeaderComponent = ({ imageSource, headingText }) => {
  return (
    <ImageBackground
      source={{uri: imageSource}}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.headerText}>{headingText}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 200, // You can adjust the height according to your requirements
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value (last parameter) to change the darkness
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default SiteHeaderComponent;
