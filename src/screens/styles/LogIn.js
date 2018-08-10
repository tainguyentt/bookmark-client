import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  headerWrapper: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 40,
    height: 40
  },
  headerLabel: {
    fontSize: 45,
    color: 'grey',
  },
  oauthWrapper: {
    marginTop: 80,
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: colors.lightGrey,
    borderColor: 'lightgrey',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  googleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  googleIcon: {
    color: 'indianred',
  },
  googleLabel: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '500'
  },
  separateLine: {
    color: 'grey',
    textAlign: 'center',
    padding: 10,
    margin: 10
  },
  formWrapper: {
    display: 'flex',
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
    width: '100%',
  },
  emailField: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    width: '100%',
  },
  passwordField: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderTopColor: 'white',
    padding: 10,
    width: '100%',
  },
  forgotPasswordLink: {
    marginTop: 30
  },
  forgotPasswordLabel: {
    color: 'grey',
    fontWeight: '500',
  },
  controlWrapper: {
    position: 'absolute',
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    backgroundColor: colors.lightGrey,
    padding: 10,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'flex-end',
  },
  logInLabel: {
    color: 'grey',
    fontWeight: '600'
  }
});