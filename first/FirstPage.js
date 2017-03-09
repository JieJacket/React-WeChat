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
    Platform,
    Alert
} from 'react-native';

import DetailsView from './DetailsView';

const {height} = Dimensions.get('window');

const statusHeight = Platform.OS === 'android' ? 24 : 0;

export default class FirstPage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
        this._navigator = this.props.navigator;

    }

    componentWillMount() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let array = FirstPage._genRows()

        this.setState({
            dataSource: ds.cloneWithRows(array),
        });
    }

    static _genRows() {
        var dataBlob = [];
        dataBlob.push({image: require('../img/ic_icon_1.jpeg'), title: '发起群聊', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_2.png'), title: '添加朋友', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_3.jpeg'), title: '扫一扫', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_4.jpeg'), title: '收付款', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_5.jpg'), title: '帮组与反馈', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_1.jpeg'), title: '发起群聊', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_2.png'), title: '添加朋友', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_3.jpeg'), title: '扫一扫', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_4.jpeg'), title: '收付款', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_5.jpg'), title: '帮组与反馈', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_1.jpeg'), title: '发起群聊', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_2.png'), title: '添加朋友', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_3.jpeg'), title: '扫一扫', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_4.jpeg'), title: '收付款', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_5.jpg'), title: '帮组与反馈', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_1.jpeg'), title: '发起群聊', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_2.png'), title: '添加朋友', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_3.jpeg'), title: '扫一扫', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_4.jpeg'), title: '收付款', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_5.jpg'), title: '帮组与反馈', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_1.jpeg'), title: '发起群聊', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_2.png'), title: '添加朋友', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_3.jpeg'), title: '扫一扫', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_4.jpeg'), title: '收付款', msg: '内容'});
        dataBlob.push({image: require('../img/ic_icon_5.jpg'), title: '帮组与反馈', msg: '内容'});
        return dataBlob;
    }

    _pushToDetails = (rowData)=> {

        this._navigator.push({
            name: 'Null',
            component: DetailsView,
            params: {
                rowData: rowData.title
            }
        })
    }

    _renderRow = (rowData) => {
        return (
            <TouchableHighlight
                underlayColor={'#bbbbbb'}
                onLongPress={()=> {
                    Alert.alert(
                        '删除该聊天',
                        '',
                        [
                            {
                                text: 'ok', onPress: ()=> {
                            }
                            },
                            {
                                text: 'cancel', onPress: ()=> {
                            }
                            },

                        ]
                    );

                }}
                onPress={()=> {
                    this._navigator.push({
                        name: '',
                        component: DetailsView,
                        params: {
                            rowData: rowData.title
                        }
                    })
                }}>
                <View style={styles.rowStyle}>
                    <Image style={styles.rowImage} source={rowData.image}/>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.rowTitle}>{rowData.title}</Text>
                        <Text style={styles.rowMsg}>{rowData.msg}</Text>
                    </View>
                </View>
            </TouchableHighlight>


        );
    }


    render() {
        return (
            <ListView
                style={{flex: 1}}
                dataSource={this.state.dataSource}
                showsVerticalScrollIndicator={false}
                renderRow={this._renderRow}
            />
        );
    }

}

const styles = StyleSheet.create({
    rowStyle: {
        borderBottomWidth: 0.5,
        height: (height - 48 - 54 - statusHeight) / 8,
        borderBottomColor: '#999999',
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowImage: {
        width: 36,
        height: 36,
        borderColor: '#aaaaaa',
        borderWidth: 0.2,
        marginLeft: 20,

    },
    rowTitle: {
        color: '#333333',
        fontSize: 16,
        marginLeft: 16
    },
    rowMsg: {
        color: '#666666',
        fontSize: 14,
        marginLeft: 16,
        marginTop: 5
    }
});