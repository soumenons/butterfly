import { StyleSheet, Text, View} from 'react-native';


export default function MedItem({item}) {
    return (
    <View style={styles.medBlock}>
      <Text style={styles.medName}>{item.name}</Text>
      <Text style={styles.medSubtitle}>{item.type} | {item.dose}</Text>
    </View>
    );
}


const styles = StyleSheet.create({
    medBlock: {
      backgroundColor: '#E8E0D3',
      padding: 10, 
      borderRadius: 15,
      marginHorizontal: 2,

      //shadow
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,},
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    },

    medName: {
      fontSize: 20 , 
      fontWeight:'bold',
      color: '#303030',
      marginBottom: 4,
    },
    medSubtitle: {
      color:'#666666',
      marginBottom: 5,
    },
  });
  
