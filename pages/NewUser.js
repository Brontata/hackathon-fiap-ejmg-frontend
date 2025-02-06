import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { string } from 'yup';

const NewUser = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [erro, setErro] = useState(null);

    const handleNewUser = async () => {
        try {
            if (nome === '' || cpf === '') {
                setErro('Por favor, preencha todos os campos');
                return;
            }
            const data = {
                name: nome,
                cpf: cpf,
            }

            const newUser = await fetch('https://hackathon-fiap-ejmg-backend.onrender.com/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const newUserJson = await newUser.json();
            if (newUser.status !== 200) {
                setErro('Não foi possível cadastrar o usuário');
                return;
            }else{
                Alert.alert('Usuário cadastrado com sucesso');
                navigation.navigate('Login');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={(text) => setNome(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={cpf}
                onChangeText={(text) => setCpf(text)}
                keyboardType="numeric"
            />
            {erro && <Text style={styles.erro}>{erro}</Text>}
            <TouchableOpacity title="Cadastrar" onPress={handleNewUser} style={styles.button} >
                <Text style={styles.buttonText}>Cadastrar</Text>
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
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
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
    erro: {
        color: 'red',
        marginBottom: 20,
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
})


export default NewUser;