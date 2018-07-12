import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon, Button} from 'react-native-elements';

import MainScreen from '../screens/MainScreen/MainScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import ListSoundScreen from '../screens/ListSoundScreen/ListSoundScreen';

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
            tabBarLabel : ''
            // tabBarIcon: <Icon name="home" color={"red"} size={35}></Icon>
        },
    },
    ListSoundScreen:{
        screen: ListSoundScreenStack,
        navigationOptions:{
            tabBarLabel:'Sound List'
            // tabBarIcon: <Icon name="music" color={"red"} size={35}></Icon>
        },
    },
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