/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RoundedButton from '../components/buttons/RoundedButton';

export default class LoggedOut extends Component {

  onFacebookLogin() {
    alert('Facebook login successfully');
  }

  onCreateAccount() {
    alert('Account created successfully');
  }

  onMoreOptPress() {
    alert("On More Option Pressed!");
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <View style={styles.logoWrapper}>
            <Image
              source={require('../img/loader.gif')}
              style={styles.logo}
            />
            <Text style={styles.welcomeText}>Welcom to Techguy</Text>
          </View>
          <RoundedButton
            text="Continue with Facebook"
            textColor={colors.green01}
            background={colors.white}
            icon={<Icon name="facebook" size={20} style={styles.fbButtonIcon} />}
            handleOnPress={this.onFacebookLogin}
          />

          <RoundedButton
            text="Create Account"
            textColor={colors.white}
            handleOnPress={this.onCreateAccount}
          />

          <TouchableOpacity
            style={styles.moreOptionButton}
            onPress={this.onMoreOptPress}
          >
            <Text style={styles.moreOptionText}>More Option</Text>
          </TouchableOpacity>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>By tapping Continue, Create Account or More </Text>
            <Text style={styles.termsText}>Optons, </Text>
            <Text style={styles.termsText}>I am agree to Techguy's </Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>Term of Service</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>, </Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Term of Service</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>, </Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>, and</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>Nondicrimination Policy</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  logoWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 30,
  },
  logo: {
    height: 70,
    width: 70,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  },
  fbButtonIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  moreOptionButton: {
    marginTop: 15,
  },
  moreOptionText: {
    color: colors.white,
    fontSize: 16,
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center'
  },
  termsText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.white,
  },
  linkButton: {
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
  }

})