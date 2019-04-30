import React from 'react';
import { View, Text, Image, Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import {Button} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ButtonComponent from 'react-native-button-component';
import {Dropdown} from 'react-native-material-dropdown'

export default class Deliveringto extends React.Component{
  state={isVisible:false, choosenDate:'Select Date and Time', count:0}
  countIncrement = () => {
    this.setState({count:this.state.count+1})
  }
  countDecrement = () => {
    this.setState({count:this.state.count-1})
  }
  pickerVisible = () =>{
    const newstate = !this.state.isVisible;
    this.setState({isVisible:newstate})
  }
  handlePicker= (datetime) => {
        this.setState({isVisible:false})
        this.setState({choosenDate:moment(datetime).format("DD-MMMM-YYYY, hh:mm:A")})
  }
  cancelHandler=() => {
    this.setState({isVisible:false})
  }

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={{uri:"https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={{height:180, width:'100%', opacity:0.8, backgroundColor:'black'}}/>
        </View>
        <View style={{padding: 30, backgroundColor:'rgba(255,255,255)', height:'100%', flex:1}}>
        <View style={{display:'flex',marginTop:-150}}>
        <View style={{flexDirection:'row'}}>
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
              <View>
              <Text style={{fontSize:15, fontWeight:'bold'}}>Soon as possible</Text>
              <Text style={{fontSize:10}}>60 MIN</Text>
              </View>
              <View style={{marginLeft:'45%'}}>
              <Icon name="check-circle" color='rgba(255,69,0,1)' />
              </View>
            </View>
            <View style={styles.borderBottom}/>
            <View style={{flexDirection:'row'}}>
              <View>
              <Text style={{fontSize:15, fontWeight:'bold', marginTop:'2%'}}>Schedule Delivery Time</Text>
              <Text style={{fontSize:10}}>09 MAY | 09:50am-10:30am</Text>
              </View>
            </View>
            <View style={styles.borderBottom}/>
              <View>
                  <DateTimePicker isVisible={this.state.isVisible}
                  mode={"datetime"} onConfirm={this.handlePicker} 
                  onCancel={this.cancelHandler}
                  datePickerModeAndroid='spinner'
                  is24Hour={false}/>
              </View>
              <View style={{height:100, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'orange', fontSize:20, fontWeight:'bold'}}>{this.state.choosenDate}</Text>
              </View>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity>
              <Button bordered borderColor='red' borderRadius={10}><Text style={{color:'red',padding:'20%'}} onPress={()=>this.pickerVisible()}>
              Set a Delivery Time</Text></Button>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.secondCardStyle}>
          <View style={styles.secondSection}>
            <Image source={{uri:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={styles.imageStyle}/>
            <View style={{flexDirection:'column', padding:4, marginLeft:'2%'}}>
            <Text style={styles.titleStyle}>Chocalate Cake</Text>
            <Text style={{fontSize:13}}>Cheese additional no onion</Text>
            <Text style={{color:'red'}}>450 USD</Text>
          </View>
            <View style={{flexDirection:'column', marginLeft:5}}>
            <Icon name='add' color='red' onPress={()=>this.countIncrement()}/>
            <Text style={{marginLeft:5}}>{this.state.count}</Text>
            <Icon name='minus' type='font-awesome' color='red' onPress={()=> this.countDecrement()}/>
            </View>
          </View>
          <View style={{alignItems:'center', marginTop:'18%'}}>
            <TouchableOpacity>
              <Button bordered borderColor='red' borderRadius={10}><Text style={{color:'red',padding:'30%'}}>
              Add More Items</Text></Button>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize:18, paddingTop:10, fontWeight:'bold'}}>You may also like</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.thirdCardStyle}>
                  <View style={{flexDirection:'row', alignItems:'center', margin:5}}>
                    <Image source={{uri:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={styles.imageStyleBottom}/>
                    <View style={{flexDirection:'column', margin:'1%'}}>
                      <Text style={{fontWeight:'bold'}}>Name of Dish</Text>
                      <Text>December 30, 2018 - 1:27pm</Text>
                      <Text style={{color:'red'}}>14 min</Text>
                    </View>
                  </View>
            </View>
            <View style={styles.thirdCardStyle}>
                <View style={{flexDirection:'row', alignItems:'center', margin:5}}>
                        <Image source={{uri:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={styles.imageStyleBottom}/>
                        <View style={{flexDirection:'column', margin:'1%'}}>
                          <Text style={{fontWeight:'bold'}}>Name of Dish</Text>
                          <Text>December 30, 2018 - 1:27pm</Text>
                          <Text style={{color:'red'}}>14 min</Text>
                        </View>
                </View>
            </View>
          </ScrollView>
          <View style={{marginTop:'4%'}}>
          <ButtonComponent text="Continue" backgroundColors={['orange', 'red']}
            height={40} width={300} style={{}}/>
          </View>
      </View>
    </ScrollView>
    </View>
    )
  }
}

const styles = {
  cardStyle:{
    display: 'flex',
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: 'rgba(255,255,255,1)',
    height:280,
    width:'100%',
    overflow: 'hidden',
    padding: 15,
  },
  secondCardStyle:{
    display: 'flex',
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: 'rgba(255,255,255,1)',
    height:200,
    width:'100%',
    overflow: 'hidden',
    padding:10,
    marginTop:20
  },
  thirdCardStyle:{
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    height:90,
    width:300,
    margin:3
  },
  secondSection:{
    flexDirection:'row',
  },
  borderBottom:{
    borderBottomWidth:1,
    opacity:0.1,
    marginTop:'4%'
  },
  imageStyle:{
    marginTop:'3%',
    borderRadius:5,
    height:Dimensions.get('window').height/12,
    width:Dimensions.get('window').width/5,
  },
  imageStyleBottom:{
    margin:8,
    height:50,
    width:70,
    borderRadius:5
  },
  titleStyle:{
    fontSize:18,
    fontWeight:'bold'
  },
}