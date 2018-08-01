import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    StatusBar,
    ImageBackground,
    ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/HomeActions/HomeActions';
import MainItem from '../../components/MainSound/MainItem';
class MainScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            itemSelected: this.props.MainReducer.itemSelected!=null?this.props.MainReducer.itemSelected:[],
            itemListSelectedPlaying:this.props.MainReducer.itemListSelectedPlaying!=null?this.props.MainReducer.itemListSelectedPlaying:[],
        }
    }
    componentWillMount(){
        console.log("MAIN _ Willmount",this.props);
    }
    componentDidMount(){
        console.log("MAINN _didmount",this.props);
    }
    componentWillReceiveProps(nextProps){
        console.log("MAIN_NEXTPROPS",nextProps);
        if(nextProps!=null){
            this.setState({
                itemSelected:[...this.state.itemSelected,this.props.MainReducer.itemListSelected],
            })
        }
        // this.props.tappedPlayItemM(this.props.MainReducer.itemListSelectedPlaying,null);
    }
    _renderItem=(item)=>{
        console.log("itemmain",item);
        return(
            <View style={styles.itemContainer}>
                
            </View>
        )
    }
    
    render(){
        console.log("mainnnn",this.props.MainReducer);
        return(
            <View style={styles.mainContainer}>
            <ImageBackground source={ require("../../assets/images/bg5.jpg")} style={{resizeMode:'stretch',flex:1,justifyContent:'center',opacity:1}}> 
                <StatusBar
                        backgroundColor="blue"
                        barStyle="light-content"
                    />
                <View style={{height:20,width:'100%'}}></View> 
                    <ScrollView >
                        {
                            
                            this.props.MainReducer.itemListSelected.length>0?
                            this.props.MainReducer.itemListSelected.map((item,index)=>{
                            return (
                                <MainItem data={item} index={index} key={index}/>
                            )})
                            :null
                        }
                    </ScrollView>
                    </ImageBackground>
            </View>
        )
    }
}
const mapStateToProps=({MainReducer})=>{
    return{
        MainReducer
    }
}
export default connect(mapStateToProps,actions)(MainScreen);
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,

    },
    itemContainer:{
        width:'100%',
        marginRight:10,
        marginLeft:10,
    }
})