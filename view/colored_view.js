import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
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

class NextView extends Component {
    componentWillMount() {
        Icon.getImageSource('md-arrow-back', 25).then((source) => this.setState({backIcon: source}));
    }

    _navigateToSubview() {
        this.props.navigator.push({
            component: NextView,
            title: this.props.pageText,
            leftButtonIcon: this.state.backIcon,
            passProps: this.props,
        });
    }

    render() {
        return (
            <View style={{backgroundColor: 'green',flex:1, }}>
                <View style={{backgroundColor: 'red', height: 100, marginTop:80, alignItems:'center',justifyContent: 'center'}}>
                    <Text style={styles.tabText}>column1</Text>
                </View>
                <Text style={{fontSize: 30, color: '#F2B3FE', height: 40}}>column2</Text>
                <View style={{backgroundColor: 'black', height: 100, alignItems:'center', justifyContent: 'center'}}>
                    <Text style={styles.tabText}>column3</Text>
                </View>
                <View style={ {flexDirection:'row', height:100, backgroundColor:"darkgray"}}>
                    <View style={ {flex:1,backgroundColor:"darkcyan", marginLeft:5}}>
                        <Text style={ {fontSize:16}}>flex:1</Text>
                    </View>
                    <View style={ {flex:2, height:40, backgroundColor:"darkcyan", margin:5}}>
                        <Text style={ {fontSize:16}}>flex:2</Text>
                    </View>
                    <View style={ {flex:3,backgroundColor:"darkcyan", marginTop:10}}>
                        <Text style={ {fontSize:16}}>flex:3</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default class extends Component {
    componentWillMount() {
        Icon.getImageSource('md-arrow-back', 25).then((source) => this.setState({backIcon: source}));
    }

    _navigateToSubview() {
        this.props.navigator.push({
            component: NextView,
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