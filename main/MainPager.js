/**
 *
 * Created by jie on 2016/10/18.
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StatusBar,
} from 'react-native';
import Home from '../home/Home';

const {width, height} = Dimensions.get('window');

import TabItem from './TabItem';
export default class MainPager extends Component {


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.iconsDefault = [require('../img/ic_home_default.png'),
            require('../img/ic_home_default.png'),
            require('../img/ic_me_default.png'),
            require('../img/ic_me_default.png')
        ];
        this.iconsSelected = [require('../img/ic_home_selected.png'),
            require('../img/ic_home_selected.png'),
            require('../img/ic_me_selected.png'),
            require('../img/ic_me_selected.png')
        ];
        this.lastIndex = 0;
        this.state = {
            index: 0,
            icons: [this.iconsSelected[0], this.iconsDefault[1], this.iconsDefault[2], this.iconsDefault[3]],
        };
        let navigator = this.props.navigator;
        let _scrollView = null;
    }

    _onPress(index) {
        this.isPressed = true;
        if (this.lastIndex !== index) {
            let iconArray = this.state.icons;
            iconArray[index] = this.iconsSelected[index];
            iconArray[this.lastIndex] = this.iconsDefault[this.lastIndex];
            this.setState({
                index: index,
                icons: iconArray,
            });
        }
        this.lastIndex = index;
        let offset = index * width;
        this._scrollView.scrollTo({x: offset});
        console.log(offset);
    }

    _onScroll(event) {
        if (this.isPressed) {
            this.isPressed = false;
            return;
        }
        let x = event.nativeEvent.contentOffset.x;
        let index = Math.ceil(x / width);
        if (this.lastIndex !== index) {
            let iconArray = this.state.icons;
            iconArray[index] = this.iconsSelected[index];
            iconArray[this.lastIndex] = this.iconsDefault[this.lastIndex];
            this.setState({
                index: index,
                icons: iconArray,
            });
        }
        this.lastIndex = index;
        console.log(x);
        this.setState({
            index: index,
        });
    }

    render() {
        return (
            <View >
                <ScrollView contentContainerStyle={styles.scrollView}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            onScroll={this._onScroll.bind(this)}
                            ref={(scrollView) => {
                                this._scrollView = scrollView;
                            }}
                >
                    <Home message='微信'/>
                    <Home message='通讯录'/>
                    <Home message='发现'/>
                    <Home message='我'/>
                </ScrollView>

                <View style={styles.tabs}>

                    <TabItem title={'微信'}
                             onPress={this._onPress.bind(this, 0)}
                             source={this.state.icons[0]}/>

                    <TabItem title={'通讯录'}
                             onPress={this._onPress.bind(this, 1)}
                             source={this.state.icons[1]}/>

                    <TabItem title={'发现'}
                             onPress={this._onPress.bind(this, 2)}
                             source={this.state.icons[2]}/>

                    <TabItem title={'我'}
                             onPress={this._onPress.bind(this, 3)}
                             source={this.state.icons[3]}/>
                </View>
            </View>
        )
            ;
    }

}

class TabBar extends Component {

}


const styles = StyleSheet.create({
    scrollView: {
        width: width * 4,
        height: height - 90
    },
    mainContent: {
        height: 50,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    Image: {
        width: 30,
        height: 30,
        marginBottom: 5
    },
    tabs: {
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        borderTopWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    },

});