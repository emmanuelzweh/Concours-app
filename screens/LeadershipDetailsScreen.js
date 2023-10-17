// NewsDetailsScreen.js
import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';

const LeadershipDetailsScreen = ({ route }) => {

  return (
    <ScrollView style={styles.newsContainer}>
    <Text style={styles.title}>Structure de Leadership</Text>
      {/* <Image style={styles.newsImage} source={} /> */}
      <Text style={styles.content}>Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer took 
      a galley of type and scrambled it to make a type specimen book. It has
       survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release 
        of Letraset sheets containing Lorem Ipsum passages, and more
       recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      {/* Display more details about the selected news article */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    newsContainer: {
      flex: 1,
      paddingHorizontal: 16
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    newsImage: {
      width: '100%', // Image takes up 100% of the screen width
      height: 200, // Set a specific height for the image
      resizeMode: 'cover', // Adjust how the image is displayed
    },
    content: {
      fontSize: 16,
      lineHeight: 24,
      marginVertical: 10,
    },
  });

export default LeadershipDetailsScreen;
