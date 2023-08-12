// import React from 'react'
// import { View, Text } from 'react-native'

// function CollegeDetailsScreen() {
//   return (
//     <View>
//       <Text>Colleges Details CollegesScreen</Text>
//     </View>
//   )
// }

// export default CollegeDetailsScreen

// CollegeDetailsScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const CollegeDetailsScreen = ({ route }) => {
  const { college } = route.params;

  return (
    <View>
      <Image source={college.logo} />
      <Text>{college.name}</Text>
      {/* Display more details about the selected college */}
    </View>
  );
};

export default CollegeDetailsScreen;
