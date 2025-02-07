import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/authContext';


const Header = () => {

  const {user, score} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Texto à esquerda */}
      <Text style={styles.greeting}>Olá, {user?.name || 'Aluno'}</Text>

      {/* Ícone de estrela dourado e pontuação no centro */}
      <View style={styles.centerContainer}>
        <Ionicons name="star" size={24} color="#FFD700" />
        <Text style={styles.points}>{score.score}</Text> 
      </View>
      
      {/* Espaço vazio à direita para equilíbrio */}
      <View style={styles.rightSpacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  points: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  rightSpacer: {
    width: 50,
  },
});

export default Header;
