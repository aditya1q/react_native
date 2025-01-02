import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import Button from './components/Button';

export default function App() {
  const colorScheme = useColorScheme() === 'dark'
  return (
    <View style={styles.container}>
      <Text style={colorScheme ? styles.whiteText : styles.blackText}>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={colorScheme ? styles.whiteText : styles.blackText}>Open up App.js to start working on your app!</Text>
      <Button />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white'
  },
  blackText: {
    color: 'black'
  }
});
