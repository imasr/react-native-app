import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';

export default class NextArrowButton extends Component {

  handleNextButton = () => {
    this.props.handleNextButton();
  }
  render() {
    const { disabled, handleNextButton } = this.props;
    const opacityStyle = disabled ? 0.2 : 0.6;
    return (
      <TouchableOpacity
        style={[{ opacity: opacityStyle }, styles.button]}
        onPress={handleNextButton}
        disabled={disabled}
      >
        <Icon
          name="angle-right"
          color={colors.green01}
          size={32}
          style={styles.icon}
        />
      </TouchableOpacity>
    )
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func,
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: -2,
    marginTop: -2,
  }
})

