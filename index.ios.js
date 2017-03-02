import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
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
import SettingPage from './view/setting';
import HomePage1 from './view/home1';
import HomePage from './view/home2';

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


class NextView1 extends Component {
    componentWillMount() {
        Icon.getImageSource('md-arrow-back', 25).then((source) => this.setState({backIcon: source}));
    }

    _navigateToSubview() {
        this.props.navigator.push({
            component: NextView1,
            title: this.props.pageText,
            leftButtonIcon: this.state.backIcon,
            passProps: this.props,
        });
    }

    render() {
        return (
            <Text style={[styles.text, styles.header]}>
                根节点上放一个元素，不设置宽度
            </Text>        

            <View style={{height: 20, backgroundColor: '#333333'}} />

            <Text style={[styles.text, styles.header]}>
                固定宽度的元素上放一个View，不设置宽度
            </Text> 

            <View style={{width: 100}}>
                <View style={{height: 20, backgroundColor: '#333333'}} />
            </View>

            <Text style={[styles.text, styles.header]}>
                flex的元素上放一个View，不设置宽度
            </Text> 

            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                <View style={{height: 20, backgroundColor: '#333333'}} />
                </View>
                <View style={{flex: 1}}/>
            </View>
        );
    }
}

class ColoredView extends Component {
    componentWillMount() {
        Icon.getImageSource('md-arrow-back', 25).then((source) => this.setState({backIcon: source}));
    }

    _navigateToSubview() {
        this.props.navigator.push({
            component: NextView1,
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
        if (pageText == "设置") {
            _component = SettingPage;
        }
        // if (pageText == "首页") {
        //     _component = HomePage;
        // }
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
                    <WatchCounter></WatchCounter>
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
                    <SwipeCard></SwipeCard>
                </Icon.TabBarItemIOS>
                <Icon.TabBarItemIOS
                    title="设置"
                    iconName="ios-settings-outline"
                    selectedIconName="ios-settings"
                    // iconColor="#ffffff"
                    // selectedIconColor="#000099"
                    selected={this.state.selectedTab === 'settings'}
                    // renderAsOriginal={true}
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
