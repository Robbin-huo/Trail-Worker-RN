import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    backgroundColor: 'green',
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    padding: 3,
  },
  content: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    width: 300,
    fontSize: 20,
    backgroundColor: 'white'
  },
  lg_input: {
    fontSize: 30,
    flex: 1,
    height: 150,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    fontSize: 20
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  subtitleText: {
    fontSize: 35,
  }
});
