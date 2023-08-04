import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// importing all principal screens
import HomeScreen from '../screens/HomeScreen';
import CollegesScreen from '../screens/CollegesScreen';
import MoreScreen from '../screens/MoreScreen';
import ProgramsScreen from '../screens/ProgramsScreen';
import SitesScreen from '../screens/SitesScreen';

function RootBottomTabNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'More') {
              iconName = focused ? 'menu' : 'menu';
            }
            else if (route.name === 'Colleges') {
                iconName = focused ? 'school' : 'school';
              }
              else if (route.name === 'Sites') {
                iconName = focused ? 'location' : 'location';
              }
              else if (route.name === 'Programs') {
                iconName = focused ? 'book' : 'book';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: 'orange',
            
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Colleges" component={CollegesScreen} />
        <Tab.Screen name="Sites" component={SitesScreen} />
        <Tab.Screen name="Programs" component={ProgramsScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootBottomTabNav
