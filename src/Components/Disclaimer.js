import React,{Component} from 'react';
import {View,Text} from 'react-native';
import CardView from "react-native-cardview"


class Disclaimer extends Component{
    render(){
        return(
            <View style={{display:"flex"}}>
                <View style={styles.colorStyle} />
                 <View style={{marginTop:-50,padding:20}}>
                    <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                        <View style={styles.MainContainer}>
                        <View style={{display:"flex",flexDirection:"column",padding:7}}>
                            <Text style={{fontWeight:"bold",fontSize:20}}> Lorem ipsum 1 </Text>
                            <Text>
                                Lorem ipsum dolor sit amet, mei integre similique an. Nobis sanctus suscipit est ad, et vel alii paulo eloquentiam. Tale ocurreret explicari te vis, mundi audiam aliquando ne usu. No pro omnes melius indoctum. No mea brute apeirian menandri.
                                Per vide legere laboramus ut, percipit petentium ut mel
                            </Text>
                        </View>
                        <View style={{display:"flex",flexDirection:"column",padding:7}}>
                            <Text style={{fontWeight:"bold",fontSize:20}}> Lorem ipsum 2 </Text>
                            <Text>
                                Lorem ipsum dolor sit amet, mei integre similique an. Nobis sanctus suscipit est ad, et vel alii paulo eloquentiam. Tale ocurreret explicari te vis, mundi audiam aliquando ne usu. No pro omnes melius indoctum. No mea brute apeirian menandri.
                                Per vide legere laboramus ut, percipit petentium ut mel
                            </Text>
                        </View>
                        <View style={{display:"flex",flexDirection:"column",padding:7}}>
                            <Text style={{fontWeight:"bold",fontSize:20}}> Lorem ipsum 3 </Text>
                            <Text>
                                Lorem ipsum dolor sit amet, mei integre similique an. Nobis sanctus suscipit est ad, et vel alii paulo eloquentiam. Tale ocurreret explicari te vis, mundi audiam aliquando ne usu. No pro omnes melius indoctum. 
                            </Text>
                        </View>
                        </View>
                     </CardView>
                </View>
            </View>
        )
    };
}
const styles={
    colorStyle:{
        backgroundColor:"#FF7518",
        width:"100%",
        height:80
    },
    cardViewStyle:{
        width:'100%',
        height: 450
        
        
      },
      MainContainer: {
        flex: 1,
        padding:7,
       // marginTop:-20,
        backgroundColor: 'white',
       }
}

export default Disclaimer;