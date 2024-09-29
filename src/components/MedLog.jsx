import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import medicines from '../../../assets/data/medications.json';

export default function MedicineLogScreen() {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [logs, setLogs] = useState(medicines); // Placeholder for real data

  // Function to log new medicine (you would replace this with DynamoDB logic)
  const addMedicineLog = () => {
    const newLog = { id: String(logs.length + 1), name, dosage, type, date };
    setLogs([...logs, newLog]);
    setName('');
    setDosage('');
    setType('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Medicine Log</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Medicine Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dosage (e.g., 2mg, 200mg)"
        value={dosage}
        onChangeText={setDosage}
      />
      <TextInput
        style={styles.input}
        placeholder="Type (e.g., tablet, injection)"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />

      <Button  title="Add New Log" onPress={addMedicineLog} color="#E8E0D3" />

      <FlatList
        data={logs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Feather name="check-circle" size={24} color="green" />
            <Text style={styles.logText}>{item.name}</Text>
            <Text style={styles.logText}>{item.dosage}</Text>
            <Text style={styles.logText}>{item.type}</Text>
            <Text style={styles.logText}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
     flex: 1,
     backgroundColor: '#E8E0D3',
     justifyContent: 'center',
     padding: 20,
   },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignItems: 'center',
    color:"#E8E0D3"
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  logItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  logText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
