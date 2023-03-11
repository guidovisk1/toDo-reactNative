import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { styles } from './styles';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../../../assets/Logo.png')} // Aqui você deve fornecer a localização do seu logo
      />
    </View>
  );
};