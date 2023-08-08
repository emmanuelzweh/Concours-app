import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const SchoolImageCard = ({ imageUrl, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

SchoolImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 6,
    marginBottom: 6,
    backgroundColor: '#fff', // Set your desired background color here
    elevation: 0, // Add the elevation to create the shadow (adjust value as needed)
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8, // Optional: Add border radius for a rounded corner effect
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9, // Adjust the aspect ratio as needed
    resizeMode: 'cover',
    // borderRadius: 10,
    overflow: 'hidden',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 3,
    marginLeft: 10,
  },
});

export default SchoolImageCard;
