import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import all the screens that make up the SitesScreen
import NordScreen from './NordScreen';
import CentreScreen from './CentreScreen';
import SudScreen from './Sudscreen';


const Tab = createMaterialTopTabNavigator();

const Ass = () => {
  return (
    <View>
      <Text>
        ASS
      </Text>
    </View>
  )
}

const HomeScreen = () => {
  return (
    <Tab.Navigator
     screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'white' },
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray'
    }}>
      <Tab.Screen name="Nouvelles" component={SudScreen} />
      <Tab.Screen name="Activites" component={CentreScreen} />
    </Tab.Navigator>
  )
}

export default HomeScreen
