import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardMargin: {
    marginBottom: 15,
  },
  videoPreview: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  overviewContainer: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
  },
  overviewContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginLeft: 15,
    width: '75%',
  },
  optionIcon: {
    width: '25%',
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    color: '#b7b7b7',
    fontSize: 13,
  },
});

export default styles;
