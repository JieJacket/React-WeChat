'use strict';

import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
    Platform,
    Navigator,
    TouchableHighlight,
    Modal,
    TouchableWithoutFeedback,
    ListView

} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import FirstPage from '../first/FirstPage';
import SecondPage from '../second/SecondPage';
import ThirdPage from '../third/ThirdPage';
import FourthPage from  '../fourth/FourthPage';

const HOME = '微信';
const HOME_NORMAL = require('../img/ic_msg_default.png');
const HOME_FOCUS = require('../img/ic_msg_selected.png');

const CATEGORY = '通讯录';
const CATEGORY_NORMAL = require('../img/ic_contacts_default.png');
const CATEGORY_FOCUS = require('../img/ic_contacts_selected.png');

const FAXIAN = '发现';
const FAXIAN_NORMAL = require('../img/ic_find_default.png');
const FAXIAN_FOCUS = require('../img/ic_find_selected.png');

const CART = '我';
const CART_NORMAL = require('../img/ic_me_default.png');
const CART_FOCUS = require('../img/ic_me_selected.png');

import MainTabsForAndroid from './MainTabsForAndroid';

import AppBar from '../main/AppBar'

import DetailsView from '../first/DetailsView';

import Popup from './Popup';

export default class MainTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: HOME,
            tabIndex: 0,
            title: '微信'
        }
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                title={tag}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({selectedTab: tag})}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1}}>
                <Text style={{fontSize: 22}}>{tag}</Text>
            </View>
        )
    }

    render() {
        let _navigator = this.props.navigator;

        if (Platform.OS === 'android') {
            return <MainTabsForAndroid navigator={this.props.navigator}/>
        }
        return (
            <View style={{flex: 1}}>
                <AppBar title={this.state.title}
                        menuItems={[
                            <TouchableHighlight
                                onPress={()=> {
                                    _navigator.push({
                                        name: 'test',
                                        component: DetailsView,
                                        configScene: Navigator.SceneConfigs.FadeAndroid,
                                        params: {rowData: 'test'}
                                    })
                                }}
                                style={styles.headerImageView}>
                                <Image style={{width: 28, height: 28, resizeMode: 'stretch'}}
                                       source={require('../img/ic_magnifying_glass.png')}/>
                            </TouchableHighlight>,
                            <TouchableHighlight
                                onPress={()=> {
                                    this._popup.toggle();

                                }}
                                style={[styles.headerImageView, {marginRight: 10}]}>
                                <Image style={{width: 30, height: 30, resizeMode: 'stretch'}}
                                       source={require('../img/ic_plus.png')}/>
                            </TouchableHighlight>
                        ]}
                        navigator={this.props.navigator}/>
                <Popup
                    ref={(popup) => {
                       this._popup = popup
                    }}
                />
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME,
                        <FirstPage navigator={this.props.navigator}/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY,
                        <SecondPage navigator={this.props.navigator}/>)}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN,
                        <ThirdPage navigator={this.props.navigator}/>)}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART,
                        <FourthPage navigator={this.props.navigator}/>)}
                </TabNavigator>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    tab: {
        height: 54,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        paddingTop: 4,
        paddingBottom: 4
    },
    tabIcon: {
        width: 20,
        height: 20,
        resizeMode: 'stretch',
    },
    selectedTitleStyle: {
        color: '#4ac02b'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(57,58,61)',
        height: 60,
        paddingLeft: 20,
    },
    headerImageView: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
});