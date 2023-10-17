import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// importing all related screens for the the navigation
import MoreListScreen from '../screens/MoreListScreen'; '../screens/MoreListScreen'
import AboutDetailsScreen from '../screens/AboutDetailsScreen'; 
import LeadershipDetailsScreen from '../screens/LeadershipDetailsScreen'; 
import SportsScreen from '../screens/SportsScreen';
import AboutApp from '../screens/AboutApp';


const Stack = createStackNavigator();

function MoreNavigation() {
  return (
    <Stack.Navigator initialRouteName="MoreList" screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="MoreList" component={MoreListScreen} />
        <Stack.Screen name="About" component={AboutDetailsScreen} />
        <Stack.Screen name="Leadership" component={LeadershipDetailsScreen} />
        <Stack.Screen name="Sports" component={SportsScreen} />
        <Stack.Screen name="AboutApp" component={AboutApp} />
    </Stack.Navigator>

  );
}

export default MoreNavigation;