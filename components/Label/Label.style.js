import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  exploreContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#212121',
  },
  exploreLabel: {
    flexDirection: 'row',
    padding: 8,
    marginLeft: 10,
    borderRadius: 3,
    backgroundColor: '#383838',
  },
  allLabel: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    marginLeft: 10,
  },
  label: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: '#383838',
    borderColor: '#454545',
    borderWidth: 1.5,
    marginLeft: 10,
  },
  divider: {
    borderWidth: 0.8,
    borderColor: '#454545',
    marginLeft: 10,
  },
});

export default styles;
