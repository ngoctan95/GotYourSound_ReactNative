import React from 'react';
import { Text, Image, View,Platform ,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Icon from 'react-native-vector-icons/Ionicons';
const iOSPlatform = Platform.OS==="ios"?true:false;
class Notification extends React.Component {
  constructor(props) {
   super(props);
  }
  componentWillMount(){
    console.log("mounttttttttttttttttttttt",this.props);
  }
  componentWillReceiveProps=(nextProps)=>{
    console.log("notificatio===========",nextProps);
  }
  componentDidMount(){
    console.log("mounttttttttttttttttttttt",this.props);
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{flex:1,alignItems:'center',alignSelf:'center',
                      justifyContent:'center',paddingRight:13,paddingLeft:13}}>
          <Icon name={iOSPlatform?"ios-musical-notes":"md-musical-notes"} 
                color={this.props.tintColor} size={25} type='ionicon'
                style={{justifyContent:'center'}}></Icon>
          {this.props.MainReducer.countNotification > 0 ?
          <View style={styles.notificationContainer}>
            <Text style={styles.notification}>{this.props.MainReducer.countNotification}</Text>
          </View>
          : null}
        </View>
      </View>
    );
    }
}
const mapStateToProps=({MainReducer})=>{
  return{
    MainReducer, 
  }
}
export default connect(mapStateToProps,actions)(Notification);
const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    top:0,
    alignItems: 'center',
  },
  notificationContainer:{
    position:'absolute',
    backgroundColor:'red',
    width:14,
    height:14,
    top:0,right:0,
    borderColor:'red',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:14,
  },
  notification:{
    color:'white',
    fontSize:12,
    alignSelf:'center',
    justifyContent:'center'
  }
})
