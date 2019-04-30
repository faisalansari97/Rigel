import React from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import ButtonComponent from 'react-native-button-component';
import {Icon} from 'react-native-elements';
import AnimatedHideView from 'react-native-animated-hide-view';

export default class Delivery extends React.Component{
  state={toggleHome:false, toggleWork:false}

    onClickEventHome = () => {
      const newstate = !this.state.toggleHome
      this.setState({toggleHome:newstate})
    }
    onClickEventWork = () => {
      const newstate = !this.state.toggleWork
      this.setState({toggleWork:newstate})
    }

    render(){
      return(
        <View style={{display:'flex', alignItems:'center'}}>
        <TouchableOpacity onPress={()=> this.onClickEventHome()}>
          <View style={styles.firstSection}>
            <View style={{flexDirection:'row', marginTop:'4%', marginLeft:'2%'}}>
               <Icon name="home" color='orange'/>
               <Text style={{fontSize:20, fontWeight:'bold', marginLeft:'2%'}}>Home</Text>
               <View style={{marginLeft:'60%'}}>
                <AnimatedHideView visible={this.state.toggleHome}>
                 <Icon name="check-circle" color='rgba(255,69,0,1)'/>
                 </AnimatedHideView>
               </View>
            </View>
            <View>
              <Text style={{margin:'2%', paddingLeft:'2%'}}>36 Oak Avenue Buffalo Grove, IL 60089 United States</Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.onClickEventWork()}>
          <View style={styles.secondSection}>
            <View style={{flexDirection:'row', marginTop:'4%', marginLeft:'2%'}}>
                <Icon name="building" type='font-awesome' color='orange'/>
                <Text style={{fontSize:20, fontWeight:'bold', marginLeft:'2%'}}>Work</Text>
                <View style={{marginLeft:'63%'}}>
                <AnimatedHideView visible={this.state.toggleWork}>
                 <Icon name="check-circle" color='rgba(255,69,0,1)'/>
                 </AnimatedHideView>
               </View>
              </View>
              <View>
                <Text style={{margin:'2%', paddingLeft:'2%'}}>36 Oak Avenue Buffalo Grove, IL 60089 United States</Text>
              </View>
          </View>
          </TouchableOpacity>
          <View>
          <ButtonComponent text="Add New Address" backgroundColors={['orange', 'red']}
            height={40} width={300} style={{marginLeft:'2%'}} style={styles.buttonStyle}/>
          </View>
        </View>
      )
    }
}

const styles = {
  firstSection:{
    height:Dimensions.get('window').height/6,
    width:Dimensions.get('window').width/1.1,
    backgroundColor:'white',
    borderRadius:5,
    marginTop:'10%'
  },
  secondSection:{
    height:Dimensions.get('window').height/6,
    width:Dimensions.get('window').width/1.1,
    backgroundColor:'white',
    borderRadius:5,
    marginTop:'5%',
    marginBottom:'5%'
  },
  buttonStyle:{
    //marginTop:'5%'
  }
}