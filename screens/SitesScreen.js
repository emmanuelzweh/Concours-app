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

const Shit = () => {
  return (
    <View>
      <Text>
        Shit
      </Text>
    </View>
  )
}

const Butt = () => {
  return (
    <View>
      <Text>
        Butt
      </Text>
    </View>
  )
}

const SitesScreen = () => {
  return (
    <Tab.Navigator
     screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'white' },
      tabBarActiveTintColor: 'orange',
      tabBarInactiveTintColor: 'gray'
    }}>
      <Tab.Screen name="Sud" component={SudScreen} />
      <Tab.Screen name="Centre" component={CentreScreen} />
      <Tab.Screen name="Nord" component={NordScreen} />
    </Tab.Navigator>
  )
}

export default SitesScreen
