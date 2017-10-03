import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    backgroundColor: 'green',
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    padding: 3
  },
  content: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  input: {
    width: 200,
    fontSize: 20
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
});
