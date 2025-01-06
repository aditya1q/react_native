import { StyleSheet, View } from 'react-native';
import FlatCard from './components/project1/FlatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatCard />
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
});
