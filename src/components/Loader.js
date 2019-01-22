import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, Image, StyleSheet, Modal, Alert } from 'react-native';
import colors from '../styles/colors';

export default class Loader extends Component {


  render() {
    const { animationType, visible, modalVisible } = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => null}
      >
        <View style={styles.wrapper}>
          <View borderRadius={15} style={styles.loaderContainer}>
            <Image
              style={styles.loaderImage}
              source={require('../img/loading.gif')}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

Loader.propTypes = {
  animationType: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  loaderContainer: {
    height: 90,
    width: 90,
    backgroundColor: colors.white,
    left: '50%',
    top: '50%',
    marginLeft: -45,
    marginTop: -45,
    position: 'absolute',
    overflow: 'hidden',
  },
  loaderImage: {
    height: 90,
    width: 90,
    borderRadius: 15
  },

})
