// CollegeListScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const colleges = [
  { id: 1, name: 'College A', logo: require('../assets/colleges/EDP.png') },
  { id: 2, name: 'College B', logo: require('../assets/colleges/EDP.png') },
  { id: 3, name: 'College C', logo: require('../assets/colleges/EDP.png') },
  { id: 4, name: 'College D', logo: require('../assets/colleges/EDP.png') },
  { id: 5, name: 'College E', logo: require('../assets/colleges/EDP.png') },
  { id: 6, name: 'College F', logo: require('../assets/colleges/EDP.png') },
  { id: 7, name: 'College G', logo: require('../assets/colleges/EDP.png') },
  // Add more colleges
];

const CollegeListScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {colleges.map((college) => (
        <TouchableOpacity key={college.id} onPress={() => navigation.navigate('CollegeDetails', { college })}>
          <ImageBackground source={college.logo} style={styles.collegeItem}>
            <Text style={styles.collegeName}>{college.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Set the background color of the college list screen
  },
  collegeItem: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay to make text readable
  },
  collegeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Text color on the dark overlay
    padding: 10,
  },
});

export default CollegeListScreen;
