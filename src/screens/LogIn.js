import Icon from '@expo/vector-icons/Ionicons';
import React, { Component } from 'react';
import { Alert, Image, KeyboardAvoidingView, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/LogIn';

export default class LogIn extends Component {
  handleOnEmailLogin = () => {
    this.props.navigation.navigate('LoggedIn');
  }
  handleOnGoogleLogIn() {
    Alert.alert('Not available yet!');
  }
  handleOnForgotPassword() {
    Alert.alert('Not available yet!');
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper} enabled={true}>
        <View style={styles.headerWrapper}>
          <Image style={styles.headerImage} source={require('../images/logo.png')} />
          <Text style={styles.headerLabel}> bookmark </Text>
        </View>
        <View style={styles.oauthWrapper}>
          <TouchableHighlight style={styles.googleButton} onPress={this.handleOnGoogleLogIn}>
            <View style={styles.googleWrapper}>
              <Icon style={styles.googleIcon} name="logo-google" size={24} />
              <Text style={styles.googleLabel}>Log In with Google</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={styles.separateLine}>or</Text>
        <View style={styles.formWrapper}>
          <TextInput style={styles.emailField} placeholder="Email or username" />
          <TextInput
            style={styles.passwordField}
            secureTextEntry={true}
            placeholder="Password" />
          <TouchableOpacity style={styles.forgotPasswordLink} onPress={this.handleOnForgotPassword}>
            <Text style={styles.forgotPasswordLabel}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.controlWrapper}>
          <TouchableOpacity style={styles.logInButton} onPress={this.handleOnEmailLogin}>
            <Text style={styles.logInLabel}>Log In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
