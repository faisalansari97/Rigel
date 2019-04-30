import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class Menu extends React.Component{
  render(){
    return(
      
      <View style={{display:'flex',flex:1}}>
        <View style={{height:'20%', backgroundColor:'#D58108'}}/>
        <View style={{backgroundColor:'white', height:'100%'}}>
        <View style={{marginTop:-50, margin:'4%'}}>
           <View style={styles.cardStyle}>
              <Avatar size='large' rounded source={{ uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                showEditButton/>
              <Text style={{fontSize:15, fontWeight:'bold'}}>David Jenkins</Text>
              <Text style={{fontSize:10}}>Norman Street Los Angeles, CA</Text>
           </View>
        </View>
        <View style={{flex:.75}}>
        <ScrollView>
          <Text style={{fontSize:12, paddingLeft:15}}>FOLLOW MY ORDERS</Text>
          <View style={{marginLeft:'3%'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.thirdCardStyle}>
                  <View style={{flexDirection:'row', alignItems:'center', margin:5}}>
                    <Image source={{uri:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={styles.imageStyleBottom}/>
                    <View style={{flexDirection:'column'}}>
                      <Text style={{fontWeight:'bold'}}>Name of Dish</Text>
                      <Text>December 30, 2018 - 1:27pm</Text>
                      <Text style={{color:'red'}}>14 min</Text>
                    </View>
                  </View>
            </View>
            <View style={styles.thirdCardStyle}>
                <View style={{flexDirection:'row', alignItems:'center', margin:5}}>
                        <Image source={{uri:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}} style={styles.imageStyleBottom}/>
                        <View style={{flexDirection:'column'}}>
                          <Text style={{fontWeight:'bold'}}>Name of Dish</Text>
                          <Text>December 30, 2018 - 1:27pm</Text>
                          <Text style={{color:'red'}}>14 min</Text>
                        </View>
                </View>
            </View>
          </ScrollView>
          <View style={{padding:"2%"}}>
            <ListItem title='My Delivery Location' titleStyle={{fontSize:15}} onPress={()=>Actions.Delivery()} chevron/>
            <ListItem title='Update my credit card details' titleStyle={{fontSize:15}} onPress={()=>Actions.Payment()} chevron/>
            <ListItem title='About Rigel' titleStyle={{fontSize:15}}  onPress={()=>Actions.About()} chevron/>
            <ListItem title='Rate Us on Apple Store' titleStyle={{fontSize:15}}  onPress={()=>Actions.About()} chevron/> 
            <ListItem title='Submit a Query Disclaimer' titleStyle={{fontSize:15}}  onPress={()=>Actions.SubmitaQuery()} chevron/>
            <ListItem title='Disclaimer' titleStyle={{fontSize:15}}  onPress={()=>Actions.Disclaimer()} chevron/>
            <ListItem title='Logout' titleStyle={{fontSize:15}}  onPress={()=>Actions.Logout()} chevron/>
            <ListItem title='Delete my Account' titleStyle={{fontSize:15}} onPress={()=>Actions.DeleteMyAccount()} chevron/>
          </View>
          </View>
          </ScrollView>
          </View>
        </View>
       </View> 


    )
  }
}

const styles = {
  cardStyle:{
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: 'rgba(255,255,255,1)',
    height:150,
    width:'100%',
    overflow: 'hidden',
    padding: 15,
    elevation:5,
    alignItems:'center',
  },
  thirdCardStyle:{
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    height:90,
    width:280,
    margin:3,
    elevation:5
  },
  imageStyleBottom:{
    margin:8,
    height:50,
    width:70,
    borderRadius:5
  },
  listStyle:{
    fontSize:10
  }
}