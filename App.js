import React, { Component } from 'react'
import RouterComponent from './src/Components/Router';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component{
  
  componentDidMount(){
    SplashScreen.hide();
  }
  
render(){
  return(
   <RouterComponent/>
  );
};
}