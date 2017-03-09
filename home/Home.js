/**
 *
 * Created by jie on 2016/10/18.
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class Home extends Component {
    
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            message:'',
        };
      }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.message}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});