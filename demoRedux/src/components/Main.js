import React, {Component} from 'react';
import {
    View, Text
} from 'react-native';
import {connect} from 'react-redux'

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen'

class Main extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <View>
                {this.props.userDetail.isLogged ? <HomeScreen/> : <LoginScreen/>}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        userDetail: state.userDetail
    };
}

export default connect(mapStateToProps)(Main);
