import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import ButtonComponent from 'react-native-button-component';
import {Icon} from 'react-native-elements';
import AnimatedHideView from 'react-native-animated-hide-view';

import {Dropdown} from 'react-native-material-dropdown'


export default class Deliveringto2 extends React.Component{
  state={isVisible:false}
  render(){
    let data = [{
      value: '36 Oak Avenue Buffalo Grove, IL 60089 United States',
    }, {
      value: '36 Oak Avenue Buffalo Grove, IL 60089 United States',
    }, {
      value: '36 Oak Avenue Buffalo Grove, IL 60089 United Statesr',
    }];
    let data2 = [{
        value: 'ASAP',
    },
    {
        value: '30 mins'},
        {value: '1 hour'
    }]
    return(
      
      <View style={{display:'flex', flex:1}}>
        <View>
          <Image source={{uri:"https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={{height:180, width:'100%', opacity:0.6, backgroundColor:'black'}}/>
        </View>
        <View style={{marginTop:-120}}>
              <View style={{flexDirection:'row', marginLeft:'2%', marginRight:'2%'}}>
              <Dropdown
              label='Select Location'
              data={data} baseColor='white' textColor='white' selectedItemColor='black'
              containerStyle={{padding:10, width:'70%'}} />
              <Dropdown
              label='Select Time'
              data={data2} baseColor='white' textColor='white' selectedItemColor='black'
              containerStyle={{padding:10, width:'30%'}}/>
              </View>
          <View style={styles.cardStyle}>
            <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row', margin:'2%'}}>
                <Text style={{fontSize:15, fontWeight:'bold'}}>Choose a location</Text>
                <View style={{marginLeft:'30%'}}>
                  <ButtonComponent text="View Map" backgroundColors={['orange', 'red']}
                    height={30} width={100} style={{}}/>
                </View>
              </View>
            </View>
            <View style={styles.borderBottom}/>
            <View style={{flexDirection:'row', marginTop:'4%', marginLeft:'2%'}}>
                <Icon name="map-marker" type='font-awesome' color='orange'/>
                <Text style={{fontSize:18, fontWeight:'bold', marginLeft:'2%'}}>Deliver to my current location</Text>
                <View style={{marginLeft:'63%'}}>
                <AnimatedHideView visible={this.state.toggleWork}>
                 <Icon name="check-circle" color='rgba(255,69,0,1)'/>
                 </AnimatedHideView>
               </View>
              </View>
              <View>
                <Text style={{margin:'2%', paddingLeft:'2%'}}>36 Oak Avenue Buffalo Grove, IL 60089 United States</Text>
              </View>
          <View style={styles.borderBottom}/>
          <View style={{flexDirection:'row', marginTop:'4%', marginLeft:'2%'}}>
                <Icon name="home" type='font-awesome' color='orange'/>
                <Text style={{fontSize:18, fontWeight:'bold', marginLeft:'2%'}}>Deliver to my Home</Text>
                <View style={{marginLeft:'63%'}}>
                <AnimatedHideView visible={this.state.toggleWork}>
                 <Icon name="check-circle" color='rgba(255,69,0,1)'/>
                 </AnimatedHideView>
               </View>
              </View>
              <View>
                <Text style={{margin:'2%', paddingLeft:'2%'}}>36 Oak Avenue Buffalo Grove, IL 60089 United States</Text>
              </View>
              <View style={styles.borderBottom}/>
              <View style={{flexDirection:'row', marginTop:'4%', marginLeft:'2%'}}>
                <Icon name="building" type='font-awesome' color='orange'/>
                <Text style={{fontSize:18, fontWeight:'bold', marginLeft:'2%'}}>Deliver to my Office</Text>
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
      <View style={{alignItems:'center', marginTop:'2%'}}>
                  <ButtonComponent text="Add New Location" backgroundColors={['orange', 'red']}
                    height={35} width={300} style={{}}/>
                </View>
    </View>
    </View>
   
    )
  }
}

const styles={
  cardStyle:{
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: 'rgba(255,255,255,1)',
    height:'62%',
    width:'95%',
    padding: 15,
    margin:'3%',
    elevation:5,
  },
  borderBottom:{
    borderBottomWidth:1,
    opacity:0.1,
    marginTop:'4%'
  },
  
}