import React,{Component} from 'react';
import {ImageBackground,View,Text,Image,ScrollView} from 'react-native';
import { RectangleButton } from 'react-native-button-component';
import { Actions } from 'react-native-router-flux';


class Home extends Component{
render(){
const path = "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg"
return(

<View style={styles.viewStyle}>
<ScrollView>
<View>
<ImageBackground style={styles.imageStyle} source={{uri:path}}> 
<Text style={styles.textStyle}>Some Text</Text> 
</ImageBackground>
</View>
<View style={styles.colorStyle} />

<View style={styles.MainContainer}>
<View style={styles.cardViewStyle}>
<ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
<View style={styles.containerStyle}>
<View style={styles.cardStyle}>
<View style={{display:'flex',flexDirection:"row",padding:10}}>
<Text style={{flex:4,fontWeight:"bold"}} onPress={() => Actions.List()}>Special Food</Text>
<Text style={{flex:1}} onPress={() => Actions.List()}>See all</Text></View>
<ScrollView horizontal={true} automaticallyAdjustContentInsets showsHorizontalScrollIndicator={false}>
<View style={{display:'flex',flexDirection:"row"}}>
<View style={{padding:7,flex:2}}>
<Image source={{uri:path}} style = {{height:60}} />
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:3}}>Meal Name</Text>
<Text style={{flex:1}}>9hrs</Text>
</View>
<Text>Restaurant Name</Text>
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:1,color:'red',fontWeight:"400"}}>USD 10$</Text>
<Text style={{flex:1}}>per unit</Text>
</View>
<Text>Some Text</Text>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View> 
</View>
<View style={{padding:10,flex:1}}>
<Image source={{uri:path}} style = {{height:60}} />
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:3}}>Meal Name</Text>
<Text style={{flex:1}}>9hrs</Text>
</View>
<Text>Restaurant Name</Text>
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:1,color:'red',fontWeight:"400"}}>USD 10$</Text>
<Text style={{flex:1}}>per unit</Text>
</View>
<Text>Some Text</Text>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View> 
</View>
<View style={{padding:10,flex:1}}>
<Image source={{uri:path}} style = {{height:60}}></Image>
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:3}}>Meal Name</Text>
<Text style={{flex:1}}>9hrs</Text>
</View>
<Text>Restaurant Name</Text>
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:1,color:'red',fontWeight:"400"}}>USD 10$</Text>
<Text style={{flex:1}}>per unit</Text>
</View>
<Text>Some Text</Text>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View> 
</View> 
</View> 
</ScrollView>
</View>





</View>

<View style={styles.cardStyle}>
<View style={{display:'flex',flexDirection:"row",padding:10}}>
<Text style={{flex:4,fontWeight:"bold"}} onPress={() => Actions.List()}>Special Food</Text>
<Text style={{flex:1}} onPress={() => Actions.List()}>See all</Text></View>
<ScrollView horizontal={true} automaticallyAdjustContentInsets showsHorizontalScrollIndicator={false}>
<View style={{display:'flex',flexDirection:"row"}}>
<View style={{padding:7}}>
<Image source={{uri:path}} style = {{height:'30%'}} />
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:3}}>Meal Name</Text>
<Text style={{flex:1}}>9hrs</Text>
</View>
<Text>Restaurant Name</Text>
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:1,color:'red',fontWeight:"400"}}>USD 10$</Text>
<Text style={{flex:1}}>per unit</Text>
</View>
<Text>Some Text</Text>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View> 
</View>
<View style={{padding:10,flex:1}}>
<Image source={{uri:path}} style = {{height:60}} />
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:3}}>Meal Name</Text>
<Text style={{flex:1}}>9hrs</Text>
</View>
<Text>Restaurant Name</Text>
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:1,color:'red',fontWeight:"400"}}>USD 10$</Text>
<Text style={{flex:1}}>per unit</Text>
</View>
<Text>Some Text</Text>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View> 
</View>
<View style={{padding:10,flex:1}}>
<Image source={{uri:path}} style = {{height:60}}></Image>
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:3}}>Meal Name</Text>
<Text style={{flex:1}}>9hrs</Text>
</View>
<Text>Restaurant Name</Text>
<View style={{display:'flex',flexDirection:"row",paddingTop:5}}>
<Text style={{flex:1,color:'red',fontWeight:"400"}}>USD 10$</Text>
<Text style={{flex:1}}>per unit</Text>
</View>
<Text>Some Text</Text>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View>
<View style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",paddingTop:5}}>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
<RectangleButton text="550 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton>
</View> 
</View> 
</View> 
</ScrollView>
</View>
</ScrollView>

</View>
</View> 
</ScrollView>
</View>

)
};
}
const styles = {
buttonStyle:{
margin:3, 
borderRadius:5,
borderWidth: 1,
borderColor: 'black'
},
colorStyle:{
backgroundColor:"#FF7518",
width:"100%",
height:80
},
viewStyle:{
flex:1,
display:'flex',
flexDirection:'column'
},
cardStyle:{
flex:1,
height:'90%',
backgroundColor:"white",
elevation:5,
borderRadius:10,
margin:10,
//padding:5
},
containerStyle:{
padding:7,
justifyContent:"space-between",
flexDirection:"row"
},
textStyle:{
fontWeight: 'bold',
color: 'white',
position: 'absolute', // child
bottom: 55, // position where you want
left: 120,
fontSize:30
},
MainContainer: {
justifyContent: 'center',
alignItems: 'center',

},

cardViewStyle:{
flex:1,
width: '90%', 
borderRadius:10,
marginTop: -30,
backgroundColor:"white",
elevation:5,
},

imageStyle:{
height:160,
width:'100%'
}
}

export default Home;