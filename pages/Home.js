import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('GameInit');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
        <View style={styles.iconWrapper}>
          <Ionicons name="egg" size={60} color="#FFD700" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>5</Text>
          </View>
        </View>
        <Text style={styles.label}>Basico 1</Text>
      </TouchableOpacity>

      <View style={[styles.itemContainer, styles.locked]}>
        <View style={styles.iconWrapper}>
          <Ionicons name="chatbubble" size={60} color="#FFD700" />
          <Ionicons name="lock-closed" size={24} color="#888" style={styles.lockIcon} />
        </View>
        <Text style={styles.label}>Frases</Text>
      </View>

      <View style={[styles.itemContainer, styles.locked]}>
        <View style={styles.iconWrapper}>
          <Ionicons name="paw" size={60} color="#FF6F61" />
          <Ionicons name="lock-closed" size={24} color="#888" style={styles.lockIcon} />
        </View>
        <Text style={styles.label}>Animais</Text>
      </View>

      <View style={[styles.itemContainer, styles.locked]}>
        <View style={styles.iconWrapper}>
          <Ionicons name="restaurant" size={60} color="#1E90FF" />
          <Ionicons name="lock-closed" size={24} color="#888" style={styles.lockIcon} />
        </View>
        <Text style={styles.label}>Comida</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  locked: {
    opacity: 0.5,
  },
  iconWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: '#FFD700',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    marginTop: 16,
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
  lockIcon: {
    position: 'absolute',
    bottom: -5,
    right: -5,
  },
});

export default HomeScreen;