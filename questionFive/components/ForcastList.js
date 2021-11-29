import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Section = ({datetime, tempmin, tempmax}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>
        {days[new Date(datetime).getDay()]}
      </Text>
      <Text style={[styles.sectionDescription]}>
        High of {tempmin}° Low of {tempmax}°
      </Text>
    </View>
  );
};

const ForcastList = ({data} = {data: []}) => {
  return (
    <View>
      {data.map(item => (
        <Section {...item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default ForcastList;
