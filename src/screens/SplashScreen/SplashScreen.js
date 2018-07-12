import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import logo from '../../assets/images/logo.png';

import LinearGradient from 'react-native-linear-gradient';
const {width,height}=Dimensions.get("window");
export default class SplashScreen extends Component{
    componentWillMount(){
        console.log(this.props);
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('TabNavs');            
        }, 1000);
    }
    render(){
        return(
            <LinearGradient colors={["#00abef","#4fdae7"]} style={{flex:1}}>
                <View style={styles.mainContainer}>
                    <Image source={logo} style={styles.imgLogo}/>
                </View>
            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
    },
    imgLogo:{
        width:width*0.5,
        height:width*0.5,
        borderRadius:10
    }
})