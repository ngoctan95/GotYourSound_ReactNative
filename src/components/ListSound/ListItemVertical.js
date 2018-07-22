import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Slider,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/ListSoundActions/ListSoundActions';
import SystemSetting from 'react-native-system-setting';
const bg_gif=require("../../assets/images/gif_star.gif");
class ListItemVertical extends Component{
    componentWillMount(){
        console.log("props",this.props);
        SystemSetting.setVolume(0.5);
    }
    componentWillReceiveProps=(nextProps)=>{
        console.log("propsnext",nextProps);
    }
    _onValueChange=(value)=>{
        SystemSetting.setVolume(value/100);
    }
    render(){
        const {item}=this.props.data;
        console.log(item); 
        return(
            <View style={styles.mainContainer}>
                <View style={styles.verticalContainerTitle}>
                    <View style={styles.verticalContainerTitleLeft}>
                        {/* {(this.props.itemSelected!=null && this.props.itemSelected.type == item.title)?
                            <Image source={require('../../assets/images/gif_star.gif')}
                            style={{height: width: '100%'}}
                            resizeMode='cover'
                            zIndex={-1}/>:null
                        } */}
                        <Text style={{color:'#00aae1', fontSize:15}}>♫</Text>
                        <Text style={styles.verticalTitle}>{item.title}</Text>
                    </View>
                    {(this.props.itemSelected!=null && this.props.itemSelected.type == item.title)?
                    <View style={styles.verticalContainerSlider}>
                        <Slider 
                            minimumValue={1}
                            maximumValue={100}
                            value={50}
                            step={1}
                            style={{width:"100%"}}
                            minimumTrackTintColor={"#6abd45"}
                            onValueChange={(value)=>this._onValueChange(value)}/>
                    </View>:null
                    }
                    <View style={styles.verticalContainerTitleRight}>
                        <TouchableOpacity>
                            <Text style={styles.verticalTitleMarginRight}>Show all</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
        )
    }
}
const mapStateToProps =({SoundTappedReducer})=>{
    return(
        SoundTappedReducer
    )
}
export default connect(mapStateToProps,actions)(ListItemVertical);

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
    },
    verticalContainerTitle:{
        padding:10,
        fontSize:25,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center'
    },
    verticalContainerTitleLeft:{
        fontSize:25,
        flexDirection:'row',
        flex:1,
        alignSelf:'center',
        justifyContent:'flex-start',
    },
    verticalContainerSlider:{
        fontSize:25,
        flexDirection:'row',
        flex:1,
        alignSelf:'center',
        justifyContent:'center',
    },
    verticalContainerTitleRight:{
        fontSize:25,
        flexDirection:'row',
        flex:1, 
        alignSelf:'center',
        justifyContent:'flex-end',
    },
    verticalTitle:{
        fontWeight:'bold',
        marginLeft:10,
        fontSize:17
    },
    verticalTitleMarginRight:{
        textAlign:'right',
        fontSize:15,
        fontStyle:'normal',
        marginRight:10,
        color:'#f45530'
    }
})