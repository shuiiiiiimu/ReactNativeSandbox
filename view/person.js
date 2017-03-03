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
		height: 60,
		marginTop: 78,
		justifyContent: 'center',
	},
	headerImg: {
		height: 50,
		width: 50,
		resizeMode:Image.resizeMode.contain,
	},
	headerNick: {
		flex:2, 
		marginLeft: 10,
	},
	headerText: {
		paddingTop: 8,
		fontSize: 12,
		color: '#2F4F4F',
	},
	headerNext: {
		justifyContent: 'center',
		paddingRight: 10,
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
    itemNext: {
		fontSize:14, 
		color: '#CDCDCD',
	},
	itemText: {
		fontSize: 14,
		color: '#2F4F4F',
		marginLeft: 8,
	},
	itemIcon: {
		marginTop: 3,
	}
});

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemIconColor: '#666',
			itemIconSize: 16,
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
					<View style={styles.headerNext}>
						<Icon name='ios-barcode'
							color={this.state.itemIconColor}
							size={this.state.itemIconSize}
						/>
						<Text style={styles.itemNext}>></Text>
					</View>
                </View>

				<View style={styles.splitor}></View>

                <View style={styles.item}>
					<Icon name='ios-albums'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
                    <Text style={styles.itemText}>相册</Text>
					<Text style={styles.itemNext}>></Text>
                </View>
				<View style={styles.item}>
					<Icon name='ios-school'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
                    <Text style={styles.itemText}>收藏</Text>
					<Text style={styles.itemNext}>></Text>
                </View>
				<View style={styles.item}>
					<Icon name='ios-archive'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
                    <Text style={styles.itemText}>钱包</Text>
					<Text style={styles.itemNext}>></Text>
                </View>
				<View style={styles.item}>
					<Icon name='ios-card'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
                    <Text style={styles.itemText}>卡包</Text>
					<Text style={styles.itemNext}>></Text>
                </View>

				<View style={styles.splitor}></View>

				<View style={styles.item}>
					<Icon name='ios-sad'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
                    <Text style={styles.itemText}>表情</Text>
					<Text style={styles.itemNext}>></Text>
                </View>

                <View style={styles.splitor}></View>

				<View style={styles.item}>
					<Icon name='ios-settings'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
                    <Text style={styles.itemText}>设置</Text>
					<Text style={styles.itemNext}>></Text>
                </View>
            </View>
		);
	}
}
