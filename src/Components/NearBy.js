import React,{Component} from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import CardView from 'react-native-cardview';
import { RectangleButton } from 'react-native-button-component';

class NearBy extends Component{
    render(){
        const path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1oPXwVSRMwLPYpt8f_a121o5RUqxXGM-mmxOnmrrmpDm-ABhh";
        const path1="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        return(
            <View>
            <View style={{alignItems:"center",paddingTop:20,display:"flex"}}>
              <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                    <View style={{flexDirection:"row",padding:10}}>
                        <Image source={{uri:path}} style={{height:17,width:17,borderRadius:5,marginTop:5}}></Image>
                        <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:5,flex:4}}>Special Food</Text>
                        <Text style={{flex:1}}>See all</Text>
                    </View>
                    <ScrollView horizontal={true} automaticallyAdjustContentInsets>
                    <View style={{flexDirection:"row",display:"flex"}}>
                        <View style={{padding:10,flex:2}}>
                          <Image source={{uri:path1}} style={{height:70}}></Image>
                          <View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
                                <Text style={{flex:2}}>Meal Name</Text>
                                <Text style={{flex:1}}>9hrs</Text>
                            </View>
                            <Text>Restaurant Name</Text>
                            <View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
                                <Text style={{flex:1,color:'red',fontWeight:"400"}}>USD 10$</Text>
                                <Text style={{flex:1}}>per unit</Text>
                            </View>
                            <Text>Some Text</Text>
                            <View style={{display:"flex",flexWrap:"wrap",flex:1,justifyContent:"space-between",flexDirection:"row",paddingTop:5}}>
                            <RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
                            <RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
                             <RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>     
                             
                            {/* <RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>    */}
                            </View>

                            
                    </View>
                    <View style={{padding:10,flex:2}}>
                          <Image source={{uri:path1}} style={{height:70}}></Image>
                          <View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
                                <Text style={{flex:2}}>Meal Name</Text>
                                <Text style={{flex:1}}>9hrs</Text>
                            </View>
                            <Text>Restaurant Name</Text>
                            <View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
                                <Text style={{flex:1,color:'red',fontWeight:"400"}}>USD 10$</Text>
                                <Text style={{flex:1}}>per unit</Text>
                            </View>
                            <Text>Some Text</Text>
                            <View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",flex:2.5}}>
                            <RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
                            <RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
                             {/* <RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>  */}
                             {/* <RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>     */} 
                            </View>
                            
                    </View>
                    <View style={{padding:10,flex:2}}>
                          <Image source={{uri:path1}} style={{height:70}}></Image>
                          <View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
                                <Text style={{flex:2}}>Meal Name</Text>
                                <Text style={{flex:1}}>9hrs</Text>
                            </View>
                            <Text>Restaurant Name</Text>
                            <View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
                                <Text style={{flex:1,color:'red',fontWeight:"400"}}>USD 10$</Text>
                                <Text style={{flex:1}}>per unit</Text>
                            </View>
                            <Text>Some Text</Text>
                            <View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",paddingTop:5}}>
                            <RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
                            <RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton> 
                               {/* <RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>    */}

                            </View>
                            
                    </View>
                    
                    </View>
                    </ScrollView>
                </CardView>
                </View>    
            </View>
        )
    };
}


const styles={
    buttonStyle:{
       // margin:3,       
        borderRadius:5,
        borderWidth: 1,
        borderColor: 'black'
    },
    
    cardViewStyle:{
        width: 320, 
        height: 250,
      },
}
export default NearBy;