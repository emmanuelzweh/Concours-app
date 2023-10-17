// NewsDetailsScreen.js
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const AboutDetailsScreen = ({ route }) => {


  return (
    <ScrollView style={styles.newsContainer}>
      <View>
      <Text style={styles.title}>Historique de l'INP-HB</Text>
      
      <Text style={styles.content}>L’Institut National Polytechnique Félix HOUPHOUËT-BOIGNY (INP-HB) a été crée par décret 96-678 du 04 Septembre 1996,
        de la restructuration de l’Ecole Nationale Supérieure d’Agronomie(ENSA), l’Ecole Nationale Supérieure des Travaux Publics ( ENSTP), l’Institut Agricole de Bouaké (IAB) et de l’Institut National Supérieure de l’Enseignement Technique ( INSET). Quatre établissements que l’on désigne communément sous le vocable de Grandes Écoles de Yamoussoukro.

          La création de l’INP-HB répond à plusieurs objectifs :

          La réduction des coûts structurels et une allocation plus pertinente d
          es ressources disponibles ; L'harmonisation des politiques de formation ; L'amélioration de la qualité des enseignements et le rapprochement de la formation et l'emploi.
       </Text>
       <Image style={styles.image} source={{uri:"https://inphb.ci/static/media/historique.390f93e953e4dfbd9c63.png"}} />
      </View>
      <View>
      <Text style={styles.title}>Mission</Text>
      <Text style={styles.content}>
        - Formation : Formation initiale et continue à travers des formations diplômantes et qualifiantes (recyclage, perfectionnement) des techniciens supérieurs, des ingénieurs des techniques et des ingénieurs de conception dans les domaines
         de l'industrie, du commerce, de l'administration, du génie civil, des mines et de la géologie.
       </Text>
       <Text style={styles.content}>
        - Innovation : Recherche - développement
       </Text>
       <Text style={styles.content}>
        - Transformation : Assistance et production au profit des entreprises et administrations.
       </Text>
      </View>
      <View>
      <Text style={styles.title}>Ambition</Text>
      <Text style={styles.content}>
        - Nos principales ambitions sont :
       </Text>
       <Text style={styles.content}>
        - Le développement de notre leadership tant au plan national qu'à l'échelle continentale dans le domaine 
        de la formation et de la recherche technique et technologique.
       </Text>
       <Text style={styles.content}>
        - Être le premier maillon de la future technopole de Yamoussoukro.
       </Text>
      </View>
      <View>
      <Text style={styles.title}>Vision</Text>
      <Text style={styles.content}>
        - Faire de l'INP-HB un « creuset scientifique majeur pour 
        soutenir le développement technologique de la Côte d'Ivoire et de la région africaine.
       </Text>
      </View>
      <View>
      <Text style={styles.title}>L'Excellence de la formation</Text>
      <Text style={styles.content}>
      L'INP-HB, par la qualité du recrutement de ses élèves et de ses enseignants a toujours été un centre d'excellence dans la sous-région avec pour mission essentielle 
      de fournir au continent des cadres de haut niveau issus de divers secteurs d'activités.
       </Text>
      </View>
      <View>
      <Text style={styles.title}>Le professionalisme de l'administration</Text>
      <Text style={styles.content}>
      La force de l'organisation de l'Institut réside en partie, dans les capacités de l'administration à se renouveler pour s'adapter à son environnement 
      en vue de répondre aux besoins des enseignants, des étudiants et des partenaires externes.
       </Text>
      </View>
      <View>
      <Text style={styles.title}>Une communauté forte et solidaire</Text>
      <Text style={styles.content}>
      Au sein de sa communauté, l'INP-HB favorise une synergie dans laquelle chacun des membres trouve son avantage à être un acteur dans une institution phare,
       à laquelle il s'identifie et dont il partage les orientations stratégiques.
       </Text>
      </View>
      <View>
      <Text style={styles.title}>UNE POLITIQUE D'OUVERTURE ET DE PARTENARIAT INTERINSTITUTIONNEL</Text>
      <Text style={styles.content}>
      De nombreux accords de coopération avec des centres de formation et de recherche mondialement reconnus contribuent à améliorer efficacement la qualité de la formation dispensée et à réaliser la mission de veille technologique. Le recrutement d'élèves issus d'autres pays africains, sans barrière linguistique,
       traduit le caractère panafricaniste de l'Institut et réaffirme sa vocation régionale.
       </Text>
      </View>
      <View>
      <Text style={styles.title}>LE RESPECT DE L'ENVIRONNEMENT</Text>
      <Text style={styles.content}>
      L'INP-HB s'inscrit résolument dans le cadre du développement durable de la ville de Yamoussoukro, capitale politique de la Côte d'Ivoire. Son objectif est de créer un cadre de
       travail sain et agréable, propice à l'épanouissement de ses personnels et des élèves.
       </Text>
      </View>
      <View>
      <Text style={styles.title}>L'INNOVATION AU SERVICE DE LA POPULATION</Text>
      <Text style={styles.content}>
      L'INP-HB affirme sa présence citoyenne à travers des actions d'innovation, de valorisation et de transfert technologique en vue d'améliorer les conditions de vie et de travail
       des populations et de faciliter l'insertion professionnelle des jeunes.
       </Text>
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

export default AboutDetailsScreen;
