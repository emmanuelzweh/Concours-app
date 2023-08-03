import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootBottomTabNav from './navigations/RootBottomTabNav';

// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  return (
    <RootBottomTabNav />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
