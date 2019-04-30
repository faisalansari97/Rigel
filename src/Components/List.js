import React,{Component} from 'react';
import {View,ImageBackground,Text,ScrollView,Image} from 'react-native';
import {RectangleButton} from 'react-native-button-component';


class List extends Component{
render(){
const path = "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg"
return(
<View style={{display:"flex",flex:1}}>
<View>
<ImageBackground source={{uri:path}} style={styles.imageStyle}>
<View style={styles.textViewStyle}>
<Text style={{color:'white',fontSize:18,fontWeight:"bold"}}>Special food</Text>
</View>
</ImageBackground>
</View>
<ScrollView>
<View style={styles.cardViewStyle}>
<View style={styles.cardStyle}>
<View style={{padding:15,flexDirection:"row"}}>
<Image source={{uri:path}} style={{height:80,width:80,borderRadius:10}}></Image>

<View style={{flexDirection:"column",paddingLeft:10}}>
<Text style={{fontSize:18,fontWeight:"bold"}}>Chocolate Cake</Text>
<Text style={{fontSize:15}}>Calories Per 50 gram protine</Text>
<View style={{flexDirection:"row"}}>
<Text style={{color:"red"}}>100 US$</Text>
<Text> per unit</Text>
</View>
<View style={styles.buttonViewStyle}>
<RectangleButton text="550 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
</View>

</View>
</View>

</View>
</View> 
<View style={styles.cardViewStyle}>
<View style={styles.cardStyle}>
<View style={{padding:15,flexDirection:"row"}}>
<Image source={{uri:path}} style={{height:80,width:80,borderRadius:10}}></Image>

<View style={{flexDirection:"column",paddingLeft:10}}>
<Text style={{fontSize:18,fontWeight:"bold"}}>Chocolate Cake</Text>
<Text style={{fontSize:15}}>Calories Per 50 gram protine</Text>
<View style={{flexDirection:"row"}}>
<Text style={{color:"red"}}>100 US$</Text>
<Text> per unit</Text>
</View>
<View style={styles.buttonViewStyle}>
<RectangleButton text="550 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
</View>

</View>
</View>
</View>
</View>
<View style={styles.cardViewStyle}>
<View style={styles.cardStyle}>
<View style={{padding:15,flexDirection:"row"}}>
<Image source={{uri:path}} style={{height:80,width:80,borderRadius:10}}></Image>

<View style={{flexDirection:"column",paddingLeft:10}}>
<Text style={{fontSize:18,fontWeight:"bold"}}>Chocolate Cake</Text>
<Text style={{fontSize:15}}>Calories Per 50 gram protine</Text>
<View style={{flexDirection:"row"}}>
<Text style={{color:"red"}}>100 US$</Text>
<Text> per unit</Text>
</View>
<View style={styles.buttonViewStyle}>
<RectangleButton text="550 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
</View>

</View>
</View>
</View>
</View>
<View style={styles.cardViewStyle}>
<View style={styles.cardStyle}>
<View style={{padding:15,flexDirection:"row"}}>
<Image source={{uri:path}} style={{height:80,width:80,borderRadius:10}}></Image>

<View style={{flexDirection:"column",paddingLeft:10}}>
<Text style={{fontSize:18,fontWeight:"bold"}}>Chocolate Cake</Text>
<Text style={{fontSize:15}}>Calories Per 50 gram protine</Text>
<View style={{flexDirection:"row"}}>
<Text style={{color:"red"}}>100 US$</Text>
<Text> per unit</Text>
</View>
<View style={styles.buttonViewStyle}>
<RectangleButton text="550 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
</View>

</View>
</View>
</View>
</View>
<View style={styles.cardViewStyle}>
<View style={styles.cardStyle}>
<View style={{padding:15,flexDirection:"row"}}>
<Image source={{uri:path}} style={{height:80,width:80,borderRadius:10}}></Image>

<View style={{flexDirection:"column",paddingLeft:10}}>
<Text style={{fontSize:18,fontWeight:"bold"}}>Chocolate Cake</Text>
<Text style={{fontSize:15}}>Calories Per 50 gram protine</Text>
<View style={{flexDirection:"row"}}>
<Text style={{color:"red"}}>100 US$</Text>
<Text> per unit</Text>
</View>
<View style={styles.buttonViewStyle}>
<RectangleButton text="550 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
</View>

</View>
</View>
</View>
</View>
<View style={styles.cardViewStyle}>
<View style={styles.cardStyle}>
<View style={{padding:15,flexDirection:"row"}}>
<Image source={{uri:path}} style={{height:80,width:80,borderRadius:10}}></Image>

<View style={{flexDirection:"column",paddingLeft:10}}>
<Text style={{fontSize:18,fontWeight:"bold"}}>Chocolate Cake</Text>
<Text style={{fontSize:15}}>Calories Per 50 gram protine</Text>
<View style={{flexDirection:"row"}}>
<Text style={{color:"red"}}>100 US$</Text>
<Text> per unit</Text>
</View>
<View style={styles.buttonViewStyle}>
<RectangleButton text="550 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
<RectangleButton text="20 cla" textStyle={{color:"black"}} backgroundColors = {['white','white']} height={20} width={50} style={styles.buttonStyle}></RectangleButton> 
</View>

</View>
</View>
</View>
</View> 
</ScrollView>


</View>

)
};
}
const styles={

buttonViewStyle:{
display:"flex",
flexWrap:"wrap",
flexDirection:"row",
paddingTop:5
},
buttonStyle:{
color:"black",
margin:3, 
borderRadius:5,
borderWidth: 1,
borderColor: 'black'
},
textViewStyle:{
//flexDirection:"column",
justifyContent:"center",
alignItems:"center",
flex:1,
// paddingLeft:7,
// paddingBottom:20

},

imageStyle:{
// flex:1,
height:130,
width:'100%'

},
cardViewStyle:{
backgroundColor:"white",
elevation:5,
display:"flex",
alignItems:"center",
//flex:1,
padding:10
},
cardStyle:{
//flex:1,
backgroundColor:"white",
elevation:5,
width:'100%',
height: 120,
},
}

export default List;