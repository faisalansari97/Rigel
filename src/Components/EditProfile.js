import React,{Component} from "react";
import {View,Text,Image} from 'react-native';
import Button from 'react-native-button';
import {CardSection,Input} from './Common';
import CardView from 'react-native-cardview' ;

class EditProfile extends Component{
    render(){
        const path = "https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_960_720.png"; 
        return(
            <View>
            <View style={{height:'35%',backgroundColor:'orange',width:'100%'}} />
            <View>
            <View style={styles.MainContainer}>
            <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={styles.cardViewStyle}>
                <View style={{alignItems:"center",justifyContent:"center"}}> 
                <Image style={{height:90,width:90}} source = {{uri:path}} />
                </View>
                <CardSection style={{backgroundColor:"white",borderBottomWidth:1}}>
                    <Input placeholder="Stuti" label="First Name "></Input>
                </CardSection>
                <CardSection style={{backgroundColor:"white",borderBottomWidth:1}}>
                    <Input placeholder="Dyer" label="Last Name "></Input>
                </CardSection>
                 <Text style={{fontSize:18,fontWeight:'bold',paddingLeft:10}}>
                    Personal Information
                </Text> 
                <CardSection style={{backgroundColor:"white",borderBottomWidth:1}}>
                    <Input placeholder="+91 994567433" label="Phone "></Input>
                </CardSection>

                <CardSection style={{backgroundColor:"white",borderBottomWidth:1}}>
                    <Input placeholder="A-1,Abc Apt,Ahmedabad." label="Address "></Input>
                </CardSection>
                <View style={{alignItems:"center",justifyContent:"center",paddingTop:10}}>
                    <Button style={styles.fontStyle} containerStyle = {styles.containerStyle}>Done</Button>
                </View>
            </CardView>
        </View>
        </View>
        </View>
        )
    };
}

const styles ={
    
    MainContainer: {
        flex: 1,
        marginTop:200,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
     
      },cardViewStyle:{
        width: 300, 
        height: 480,
      },
      containerStyle:{
        padding:10,
        height:45,
        width:'85%',
        opacity:1,
        borderRadius:15,
        paddingLeft:50,
        paddingRight:30, 
        backgroundColor: 'orange',
        },
        fontStyle:{
            fontSize: 20,
            color: 'black'
        }
    
     
}

export default EditProfile;