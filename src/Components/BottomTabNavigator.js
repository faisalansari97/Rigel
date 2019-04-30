import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {Icon} from 'react-native-elements';
import Home from './Home';
import Search from './Search';
import Orders from './Orders';
import Menu from './Menu';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => (
           <Icon name="home" size={30} color='orange' />
           )
      },
    },

    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: () => (
           <Icon name="search" size={30} color='orange'/>
           )
      },
    },

    Orders: {
      screen: Orders,
      navigationOptions: {
        tabBarIcon: () => (
           <Icon name='palette' size={30} color='orange'/>
           )
      },
    },

    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarIcon: () => (
           <Icon name="reorder" size={30} color='orange' />
           )
      },
    },
  },
);

const Stacknavigator = createAppContainer(TabNavigator)

export default class BottomTabNavigator extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
       <Stacknavigator/>
      </View>
    )
  }
}