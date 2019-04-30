import React from 'react'
import {Text, View, Image, Dimensions, ScrollView} from 'react-native';
import {CheckBox} from 'react-native-elements';
export default class Upcoming extends React.Component{
  state={checked1:false, checked2:false, checked3:false, checked4:false, cheese1:false, cheese2:false}
checked1=()=>{
    if(this.state.checked1==false);
    {
    this.setState({checked1:!this.state.checked1})
    }
  }
  checked2=()=>{
    if(this.state.checked2==false);
    {
    this.setState({checked2:!this.state.checked2})
    }
  }
  checked3=()=>{
    if(this.state.checked3==false);
    {
    this.setState({checked3:!this.state.checked3})
    }
  }
  checked4=()=>{
    if(this.state.checked4==false);
    {
    this.setState({checked4:!this.state.checked4})
    }
  }
  cheese1=()=>{
    if(this.state.cheese1==false);
    {
    this.setState({cheese1:!this.state.cheese1})
    }
  }
  cheese2=()=>{
    if(this.state.cheese2==false);
    {
    this.setState({cheese2:!this.state.cheese2})
    }
  }
render(){
  return(
    <View style={{display:"flex",flex:1}}>
      <View style ={styles.cardView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
      <View style={{ flexDirection:'row'}}>
          <View 
          style={styles.dateCard}><Text style={styles.dateStyle}>15 May</Text></View>
        <View style={styles.firstSection}>
          <Text style={styles.titleStyle}>Right Bite Express</Text>
        </View>
      </View>
        <View style={{display:'flex', flexDirection:'row'}}>
        <View style={styles.secondSection}>
          <Image source={{uri:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={styles.imageStyle}/>
          <View style={{flexDirection:'column', paddingTop:'3%'}}>
        <Text style={{fontSize:17}}>Meal Name</Text>
          <Text style={{color:'red'}}>150 USD</Text>
          </View>
      </View>
        </View>
        <View style={{display:'flex', flexDirection:'column'}}>
         <Text style={{ fontSize:15, fontWeight:'bold',margin:'4%'}}>Follow My Order</Text>
         <View>
            <CheckBox title='Recieved by restaurant' iconRight checkedIcon='check-circle'
             checked={this.state.checked1} containerStyle={styles.containerStyle} 
            onIconPress={()=>this.checked1()} checkedColor='red' textStyle={{marginRight:'39%'}}></CheckBox>
             <CheckBox title='Preparing' iconRight containerStyle={styles.containerStyle} textStyle={{marginRight:'68%'}}
            wrapperStyle={styles.wrapperStyle} checkedIcon='check-circle' checked={this.state.checked2}
            onIconPress={()=>this.checked2()} checkedColor='red'></CheckBox>
            <CheckBox title='On the way' iconRight containerStyle={styles.containerStyle} checked={this.state.checked3} textStyle={{marginRight:'65.5%'}}
            checkedIcon='check-circle' onIconPress={()=>this.checked3()} checkedColor='red'></CheckBox>
            <CheckBox title='Delivered' iconRight containerStyle={styles.containerStyle} 
            wrapperStyle={styles.wrapperStyle} checkedIcon='check-circle' 
            checkedColor='red' checked={this.state.checked4} textStyle={{marginRight:'69%'}}
            onIconPress={() => this.checked4()}></CheckBox>
          </View>
          </View>
          <View>
            <Text style={{ fontSize:15, fontWeight:'bold', margin:'4%'}}>Additional(Optional)</Text>
            <CheckBox title='Cheese 1' checkedIcon='check-circle' checkedColor='red' checked={this.state.cheese1}  onIconPress={() => this.cheese1()}/>
            <CheckBox title='Cheese 2' checked={this.state.cheese2} checkedIcon='check-circle' checkedColor='red'  onIconPress={() => this.cheese2()}/>
          </View>
          <View style={{marginBottom:'4%'}}>
            <Text style={{ fontSize:15, fontWeight:'bold',  margin:'4%'}}>Special Instructions(Optional)</Text>
            <Text style={{fontSize:15, marginLeft:'4%'}}>No Onion</Text>
          </View>
          <View style={{flexDirection:"row", justifyContent:'flex-end'}}>
            <Text>Total:</Text>
            <Text style={{color:'red', paddingLeft:'1%', paddingRight:'1%'}}>100.00 USD</Text>
          </View>
          </View>
          </ScrollView>

      </View>
    </View>
  )
}
}

const styles = {
  cardView:{
    backgroundColor:'white',
    margin:'3%',
    height:'98%'
  },
  dateCard:{
    flex:0.4,
    height:Dimensions.get('window').height/12,
    marginTop:'4%',
    marginLeft:'4%',
    alignItems:'center',
    justifyContent:'center'
  },
  dateStyle:{
    fontSize:16,
    paddingBottom:'20%'
  },
  firstSection:{
    flexDirection:'column', 
    justifyContent:'center'
  },
  secondSection:{
    flexDirection:'row',
  },
  titleStyle:{
    paddingLeft:'2%',
    fontSize:18,
    fontWeight:'bold'
  },
  imageStyle:{
    margin:'6%',
    height:Dimensions.get('window').height/12,
    width:Dimensions.get('window').width/5,
  },
  containerStyle:{
      backgroundColor:'white',  

  },
}