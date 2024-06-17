// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import RegisterScreen from './screens/RegisterScreen';
import DonorRegistrationScreen from './screens/DonorRegistrationScreen';
import DriverRegistrationScreen from './screens/DriverRegistrationScreen';
import OrganizationRegistrationScreen from './screens/OrganizationRegistrationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="DonorRegister" component={DonorRegistrationScreen} />
        <Stack.Screen name="DriverRegister" component={DriverRegistrationScreen} />
        <Stack.Screen name="OrganizationRegister" component={OrganizationRegistrationScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
