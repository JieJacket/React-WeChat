/**
 * Created by jie on 2016/10/18.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
export default class TabItem extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress} style={styles.container}>
                <View style={styles.view}>
                    <Image style={styles.image} source={this.props.source}/>
                    <Text numberOfLines={1} style={[styles.title,{color:this.props.textColor}]}>{this.props.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: 48,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    view: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize:12
    },
    image: {
        width: 20,
        height: 20,
    },
});