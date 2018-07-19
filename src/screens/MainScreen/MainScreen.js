import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../../actions/HomeActions/HomeActions';
class MainScreen extends Component{
    componentWillMount(){
        console.log("Main _ Willmount",this.props);
    }
    render(){
        return(
            <View>
                    
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