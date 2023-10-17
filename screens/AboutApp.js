// NewsDetailsScreen.js
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet} from 'react-native';

const AboutApp = ({ route }) => {

   
    
  return (
    <ScrollView style={styles.newsContainer}>
      <View>
      <Text style={styles.title}>A propos de l'application</Text>
      
      <Text style={styles.content}>L’Institut National Polytechnique Félix HOUPHOUËT-BOIGNY (INP-HB) a été crée par décret 96-678 du 04 Septembre 1996,
        de la restructuration de l’Ecole Nationale Supérieure d’Agronomie(ENSA), l’Ecole Nationale Supérieure des Travaux Publics ( ENSTP), l’Institut Agricole de Bouaké (IAB) et de l’Institut National Supérieure de l’Enseignement Technique ( INSET). Quatre établissements que l’on désigne communément sous le vocable de Grandes Écoles de Yamoussoukro.

          La création de l’INP-HB répond à plusieurs objectifs :

          La réduction des coûts structurels et une allocation plus pertinente d
          es ressources disponibles ; L'harmonisation des politiques de formation ; L'amélioration de la qualité des enseignements et le rapprochement de la formation et l'emploi.
       </Text>
       <Image style={styles.image} source={{uri:"https://inphb.ci/static/media/historique.390f93e953e4dfbd9c63.png"}} />
      </View>
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
    image: {
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

export default AboutApp;
