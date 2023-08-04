import React from'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import CollegesScreen from '../screens/CollegesScreen';

function SchoolMaterialTopNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Colleges" component={CollegesScreen} />
    </Tab.Navigator>
  );
}

export default SchoolMaterialTopNav