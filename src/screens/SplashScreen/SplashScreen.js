import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    Animated
} from 'react-native';
import logo from '../../assets/images/logo.png';
import {Icon} from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';
const {width,height}=Dimensions.get("window");
export default class SplashScreen extends Component{
    componentWillMount(){
        console.log(this.props);
        // this._randomInitImage();
    }
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('TabNavs');            
        }, 2000);
        
    }
    // _randomInitImage(){
    //     var i=0;
    //     for(i=0;i<5;i++){
    //         var random =Math.floor((Math.random() * 100)+1);
    //         if (random%2==0){
    //             return (
    //                 <View style={{position:'absolute',justifyContent:'center',alignSelf:'center',
    //                 top:0,bottom:0,right:0,left:0}}>
    //                         <Icon name="ios-musical-note" colors="#517fa4" size={20} type='ionicon' />
    //                     </View>
    //             )
    //         }
    //     }
    // }
    render(){
        return(
            <LinearGradient colors={["#00abef","#4fdae7"]} style={{flex:1}}>
                <View style={styles.mainContainer}>
                    <LinearGradient style={styles.childContainer} start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#0016b2', '#ccb603', '#0016a9']}>
                        <Image source={logo} style={styles.imgLogo}/>
                    </LinearGradient>
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
    },
    childContainer:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:width*0.7,
        width:width*0.59,
        height:width*0.59,
        
    }
})