import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import colors from '../../styles/colors';

export default class InputField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
    };
  }

  togglePassword = () => {
    this.setState({ secureInput: !this.state.secureInput })
  }
  render() {
    const { labelText, labelTextSize, labelTextColor, textColor, borderBottomColor, inputType, customStyle, onChangeText } = this.props;
    const fontSize = labelTextSize || 14;
    const color = labelTextColor || colors.white;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || 'transparent';
    const { secureInput } = this.state;
    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[{ fontSize, color }, styles.label]}>{labelText}</Text>
        {inputType === 'password' ?
          <TouchableOpacity
            style={styles.showButton}
            onPress={this.togglePassword}
          >
            <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
          : null
        }
        <TextInput
          autoCorrect={false}
          style={[{ color: inputColor, borderBottomColor: borderBottom }, styles.inputField]}
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
        />
      </View>
    )
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelTextColor: PropTypes.string,
  textColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  onChangeText: PropTypes.func,
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  label: {
    fontWeight: '700',
    marginBottom: 10,
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 0,
  },
  showButton: {
    position: 'absolute',
    right: 0,
  },
  showButtonText: {
    color: colors.white,
    fontWeight: '700'
  }
})

