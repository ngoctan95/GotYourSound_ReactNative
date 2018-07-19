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
            
        }
     }
     componentDidMount(){
        console.log("ListSound _ Willmount",this.props);
        this.props.loadingSoundLS();
     }
    componentWillMount(){
      
    }
    componentWillReceiveProps=(nextProps)=>{
        console.log("nextProps",nextProps);
    }
    _renderListItemHorizontal=(item)=>{
        return(
            <View style={styles.horizontalContainer}>
                <Image source={{uri : item.item.img!=null?item.item.img:nullImg.nil}}
                       resizeMethod={'scale'} 
                       style={{width:150,height:120, borderTopLeftRadius:20,borderTopRightRadius:20}}/>
                 <Text style={styles.titleItem}>{item.item.key}</Text>
            </View>
        )
    }
    _renderListItemVertical=(item,index)=>{
        console.log("item",item); 
        return(
            <View>
                <View style={styles.verticalContainerTitle}>
                    <View style={styles.verticalContainerTitleLeft}>
                        <Text style={{color:'#00aae1', fontSize:15}}>♫</Text>
                        <Text style={styles.verticalTitle}>{item.item.title}</Text>
                    </View>
                    <View style={styles.verticalContainerTitleRight}>
                        <TouchableOpacity>
                            <Text style={styles.verticalTitleMarginRight}>Show all</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.horizontalViewContainer}>
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                         data={soundData[item.index]["data"]} 
                        renderItem={ this._renderListItemHorizontal }
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
        return(
            <View style={styles.mainContainer}>
                {this.props.ListSoundReducer.isLoading?
                    this._renderActivityIndicator():
                    <FlatList   
                        style={{flex:1}} 
                        data={this.props.ListSoundReducer.dataSound} 
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
        alignItems:'center'
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