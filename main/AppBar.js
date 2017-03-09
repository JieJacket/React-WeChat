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
    Dimensions,
    TouchableHighlight,
    StatusBar
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';

const {width, height} = Dimensions.get('window');
export default class AppBar extends Component {

    static propsTyle = {
        leftClicked: React.PropTypes.func,
        menuItems: React.PropTypes.array,
        title: React.PropTypes.string.require,
        styles: View.propTypes.style
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {

    }

    _renderLeftButton() {
        let onLeftClicked = this.props.leftClicked;
        let left;
        console.log(onLeftClicked);
        if (onLeftClicked) {
            left = (<TouchableHighlight onPress={onLeftClicked}>
                <View style={{width: 54, height: 54, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../img/ic_right_arrow.png')} style={styles.leftImage}/>
                </View>
            </TouchableHighlight>);
        }
        return left;
    }

    _renderTitle() {
        let title = this.props.title;

        return (
            <Text style={styles.title}>{title}</Text>
        );

    }

    _renderRight() {
        let rightMenuItems = this.props.menuItems;
        if (rightMenuItems) {
            return (
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingRight: 10,
                    paddingLeft: 10
                }}>
                    {rightMenuItems.map((menuItem, i) => {
                        return (
                            <View key={i} >
                                {menuItem}
                            </View>);
                    })}
                </View>);
        }

    }

    render() {


        let left = this._renderLeftButton();
        let title = this._renderTitle();
        let right = this._renderRight();
        let statusBar;

        if (Platform.OS === 'ios') {
            statusBar = <StatusBar
                hidden={true}
            />;
        }
        let marginTop = 0;
        if (Platform.OS === 'android') {
            marginTop = 24;
            statusBar = <StatusBar
                translucent={true}
                backgroundColor={'rgb(57,58,61)'}
            />
        }
        return (
            <View>
                {statusBar}
                <View style={[styles.container, this.props.styles, {marginTop: marginTop}]}>
                    {left}
                    {title}
                    {right}
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: 54,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(57,58,61)'
    },
    leftImage: {
        width: 30,
        height: 30
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        marginLeft: 20
    }
});