import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon, Button} from 'react-native-elements';

import MainScreen from '../screens/MainScreen/MainScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import ListSoundScreen from '../screens/ListSoundScreen/ListSoundScreen';
import ConfigurationScreen from '../screens/ConfigurationScreen/ConfigurationScreen';

export const MainScreenStack = StackNavigator({
    MainScreen: {
        screen: MainScreen,
        navigationOptions:({navigation})=>({
            title :'Home',
            headerTitle:'Main'
        }),
    },
});
export const ListSoundScreenStack = StackNavigator({
    ListSoundScreen:{
        screen: ListSoundScreen,
        navigationOptions:({navigation})=>({
            title:'Sounds',
            headerTitle:'Sound list'
        }),
    },
});
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
    MainScreen:{
        screen: MainScreenStack,
        navigationOptions:{
            tabBarLabel : 'Yah',
            tabBarIcon:({tintColor})=> <Icon name="ios-musical-note" color={tintColor} size={25} type='ionicon'></Icon>,
            tabBarOptions:{activeTintColor:'orange'}
        },
    },
    ListSoundScreen:{
        screen: ListSoundScreenStack,
        navigationOptions:{
            tabBarLabel:'Listed',
            tabBarIcon:({tintColor})=> <Icon name="ios-list" color={tintColor} size={30} type='ionicon'></Icon>,
            tabBarOptions:{activeTintColor:'orange'}
        },
    },
    ConfigurationScreen:{
        screen:ConfigurationScreenStack,
        navigationOptions:{
            tabBarLabel:'Setting ',
            tabBarIcon:({tintColor})=> <Icon name="ios-construct" color={tintColor} size={25} type={'ionicon'}/>,
            tabBarOptions:{activeTintColor:'orange'}
        }
    }
});

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
    headerMode:'none'
});