// programListScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const programs = [
  { id: 1, name: 'TS', logo: require('../assets/ts.jpeg') },
  { id: 2, name: "Inginieur", logo: require('../assets/inginier.jpeg') },
  { id: 3, name: "Doctoral", logo: require('../assets/doctoral.jpeg') },
  { id: 4, name: 'Master', logo: require('../assets/ts.jpeg') },
  { id: 5, name: "Certificat", logo: require('../assets/inginier.jpeg') },
  { id: 6, name: "Formation Professional", logo: require('../assets/doctoral.jpeg') },

  // Add more programs
];

const ProgramListScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {programs.map((program) => (
        <TouchableOpacity style={styles.touchableContainer} key={program.id} onPress={() => navigation.navigate('ProgramDetails', { program })}>
          <ImageBackground source={program.logo} style={styles.programItem}>
            <Text style={styles.programName}>{program.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Set the background color of the program list screen
  },

  touchableContainer: {
    paddingHorizontal: 8,
    marginTop: 8,
    elevation: 10
  },
  programItem: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay to make text readable
  },
  programName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff', // Text color on the dark overlay
    padding: 10,
  },
});

export default ProgramListScreen;
