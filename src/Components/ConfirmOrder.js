import React,{Component} from 'react';
import {View,ScrollView,Image,Text} from 'react-native';
//import {RectangleButton} from 'react-native-button-component';
import CardView from 'react-native-cardview';

class ConfirmOrder extends Component{
    
    render(){
        const path="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        return(
            <ScrollView>
            <View style={{display:"flex",flexDirection:'column'}}>
            <View style={{padding:10}}>
             <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                <View style={styles.MainContainer}>
                <View style={{padding:10,flexDirection:"row",padding:10,flex:1}}>
                     <Image source={{uri:path}} style={{height:80,width:80,borderRadius:10}}/>
                     <View style={{flexDirection:"column",paddingLeft:10}}>
                        <Text style={{fontWeight:"bold",fontSize:20,paddingTop:5}}>Chocolate Cake</Text>
                        <Text>Open At 11:00AM - 1:30PM</Text>
                        <Text style={{color:"red",paddingTop:2}}>Min Order 50US$</Text>
                     </View>
                </View>
                <View style={{flexDirection:"column",flex:1}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:15,color:"grey"}}>Lorem ispum dolor sit amet</Text>
                        <Text style={{marginLeft:80}}>10US$</Text>
                    </View>
                     <View style={{borderBottomWidth:1,borderRadius:20,borderBottomColor:"grey",padding:5}}></View>
                     <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:15,color:"grey"}}>Lorem ispum dolor sit amet</Text>
                        <Text style={{color:"red",marginLeft:80}}>10US$</Text>
                    </View>
                        <View style={{borderBottomWidth:1,borderRadius:20,borderBottomColor:"grey",padding:7}}></View>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Delivery Free</Text>  
                    <View style={{borderBottomWidth:1,borderRadius:20,borderBottomColor:"grey",padding:7}}></View>
                    <View style={{justifyContent:"flex-end",flexDirection:"row"}}>
                        <Text style={{fontWeight:"bold",fontSize:15}}>Total include : </Text>
                        <Text style={{color:"red"}}>100US$</Text>
                    </View>
                </View>
                </View>
            </CardView>
            </View>
            <View style={{padding:10}}>
            <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                <View style={styles.MainContainer}>
                <View style={{padding:10,flexDirection:"row",padding:10,flex:1}}>
                     <Image source={{uri:path}} style={{height:80,width:80,borderRadius:10}}/>
                     <View style={{flexDirection:"column",paddingLeft:10}}>
                        <Text style={{fontWeight:"bold",fontSize:20,paddingTop:5}}>Chocolate Cake</Text>
                        <Text>Open At 11:00AM - 1:30PM</Text>
                        <Text style={{color:"red",paddingTop:2}}>Min Order 50US$</Text>
                     </View>
                </View>
                <View style={{flexDirection:"column",flex:1}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:15,color:"grey"}}>Lorem ispum dolor sit amet</Text>
                        <Text style={{marginLeft:80}}>10US$</Text>
                    </View>
                     <View style={{borderBottomWidth:1,borderRadius:20,borderBottomColor:"grey",padding:5}}></View>
                     <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:15,color:"grey"}}>Lorem ispum dolor sit amet</Text>
                        <Text style={{color:"red",marginLeft:80}}>10US$</Text>
                    </View>
                        <View style={{borderBottomWidth:1,borderRadius:20,borderBottomColor:"grey",padding:7}}></View>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Delivery Free</Text>  
                    <View style={{borderBottomWidth:1,borderRadius:20,borderBottomColor:"grey",padding:7}}></View>
                    <View style={{justifyContent:"flex-end",flexDirection:"row"}}>
                        <Text style={{fontWeight:"bold",fontSize:15}}>Total include : </Text>
                        <Text style={{color:"red"}}>100US$</Text>
                    </View>
                </View>
                </View>
            </CardView>
            </View>
            <View style={{padding:10}}>
            <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                <View style={styles.MainContainer}>
                <View style={{padding:10,flexDirection:"row",padding:10,flex:1}}>
                     <Image source={{uri:path}} style={{height:80,width:80,borderRadius:10}}/>
                     <View style={{flexDirection:"column",paddingLeft:10}}>
                        <Text style={{fontWeight:"bold",fontSize:20,paddingTop:5}}>Chocolate Cake</Text>
                        <Text>Open At 11:00AM - 1:30PM</Text>
                        <Text style={{color:"red",paddingTop:2}}>Min Order 50US$</Text>
                     </View>
                </View>
                <View style={{flexDirection:"column",flex:1}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:15,color:"grey"}}>Lorem ispum dolor sit amet</Text>
                        <Text style={{marginLeft:80}}>10US$</Text>
                    </View>
                     <View style={{borderBottomWidth:1,borderRadius:20,borderBottomColor:"grey",padding:5}}></View>
                     <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:15,color:"grey"}}>Lorem ispum dolor sit amet</Text>
                        <Text style={{color:"red",marginLeft:80}}>10US$</Text>
                    </View>
                        <View style={{borderBottomWidth:1,borderRadius:20,borderBottomColor:"grey",padding:7}}></View>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Delivery Free</Text>  
                    <View style={{borderBottomWidth:1,borderRadius:20,borderBottomColor:"grey",padding:7}}></View>
                    <View style={{justifyContent:"flex-end",flexDirection:"row"}}>
                        <Text style={{fontWeight:"bold",fontSize:15}}>Total include : </Text>
                        <Text style={{color:"red"}}>100US$</Text>
                    </View>
                </View>
                </View>
            </CardView>
            </View>
            </View>
            </ScrollView>
        )
    }
}

const styles={
    cardViewStyle:{
        flex:1,
        height: 280
        
      },
      MainContainer: {
        flex: 1,
        padding:7,
       // marginTop:-20,
        backgroundColor: 'white',
       }
    
}
export default ConfirmOrder;