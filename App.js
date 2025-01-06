import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import FlatCard from './components/project1/FlatCard';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flexGrow: 1, // Ensure it takes up full height
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
