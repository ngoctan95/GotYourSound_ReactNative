import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';

export default class ListSoundScreen extends Component{
    componentWillMount(){
        console.log("ListSound _ Willmount",this.props);
    }
    render(){
        return(
            <View>
                <FlatList 
                    />
            </View>
        )
    }
}