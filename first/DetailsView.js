/**
 * Created by jie on 2016/10/20.
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    ListView,
    View,
    TouchableOpacity,
    ToastAndroid,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';

import AppBar from '../main/AppBar';

import Popup from '../main/Popup'
export default class DetailsView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        let {rowData} = this.props;
        console.log(rowData);
    }

    _onLeftClicked(nav) {
        if (nav) {
            nav.pop();
        }
    }

    render() {
        // let props = {title:'微信',leftClicked:this._onLeftClicked};
        let nav = this.props.navigator;
        return (
            <View style={styles.container}>
                <AppBar title={'微信'}
                        leftClicked={()=> {
                            this._onLeftClicked(nav);
                        }}
                        menuItems={[
                            <TouchableHighlight onPress={()=> {
                                this._popup.toggle();
                            }}
                                                style={{
                                                    width: 54,
                                                    height: 54,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                            >
                                <Image source={require('../img/ic_plus.png')}
                                       style={{width: 30, height: 30}}/>
                            </TouchableHighlight>
                        ]}
                />
                <Popup
                    ref={(popup) => {
                        this._popup = popup
                    }}
                />
                <View style={styles.content}>
                    <Text>{this.props.rowData}</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});