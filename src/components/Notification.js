import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import colors from '../styles/colors';


export default class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      positionValue: new Animated.Value(60)
    }
  }

  animateNotification(value) {
    const { positionValue } = this.state;
    Animated.timing(
      positionValue,
      {
        toValue: value,
        duration: 300,
        velocity: 3,
        tension: 2,
        friction: 8,
        easing: Easing.easeOutBack
      }
    ).start()
  }

  closeNotification = () => {
    this.props.closeNotification();
  }

  render() {
    const { type, firstLine, secondLine, showNotification } = this.props;
    const { positionValue } = this.state;
    showNotification ? this.animateNotification(0) : this.animateNotification(60);
    return (
      <Animated.View style={[{ transform: [{ translateY: positionValue }] }, styles.wrapper]}>
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{type}</Text>
          <Text style={styles.errorMsg}> {firstLine}</Text>
          <Text style={styles.errorMsg}> {secondLine}</Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.closeNotification}
        >
          <Icon
            name="times"
            size={20}
            color={colors.lightGray}
          />
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  closeNotification: PropTypes.func,
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: 60,
    width: '100%',
    padding: 10,
  },
  notificationContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
  },
  errorMsg: {
    marginBottom: 2,
    fontSize: 14,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  }
})
