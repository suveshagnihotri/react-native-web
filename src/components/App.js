import React, { Component } from "react";
import { Image, Text, View, Button, Picker } from "react-native";
import { styles } from "../utils/styles";
import LoginScreen from './LoginScreen';
import OtpScreen from './OtpScreen';
// see https://github.com/necolas/react-native-web

class App extends Component {
  _onButtonPress() {
    //do some things
  }

  render() {
    return (
      <View style={styles.box}>
        <View>
          <LoginScreen/>
        </View>
      </View>
    );
  }
}

export default App;
