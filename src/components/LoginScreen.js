import React, {Component} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';


class LoginScreen extends Component {

    onClientIdChange(text) {
      console.log(text,"Client Id Change");
    }

    onClickToLogin() {
        console.log("OnClick Login");
    }

    onRenderButton() {
        return (<TouchableHighlight
                onPress={this.onClickToLogin.bind(this)}
                style={styles.button}>
                <Text style={styles.buttonText}> GET OTP </Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Image style={styles.logo}
                           source={require('../assets/header_logo.png')}/>
                    <View style={styles.loginBoxWithOutShadow}>
                        <Text style={styles.textStyle}>ID</Text>
                        <View style={{paddingLeft: 20}}>
                            <TextInput style={styles.testInputStyle}
                                       placeholder="A12345"
                                       onChangeText={this.onClientIdChange.bind(this)}
                                       autoCapitalize={'words'}
                                       editable={true}/>
                        </View>
                    </View>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                    {this.onRenderButton()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    loginBoxWithOutShadow: {
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        height: Dimensions.get('window').height / 9,
        marginLeft: 20,
        marginRight: 20,
        marginTop: Dimensions.get('window').height / 25,
    },
    testInputStyle: {
        fontSize: 20,
        flex: .5,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: Dimensions.get('window').height / 24,
        color: '#000000'
    },
    textStyle: {
        flex: .5,
        marginLeft: 10,
        paddingLeft: 10,
        marginTop: Dimensions.get('window').height / 22,
        fontSize: 15,
        color: '#dd9933',
    },
    buttonStyle: {
        flex: 1,
        marginTop: 20,
        borderColor: '#841584',
        borderRadius: 2
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
        marginTop: 10,
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
    logo: {
        marginTop: Dimensions.get('window').height / 11,
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 6,
        alignSelf: 'center',
        resizeMode: 'contain'
    }
});

export default LoginScreen;
