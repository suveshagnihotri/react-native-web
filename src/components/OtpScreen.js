import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TextInput
} from 'react-native';

class OtpScreen extends Component {

    onClickToSubmit() {

    }

    onOtpChange(text) {
    }

    _onBackPress = () => {
    }

    onRenderButton() {
        return (
            <TouchableHighlight
                onPress={this.onClickToSubmit.bind(this)}
                style={styles.button}>
                <Text style={styles.buttonText}> LOGIN </Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: '#ffffff'}}>
                    <Image style={styles.logo}
                           source={require('../assets/header_logo.png')}/>
                    <View style={styles.loginBoxWithOutShadow}>
                        <Text style={styles.textStyle}>OTP</Text>
                        <View style={{paddingLeft: 20}}>
                            <TextInput style={styles.testInputStyle}
                                       placeholder="A12345"
                                       onChangeText={this.onOtpChange.bind(this)}
                                       autoCapitalize={'words'}
                                       editable={true}/>
                        </View>
                    </View>
                    {/*<Text style={styles.errorTextStyle}>{this.props.otpError}</Text>*/}
                    {this.onRenderButton()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    textStyle: {
        marginLeft: 20,
        width: 280,
        marginRight: 20,
        alignItems: 'stretch',
        marginTop: Dimensions.get('window').height / 22,
        fontSize: 15,
        color: '#dd9933',
        justifyContent: 'center',
    },
    buttonStyle: {
        height: 50,
        borderColor: "#FFFFFF",
        borderRadius: 5,
        borderWidth: .5,
        backgroundColor: '#dd9933',
        margin: 20,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        height: (Dimensions.get('window').height) / 12,
        borderColor: "#FFFFFF",
        borderRadius: 5,
        borderWidth: .5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#dd9933',
        margin: 20,
        marginTop: (Dimensions.get('window').height) / 6
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600',
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
    logo: {
        marginTop: Dimensions.get('window').height / 20,
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 6,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    brandText: {
        height: 100,
        marginLeft: 40,
        marginRight: 40,
        aspectRatio: 1.7,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    loginBoxWithOutShadow: {
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        height: Dimensions.get('window').height / 9,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
    },
    testInputStyle: {
        fontSize: 20,
        flex: .5,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: Dimensions.get('window').height / 24,
        color: '#000000'
    }
});

export default OtpScreen;
