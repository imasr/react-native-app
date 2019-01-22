import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValid: true,
      validEmail: false,
      email: '',
      validPassword: false,
      loadingVisible: false
    }
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this)
  }

  handleEmailChange = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ email: email });

    if (!this.state.validEmail) {
      if (emailRegex.test(String(email).toLowerCase()))
        this.setState({ validEmail: true })
    } else {
      if (!emailRegex.test(String(email).toLowerCase()))
        this.setState({ validEmail: false })
    }
  }

  handlePasswordChange = (pwd) => {
    if (!this.state.validPassword) {
      if (pwd.length >= 4)
        this.setState({ validPassword: true })
    } else if (pwd.length < 4) {
      this.setState({ validPassword: false })
    }
  }

  handlCloseNotification = () => {
    this.setState({ formValid: true })
  }

  handleNextButton = () => {
    if (this.state.email === 'shaanh33@gmail.com' && this.state.validPassword) {
      this.setState({ loadingVisible: true, formValid: true })
      setTimeout(() => this.setState({ loadingVisible: false }), 2000)
    } else
      this.setState({ formValid: false });
  }

  toggleNextButtonState() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) return false;
    return true;
  }

  render() {
    const { formValid, loadingVisible } = this.state;
    const showNotification = formValid ? false : true;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;

    return (
      <KeyboardAvoidingView style={[{ backgroundColor: background }, styles.wrapper]}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeadder}>LOGIN</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelTextColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handleEmailChange}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelTextColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              onChangeText={this.handlePasswordChange}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              handleNextButton={this.handleNextButton}
              disabled={this.toggleNextButtonState()}
            />
          </View>
          <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>
            <Notification
              type="Error"
              firstLine="Invalid username and password!"
              secondLine="Please try again."
              showNotification={showNotification}
              closeNotification={this.handlCloseNotification}
            />
          </View>
          <Loader
            animationType="fade"
            modalVisible={loadingVisible}
          />
        </View>

      </KeyboardAvoidingView>
    )
  }
}

Login.propTypes = {}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    flex: 1,
  },
  loginHeadder: {
    fontSize: 34,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
    textAlign: 'center',
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
})
