import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const HomeScreen = () => {
  const { width, height } = Dimensions.get('window');
  const imageStyle = {
    width: width * 0.8, // 80% da largura da tela
    height: height * 0.4, // 40% da altura da tela
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 20
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={require('/Users/eusebiosouza/Documents/FIAP/hackathon-fiap-ejmg-frontend/main-image.jpeg')} // substitua pelo caminho da sua imagem
        style={imageStyle}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar novo jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
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
  image: {
   }
});

export default HomeScreen;