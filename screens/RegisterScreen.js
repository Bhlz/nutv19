import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const handleOptionSelect = (option) => {
    if (option === 'Donante') {
      navigation.navigate('DonorRegister');
    } else if (option === 'Conductor') {
      navigation.navigate('DriverRegister');
    } else if (option === 'Organización') {
      navigation.navigate('OrganizationRegister');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué eres?</Text>
      <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Donante')}>
        <Text style={styles.optionButtonText}>Donante</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Conductor')}>
        <Text style={styles.optionButtonText}>Conductor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionSelect('Organización')}>
        <Text style={styles.optionButtonText}>Organización</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 60, // Espacio adicional en la parte superior
  },
  title: {
    fontSize: 28, // Tamaño de fuente más grande
    marginBottom: 20,
    color: '#1DA1F2', // Color del texto
    fontWeight: 'bold',
  },
  optionButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionButtonText: {
    color: '#1DA1F2',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
