import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TabBarIOS,
    NavigatorIOS,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import WatchCounter from './view/watch_counter';
import SwipeCard from './view/swipe_card';
import SettingPage from './view/setting';
import HomePage1 from './view/home1';
import HomePage from './view/home2';
import ColoredView from './view/colored_view';

const styles = StyleSheet.create({
    navigator: {
        flex: 1,
    },
});

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
                  onRightButtonPress: () => Alert.alert('title', 'message'),
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
