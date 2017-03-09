/**
 * Created by jie on 2016/10/19.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
    TouchableHighlight
} from 'react-native';
export default class ScrollViewTest extends Component {

    render() {
        const message = 'Shake or press menu button for dev menuShake or press menu button for dev menu\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu' + '\n' +
            'Shake or press menu button for dev menuShake or press menu button for dev menu';
        let _scrollView;
        return (
            <View>
                <ScrollView horizontal={true}
                            ref={(scrollView)=>{_scrollView=scrollView;}}
                >
                    <Text>
                        {message}
                    </Text>
                    <Text>
                        message end
                    </Text>
                </ScrollView>
                <TouchableHighlight onPress={()=>{
                    _scrollView.scrollTo({x:0})
                }}>
                    <Text>
                        滚到开始
                    </Text>
                </TouchableHighlight>
            </View>
        );

    }
}