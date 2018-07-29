import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
const {width,height} = Dimensions.get("window");
import LinearGradient from 'react-native-linear-gradient';

class MainItem extends Component{
    componentWillMount(){
        console.log("mainitem======",this.props);
    }
    componentWillReceiveProps(nextProps){
        console.log("mainitemprops",nextProps);
    }
    render(){
        const isOdd=this.props.index %2 ==0?true:false;
        return(
                <ImageBackground source={{uri: this.props.data.img}} 
                    style={{overflow:'hidden',resizeMode:'stretch',width:width*0.95,height:width*0.3,margin:10,borderRadius:20}}>
                    {/* <LinearGradient > */}
                        <View style={isOdd?styles.itemImgContainerOdd:styles.itemImgContainerEven}>
                            <Image source={require("../../assets/images/light.png")} 
                            style={{ resizeMethod:'scale',width:width*0.6,height:width *0.3}}/>
                        </View>
                        <View style={isOdd?styles.itemInfoContainerEven:styles.itemInfoContainerOdd}>
                            <Text style={styles.itemInfo}>{this.props.data.key}</Text>
                        </View>
                    {/* </LinearGradient> */}
                </ImageBackground>
        )
    }
}

const styles=StyleSheet.create({
    mainContainer:{
        margin:10,
        flexDirection:'row',
        backgroundColor:'red',
        borderRadius:20,
        margin:10
        // flex:1,
    },
    itemImgContainerOdd:{
        // flex:7,
        position:'absolute',
        overflow:'hidden',
        left:0,
        // borderColor:'red',
        // borderWidth:1,
    },
    itemImgContainerEven:{
        // flex:7,
        position:'absolute',
        overflow:'hidden',
        right:0,
        // borderColor:'red',
        // borderWidth:1,
    },
    itemInfoContainerEven:{
        flex:1,
        position:'absolute',
        
        right:width*0.05,
        top:width*0.12
    },
    itemInfoContainerOdd:{
        flex:1,
        position:'absolute',
        
        left:width*0.05,
        top:width*0.12
    },
    itemInfo:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 20
        // fontStyle:'italic',
    }

})
const mapStateToProps=({MainReducer})=>{
    return{
        MainReducer
    }
}
export default connect(mapStateToProps,actions)(MainItem);