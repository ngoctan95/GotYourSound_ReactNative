import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    SectionList,
    StyleSheet,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';
import  {connect} from 'react-redux';
import * as actions from '../../actions/ListSoundActions/ListSoundActions';
import ListSoundReducer from '../../reducers/ListSoundReducer/ListSoundReducer';
import soundData from '../../constant/sound_info.json';
import ListItem from '../../components/ListSound/ListItem';
import ListItemVertical from '../../components/ListSound/ListItemVertical';
const soundsStorage={
    guitar:require('../../assets/sounds/guitar.mp3'),
    rain:require('../../assets/sounds/rain.mp3'),
    water:require('../../assets/sounds/water.mp3'),
}
const nullImg={
    nil:require("../../assets/images/nil.jpg"),
}

 class ListSoundScreen extends Component{
     constructor(props){
        super(props);
        this.state={
            dataSound:[],
            isPlaying:this.props.ListSoundReducer.isPlaying,
        }
     }
     componentDidMount(){
        console.log("ListSound _ Willmount",this.props);
        this.props.loadingSoundLS();
     }
    componentWillMount(){
      
    }
    componentWillReceiveProps=(nextProps)=>{
        // console.log("nextProps",nextProps);
        /**
         * Set dataSound for state changes.
         */
        if(this.state.dataSound.length==0){
            if(nextProps.ListSoundReducer.dataSound!=null){
                this.setState({
                    dataSound:nextProps.ListSoundReducer.dataSound
                })
            }
        }
        /**
         * Set playing state for item sound.
         */
        if(nextProps.ListSoundReducer.isPlaying){
            this.setState({
                isPlaying:nextProps.ListSoundReducer.isPlaying
            })
        }
        // console.log("state",this.state.isPlaying);
    }
    _renderListItemHorizontal=(item)=>{
        return(
            <ListItem dataSound={item}/>
        )
    }
    _renderListItemVertical=(item,index)=>{
        // console.log("item",item); 
        return(
            <View style={styles.mainContainer}>
                {/* <View style={styles.verticalContainerTitle}>
                    <View style={styles.verticalContainerTitleLeft}>
                        <Text style={{color:'#00aae1', fontSize:15}}>♫</Text>
                        <Text style={styles.verticalTitle}>{item.item.title}</Text>
                    </View>
                    <View style={styles.verticalContainerTitleRight}>
                        <TouchableOpacity>
                            <Text style={styles.verticalTitleMarginRight}>Show all</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
                <ListItemVertical data = {item}/>
                <View style={styles.horizontalViewContainer}> 
                        <FlatList 
                        showsHorizontalScrollIndicator={false}
                        data={this.state.dataSound[item.index]["data"]} 
                        renderItem={ this._renderListItemHorizontal }
                        keyExtractor={(item,index)=>index.toString()}
                        horizontal={true}/>
                 </View>
            </View>
        )
    }
    _renderActivityIndicator(){
        return( 
            <View style={styles.activityIndicatorContainer}>
                <Text style={styles.titleActivityIndicator}>Loading</Text>
                <ActivityIndicator animating={true} size="large"/>
            </View>
        )
    }
    render(){
        // console.log("render",this.props.ListSoundReducer);
        return(
            <View style={styles.mainContainer}>
                {this.props.ListSoundReducer.isLoading?
                    this._renderActivityIndicator():
                    <FlatList   
                        style={{flex:1}} 
                        data={this.state.dataSound} 
                        keyExtractor={(item,index)=>index.toString()}
                        renderItem={(item,index)=> this._renderListItemVertical(item,index) }/>
                }
            </View>
        )
    }
}
const mapStateToProps=({ListSoundReducer})=>{
    return{
        ListSoundReducer 
    }
}
export default connect(mapStateToProps,actions)(ListSoundScreen);

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
    },
    verticalContainer:{

    },
    verticalContainerTitle:{
        padding:10,
        fontSize:25,
        flexDirection:'row',
    },
    verticalContainerTitleLeft:{
        // borderColor:'black',
        // borderWidth:1,
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
        // borderColor:'black',
        // borderWidth:1,
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
        alignContent:'center',
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
    }
})