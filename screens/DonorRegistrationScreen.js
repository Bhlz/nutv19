import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';

const DonorRegistrationScreen = () => {
  const [businessType, setBusinessType] = useState('');
  const [customBusinessType, setCustomBusinessType] = useState('');

  const handleBusinessTypeChange = (value) => {
    setBusinessType(value);
  };

  const renderBusinessTypePicker = () => {
    return (
      <Picker
        selectedValue={businessType}
        onValueChange={(itemValue) => handleBusinessTypeChange(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Supermercado" value="Supermercado" />
        <Picker.Item label="Restaurante" value="Restaurante" />
        <Picker.Item label="Panadería" value="Panadería" />
        <Picker.Item label="Tienda de abarrotes" value="Tienda de abarrotes" />
        <Picker.Item label="Otro" value="Otro" />
      </Picker>
    );
  };

  const renderCustomBusinessTypeInput = () => {
    if (businessType === 'Otro') {
      return (
        <TextInput
          style={styles.input}
          placeholder="Escribe tu tipo de negocio"
          onChangeText={(text) => setCustomBusinessType(text)}
          value={customBusinessType}
        />
      );
    }
    return null;
  };

  const handleRegularRegister = () => {
    // Implementa la lógica para el registro normal aquí
    console.log('Registrarse normalmente');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Donantes</Text>
      <Text style={styles.subtitle}>Información del Negocio</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Establecimiento"
      />
      {renderBusinessTypePicker()}
      {renderCustomBusinessTypeInput()}
      <TextInput
        style={styles.input}
        placeholder="Dirección"
      />
      <Text style={styles.subtitle}>Detalles de Contacto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Teléfono"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegularRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.buttonText}>Registrarse con Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#DB4437',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DonorRegistrationScreen;
