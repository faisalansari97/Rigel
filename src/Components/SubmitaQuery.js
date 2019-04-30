import React,{Component} from 'react';
import {View} from "react-native";
import ButtonComponent from 'react-native-button-component'
import Textarea from 'react-native-textarea';

class SubmitaQuery extends Component{
    render(){
        return(
            <View style={{display:'flex', flex:1}}>
            <View style={styles.containerStyle}>
             <Textarea maxLength={120} placeholder="Type Something"/>
            </View>
                <View style={{alignItems:'center', marginTop:'4%'}}>
                <ButtonComponent backgroundColors={['red', 'orange']} height={35} width={250} text='Submit a Query' />
                </View>
            </View>
        )
    };
}

const styles={
    containerStyle:{
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        flex:0.4,
        margin:'5%',
        backgroundColor:'white',
        borderRadius:10,
    }
}

export default SubmitaQuery;
