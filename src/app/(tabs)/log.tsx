import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import uuid from 'react-native-uuid';

type MedicineLog = {
  id: string;
  date: string;
  name: string;
  dosage: string;
  type: string;
};

const Log = () => {

    const [selectedDate, setSelectedDate] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [dosage, setDosage] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [logs, setLogs] = useState<MedicineLog[]>([]);
  
    const handleDayPress = (day: any) => {
        setSelectedDate(day.dateString);
      };
  
    const addMedicineLog = () => {
      const newLog: MedicineLog = {
        id: uuid.v4().toString(),
        date: selectedDate,
        name,
        dosage,
        type,
      };
      setLogs([...logs, newLog]);
      setName('');
      setDosage('');
      setType('');
    };
  
    const filteredLogs = logs.filter(log => log.date === selectedDate);
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Medicine Log</Text>
  
        <Calendar 
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: 'blue'
            }
          }}
        />
  
        <View style={styles.form}>
          <Text style={styles.dateLabel}>Selected Date: {selectedDate}</Text>
  
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
  
          <Button title="Add Medicine Log" onPress={addMedicineLog} />
  
          <Text style={styles.logTitle}>Logs for {selectedDate}:</Text>
          {filteredLogs.length > 0 ? (
            <FlatList
              data={filteredLogs}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.logItem}>
                  <Text>{item.name} - {item.dosage} - {item.type}</Text>
                </View>
              )}
            />
          ) : (
            <Text>No logs for this date</Text>
          )}
        </View>
      </View>
    );
};

export default Log;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      form: {
        marginTop: 20,
      },
      dateLabel: {
        fontSize: 16,
        marginBottom: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
      },
      logTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
      },
      logItem: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginVertical: 5,
        borderRadius: 5,
      },
});