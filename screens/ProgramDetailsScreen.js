
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProgramDetailsScreen = ({ route }) => {
  const { program } = route.params;

  return (
    <ScrollView>
      <Image style={styles.programDetailHeaderImage} source={program.logo} />
      <Text style={styles.title}>{program.name}</Text>
      <Text style={styles.desc}>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type specimen book. It has survived not
       only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
      recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
      <Text style={styles.desc}>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
      printer took a galley of type and scrambled it to make a type specimen book. It has survived not
       only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
      recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  programDetailHeaderImage: {
    width: '100%'
  },
  title: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
    
  },
  desc: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    fontSize: 18,
    paddingBottom: 20,
    textAlign: 'justify'
  

  }
})

export default ProgramDetailsScreen;
