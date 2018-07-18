import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    SectionList
} from 'react-native';
import  {connect} from 'react-redux';
import * as actions from '../../actions/ListSoundActions/ListSoundActions';
import ListSoundReducer from '../../reducers/ListSoundReducer/ListSoundReducer';

const soundsStorage={
    guitar:require('../../assets/sounds/guitar.mp3'),
    rain:require('../../assets/sounds/rain.mp3'),
    water:require('../../assets/sounds/water.mp3'),
}

 class ListSoundScreen extends Component{
     constructor(props){
        super(props);
        this.state={
           types:[{
            //    "detailTypes":{
                "bird": [
                  {
                    "id": 1,
                    "title": "iPad 4 Mini",
                    "price": 500.01,
                    "inventory": 2
                  },
                  {
                    "id": 2,
                    "title": "H&M T-Shirt White",
                    "price": 10.99,
                    "inventory": 10
                  },
                  {
                    "id": 3,
                    "title": "Charli XCX - Sucker CD",
                    "price": 19.99,
                    "inventory": 5
                  }],
                "instrument": [
                  {
                    "id": 1,
                    "title": "iPad 4 Mini",
                    "price": 500.01,
                    "inventory": 2
                  },
                  {
                    "id": 2,
                    "title": "H&M T-Shirt White",
                    "price": 10.99,
                    "inventory": 10
                  },
                  {
                    "id": 3,
                    "title": "Charli XCX - Sucker CD",
                    "price": 19.99,
                    "inventory": 5
                  }
                ],
                "peace": [
                  {
                    "id": 1,
                    "title": "iPad 4 Mini",
                    "price": 500.01,
                    "inventory": 2
                  },
                  {
                    "id": 2,
                    "title": "H&M T-Shirt White",
                    "price": 10.99,
                    "inventory": 10
                  },
                  {
                    "id": 3,
                    "title": "Charli XCX - Sucker CD",
                    "price": 19.99,
                    "inventory": 5
                  }
                ]
                // }
           }]
        }
     }
     componentDidMount(){
         for(type in this.state.types["detailTypes"]){
            console.log(this.state);  
         }
     }
    componentWillMount(){
        console.log("ListSound _ Willmount",this.props);
    }
    _renderListItemHorizontal=(item)=>{
        console.log("horizontal",item);
        return(
            <View>
                 <Text>{item.item.point}</Text>
            </View>
        )
    }
    _renderListItemVertical=(item,index)=>{
        console.log("vertical",item.item);
        return(
            <View>
                <Text>{item.item[0]}</Text>
                 <FlatList 
                    // style={{flex:1}}
                    data={item.item["bird"]}
                    renderItem={ this._renderListItemHorizontal }
                    horizontal={true}/>
            </View>
        )
    }
    render(){
        // console.log(this.state.types["detailTypes"]); 
        // const types = this.state.types["detailTypes"]
        return(
            <View style={{flex:1}}>
                <FlatList 
                    style={{flex:1}} 
                    data={this.state.types} 
                    renderItem={(item,index)=> this._renderListItemVertical(item,index) }/>
            </View>
        )
    }
}
const mapStateToProps=({state,ListSoundReducer})=>{
    return{
        state,
        ListSoundReducer
    }
}
export default connect(mapStateToProps,actions)(ListSoundScreen);