import React from 'react';
import {
    Platform
} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon, Button} from 'react-native-elements';

import MainScreen from '../screens/MainScreen/MainScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import ListSoundScreen from '../screens/ListSoundScreen/ListSoundScreen';
import ConfigurationScreen from '../screens/ConfigurationScreen/ConfigurationScreen';
import Notification from '../components/Notification/Notification';
const iOSPlatform = Platform.OS==="ios"?true:false;

export const MainScreenStack = StackNavigator({
    MainScreen: {
        screen: MainScreen,
        navigationOptions:({navigation})=>({
            title :'Home',
            headerTitle:'Main'
        })}
    },
    {
        headerMode:'none',
        navigationOptions:{
            headerVisible:false,
            gesturesEnabled:false
        }
    }
);
export const ListSoundScreenStack = StackNavigator({
    ListSoundScreen:{
        screen: ListSoundScreen,
        navigationOptions:({navigation})=>({
            title:'Sounds',
            headerTitle:'Sound list'
        })}
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
            gesturesEnabled:false
        }
    }
);
export const ConfigurationScreenStack = StackNavigator({
    ConfigurationScreen:{
        screen: ConfigurationScreen,
        navigationOptions:({navigation})=>({
            title:'Configuration',
            headerTitle:'Configurations'
        })
    }
})
export const SplashScreenStack = StackNavigator({
    SplashScreen:{
        screen:SplashScreen,
        navigationOptions:({navigation})=>({
            header:null,
        }),
    },
});

export const TabNav = TabNavigator({
    
    ListSoundScreen:{
        screen: ListSoundScreenStack,
        navigationOptions:({navigation})=>({
            tabBarLabel:'Listed',
            tabBarIcon:({tintColor})=> <Icon name={iOSPlatform?"ios-list":"md-list"} color={tintColor} size={30} type='ionicon'></Icon>,
            tabBarOptions:{activeTintColor:'#f92660'},
            // tabBarVisible: 
        }),
    },
    MainScreen:{
        screen: MainScreenStack,
        navigationOptions:{
            tabBarLabel : 'Yah',
        tabBarIcon:({tintColor})=>(
            <Notification tintColor={tintColor}/>
        ),
            tabBarOptions:{activeTintColor:'#f92660'}
        },
    },
    ConfigurationScreen:{
        screen:ConfigurationScreenStack,
        navigationOptions:{
            tabBarLabel:'Setting ',
            tabBarIcon:({tintColor})=> <Icon name={iOSPlatform?"ios-construct":"md-construct"} color={tintColor} size={25} type={'ionicon'}/>,
            tabBarOptions:{activeTintColor:'#f92660'}
        }
    }
},
{
    tabBarOptions: {
        activeTintColor:'#f92660',
        style: { backgroundColor: 'black',opacity:1,background:null},
        tabsStyle: { tabBarBackgroundColor: '#000', tabBarButtonColor: '#f92660', tabBarSelectedButtonColor: '#fff', }
    }
}
);

export const Root = StackNavigator({
    SplashScreen:{
        screen:SplashScreenStack,
    },
    TabNavs:{
        screen:TabNav,
    },
},
{
    mode:'card',
    headerMode:'none',
    transitionConfig: () => ({
        containerStyle: {},
        }), 
});