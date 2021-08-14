import React from 'react';
import { View, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Elevated from 'react-native-elevated-view';
import { colors } from '../constants';
import YouTubeLogo from '../../assets/icon/YouTube_logo.png';
import styles from './Header.style';
import Label from '../Label/Label';

const Header = () => (
  <View>
    <Elevated elevation={4} style={styles.headerContainer}>
      <Image
        source={YouTubeLogo}
        style={{ width: Platform.OS === 'ios' ? 90 : 130, marginLeft: -10, height: '100%' }}
        resizeMode="contain"
      />
      <View style={styles.iconContainer}>
        <Icon name="cast" size={22} color={colors.grey} style={styles.mr} />
        <Icon name="notifications-none" size={24} color={colors.grey} style={styles.mx} />
        <Icon name="search" size={24} color={colors.grey} style={styles.mx} />
        <Icon name="account-circle" size={24} color={colors.grey} style={styles.ml} />
      </View>
    </Elevated>
    <Label />
  </View>
);

export default Header;
