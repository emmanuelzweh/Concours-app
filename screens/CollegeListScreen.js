// CollegeListScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const colleges = [
  { id: 1, name: 'ECOLE DOCTORALE POLYTECHNIQUE', logo: require('../assets/colleges/EDP.png') },
  { id: 2, name: "ECOLE SUPERIEURE D'AGRONOMIE", logo: require('../assets/colleges/ESA.png') },
  { id: 3, name: "ECOLE SUPERIEURE D'INDUSTRIE", logo: require('../assets/colleges/ESI.png') },
  { id: 4, name: "ECOLE SUPERIEURE DU COMMERCE ET D'ADMINISTRATION DES ENTREPRISES", logo: require('../assets/colleges/ESCAE.png') },
  { id: 5, name: 'ECOLE SUPERIEURE DES MINES ET DE GÉOLOGIE', logo: require('../assets/colleges/ESMG.png') },
  { id: 6, name: "ECOLE SUPERIEURE DU PÉTROLE ET DE L'ÉNERGIE", logo: require('../assets/colleges/ESPE.png') },
  { id: 7, name: 'ECOLE SUPERIEURE DES TRAVAUX PUBLICS', logo: require('../assets/colleges/ESTP.png') },
  { id: 8, name: "ECOLE DE FORMATION CONTINUE ET DE PERFECTIONNEMENT DES CADRES", logo: require('../assets/colleges/EFCPC.png') },
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
