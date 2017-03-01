import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TabBarIOS,
    AlertIOS,
    NavigatorIOS,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import WatchCounter from './view/watch_counter';
import SwipeCard from './view/swipe_card';

const styles = StyleSheet.create({
    navigator: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        color: 'white',
    },
    button: {
        marginTop: 20,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 11,
        paddingRight: 11,
        backgroundColor: 'red',
        borderRadius: 4,
    },
});

class ColoredView extends Component {
    componentWillMount() {
        Icon.getImageSource('md-arrow-back', 25).then((source) => this.setState({backIcon: source}));
    }

    _navigateToSubview() {
        this.props.navigator.push({
            component: ColoredView,
            title: this.props.pageText,
            leftButtonIcon: this.state.backIcon,
            onLeftButtonPress: () => this.props.navigator.pop(),
            passProps: this.props,
        });
    }

    render() {
        return (
            <View style={[styles.tabContent, {backgroundColor: this.props.color}]}>
                <Text style={styles.tabText}>{this.props.pageText}</Text>
                <TouchableOpacity onPress={() => this._navigateToSubview()}>
                    <View style={styles.button}><Text style={styles.buttonText}>下一页</Text></View>
                </TouchableOpacity>
            </View>
        );
    }
}

class ReactNativeSandbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'home',
        };
    }

    componentWillMount() {
        // https://github.com/facebook/react-native/issues/1403 prevents this to work for initial load
        Icon.getImageSource('ios-settings', 25).then((source) => this.setState({gearIcon: source}));
    }

    _renderContent(color, pageText) {
        if (!this.state.gearIcon) {
            return false;
        }
        const props = {color, pageText};
        let _component = ColoredView;
        if (pageText == "计数器") {
            _component = WatchCounter;
        }
        if (pageText == "个人") {
            _component = SwipeCard;
        }
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{
                  component: _component,
                  passProps: props,
                  title: pageText,
                  rightButtonIcon: this.state.gearIcon,
                }}
            />
        );
    }

    render() {
        return (
            <TabBarIOS
                tintColor="black"
                barTintColor="#3abeff">
                <Icon.TabBarItemIOS
                    title="首页"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'home',
                      });
                    }}>
                    {this._renderContent('#414A8C', '首页')}
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="计数器"
                    iconName="ios-time-outline"
                    selectedIconName="ios-time"
                    selected={this.state.selectedTab === 'counter'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'counter',
                      });
                    }}>
                    {this._renderContent('#a4b758', '计数器')}
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="个人"
                    iconName="ios-person-outline"
                    selectedIconName="ios-person"
                    selected={this.state.selectedTab === 'profile'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'profile',
                      });
                    }}>
                    {this._renderContent('#090', '个人')}
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="设置"
                    iconName="ios-settings-outline"
                    selectedIconName="ios-settings"
                    iconColor="#ffffff"
                    selectedIconColor="#000099"
                    selected={this.state.selectedTab === 'settings'}
                    renderAsOriginal={true}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'settings',
                      });
                    }}>
                    {this._renderContent('#009', '设置')}
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('ReactNativeSandbox', () => ReactNativeSandbox);
