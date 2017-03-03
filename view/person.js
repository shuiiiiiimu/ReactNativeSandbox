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
		backgroundColor: '#eaeaf1',
	},
	header: {
		flexDirection:'row',
		paddingLeft: 15, 
		paddingTop: 5,
		paddingBottom: 5,
		backgroundColor: 'white',
		height: 90,
		marginTop: 15,
		alignItems: 'center',
	},
	headerImg: {
		height: 70,
		width: 70,
		resizeMode:Image.resizeMode.contain,
		borderRadius: 2,
	},
	headerNick: {
		flex:8, 
		marginLeft: 10,
	},
	headerText: {
		fontSize: 14,
		marginLeft: 2,
		color: '#040404',
	},
	splitor: {
		flexDirection:'row',
		height: 20,
		// backgroundColor: 'red',
	},
    item:{
        height: 42,
		// borderBottomColor: "blue",
    	// borderBottomWidth: 2,
		marginBottom: 1,
		backgroundColor: 'white',
        paddingLeft: 15,
		alignItems: 'center',
        flexDirection: 'row',
    },
	itemText: {
		fontSize: 15,
		fontWeight:'bold',
		color: '#252525',
		flex: 10,
		justifyContent: 'flex-start',
	},
	itemIconNext: {
		marginTop: 3,
		flex:1,
		justifyContent:'flex-end',
		color: '#CDCDCD',
		marginRight: -5,
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
			itemIconColor: '#189bfe',
			itemIconSize: 22,
		};
	}
	render() {
		return (
			<View style={styles.container}>
                <View style={styles.header}>
                    <Image style={[styles.headerImg]} source={{uri: 'https://wx.qlogo.cn/mmopen/HDTvVqLVaJCRKhZULVrhFbOUsJRibFjxzE7fqPYWmnuhgc1dIPZ0bSHzcnZ7j9VpicNX531FAQFmsR9KdLJicWcE7fQ2s0NlHvw/0'}}></Image>
                    <View style={styles.headerNick}>
                        <Text style={[styles.headerText, {fontWeight:'bold',fontSize: 16,}]}>水木</Text>
						<Text style={[styles.headerText, {paddingTop: 10,}]}>微信号：xxxxxxxxx</Text>
                    </View>
					<Icon name='md-paper'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={{flex:1, color: '#CDCDCD', justifyContent:'flex-start',}}
					/>
					<Icon name='ios-arrow-forward'
						color={this.state.itemIconColor}
						size={this.state.itemIconSize}
						style={{flex:2, color: '#CDCDCD',justifyContent:'flex-end', marginRight: -30,}}
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
					<Icon name='ios-mail'
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
						color='#fdbc0a'
						size={this.state.itemIconSize}
						style={styles.itemIcon}
					/>
					<Text style={styles.itemText}>表情</Text>
					<Icon name='ios-arrow-forward'
						color='{this.state.itemIconColor}'
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
