import React,{Component} from 'react';
import {View,ImageBackground,Text} from 'react-native';
import {RectangleButton} from 'react-native-button-component';
import CardView from 'react-native-cardview';
import NumericInput from 'react-native-numeric-input';
import {CheckBox} from 'react-native-elements';
import {Input} from "../Components/Common/"



class ListDetails extends Component{
    state = { checked:false };
    render(){
        
        const path="https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        return(
            <View style={{display:"flex"}}>
            <ImageBackground source={{uri:path}} style={styles.imageStyle}>
                <View style={styles.textViewStyle}>
                     <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>Good for per workour</Text>
                     <Text style={{color:"white",fontWeight:"bold"}}>1 hr</Text>
                </View>
            </ImageBackground>
            <View style={{marginTop:-20,alignItems:"center"}}>
                <CardView cardElevation={5} cardMaxElevation={5} cornerRadius={5} style={styles.cardViewStyle}>
                    <View style={styles.MainContainer}>
                        <Text style={{padding:5}}>
                            Lorem ipsum dolor sit amet, mei integre similique an. Nobis sanctus suscipit est ad, et vel alii paulo eloquentiam.
                        </Text>
                        <View style={styles.buttonViewStyle}>
                            <RectangleButton text="550 cla" backgroundColors = {['red','orange']} height={20} width={50} style={styles.buttonStyle}></RectangleButton>
                            <RectangleButton text="220 cla" backgroundColors = {['white','white']} height={20} width={50} textStyle={{color:'black'}} style={styles.buttonStyle}></RectangleButton> 
                        </View>
                        <View style={styles.lineStyle}/>
                        <View style={{alignItems:"center",justifyContent:"center",padding:5,display:"flex"}}>
                        <NumericInput separatorWidth={0}totalWidth={260} totalHeight={40} iconSize={18} step={1} valueType='real' textColor='#B0228C' iconStyle={{ color: 'black' }} rightButtonBackgroundColor='white' leftButtonBackgroundColor='white'/>
                        </View>
                        <Text style={{fontWeight:"bold",fontSize:17,paddingLeft:5}}>Additional</Text>
                        <CheckBox  title='Onion 1' textStyle={styles.textStyle}  checkedIcon = "check-circle" checked={this.state.checked} onIconPress={() => this.setState({checked: !this.state.checked})} checkedColor='red'/>
                        <CheckBox  title='Onion 2' textStyle={styles.textStyle}  checkedIcon = "check-circle" checked={this.state.checked} onIconPress={() => this.setState({checked: !this.state.checked})} checkedColor='red' checkedIcon = "check-circle"/>
                        <Text style={{fontWeight:"bold",fontSize:15,padding:5}}>Special Instructions</Text>
                        <Input placeholder="Add extra details"></Input>
                        <View style={{padding:10,justifyContent:"center",alignItems:"center"}}>
                        <RectangleButton text="Done" width={200} backgroundColors = {['red','orange']} height={40} style={styles.buttonStyles}></RectangleButton>
                        </View>   
         
                   </View>
                   <View>
                
                   </View>
                </CardView>
                </View>
            </View>
        )
    };
}

const styles = {
    buttonStyles:{  
        borderRadius:5,
        borderWidth: 1,
    },
    textStyle:{
        //paddingRight:"58%"
    },
    lineStyle:{
        borderBottomWidth:1,
        padding:5,
        borderRadius:10,
        borderBottomColor:"grey"
    },
    buttonViewStyle:{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row",
        paddingTop:5
    },
    buttonStyle:{
        margin:3,       
        borderRadius:5,
        borderWidth: 1,
        borderColor: 'black'
    },
    textViewStyle:{
        flexDirection:"column",
        justifyContent:"flex-end",
        flex:1,
        paddingLeft:7,
        paddingBottom:20

    },
    MainContainer: {
        flex:1,
        backgroundColor: '#F5FCFF',
        // justifyContent: 'center',
        // alignItems: 'center',
     
      },
    cardViewStyle:{
        width: 300, 
        height: 440,
      },
imageStyle:{
    height:140,
     width:'100%'
}
}

export default ListDetails;