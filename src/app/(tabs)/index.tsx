import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import meds from '../../../assets/data/medications.json';
import MedItem from '../../components/MedItem';
import Redirect from 'expo-router';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={meds}
//         contentContainerStyle = {{gap: 5}}
//         renderItem={({item}) => <MedItem item={item} />}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const StartPage = () => {
return (
    <View style={styles.container}>
    <Text style={styles.greeting}>Good morning!</Text>
    </View>
);
    
//     return (
//   <View style={styles.container}>
//     <FlatList
//       data={meds}
//       contentContainerStyle = {{gap: 5}}
//       renderItem={({item}) => <MedItem item={item} />}
//     />
//     <StatusBar style="auto" />
//   </View>
//);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F3F0',
    justifyContent: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 32,
    color: '#666666',
  },
});

export default StartPage;