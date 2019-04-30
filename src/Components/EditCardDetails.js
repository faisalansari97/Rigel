import React,{Component} from 'react';
import {View} from "react-native";
import ButtonComponent, { RectangleButton } from 'react-native-button-component';
import {Actions} from 'react-native-router-flux';
import {Input,CardSection} from "./Common";
import BackgroundImage from "./BackgroundImage";


class EditCardDetails extends Component{
    render(){
        return(
            <BackgroundImage>
            <View style={styles.viewStyle}>
                <View style={{flexDirection:"row",borderBottomColor:"white",borderBottomWidth:1,borderBottomStartRadius:9,borderBottomEndRadius:9}}> 
                    <Input placeholder="Card Number"/>
                </View>
                <View style={{flexDirection:"row",display:"flex"}}>
                    <CardSection style={{borderBottomColor:"white",flex:1,borderBottomWidth:1,borderBottomStartRadius:9,borderBottomEndRadius:9}}>
                    <Input placeholder="CVV" />
                    </CardSection>
                    <View style={{borderBottomColor:"white",flex:1,borderBottomWidth:1,borderBottomStartRadius:9,borderBottomEndRadius:9}}>
                    <Input placeholder="MM/YY" />
                    </View>
                </View>
                <View style={{flexDirection:"row",borderBottomColor:"white",borderBottomWidth:1,borderBottomStartRadius:9,borderBottomEndRadius:9}}> 
                    <Input placeholder="Card holder name"/>
                </View>
                <View style={{flex:1,margin:10}}>
                <RectangleButton text="Done" textStyle={{fontSize:18}} backgroundColors = {['red','orange']} height={40} style={styles.buttonStyle}></RectangleButton>
  
                </View>
             </View> 
            </BackgroundImage>
        )
    };
}

const styles={
    buttonStyle:{  
        borderRadius:5,
        borderWidth: 1,
    },
    viewStyle:{
    backgroundColor:'rgba(192,192,192,0.9)',
    height:'100%',
    display:"flex"
    },
}

export default EditCardDetails;