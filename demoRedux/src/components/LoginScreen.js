import React, {Component} from 'react';
import {
    View, StyleSheet, TouchableOpacity, Text, TextInput
} from 'react-native';
import {connect} from 'react-redux';

import {getAccessToken} from '../api/UserApi';
import {toggleLoggin} from '../redux/actions/UserAction';
// const URL = 'http://10.168.1.46:8080/app/';

class LoginScreen extends Component {

    logginClick(){
        getAccessToken('admin', 'admin')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Username: </Text>
                <TextInput/>
                <Text>Password: </Text>
                <TextInput/>
                <TouchableOpacity onPress={() => this.props.toggleLoggin()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#95fff3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'red',
        margin: 10
    },
    textInput: {
        height: 40,
        backgroundColor: '#E4F6D4',
        margin: 10,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: '#2e3bff',
        margin: 10
    }

});

export default connect(null, {toggleLoggin})(LoginScreen);