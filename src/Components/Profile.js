import React, { Component } from 'react';
import {View, TextInput, ImageBackground, Dimensions, KeyboardAvoidingView} from 'react-native';
import {CardSection} from './Common/';
import {Actions} from 'react-native-router-flux';
import Icons from 'react-native-vector-icons/FontAwesome';
import ButtonComponent from 'react-native-button-component';

export default class Profile extends Component{
  render(){
    return(
      <View style={{display:'flex'}}>
      <ImageBackground style={styles.imageBackground} source = {{uri: "https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?cs=srgb&dl=buffet-celebration-delicious-5929.jpg&fm=jpg"}}>
        <View style={styles.viewStyle}>
        <View>
        <View style= {styles.iconStyle}>
            <Icons name="user-circle" size={120}></Icons>
          </View>
        <View style={{paddingBottom:'5%'}}>
        <CardSection style={{flex:1}}>
          <TextInput style = {styles.inputStyle} placeholder='FirstName'/>
        </CardSection >
        <CardSection style={{flex:1}}>
          <TextInput style = {styles.inputStyle} placeholder = "LastName"/>
        </CardSection>
        </View>
      </View> 
      <View style={{alignItems:'center'}}>
        <ButtonComponent style = {{marginTop:'1%' }} text="Done" backgroundColors={['orange', 'red']} height={45} width={300} onPress = {()=>Actions.About()}/> 
        <ButtonComponent style = {{marginTop:'1%'}} text="Go to Payment" backgroundColors={['orange', 'red']} height={45} width={300} onPress = {()=>Actions.Payment()}/> 
        <ButtonComponent style = {{marginTop:'1%' }} text="Orders" backgroundColors={['orange', 'red']} height={45} width={300} onPress = {()=>Actions.Orders()}/> 
        <ButtonComponent style = {{marginTop:'1%' }} text="Delivery Location" backgroundColors={['orange', 'red']} height={45} width={300} onPress = {()=>Actions.Delivery()}/> 
        <ButtonComponent style = {{marginTop:'1%' }} text="Deliveringto" backgroundColors={['orange', 'red']} height={45} width={300} onPress = {()=>Actions.Deliveringto()}/> 
        <ButtonComponent style = {{marginTop:'1%' }} text="Menu" backgroundColors={['orange', 'red']} height={45} width={300} onPress = {()=>Actions.menu()}/> 
      </View>
      </View>
      </ImageBackground>
      </View>
    );
  };
}

const styles = {
  viewStyle:{
    flex:3,
    //alignItems:'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    height:'100%',
  },
  iconStyle:{
    paddingBottom:'10%',
    paddingTop:'10%',
    alignItems:'center'
  },
  inputStyle: {
    color: '#000',
    fontSize: 18,
    paddingBottom: 10,
    flex:1
  },
  imageBackground: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode:'stretch',
  }

}