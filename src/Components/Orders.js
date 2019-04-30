import React from 'react';
import {View, Dimensions} from 'react-native';
import CardView from 'react-native-cardview';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import Upcoming from './Upcoming';
import Past from './Past';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Upcoming: Upcoming,
    Past: Past
  },
  {
    tabBarOptions:{
      activeTintColor:'red',
      inactiveTintColor:'black',
      // pressColor:'red',
      // pressOpacity:0.3,
      style:{
        backgroundColor:'white',
        borderRadius:10,
        margin:'3%',
      },
      indicatorStyle:{
        backgroundColor:'red',
        width:Dimensions.get('window').width/10,
        marginLeft:'14%',
      },
      labelStyle:{
        fontWeight:'bold',
      }
    }
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class Orders extends React.Component{
  render(){
    return(
    <View style={{flex:1, marginTop:'5%'}}>
     <AppContainer/>
     </View>
    );
  };
}

