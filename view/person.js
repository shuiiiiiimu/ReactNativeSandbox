'use strict';

import React, { Component } from 'react';
import {
	ListView,
	Text,
	View,
	StyleSheet,
	Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
	container: {
		flex:1, 
		backgroundColor: '#F2F2F2',
	},
	header: {
		flexDirection:'row',
		paddingLeft: 10, 
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: 'white',
		height: 70,
		marginTop: 78,
		alignItems: 'center',
	},
	headerImg: {
		height: 60,
		width: 60,
		resizeMode:Image.resizeMode.contain,
	},
	headerNick: {
		flex:10, 
		marginLeft: 10,
	},
	headerText: {
		paddingTop: 8,
		fontSize: 12,
		color: '#2F4F4F',
	},
	headerNext: {
		// justifyContent: 'center',
		flex:2, 
		// justifyContent:'flex-end',
	},
	splitor: {
		flexDirection:'row',
		height: 20,
		// backgroundColor: 'red',
	},
    item:{
        height: 38,
		// borderBottomColor: "blue",
    	// borderBottomWidth: 2,
		marginBottom: 1,
		backgroundColor: 'white',
        paddingLeft: 10,
		alignItems: 'center',
        flexDirection: 'row',
    },
	itemText: {
		fontSize: 14,
		color: '#2F4F4F',
		flex: 10,
		justifyContent: 'flex-start',
		marginLeft: -9,
	},
	itemIconNext: {
		marginTop: 3,
		flex:1,
		justifyContent:'flex-end',
		color: '#CDCDCD'
	},
	itemIcon: {
		marginTop: 3,
		flex:1,
	},
});

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemIconColor: '#666',
			itemIconSize: 18,
		};
	}
	render() {
		return (
			<View style={styles.container}>
                <View style={styles.header}>
                    <Image style={[styles.headerImg]} source={{uri: 'https://wx.qlogo.cn/mmopen/HDTvVqLVaJCRKhZULVrhFbOUsJRibFjxzE7fqPYWmnuhgc1dIPZ0bSHzcnZ7j9VpicNX531FAQFmsR9KdLJicWcE7fQ2s0NlHvw/0'}}></Image>
                    <View style={styles.headerNick}>
                        <Text style={[styles.headerText, {fontWeight:'bold',fontSize: 14,}]}>水木</Text>
						<Text style={styles.headerText}>微信号：xxxxxxxxx</Text>
                    </View>
					<Icon name='md-paper'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={{flex:1, color: '#CDCDCD', justifyContent:'flex-start'}}
					/>
					<Icon name='ios-arrow-forward'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={{flex:2, color: '#CDCDCD',justifyContent:'flex-end', marginRight: -20,}}
					/>
                </View>

				<View style={styles.splitor}></View>

                <View style={styles.item}>
					<Icon name='md-image'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
					<Text style={styles.itemText}>相册</Text>
					<Icon name='ios-arrow-forward'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIconNext}
					/>
                </View>
				<View style={styles.item}>
					<Icon name='ios-cube'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
					<Text style={styles.itemText}>收藏</Text>
					<Icon name='ios-arrow-forward'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIconNext}
					/>
                </View>
				<View style={styles.item}>
					<Icon name='ios-archive'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
					<Text style={styles.itemText}>钱包</Text>
					<Icon name='ios-arrow-forward'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIconNext}
					/>
                </View>
				<View style={styles.item}>
					<Icon name='ios-card'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
					<Text style={styles.itemText}>卡包</Text>
					<Icon name='ios-arrow-forward'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIconNext}
					/>
                </View>

				<View style={styles.splitor}></View>

				<View style={styles.item}>
					<Icon name='ios-sad'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
					<Text style={styles.itemText}>表情</Text>
					<Icon name='ios-arrow-forward'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIconNext}
					/>
                </View>

                <View style={styles.splitor}></View>

				<View style={styles.item}>
					<Icon name='ios-settings'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
					<Text style={styles.itemText}>设置</Text>
					<Icon name='ios-arrow-forward'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIconNext}
					/>
                </View>
            </View>
		);
	}
}
