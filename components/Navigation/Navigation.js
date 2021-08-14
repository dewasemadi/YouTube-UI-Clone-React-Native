import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Navigation.style';

const Navigation = () => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.iconContainer}>
        <Icon name="home" size={22} color={colors.white} style={styles.icon} />
        <Text style={styles.txt}>Home</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="cast" size={22} color={colors.white} style={styles.icon} />
        <Text style={styles.txt}>Shorts</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="add-circle-outline" size={40} color={colors.white} style={styles.icon} />
      </View>
      <View style={styles.iconContainer}>
        <Icon name="live-tv" size={22} color={colors.white} style={styles.icon} />
        <Text style={styles.txt}>Subscriptions</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="video-library" size={22} color={colors.white} style={styles.icon} />
        <Text style={styles.txt}>Library</Text>
      </View>
    </View>
  );
};

export default Navigation;
