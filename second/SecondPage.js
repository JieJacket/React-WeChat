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
    Text
} from 'react-native';

import DetailsView from '../first/DetailsView';
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
        for (var i = 0; i < 20; i++) {
            dataBlob.push('item ' + i);
        }
        return dataBlob;
    }

    _renderRows() {
        // console.log(_navigator ? "_navigator" : "_navigator is null")
        return (
            <View style={{borderBottomWidth: 1, height: 48}}>
                <TouchableHighlight
                    style={{flex: 1, justifyContent: 'center'}}
                    onPress={()=> {
                        {/*_navigator.push({*/
                        }
                        {/*name: 'Details',*/
                        }
                        {/*component: DetailsView,*/
                        }
                        {/*rowData: rowData*/
                        }
                        {/*});*/
                        }
                    }}>
                    <Text style={{textAlignVertical: 'center', paddingLeft: 20}}> {rowData}</Text>
                </TouchableHighlight>
            </View>
        );
    }


    render() {
        let _navigator = this._navigator;
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData)=>
                    <View style={{borderBottomWidth: 1, height: 48}}>
                        <TouchableHighlight
                            style={{flex: 1, justifyContent: 'center'}}
                            onPress={()=> {
                                _navigator.push({
                                    name: 'Null',
                                    component: DetailsView,
                                    params: {
                                        rowData: rowData
                                    }
                                })
                            }}>
                            <Text style={{textAlignVertical: 'center', paddingLeft: 20}}> {rowData}</Text>
                        </TouchableHighlight>
                    </View>
                }
            />
        );
    }

}