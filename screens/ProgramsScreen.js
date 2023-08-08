import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'

// importing the screens for this stack navigation
import ProgramListScreen from './ProgramListScreen';
import ProgramDetailsScreen from './ProgramDetailsScreen';


const ProgramStack = createStackNavigator();

function ProgramsScreen() {
  return (
    <ProgramStack.Navigator initialRouteName="CollegeList">
        <ProgramStack.Screen name="Program List" component={ProgramListScreen} options={{headerShown: false}} />
        <ProgramStack.Screen name="ProgramDetails" component={ProgramDetailsScreen} />
    </ProgramStack.Navigator>
  )
}

export default ProgramsScreen