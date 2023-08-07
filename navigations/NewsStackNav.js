// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import NewsListScreen from '../screens/NewsListScreen';

const Stack = createStackNavigator();

function NewsStackNav() {
  return (
    <Stack.Navigator initialRouteName="NewsList" screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="NewsList" component={NewsListScreen} />
        <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
    </Stack.Navigator>

  );
}

export default NewsStackNav;
