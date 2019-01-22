import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types'

export default class Logo extends Component {

  render() {
    return (
      <View style={styles.logoWrapper}>
        <Image
          source={require('../img/pwa_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Welcom to Techguy.</Text>
      </View>
    )
  }
}

Logo.propTypes = {
  image: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  },
})
