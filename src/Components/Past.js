import React from 'react'
import {Text, View, Dimensions, Image} from 'react-native';
import { Rating, Button } from 'react-native-elements';
import ButtonComponent from 'react-native-button-component';
import Dialog, {DialogContent} from 'react-native-popup-dialog';

export default class Upcoming extends React.Component{
  state={visible:false}
render(){
  return(
    <View style={{display:'flex'}}>
      <View
      style={styles.cardView}>
       <Dialog
        visible={this.state.visible}
        onTouchOutside={() => {
          this.setState({ visible: false });
        }}
      >
      <DialogContent>
          <View style={{flexDirection:'column', alignItems:'center', margin:'3%', width:270}}>
            <Text style={{fontSize:20, fontWeight:'bold', margin:'4%'}}>Rate your Meal</Text>
            <View style={{margin:'4%'}}>
            <Rating type='custom' ratingColor='red' ratingCount={5} imageSize={30}
            ratingStyle={styles.ratingStyle}/>
            </View>
            <View style={{margin:'4%'}}>
            <ButtonComponent text="Rate" backgroundColors={['orange', 'red']}
            height={40} width={300} style={{marginLeft:'2%'}}
            onPress={()=>this.setState({visible:false})}/>
            </View>
          </View>
      </DialogContent>
      </Dialog>
      <View style={{ flexDirection:'row', marginBottom:'3%', 
      marginTop:'2%', paddingBottom:'3%'}}>
          <View 
          style={styles.dateCard}><Text style={styles.dateStyle}>15 May</Text></View>
        <View style={styles.firstSection}>
          <Text style={styles.titleStyle}>Right Bite Express</Text>
          <Text>Order Completed</Text>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Rating type='custom' ratingColor='red' ratingCount={5} imageSize={20}
            ratingStyle={styles.ratingStyle}/>
            <ButtonComponent  text='Tap to rate' backgroundColors={['orange', 'red']}  style={styles.buttonStyle} onPress={()=>this.setState({visible:true})}/>
          </View>
        </View>
      </View>
      <View style={{borderBottomWidth:1, borderRadius:20, opacity:0.1}}></View>
      <View style={{marginTop:'2%', marginBottom:'4%'}}>
      <View style={styles.secondSection}>
          <Image source={{uri:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={styles.imageStyle}/>
          <View style={{flexDirection:'column', paddingTop:'3%'}}>
          <Text style={styles.titleStyle}>Chocalate Cake</Text>
          <Text style={{fontSize:13}}>Open At 11:00am - 1:30pm</Text>
          <Text style={{color:'red'}}>150 USD</Text>
          </View>
      </View>
      <View style={styles.thirdSection}>
          <Image source={{uri:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={styles.imageStyle}/>
          <View style={{flexDirection:'column', paddingTop:'3%'}}>
          <Text style={styles.titleStyle}>Chocalate Cake</Text>
          <Text style={{fontSize:13}}>Open At 11:00am - 1:30pm</Text>
          <Text style={{color:'red'}}>150 USD</Text>
          </View>
      </View>
      </View>
      <View style={{borderBottomWidth:1, borderRadius:20, opacity:0.1}}></View>
      <View style={{flexDirection:'column', alignItems:'center', marginTop:'10%'}}>
        <ButtonComponent text="See all menu" backgroundColors={['orange', 'red']}
        height={40} width={300} style={{marginLeft:'2%'}}/>
         <View style={{margin:'3%'}}></View>
        <ButtonComponent type='outline' height={40} width={300} text='Reorder' backgroundColors={['white', 'white']} style={styles.reorderButtonStyle} />
      </View>
      </View>
    </View>
  )
}
}

const styles= {
  cardView:{
    backgroundColor:'white',
    height:'100%',
    margin:'3%',
  },
  dateCard:{
    backgroundColor:'white',
    height:Dimensions.get('window').height/12,
    width:Dimensions.get('window').width/5.2,
    margin:'4%',
    justifyContent:'center',
    alignItems:'center'
  },
  dateStyle:{
    fontSize:16,
    paddingBottom:'35%'
  },
  titleStyle:{
    fontSize:18,
    fontWeight:'bold'
  },
  ratingStyle:{
    color:'white',
    margin:'4%'
  },
  buttonStyle:{
    height:30,
    width:120,
    marginLeft:'5%'
  },
  reorderButtonStyle:{
    borderWidth:1,
    borderColor:'blue',
    borderRadius:5,
    marginLeft:'35%',
    marginRight:'35%'
  },
  firstSection:{
    flexDirection:'column', 
    marginTop:'2%',
  },
  secondSection:{
    flexDirection:'row',
    marginTop:'2%'
  },
  thirdSection:{
    flexDirection:'row',
  },
  imageStyle:{
    margin:'4%',
    height:Dimensions.get('window').height/12,
    width:Dimensions.get('window').width/5,
  },
}