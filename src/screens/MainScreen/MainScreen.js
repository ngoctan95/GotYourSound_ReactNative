import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/HomeActions/HomeActions';
class MainScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            itemSelected: this.props.MainReducer.itemSelected!=null?this.props.MainReducer.itemSelected:[],
        }
    }
    componentWillMount(){
        console.log("Main _ Willmount",this.props);
    }
    componentDidMount(){
        console.log("MAINNNNNNNNNNNNN _didmount",this.props);
    }
    componentWillReceiveProps(nextProps){
        console.log("MAINNNNNNNNNNN",nextProps);
        if(nextProps!=null){
            this.setState({
                itemSelected:this.props.MainReducer.itemSelected!=null?this.props.MainReducer.itemSelected:this.state.itemSelected,
            })
        }
        this.forceUpdate();
    }
    _renderItem=(item)=>{
        console.log("itemmain",item);
        return(
            <View>
                <Text>pokok</Text>
            </View>
        )
    }
    render(){
        console.log("mainnnn",this.props.MainReducer);
        // const {itemSelected} =this.props.MainReducer.itemSelected;
        return(
            <View style={styles.mainContainer}>
                {/* <FlatList 
                    data={this.state.itemSelected}
                    renderItem={this._renderItem}
                    keyExtractor={(item,index)=>index.toString()}
                    /> */}
                    {this.props.MainReducer.itemListSelected.length>0?
                    this.props.MainReducer.itemListSelected.map((item)=>{
                        return (
                            <Text>{item.key} + dasda</Text>
                        )
                    }):null}
                    

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