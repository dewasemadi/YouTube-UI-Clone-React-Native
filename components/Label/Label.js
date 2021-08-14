import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Elevated from 'react-native-elevated-view';
import styles from './Label.style';
import { colors } from '../constants';

const explore = [
  {
    id: 1,
    name: 'Mixes',
  },
  {
    id: 2,
    name: 'Music',
  },
  {
    id: 3,
    name: 'Lives',
  },
  {
    id: 4,
    name: 'React Native',
  },
  {
    id: 5,
    name: 'Computer',
  },
];

const Label = () => {
  return (
    <Elevated elevation={4} style={styles.exploreContainer}>
      <ScrollView style={{ flexDirection: 'row' }} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.exploreLabel}>
            <Icon name="explore" size={22} color={colors.grey} style={{ marginRight: 10 }}></Icon>
            <Text style={{ color: 'white' }}>Explore</Text>
          </View>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.allLabel}>
          <Text style={{ color: 'black' }}>All</Text>
        </View>
        {explore.map((data, idx) => (
          <View style={styles.label} key={idx}>
            <Text style={{ color: 'white' }}>{data.name}</Text>
          </View>
        ))}
      </ScrollView>
    </Elevated>
  );
};

export default Label;
