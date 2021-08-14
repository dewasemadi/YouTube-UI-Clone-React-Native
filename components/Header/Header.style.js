import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

const ANDROID_HEADER_HEIGHT = 34 + Constants.statusBarHeight;
const IOS_HEADER_HEIGHT = 44 + Constants.statusBarHeight;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: Platform.OS === 'ios' ? IOS_HEADER_HEIGHT : ANDROID_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#212121',
    borderBottomColor: '#454545',
    borderWidth: 1,
  },
  iconContainer: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mr: {
    marginRight: 10,
  },
  ml: {
    marginLeft: 10,
  },
  mx: {
    marginRight: 10,
    marginLeft: 10,
  },
});

export default styles;
