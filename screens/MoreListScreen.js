import React from 'react';
import { View, Alert, Text, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import icons from the library

const MoreListScreen = ({ navigation }) => {

  // a function to link to the inp-hb external website. Linking a the react native module that is responsible to link react native to external website
  
    const openExternalWebsite = () => {
      Alert.alert(
        'Confirmation',
        'Êtes-vous sûr(e) de vouloir visiter le site web officiel ?',
        [
          {
            text: 'Non',
            style: 'cancel',
          },
          {
            text: 'Oui',
            onPress: () => {
              const url = 'https://inphb.ci/'; // Replace this with the URL of the external website
              Linking.openURL(url)
                .catch(err => console.error('An error occurred', err));
            },
          },
        ],
        { cancelable: false }
      );
    }

    // Registration process function
    const RegisterLink = () => {
      Alert.alert(
        'Confirmation',
        "Êtes-vous sûr(e) de vouloir visiter le site web officiel pour s'inscrire?",
        [
          {
            text: 'Non',
            style: 'cancel',
          },
          {
            text: 'Oui',
            onPress: () => {
              const url = 'https://inphb.ci/'; // Replace this with the URL of the external website
              Linking.openURL(url)
                .catch(err => console.error('An error occurred', err));
            },
          },
        ],
        { cancelable: false }
      );
    }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={RegisterLink}>
        <View style={styles.listItem}>
          <MaterialIcons name="public" size={24} color="#333" style={styles.icon} />
          <Text style={styles.text}>S'inscrire pour le concours</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <View style={styles.listItem}>
          <MaterialIcons name="info" size={24} color="#333" style={styles.icon} />
          <Text style={styles.text}>A propos de l'INP-HB</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Leadership')}>
        <View style={styles.listItem}>
          <MaterialIcons name="people" size={24} color="#333" style={styles.icon} />
          <Text style={styles.text}>Leadership</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sports')}>
        <View style={styles.listItem}>
          <MaterialIcons name="extension" size={24} color="#333" style={styles.icon} />
          <Text style={styles.text}>Extra Activities</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AboutApp')}>
        <View style={styles.listItem}>
          <MaterialIcons name="info" size={24} color="#333" style={styles.icon} />
          <Text style={styles.text}>Apropos de l'application</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={openExternalWebsite}>
        <View style={styles.listItem}>
          <MaterialIcons name="public" size={24} color="#333" style={styles.icon} />
          <Text style={styles.text}>Visitez notre site web officiel</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  listItem: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center items vertically
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MoreListScreen;
