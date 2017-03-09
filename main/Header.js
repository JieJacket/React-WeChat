/**
 * Created by jie on 2016/10/24.
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TouchableHighlight,
    Modal,
    Platform,
    StatusBar,
    TouchableWithoutFeedback,
    ListView,
    Alert,
    Dimensions,
    Navigator
} from 'react-native';

import DetailsView from '../first/DetailsView';
const dialogLists = [
    {image: require('../img/ic_msg_selected.png'), title: '发起群聊', id: 0},
    {image: require('../img/ic_msg_selected.png'), title: '添加朋友', id: 1},
    {image: require('../img/ic_msg_selected.png'), title: '扫一扫', id: 2},
    {image: require('../img/ic_msg_selected.png'), title: '收付款', id: 3},
    {image: require('../img/ic_msg_selected.png'), title: '帮组与反馈', id: 4},
    {image: require('../img/ic_msg_selected.png'), title: '发起群聊', id: 5}];

export default class Header extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    _getItemView = ()=> {
        this.dialogLists.map((item)=> {
            return (
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: 20, height: 20}} source={item.image}/>
                    <Text>{item.title}</Text>
                </View>
            );
        })
    }

    _showPop = (_popup)=> {
        _popup.toggle();
    }


    render() {
        if (Platform.OS === 'ios') {
            var statusBar = <StatusBar
                backgroundColor={'rgb(57,58,61)'}
                barStyle='default'
                hidden={true}
            />
        }
        let _navigator = this.props.navigator;
        var _popup;

        let back;
        if (this.props.showBack) {
            back = <TouchableHighlight
                style={{width: 48, height: 48, justifyContent: 'center',alignItems:'center'}}
                onPress={()=> {
                    _navigator.pop();
                }
                }>
                <Image source={require('../img/ic_right_arrow.png')}
                       style={{width: 30, height: 30}}/>
            </TouchableHighlight>
        }

        return (<View style={styles.container}>
            {statusBar}
            <View style={styles.header}>
                {back}
                <Text style={{flex: 3, color: '#ffffff', fontSize: 18,marginLeft:20}}>微信</Text>
                <TouchableHighlight
                    onPress={()=> {
                        _navigator.push({
                            name: 'test',
                            component: DetailsView,
                            configScene:Navigator.SceneConfigs.FadeAndroid,
                            params: {rowData: 'test'}
                        })
                    }}
                    style={styles.headerImageView}>
                    <Image style={{width: 28, height: 28, resizeMode: 'stretch'}}
                           source={require('../img/ic_magnifying_glass.png')}/>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={()=> {
                        this._showPop(_popup);
                    }}
                    style={[styles.headerImageView, {marginRight: 10}]}>
                    <Image style={{width: 30, height: 30, resizeMode: 'stretch'}}
                           source={require('../img/ic_plus.png')}/>
                </TouchableHighlight>
            </View>
            <Popup
                ref={(popup) => {
                    _popup = popup
                }}
            />
        </View>);
    }

}

class Popup extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            modalVisible: false,
        };

    }

    componentWillMount() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(dialogLists),
        });
    }

    isShowing = ()=> {
        return this.state.modalVisible;
    }

    _setModalVisible = (visible = {})=> {
        this.setState({modalVisible: visible});
    }

    _renderPopRow = (rowData)=> {
        let title = rowData.title;
        return (
            <TouchableHighlight
                underlayColor={'#000000'}
                onPress={()=> {
                    console.log(rowData, title);
                    this._setModalVisible(false);
                }}>
                <View style={{
                    width: 200,
                    height: 42,
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#000',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#222222'
                }}>
                    <Image source={rowData.image} style={{width: 20, height: 20, marginLeft: 20}}/>
                    <Text style={{color: '#ffffff', marginLeft: 20}}>{rowData.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <Modal
                animationType={"none"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={()=>this._setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={()=> {
                    this._setModalVisible(false)
                }}>
                    <View style={{
                        alignItems: 'flex-end',
                        backgroundColor: 'rgba(255,255,255,0)',
                        paddingTop: 48,
                        flex: 1
                    }}>
                        <ListView
                            style={{marginRight: 10}}
                            dataSource={this.state.dataSource}
                            renderRow={
                                this._renderPopRow
                            }
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

        );
    }

    toggle = ()=> {
        if (this.isShowing()) {
            this.setState({modalVisible: false});
        } else {
            this.setState({modalVisible: true});
        }
    }
}

const styles = StyleSheet.create({
    headerImageView: {
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        height: 48,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(57,58,61)',
    },
    container: {},
});