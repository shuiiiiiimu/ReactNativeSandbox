'use strict';

import React, {Component} from 'react';
import {
  	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
  	ScrollView,
	Alert,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
	//container
	container:{
		backgroundColor:'#F2F2F2',
		flex:1,
	},
	//slider
	wrapper: {
  		height:80,
	},
	slide: {
  		height:80,
  		resizeMode: Image.resizeMode.contain,
	},
	//sbu
	sbu_view:{
		height:84,
		marginLeft: 5,
		marginRight:5,
		borderWidth:1,
		borderRadius:5,
		marginBottom:10,
		flexDirection:'row',
	},
	sbu_red:{
		backgroundColor: '#FA6778',
		borderColor:'#FA6778',
		marginTop:-70,
	},

	sbu_blue:{
		backgroundColor: '#3D98FF',
		borderColor:'#3D98FF',
	},

	sbu_green:{
		backgroundColor: '#5EBE00',
		borderColor:'#5EBE00',
	},

	sbu_yellow:{
		backgroundColor: '#FC9720',
		borderColor:'#FC9720',
	},
	sbu_flex:{
		flex:1,
	},
	sbu_borderRight:{
		borderColor:'#fff',
		borderRightWidth: 0.5,
	},
	sbu_icon_img:{
		height:40,
		width:40,
		resizeMode:Image.resizeMode.contain,
	},
	sub_con_flex:{
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sub_text:{
		justifyContent:'center',
	},
	font16:{
		fontSize:17,
		color:'#FFF',
		fontWeight:'900',
	},
	sbu_borderBottom:{
		borderBottomWidth:0.5,
		borderBottomColor:'#fff',
	},
	img_view:{
		height:62,
		marginLeft:5,
		marginRight:5,
		flexDirection: 'row',
		marginBottom:20,
		backgroundColor:'#fff',
	},
	img_flex:{
		flex:1,
		borderWidth:1,
		borderColor:'#ccc',
	},
	img_wh: {
		height:59,
    	borderRightWidth:0,
		resizeMode:Image.resizeMode.contain,
    },
});

const sliderImgs = [
	'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

const BUIcon = [
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'

];

const Images = [
	'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
	'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

class Slider extends Component{
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
		<Image style={[styles.slide,]} source={{uri: sliderImgs[0]}}></Image>
		<Image style={[styles.slide,]} source={{uri: sliderImgs[1]}}></Image>
		<Image style={[styles.slide,]} source={{uri: sliderImgs[2]}}></Image>
      </Swiper>
    )
  }
}

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
        return(
			<ScrollView contentContainerStyle={{paddingVertical: 80}}>
				<View style={styles.container}>
					<View style={[styles.sbu_red, styles.sbu_view]}>
						<TouchableOpacity underlayColor={'#FA6778'} style={{flex:1}} onPress={() => this._navigateToSubview()}>
							<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
								<View style={[styles.sub_con_flex, styles.sub_text]}>
									<Text style={[styles.font16]}>酒店</Text>
								</View>
								<View style={[styles.sub_con_flex]}>
									<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[0]}}></Image>
								</View>
							</View>
						</TouchableOpacity>
						<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
							<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
								<Text style={[styles.font16]}>海外</Text>
							</View>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>周边</Text>
							</View>
						</View>
						<View style={[styles.sbu_flex]}>
							<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
								<Text style={[styles.font16]}>团购.特惠</Text>
							</View>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>客栈.公寓</Text>
							</View>
						</View>
					</View>

					<View style={[styles.sbu_view, styles.sbu_blue]}>
						<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>机票</Text>
							</View>
							<View style={[styles.sub_con_flex]}>
								<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[1]}}></Image>
							</View>
						</View>
						<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
							<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
								<Text style={[styles.font16]}>火车票</Text>
							</View>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>接收机</Text>
							</View>
						</View>
						<View style={[styles.sbu_flex]}>
							<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
								<Text style={[styles.font16]}>汽车票</Text>
							</View>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>自驾.专车</Text>
							</View>
						</View>
					</View>

					<View style={[styles.sbu_view, styles.sbu_green]}>
						<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>旅游</Text>
							</View>
							<View style={[styles.sub_con_flex]}>
								<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[2]}}></Image>
							</View>
						</View>
						<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
							<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
								<Text style={[styles.font16]}>门票.玩乐</Text>
							</View>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>出境WiFi</Text>
							</View>
						</View>
						<View style={[styles.sbu_flex]}>
							<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
								<Text style={[styles.font16]}>邮轮</Text>
							</View>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>签证</Text>
							</View>
						</View>
					</View>

					<View style={[styles.sbu_view, styles.sbu_yellow]}>
						<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>攻略</Text>
							</View>
							<View style={[styles.sub_con_flex]}>
								<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[3]}}></Image>
							</View>
						</View>
						<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
							<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
								<Text style={[styles.font16]}>周末游</Text>
							</View>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>礼品卡</Text>
							</View>
						</View>
						<View style={[styles.sbu_flex]}>
							<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
								<Text style={[styles.font16]}>美食.购物</Text>
							</View>
							<View style={[styles.sub_con_flex, styles.sub_text]}>
								<Text style={[styles.font16]}>更多</Text>
							</View>
						</View>
					</View>

					<View style={[styles.img_view]}>
						<View style={[styles.img_flex, {borderRightWidth:0.5}]}>
							<Image style={[styles.img_wh]} source={{uri:Images[0]}}></Image>
						</View>
						<View style={[styles.img_flex, {borderLeftWidth:0,}]}>
						<Image style={[styles.img_wh]} source={{uri:Images[1]}}></Image>
						</View>
					</View>
				</View>
			</ScrollView>
		);
    }
}