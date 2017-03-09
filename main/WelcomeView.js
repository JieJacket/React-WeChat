/**
 *
 * Created by jie on 2016/10/18.
 */
'use strict';
import React, {Component} from 'react';
import {
    Dimensions,
    StatusBar,
    View,
    Image,
} from 'react-native';
import Main from './MainTabs'

class WelcomeView extends Component {

    componentDidMount() {
        let navigator = this.props.navigator;
        if (navigator) {
            setTimeout(()=> {
                navigator.replace({
                    name: 'main',
                    component: Main,
                })
            }, 2000)
        }
    }

    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                <Image
                    style={{
                    width:width,
                    height:height,
                    backgroundColor:'#666',
                    }}
                    resizeMode="stretch"
                    source={require('../img/ic_welcome.jpg')}
                />
            </View>
        );
    }

}

module.exports = WelcomeView;