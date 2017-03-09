/**
 * Created by jie on 2016/10/20.
 */
'use strict'
import React, {Component} from 'react';

import {
    StyleSheet,
    ListView,
    View,
    TouchableHighlight,
    ToastAndroid,
    Text,
    Image,
    TouchableNativeFeedback,
    Dimensions,
    ScrollView
} from 'react-native';

import DetailsView from '../first/DetailsView';
export default class ThirdPage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this._navigator = this.props.navigator;

    }

    componentWillMount() {
        var itemList = [];
        itemList.push({item1: {icon: require('../img/ic_a8t.png'), title: '朋友圈'}});
        itemList.push({
            item1: {icon: require('../img/ic_msg_selected.png'), title: '扫一扫'},
            item2: {icon: require('../img/ic_msg_selected.png'), title: '摇一摇'}
        });
        itemList.push({
            item1: {icon: require('../img/ic_msg_selected.png'), title: '附近的人'},
            item2: {icon: require('../img/ic_msg_selected.png'), title: '漂流瓶'}
        });
        itemList.push({
            item1: {icon: require('../img/ic_msg_selected.png'), title: '购物'},
            item2: {icon: require('../img/ic_msg_selected.png'), title: '游戏'}
        });
        this.itemList = itemList;
    }


    _renderRow = (item, i) => {
        let item1 = item.item1;
        let item2 = item.item2;
        let view1, view2;
        let _navigator = this.props.navigator;
        if (item1) {
            view1 = <TouchableHighlight
                underlayColor={'#bbbbbb'}
                onPress={()=> {
                _navigator.push({
                    name: item1.title,
                    component: DetailsView,
                    params: {
                        rowData: item1.title
                    },
                });
            }}>
                <View >
                    <View style={[styles.item]}>
                        <Image source={item1.icon}
                               style={{width: 20, height: 20, marginLeft: 10}}
                        />
                        <Text style={{fontSize: 14, marginLeft: 10, color: '#000000'}}>{item1.title}</Text>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Image style={{width:30,height:30,marginRight:20}} source={item1.right}/>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        }
        if (item2) {
            view2 = <TouchableHighlight
                underlayColor={'#bbbbbb'}
                onPress={()=> {
                _navigator.push({
                    name: item2.title,
                    component: DetailsView,
                    params: {
                        rowData: item2.title
                    },
                });
            }}>
                <View>
                    <View style={[styles.item, {borderTopWidth: 0.5, borderTopColor: '#333333'}]}>
                        <Image source={item2.icon}
                               style={{width: 20, height: 20, marginLeft: 10}}
                        />
                        <Text style={{fontSize: 14, marginLeft: 10, color: '#000000'}}>{item2.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>;

        }

        return (
            <View key={i} style={{backgroundColor: '#ffffff', marginTop: 20}}>
                {view1}
                {view2}
            </View>
        );


    }


    render() {
        return (
            <ScrollView ref={(scrollView) => {
                this._scrollView = scrollView;
            }}
                        automaticallyAdjustContentInsets={false}
                        style={styles.scrollView}
                        scrollEventThrottle={200}
                        showsVerticalScrollIndicator={false}>
                {this.itemList.map(this._renderRow)}
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE'
    },
    item: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16
    },
    itemText: {
        fontSize: 16,
        color: '#000',
        marginLeft: 10
    },
    scrollView: {
        height: Dimensions.get('window').height - 48,
        backgroundColor: '#EEEEEE'

    },
});