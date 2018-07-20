import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import * as actions from '../../actions/ListSoundActions/ListSoundActions';
import * as types from '../../actions/Types/types';

class ListItem extends Component{
    constructor(props){
        super(props);
        this.state={
            isPlaying: ((this.props.SoundTappedReducer.itemSelected!=null &&
                this.props.dataSound.item.key === this.props.SoundTappedReducer.itemSelected.key))?
                nextProps.SoundTappedReducer.isPlaying:false,
        }
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    componentWillReceiveProps=(nextProps)=>{
       
        if(nextProps !=null){
            if(nextProps.SoundTappedReducer!=null){
                this.setState({
                    isPlaying:((nextProps.SoundTappedReducer.itemSelected!=null &&
                             this.props.dataSound.item.key === nextProps.SoundTappedReducer.itemSelected.key))?
                             nextProps.SoundTappedReducer.isPlaying:false
                })
            }
        }
    }
    _onPressItem=(item)=>{
        this.props.tappedItem(item,!this.state.isPlaying) ;
    }
    _renderNoPlaying=(item)=>{
        return(
                    <View style={styles.horizontalContainer}>
                        <Image source={{uri : item.img!=null?item.img:nullImg.nil}}
                            resizeMethod={'scale'}   
                            style={{width:150,height:120, borderTopLeftRadius:20,borderTopRightRadius:20}}/>
                        <Text style={styles.titleItem}>{item.key}</Text>
                    </View> 
        )
    }
    _renderPlaying=(item)=>{
        return(
            <View style={styles.horizontalContainer}>
                <View style={styles.containerPlaying}>
                    <Ionicons name="ios-pause" type="ionicon" size={35} color="#f5f5f5" 
                    style={{justifyContent:'center',alignSelf:'center'}}/>
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
        const {item}= this.props.dataSound;
        return(
            <TouchableOpacity onPress={()=>this._onPressItem(item)}>
                 {this.state.isPlaying?
                   this._renderPlaying(item)
                    :
                    this._renderNoPlaying(item)
                }
            </TouchableOpacity>
        )
    }
}
const mapStateToProps=({SoundTappedReducer})=>{
    return{
        SoundTappedReducer
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
        // borderWidth:1, 
        // borderColor:'black',
        borderRadius:20,
        margin:5,
        overflow:'hidden',
        backgroundColor:'white'
    },
    horizontalContainerAbsolute:{
        width:150,
        height:150, 
        // borderWidth:1, 
        // borderColor:'black',
        borderRadius:20,
        overflow:'hidden',
        backgroundColor:'white',
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
        marginTop:3
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
        zIndex:2,
    }
})
