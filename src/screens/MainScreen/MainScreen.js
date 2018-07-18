import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/HomeActions/HomeActions';
class MainScreen extends Component{
    render(){
        return(
            <View>
                    
            </View>
        )
    }
}
const mapStateToProps=({state,MainReducer})=>{
    return{
        state,
        MainReducer
    }
}
export default connect(mapStateToProps,actions)(MainScreen);