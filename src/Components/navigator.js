import React from 'react';
import {View,Dimensions} from 'react-native';
import Breakfast from "./Breakfast";
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'

const AppNavigator = createMaterialTopTabNavigator(
    {
        Breakfast: Breakfast,
        Appetizers: Breakfast,
        Mains: Breakfast
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
            width:Dimensions.get('window').width/12,
            marginLeft:'8.8%',
          },
          labelStyle:{
    
            fontWeight:'bold',
          }
        }
      }
)

const Appcontainer = createAppContainer(AppNavigator)

export default class Navigator extends React.Component{
    render(){
        return(
            <View style={{flex:1,padding:10}}> 
                <Appcontainer/>
            </View>
        )
    }
}
