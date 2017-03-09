/**
 * Created by jie on 2016/10/25.
 */
'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Modal,
    PropTypes
} from 'react-native';

export default class PopupWindow extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            visible: false,
        };
    }

    _isShowing = ()=>{
        return this.state.visible;
    }

    _popShow = () => {
        this.setState({visible:true});
    }

    _popDismiss = ()=>{
        this.setState({visible:false});

    }


    _popToggle = ()=>{
        if(this._isShowing){
            this.setState({visible:false});
        }else {
            this.setState({visible:true});
        }
    }

    render() {
        return (
            <Modal
                style={{marginTop:48}}
                animationType={'none'}
                transparent={false}
                visible={this.state.visible}
                onRequestClose={()=>this._popDismiss}
            >
                {this.props.children}
            </Modal>
        );
    }

}