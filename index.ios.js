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
import HomePage from './view/home';

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
        Icon.getImageSource('md-qr-scanner', 25).then((source) => this.setState({gearIcon: source}));
    }

    render() {
        if (!this.state.gearIcon) {
            return false;
        }
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
                    <NavigatorIOS
                        style={styles.navigator}
                        initialRoute={{
                            component: HomePage,
                            title: '首页',
                            rightButtonIcon: this.state.gearIcon,
                            onRightButtonPress: () => Alert.alert('title', 'message'),
                        }}
                    />
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
                    <NavigatorIOS
                        style={styles.navigator}
                        initialRoute={{
                            component: SettingPage,
                            title: '设置',
                            rightButtonIcon: this.state.gearIcon,
                            onRightButtonPress: () => Alert.alert('title', 'message'),
                        }}
                    />
                </Icon.TabBarItemIOS>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('ReactNativeSandbox', () => ReactNativeSandbox);
