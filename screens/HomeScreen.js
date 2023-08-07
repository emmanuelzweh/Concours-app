import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import all the screens that make up the SitesScreen

import NewsStackNav from '../navigations/NewsStackNav';
import ActivitesStackNav from '../navigations/ActiviteStackNav';




const Tab = createMaterialTopTabNavigator();


const HomeScreen = () => {
  return (
    <Tab.Navigator
     screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'white' },
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray'
    }}>
      <Tab.Screen name="Nouvelles" component={NewsStackNav} />
      <Tab.Screen name="Activites" component={ActivitesStackNav} />
    </Tab.Navigator>
  )
}

export default HomeScreen
