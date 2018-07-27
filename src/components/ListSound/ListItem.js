import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import * as types from '../../actions/Types/types';
import mp3Data from '../../constant/mp3_info.json';

class ListItem extends Component{
    constructor(props){
        super(props);
        this.state={
            isPlaying: ((this.props.SoundTappedReducer.itemSelected!=null &&
                this.props.dataSound.item.key === this.props.SoundTappedReducer.itemSelected.key))?
                nextProps.SoundTappedReducer.isPlaying:false,
            itemListSelected:[],
            }
        }
    componentWillReceiveProps=(nextProps)=>{
       console.log("itemmmm",nextProps);
        if(nextProps !=null){
            if(nextProps.SoundTappedReducer!=null){
                this.setState({
                    isPlaying:((nextProps.SoundTappedReducer.itemSelected!=null &&
                             this.props.dataSound.item.key === nextProps.SoundTappedReducer.itemSelected.key))?
                             nextProps.SoundTappedReducer.isPlaying:false
                })
            }
            if(nextProps.MainReducer.itemListSelected!=null){
                this.setState({
                    itemListSelected:nextProps.MainReducer.itemListSelected
                })
            }
        }
    }
    _onPressItem=(item)=>{
        this.props.tappedItem(item,!this.state.isPlaying) ;
    }
    _onPressItemForStoraging=(item)=>{
        this.props.tappedItemForStoraging(this.state.itemListSelected,item);
    }
    _onPressItemForRemoveStoraging=(item)=>{
        this.props.tappedItemForRemoveStoraging(this.state.itemListSelected,item);
    }
    _renderNoPlaying=(item)=>{
        console.log("dadada",this.props.MainReducer.itemListSelected.findIndex(x =>x.key===item.key));
        return(
            <View style={styles.horizontalContainerNoPlaying}>
                    <View style={styles.containerPlaying}>
                        {
                            (this.props.MainReducer.itemListSelected.findIndex(x =>x.key===item.key)==-1)?
                                <TouchableOpacity  onPress={()=>this._onPressItemForStoraging(item)} style={{justifyContent:'flex-end',alignSelf:'flex-end',top:0,position:'absolute'}}>
                                    <Ionicons name="ios-add-circle" type="ionicon" size={30} color="#a6e22a"/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity  onPress={()=>this._onPressItemForRemoveStoraging(item)} style={{justifyContent:'flex-end',alignSelf:'flex-end',top:0,position:'absolute'}}>
                                    <Ionicons name="ios-close-circle" type="ionicon" size={30} color="#f45530"/>
                                </TouchableOpacity> 
                        }
                    </View>
                    <View style={styles.horizontalContainerAbsolute}>
                        <Image source={{uri : item.img!=null?item.img:nullImg.nil}}
                            resizeMethod={'scale'}   
                            style={{width:150,height:120, borderTopLeftRadius:20,borderTopRightRadius:20}}/>
                        <Text style={styles.titleItem}>{item.key}</Text>
                    </View>
            </View> 
        )
    }
    _randomCount(min, max){
        return Math.floor(Math.random()*8)+0;
    }
    _renderPlaying=(item)=>{
        console.log(this.state);
        const a= this._randomCount();
        return(
                    <View style={styles.horizontalContainer}>
                        <View style={styles.containerPlaying}>
                            <Ionicons name="ios-pause" type="ionicon" size={35} color="#f5f5f5" 
                                style={{justifyContent:'center',alignSelf:'center',position:'absolute'}}/>
                                {
                                    mp3Data[a]["data"]!=null?
                                        <Image source={{uri: mp3Data[a]["data"]}}
                                            style={{height:'100%', width: '100%',position:'absolute'}}
                                            resizeMethod='scale'
                                            zIndex={3}/>
                                    :null   
                                }
                            
                        </View>
                        <View style={styles.horizontalContainerAbsolute}>
                            <Image source={{uri : item.img!=null?item.img:nullImg.nil}}
                                resizeMethod={'scale'}    
                                style={{width:150,height:120, borderTopLeftRadius:20,borderTopRightRadius:20}}/>
                            <Text style={styles.titleItem}>{item.key}</Text>
                        </View>
                    </View>     

        )
    }
    render(){
        console.log("itemmmm",this.props);
        const {item}= this.props.dataSound;
        return(
            <TouchableOpacity onPress={()=>this._onPressItem(item)}>
            {/* <View> */}
                 {this.state.isPlaying?
                   this._renderPlaying(item)
                    :
                    this._renderNoPlaying(item)
                } 
                {/* </View> */}
            </TouchableOpacity>
        )
    }
}
const mapStateToProps=({SoundTappedReducer,MainReducer})=>{
    return{
        SoundTappedReducer,
        MainReducer
    }
}
export default connect(mapStateToProps,actions)(ListItem);

const styles= StyleSheet.create({
    verticalContainerTitle:{
        padding:10,
        fontSize:25,
        flexDirection:'row',
    },
    verticalContainerTitleLeft:{
        borderColor:'black',
        borderWidth:1,
        fontSize:25,
        flexDirection:'row',
        flex:1,
        marginTop:7
    },
    verticalContainerTitleRight:{
        fontSize:25,
        flexDirection:'row',
        flex:1,
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        borderColor:'black',
        borderWidth:1,
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
    },
    horizontalContainer:{
        width:150,
        height:150, 
        shadowColor: '#000000',
                shadowOffset: {
                width: 3,
                height: 3
                },
                shadowRadius: 20,
                shadowOpacity: 1.0,
        borderRadius:20,
        margin:5,
        overflow:'hidden',
        // backgroundColor:'white'
    },
    horizontalContainerNoPlaying:{
        width:150,
        height:150, 
        borderRadius:20,
        margin:5,
        overflow:'hidden',
        backgroundColor:'white'
    },
    horizontalContainerAbsolute:{
        width:150,
        height:150, 
        borderRadius:20,
        overflow:'hidden',
        backgroundColor:'#00aae1',
        top:0,right:0,bottom:0,left:0
    },
    horizontalViewContainer:{
        marginLeft:10,
        marginRight:10
    },
    titleItem:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:13,
        marginTop:3,
        // backgroundColor:'#f5f5f5'
    },
    activityIndicatorContainer:{
        width:120,
        height:120,
        backgroundColor:'white',
        borderRadius:20,
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center'
    },
    titleActivityIndicator:{
        fontSize:12,
        fontWeight:'bold',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        marginBottom:15,
    },
    containerPlaying:{
        position:'absolute',
        justifyContent:'center',
        alignContent:'center',
        top:0,
        bottom:0,
        right:0,
        left:0,
        zIndex:7,
    }
})
