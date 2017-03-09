/**
 * Created by jie on 2016/10/26.
 */
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
const dialogLists = [
    {image: require('../img/ic_msg_selected.png'), title: '发起群聊', id: 0},
    {image: require('../img/ic_msg_selected.png'), title: '添加朋友', id: 1},
    {image: require('../img/ic_msg_selected.png'), title: '扫一扫', id: 2},
    {image: require('../img/ic_msg_selected.png'), title: '收付款', id: 3},
    {image: require('../img/ic_msg_selected.png'), title: '帮组与反馈', id: 4}];
export default class Popup extends Component {

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
                    width: 180,
                    height: 48,
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
                        paddingTop: 54,
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