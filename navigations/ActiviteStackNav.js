import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ActivityDetailsScreen from '../screens/ActivityListScreen';
import ActivityListScreen from '../screens/ActivityListScreen';

const Stack = createStackNavigator();

function ActivitesStackNav() {
  return (
    <Stack.Navigator initialRouteName="NewsList" screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Activity list" component={ActivityListScreen} />
        <Stack.Screen name="Activity Details" component={ActivityDetailsScreen} />
    </Stack.Navigator>

  );
}

export default ActivitesStackNav;