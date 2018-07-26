import React from 'react';
import { Text, Image, View } from 'react-native';
import { connect } from 'react-redux';

class NotificationIcon extends React.Component {
  constructor(props) {
   
  }
  render() {
    const { notifications } = this.props;
    return (
      <View style={{
        zIndex: 0,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center'}}>
       <Image source={require('path/to/image')}/>
       {notifications.length > 0 ?
        <View style={{
          position: absolute,
          top: 5,
          right: 5,
          borderRadius: 50,
          backgroundColor: 'red',
          zIndex: 2}}>
          <Text>{notifications.length}</Text>
        </View>
        : undefined}
      </View>
    );
    }
}
