import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HeroSection = ({temp, tempmin, tempmax, address, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{address}</Text>
      <Text style={styles.tempText}>{temp}°</Text>
      <Text style={styles.smallText}>{description}</Text>
      <Text style={styles.smallText}>
        H:{tempmax}° L:{tempmin}°
      </Text>
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 32,
  },
  tempText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 16,
  },
  icon: {
    width: 25
  }
});

export default HeroSection;
