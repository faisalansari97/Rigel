import React,{Component} from 'react';
import {Text,View} from 'react-native';
import CardView from 'react-native-cardview';
import {Icon} from 'react-native-elements'
import {RectangleButton} from "react-native-button-component"

class SelectAddress extends Component {
    render(){
        return(
            <View style={{display:"flex"}}>
            <View style={{alignItems:"center",marginTop:-20}}>
                <CardView cardElevation={5} cardMaxElevation={5} cornerRadius={5} style={styles.cardViewStyle}>                    
                <View style={{padding:7}}>
                     <Text style={styles.fontStyle}>Current Location</Text>
                        <View style={{flexDirection:"row",display:"flex"}}>
                             <Text style={{paddingLeft:7,fontSize:15,fontWeight:"700",flex:4}}> Lorem ipsum dolor sit amet, mei integre similique an. Nobis sanctus suscipit est ad, </Text>
                             <View style={{flex:1}}> 
                                <Icon name="times-circle" type="font-awesome" iconStyle={{color:"#FF7518"}}/>
                            </View>
                        </View>
                        <View style={styles.lineStyle}></View>
                        <View style={{justifyContent:"center",alignItems:"center",padding:17}}>
                            <RectangleButton text = "Add New Address" style={styles.buttonStyle} backgroundColors = {['red','orange']} height={40} width={220}></RectangleButton>
                        </View>
               </View>
              </CardView>
            </View>
            </View>

        )
    };
}

const styles = {
    buttonStyle:{  
        borderRadius:5,
        //borderWidth: 0.2,
    },
    lineStyle:{
        paddingTop:12,
        opacity:1,
        color:"white",
        borderBottomWidth:1,
        borderRadius:10
    },
    fontStyle:{
        // fontWeight:"bold",
        fontWeight:"500",
        fontSize:20
    },
    cardViewStyle:{
        //flex:1,
        width: 320, 
        height: 180,
      }
}

export default SelectAddress;