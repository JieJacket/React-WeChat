/**
 * Created by jie on 2016/10/21.
 */
'use strict'
import React, {Component} from 'react';

import {
    StyleSheet,
    ViewPagerAndroid,
    ToolbarAndroid,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
    Modal,
    ListView,
    TouchableHighlight,
    Navigator
} from 'react-native';

import TabItem from './TabItem';

import Header from './Header'

import DetailsView from '../first/DetailsView';

import Popup from './Popup';

import FirstPage from '../first/FirstPage';
import SecondPage from '../second/SecondPage';
import ThirdPage from '../third/ThirdPage';
import FourthPage from '../fourth/FourthPage';

import AppBar from './AppBar';

const iconsDefault = [require('../img/ic_msg_default.png'),
    require('../img/ic_contacts_default.png'),
    require('../img/ic_find_default.png'),
    require('../img/ic_me_default.png')];

const iconsSelected = [require('../img/ic_msg_selected.png'),
    require('../img/ic_contacts_selected.png'),
    require('../img/ic_find_selected.png'),
    require('../img/ic_me_selected.png')];

const {height} = Dimensions.get('window');

export default class MainTabsForAndroid extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            page: 0,
            animationsAreEnabled: true,
            scrollEnabled: true,
            progress: {
                position: 0,
                offset: 0,
            },
            modalVisible: false,
        };

    }

    onPageSelected = (e) => {
        this.setTabs(e.nativeEvent.position);
        this.setState({page: e.nativeEvent.position});
    };

    onPageScroll = (e) => {
        this.setState({progress: e.nativeEvent});
    };

    onPageScrollStateChanged = (state) => {
        this.setState({scrollState: state});
    };

    move = (delta) => {
        var page = this.state.page + delta;
        this.go(page);
    };

    go = (page) => {
        if (this.state.animationsAreEnabled) {
            this.viewPager.setPage(page);
        } else {
            this.viewPager.setPageWithoutAnimation(page);
        }

        this.setState({page});
    };

    componentWillMount() {

        this.setState({
            icons: [iconsSelected[0],
                iconsDefault[1],
                iconsDefault[2],
                iconsDefault[3]],
            textColors: [
                '#4ac02b',
                '#333333',
                '#333333',
                '#333333',
            ],
            title: '微信'
        });
        this.lastPos = 0;
    }

    _onPress(index) {
        this.go(index);
        this.setTabs(index);
    }

    setTabs = (index)=> {
        if (index === this.lastPos) {
            return
        }
        let icons = this.state.icons;
        icons[this.lastPos] = iconsDefault[this.lastPos];
        icons[index] = iconsSelected[index];

        let textClolors = this.state.textColors;
        textClolors[this.lastPos] = '#333333';
        textClolors[index] = '#4ac02b';
        this.setState({
            icons: icons,
            textColors: textClolors,
        });

        this.lastPos = index;
    }

    render() {
        let pages = []
        let _navigator = this.props.navigator;
        pages.push(<FirstPage key={0} collapsable={true} navigator={this.props.navigator}/>);
        pages.push(<SecondPage key={1} collapsable={false} navigator={this.props.navigator}/>);
        pages.push(<ThirdPage key={2} collapsable={false} navigator={this.props.navigator}/>);
        pages.push(<FourthPage key={3} collapsable={false} navigator={this.props.navigator}/>);
        let _popup;
        return (
            <View style={styles.container}>
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
                                    _popup.toggle();
                                }}
                                style={[styles.headerImageView, {marginRight: 10}]}>
                                <Image style={{width: 30, height: 30, resizeMode: 'stretch'}}
                                       source={require('../img/ic_plus.png')}/>
                            </TouchableHighlight>
                        ]}
                        navigator={this.props.navigator}/>
                <Popup
                    ref={(popup) => {
                        _popup = popup
                    }}
                />
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    scrollEnabled={this.state.scrollEnabled}
                    onPageScroll={this.onPageScroll}
                    onPageSelected={this.onPageSelected}
                    onPageScrollStateChanged={this.onPageScrollStateChanged}
                    ref={viewPager => {
                        this.viewPager = viewPager;
                    }}>
                    {pages}
                </ViewPagerAndroid>
                <View style={styles.tabs}>
                    <TabItem title={'微信'}
                             textColor={this.state.textColors[0]}
                             onPress={this._onPress.bind(this, 0)}
                             source={this.state.icons[0]}/>

                    <TabItem title={'通讯录'}
                             textColor={this.state.textColors[1]}
                             onPress={this._onPress.bind(this, 1)}
                             source={this.state.icons[1]}/>

                    <TabItem title={'发现'}
                             textColor={this.state.textColors[2]}
                             onPress={this._onPress.bind(this, 2)}
                             source={this.state.icons[2]}/>

                    <TabItem title={'我'}
                             textColor={this.state.textColors[3]}
                             onPress={this._onPress.bind(this, 3)}
                             source={this.state.icons[3]}/>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    headerImageView: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems:'center'
    },
    header: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(57,58,61)',
        paddingLeft: 20,
    },
    container: {
        flex: 1,
    },
    viewPager: {
        height: height - 48 - 54 - 24,
    },
    tabs: {
        height: 54,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'space-around',
        backgroundColor: '#EEEEEE',
        paddingTop: 4,
        paddingBottom: 4,
        borderTopWidth: 0.5,
        borderBottomColor: '#999999'
    },

});