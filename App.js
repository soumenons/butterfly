import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import meds from './assets/data/medications.json';

export default function App() {
  const med = meds[0];
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>{med.name}</Text>
      <Text>{med.type} | {med.dose}</Text>
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
});
