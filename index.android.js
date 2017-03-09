/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    ToastAndroid,
    BackAndroid
} from 'react-native';
import Welcome from './main/WelcomeView';
import Test from './main/ScrollViewTest';
import TabItem from './main/TabItem';

export default class TabsApp extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            index: 0
        };
        this._onBackAndroid = this._onBackAndroid.bind(this);
    }

    _onBackAndroid() {
        let navigator = this.refs.navigator;
        let routes = navigator.getCurrentRoutes();
        if (routes.length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._onBackAndroid);
    }

    _onPress(index) {
        // switch (index) {
        //     case 0:
        //         ToastAndroid.show("Home", 1000);
        //         break;
        //     case 1:
        //         ToastAndroid.show("Me", 1000);
        //         break;
        // }
        this.setState({
            index: index,
        });

    }

    // render() {
    //
    //     var message = this.state.index === 0 ? 'Home' : 'Me';
    //     var homeIcon = this.state.index === 0?require('./img/ic_home_selected.png'):require('./img/ic_home_default.png');
    //     var meIcon = this.state.index === 1?require('./img/ic_me_selected.png'):require('./img/ic_me_default.png');
    //     return (
    //         <View style={[styles.container]}>
    //
    //             <View style={{flex:1,backgroundColor:'#cccccc',justifyContent:'center',alignItems:'center'}}>
    //                 <Text style={{fontSize:20,textAlign:'center',textAlignVertical:'center'}}>{message}</Text>
    //             </View>
    //
    //             <View style={styles.tabs}>
    //                 <TabItem
    //                     onPress={this._onPress.bind(this,0)}
    //                     source={homeIcon}
    //                     title={'Home'}
    //                 />
    //                 <TabItem
    //                     onPress={this._onPress.bind(this,1)}
    //                     source={meIcon}
    //                     title={'Me'}
    //                 />
    //             </View>
    //         </View>
    //     );
    // }

    render() {
        return (
            <Navigator
                ref="navigator"
                initialRoute={{name: 'Welcome', component: Welcome}}
                configureScene={route => route.configScene || Navigator.SceneConfigs.PushFromRight}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>;
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    tabs: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#FF9900',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry
    .registerComponent(
        'TabsApp'
        , () =>
            TabsApp
    )
;
