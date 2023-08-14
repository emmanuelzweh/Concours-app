
// CollegeDetailsScreen.js
import React from 'react';
import { ScrollView, Text, Image, StyleSheet , View} from 'react-native';

import FilliereComponent from '../components/FilliereComponent';

// path or filliere data
const data1 = [
  { path: 'Path 1', specializations: ['Spec 1', 'Spec 2'] },
  { path: 'Path 2', specializations: ['Spec 3', 'Spec 4'] },
];

const CollegeDetailsScreen = ({ route }) => {
  const { college } = route.params;

  return (
    <ScrollView>
      <Image style={styles.HeaderImage} source={college.logo} />
      <Text style={styles.CollegeName}>{college.name}</Text>
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
      <View>
        <Text style={styles.cycle}>TECHNICIENS SUPERIEURS</Text>
        {/* Liste des fillières */}
        <FilliereComponent data={data1} />
      </View>
      <View>
        <Text style={styles.cycle}>CYCLE INGINIEURS</Text>
        {/* Liste des fillières */}
        <FilliereComponent data={data1} />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  HeaderImage: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    height: 300,
    resizeMode: 'contain'
  },
  CollegeName: {
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

  },
  cycle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})


export default CollegeDetailsScreen;
