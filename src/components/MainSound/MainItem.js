import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    Platform,
    Slider
} from 'react-native';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
const {width,height} = Dimensions.get("window");
import Ionicon from 'react-native-vector-icons/Ionicons';
const iOS = Platform.OS==='ios'?true:false;
import SystemSetting from 'react-native-system-setting';

class MainItem extends Component{
    constructor(props){
        super(props);
        this.state={
            itemListSelectedPlaying:[],
        }
    }
    componentWillMount(){
        // console.log("mainitem======",this.props);
        SystemSetting.setVolume(0.5);
    }
    componentWillReceiveProps(nextProps){
        console.log("mainitemprops",nextProps);
        if(nextProps!=null){
            // this.setState({
            //     itemListSelectedPlaying:null,
            //     itemListSelectedPlaying:[...this.state.itemListSelectedPlaying,nextProps.MainReducer.itemListSelectedPlaying]
            // })
        }
        // console.log("^^^^^^^^",this.state);
    }
    _onPressPlayingItem=(item)=>{
        console.log('CLICKED ....... :',this.props);
        var newItemListSelectedPlaying=(this.props.MainReducer.itemListSelectedPlaying.findIndex(itemx => itemx.key === item.key)<0)?
            [...this.props.MainReducer.itemListSelectedPlaying,item]:
            this.props.MainReducer.itemListSelectedPlaying.filter(itemx=>itemx.key!=item.key);
        this.props.tappedPlayItemM(newItemListSelectedPlaying,item);

        // const Sound = require('react-native-sound');
        // Sound.setCategory("Playback");
        // Sound.setActive(true);
        
        // // console.log("&&&&&&",item.itemListSelectedPlaying[i].music);
        // var whoosh = new Sound(item.music.concat('.mp3'), Sound.MAIN_BUNDLE, (error) => {
        //     if (error) {
        //         Alert.alert(
        //             'Failure',
        //             'Got failure while loading this sound for you guy',
        //             [],
        //             { cancelable: false }
        //           );
        //       resolve(false);
        //     }else{ 
        //             whoosh.play((success)=>{ 
        //                 if (success) {
        //                     whoosh.play();
        //                 } else {
        //                 //   console.log('playback failed due to audio decoding errors');
        //                 }
        //             });
        //     }
        //   });
    }
    _isSelectedPlaying(){ 
        return this.props.MainReducer.itemListSelectedPlaying.findIndex(item => item.key===this.props.data.key); 
    } 
    render(){
        const isOdd=this.props.index %2 == 0?true:false;
        return(
                <ImageBackground source={{uri: this.props.data.img}} 
                    style={{overflow:'hidden',resizeMode:'stretch',width:width*0.974,
                    height:width*0.3,margin:5,borderRadius:20,opacity:0.9,borderWidth:0.5,borderColor:'#5ed9ef',
                    shadowColor: "#000000",
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    shadowOffset: {
                    height: 3,
                    width: 4
                    }}}>
                        <View style={styles.itemInfoContainerEven}>
                            <Text style={styles.itemInfo}>{this.props.data.key}</Text>    
                        </View>
                        {/* <TouchableOpacity style={styles.itemInfoContainerOdd}>
                            <Text style={{color:'red'}}>Del</Text>    
                        </TouchableOpacity> */}
                        <View style={styles.playIconLeft}>
                            <TouchableOpacity 
                                onPress={()=>this._onPressPlayingItem(this.props.data)}
                                style={{width:40,height:40,alignContent:'center',justifyContent:'center',alignItems:'center',borderRadius:30,backgroundColor:'#afafaf',opacity:0.8}}>
                                <Image source={ this._isSelectedPlaying()<0?require("../../assets/images/play.png"):require("../../assets/images/pause.png")} style={{width:35,height:35}}/>
                            </TouchableOpacity> 
                            <Slider step={1} value={50} maximumValue={100} minimumValue={0} style={{marginLeft:10,width:'80%',alignSelf:'center',justifyContent:'center'}}/>    
                        </View>
                        <TouchableOpacity style={{top:width*0.22,alignSelf:'center',justifyContent:'center'}}>
                            <Ionicon name="ios-arrow-dropdown" size={25} color="#fff" />
                        </TouchableOpacity>
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
        flex:3,
        position:'absolute',
        flexDirection:'row',
        right:width*0.05,
        top:width*0.02
    },
    itemInfoContainerOdd:{
        // flex:1,
        position:'absolute',
        left:width*0.05,
        top:10
    },
    itemInfoContainerEvenSlider:{
        // flex:1,
        position:'absolute',
        right:width*0.05,
        top:width*0.2
    },
    itemInfoContainerOddSlider:{
        // flex:1,
        position:'absolute',
        left:width*0.05,
        top:width*0.2
    },
    itemInfo:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 20,
        // flex:1,
        // fontStyle:'italic',
    },
    playIconLeft:{
        position:'absolute',
        justifyContent:'center',
        top:width*0.11,
        flexDirection:'row',
        alignSelf:'center',flex:1,
        left:5,right:5,
        // borderColor:'black',
        // borderWidth:1
    },
    playIconRight:{
        position:'absolute',
        right:20,
        justifyContent:'center',
        top:width*0.12
    }

})
const mapStateToProps=({MainReducer})=>{
    return{
        MainReducer
    }
}
export default connect(mapStateToProps,actions)(MainItem);