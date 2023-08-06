import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'

// importing the screens for this stack navigation
import CollegeDetailsScreen from './CollegeDetailsScreen';
import CollegeListScreen from './CollegeListScreen';

const CollegesStack = createStackNavigator();

function CollegesScreen() {
  return (
    <CollegesStack.Navigator initialRouteName="CollegeList">
        <CollegesStack.Screen name="CollegeList" component={CollegeListScreen} />
        <CollegesStack.Screen name="CollegeDetails" component={CollegeDetailsScreen} />
    </CollegesStack.Navigator>
  )
}

export default CollegesScreen