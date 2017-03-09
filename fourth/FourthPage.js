/**
 * Created by jie on 2016/10/20.
 */
'use strict'
import React, {Component} from 'react';

import {
    StyleSheet,
    ScrollView,
    View,
    TouchableHighlight,
    ToastAndroid,
    Text,
    Image,
    TouchableNativeFeedback,
    Dimensions,
} from 'react-native';

import DetailsView from '../first/DetailsView';
export default class FourthPage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }

    componentWillMount() {
        var itemList = [];
        itemList.push({
            item1: {
                icon: require('../img/ic_find_default.png'),
                title: '相册'
            }, item2: {icon: require('../img/ic_collections.png'), title: '收藏'}
        });
        itemList.push({
            item1: {
                icon: require('../img/ic_find_default.png'),
                title: '钱包'
            }, item2: {icon: require('../img/ic_cards.png'), title: '卡包'}
        });
        itemList.push({item1: {icon: require('../img/ic_find_default.png'), title: '表情'}});
        itemList.push({item1: {icon: require('../img/ic_find_default.png'), title: '设置'}});
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
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor={'#bbbbbb'}
                    style={{
                        marginTop: 20,
                    }}
                    onPress={()=> {
                        this.props.navigator.push({
                            name: `detail`,
                            component: DetailsView,
                            params: {
                                rowData: `这名字很水`
                            },
                        });
                    }}
                >
                    <View style={styles.topInfo}>
                        <Image source={require('../img/ic_icon_5.jpg')}
                               style={{width: 60, height: 60, marginLeft: 10}}
                        />
                        <Text style={{fontSize: 16, marginLeft: 10}}>这名字很水</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', flex: 1}}>
                            <Image source={require('../img/ic_afn.png')}
                                   style={{width: 30, height: 30, marginRight: 20}}
                            />
                        </View>
                    </View>
                </TouchableHighlight>
                <ScrollView
                    ref={(scrollView) => {
                        this._scrollView = scrollView;
                    }}
                    automaticallyAdjustContentInsets={false}
                    style={styles.scrollView}
                    scrollEventThrottle={200}
                    showsVerticalScrollIndicator={false}
                >
                    {this.itemList.map(this._renderRow)}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    topInfo: {
        flexDirection: 'row',
        height: 72,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    container: {
        backgroundColor: '#EEEEEE',
    },
    item: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16
    },
    scrollView: {
        height: Dimensions.get('window').height
    }
});