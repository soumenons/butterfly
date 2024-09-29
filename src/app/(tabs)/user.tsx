import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserPage = () => {
    const navigation = useNavigation();

    // const handleEditProfile = () => {
    //   navigation.navigate('EditProfileScreen'); // This assumes you have an edit profile screen
    // };
  
    return (
      <View style={styles.container}>
        {/* Profile Picture */}
        <Image
          source={{ uri: 'http://placekitten.com/250/250' }} // Placeholder profile image
          style={styles.profileImage}
        />
  
        {/* User Info */}
        <Text style={styles.name}>Soumya</Text>
        <Text style={styles.email}>soumya@example.com</Text>
  
        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    email: {
      fontSize: 16,
      color: 'gray',
      marginBottom: 15,
    },
    info: {
      fontSize: 16,
      marginBottom: 5,
    },
    editButton: {
      marginTop: 20,
      backgroundColor: '#666666', // Button background color
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    editButtonText: {
      color: '#F5F5F5',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default UserPage;