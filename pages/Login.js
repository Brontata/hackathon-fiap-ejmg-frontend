import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
//import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/authContext';


const LoginPage = ({ navigation }) => {
  const {user, setUser} = React.useContext(AuthContext);
  const [cpf, setCpf] = useState('');
  
  function validarCPF(cpf) {
    if (!/^\d{11}$/.test(cpf)) {
      return false;
    }

    const cpfArray = cpf.split('').map(Number);
    const soma1 = cpfArray.slice(0, 9).reduce((acc, curr, index) => acc + curr * (10 - index), 0);
    const resto1 = soma1 % 11;
    const digito1 = resto1 < 2 ? 0 : 11 - resto1;

    if (cpfArray[9] !== digito1) {
      return false;
    }

    const soma2 = cpfArray.slice(0, 10).reduce((acc, curr, index) => acc + curr * (11 - index), 0);
    const resto2 = soma2 % 11;
    const digito2 = resto2 < 2 ? 0 : 11 - resto2;

    return cpfArray[10] === digito2;
  }

  const handleLogin = async () => {

    try {
      if (validarCPF(cpf) === false) {
        Alert.alert('CPF inválido');
        return;
      }

      console.log('cpf', cpf);
      const login = await fetch(`https://hackathon-fiap-ejmg-backend.onrender.com/api/user/${cpf}`);
      console.log('login.status', login.status);

      if (login.status !== 200) {
        Alert.alert('CPF não localizado. Contate o seu professor para mais informações.');
      } else {
        const loginJson = await login.json();
        console.log('loginJson', loginJson);
        
        const loginJsonString = JSON.stringify(loginJson);
        AsyncStorage.setItem('user', loginJsonString);
        
        
        setUser(loginJson);

        /*const score = await fetch(`https://hackathon-fiap-ejmg-backend.onrender.com/api/user/score?cpf=${cpf}`);
        console.log('score.status', score.status);
        const scoreJson = await score.json();
        console.log('scoreJson', scoreJson);
        */

        navigation.navigate('Home');

      }
    } catch (error) {
      console.log('error', error);
    }



  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>Identifique-se para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF"
        keyboardType="text"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginPage;
