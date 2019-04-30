import React,{Component} from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import CardView from 'react-native-cardview';
// import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation'
import Navigator from './navigator'

class RestaurantDetails extends Component{
    render(){
        const path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1oPXwVSRMwLPYpt8f_a121o5RUqxXGM-mmxOnmrrmpDm-ABhh";
        const path1="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

        return(
            <View style={{ flex: 1}}>

                <Image source={{uri:path1}} style={{height:180,width:'100%'}}></Image>
                <View style={{alignItems:"center"}}>
                   <ScrollView>
                    <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                    <View style={{padding:5}}>
                           {/* <Image source={{uri:path}} style={{height:40,width:'12%',borderRadius:7}}/>    */}
                    </View> 
                    <View style={{padding:8}}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontWeight:"bold",fontSize:18,flex:5}}>Chocolate Cake</Text>
                            <Text style={{color:"red",flex:1,fontWeight:"600"}}>20 hrs</Text>
                    </View>
                        <View style={{flexDirection:"row"}}>
                            <Text>Open At 11AM - 1:30PM</Text>
                            <Text style={{color:"red"}}>  Min order 50 US$</Text>
                        </View>
                        <Text style={{padding:5,fontSize:16,fontWeight:"400"}}>Lorem ipsum dolor sit amet, mei integre similique an. Nobis sanctus suscipit est</Text>
                    </View>  
                    </CardView>
                    </ScrollView>
                </View> 
              
                <Navigator/>
        
            </View>
        )
    };
}

const styles ={
    cardViewStyle:{
        width: 320, 
        height: 130,
        marginTop:-2
      },
      
}

export default RestaurantDetails;