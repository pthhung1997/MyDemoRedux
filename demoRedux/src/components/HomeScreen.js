import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {

    render() {
        return (
            <View >
                <Text >This is HomePage</Text>
            </View>
        );
    }

}


export default connect()(HomeScreen);