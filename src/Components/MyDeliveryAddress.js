import React,{Component} from 'react';
import {Text,View,Checkbox} from 'react-native';
import BackgroundImage from "./BackgroundImage"
import CardView from 'react-native-cardview'
import {Icon} from 'react-native-elements'
import {CheckBox} from 'react-native-elements';


class MyDeliveryAddress extends Component{
    state = { checked:false };

    render(){
        return(
            <View>
                <BackgroundImage>
                    <View style={styles.viewStyle}>
                    {/* <CheckBox  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' textStyle={styles.textStyle} iconRight checkedIcon = "check-circle" checked={this.state.checked} onIconPress={() => this.setState({checked: !this.state.checked})} checkedColor='red'/>
                    <CheckBox  title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' textStyle={styles.textStyle}  iconRight checkedIcon = "check-circle" checked={this.state.checked} onIconPress={() => this.setState({checked: !this.state.checked})} checkedColor='red' checkedIcon = "check-circle"/> */}
 
                    {/* <View style={{padding:25,paddingTop:30}}>
                    <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={8} style={styles.cardViewStyle}>
                    <View style={{alignSelf:"flex-start"}}>
                        <Icon name="home" color="orange"  type='font-awesome' iconStyle={{padding:10}} size={30}/>
                    </View>   
                    <Text style={{paddingLeft:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>
                    

                     </CardView>
                     </View> 
                     <View style={{padding:25,paddingTop:5}}>
                    <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={8} style={styles.cardViewStyle}>
                    <View style={{alignSelf:"flex-start"}}>
                        <Icon name="home" color="orange"  type='font-awesome' iconStyle={{padding:10}} size={30}/>
                    </View>   
                    <Text style={{paddingLeft:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>

                     </CardView>
                     </View>  */}
                    </View>
                </BackgroundImage>
            </View>
        )
    }
}
const styles = {
    cardViewStyle:{
        width:'100%',
        height: 110
      },
    viewStyle:{
        backgroundColor:"rgba(255,255,255,0.7)",
        height:"100%"
    },
}
export default MyDeliveryAddress;