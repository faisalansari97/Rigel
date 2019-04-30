import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TouchableOpacity} from 'react-native'
import CardView from 'react-native-cardview'
import {Icon} from 'react-native-elements'

class Breakfast extends Component{
    state={count:0}
    incrementCounter = () =>{
        this.setState({count:this.state.count+1})
    }

    decrementCounter = () =>{
        this.setState({count:this.state.count-1})
    }
    render(){
        const path="https://as1.ftcdn.net/jpg/02/04/06/68/500_F_204066823_4KIY87yqpbIiWG6sH1WCrcXJo5Z5CyA6.jpg"
        return(
            <View style={{backgroundColor:"orange"}}>
            <ScrollView>
                <View style={{alignItems:"center",padding:10}}>
                    <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                        <View style={{padding:15,flexDirection:"row"}}>
                            <Image source={{uri:path}} style={styles.imageStyle}></Image>
                            <View style={{flexDirection:"column"}}>
                                    <Text style={{fontSize:20,fontWeight:"bold",paddingLeft:5}}>Chocolate Cake</Text>                
                                    <Text style={{paddingLeft:5}}>Lorem ipsum dolor sit amet </Text>
                                    <Text style={{color:"red",paddingLeft:5,paddingTop:10}}>100 US</Text>
                            </View>
                                <View style={{flexDirection:"column",marginLeft:12}}>
                                    <Text style={{fontWeight:"500"}}>20 Hrs</Text>
                                    <Icon name="add" color="orange" onPress={() => this.incrementCounter()}></Icon>
                                    <Text style={{marginLeft:12}}> {this.state.count} </Text>
                                    <Icon name="minus" color="orange" type="font-awesome" onPress={() => this.decrementCounter()}></Icon>
                                
                                </View>
                        </View>
                    </CardView>
                </View>
                <View style={{alignItems:"center",padding:10}}>
                    <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                        <View style={{padding:15,flexDirection:"row"}}>
                            <Image source={{uri:path}} style={styles.imageStyle}></Image>
                            <View style={{flexDirection:"column"}}>
                                    <Text style={{fontSize:20,fontWeight:"bold",paddingLeft:5}}>Chocolate Cake</Text>                
                                    <Text style={{paddingLeft:5}}>Lorem ipsum dolor sit amet </Text>
                                    <Text style={{color:"red",paddingLeft:5,paddingTop:10}}>100 US</Text>
                            </View>
                                <View style={{flexDirection:"column",marginLeft:12}}>
                                    <Text style={{fontWeight:"500"}}>20 Hrs</Text>
                                    <Icon name="add" color="orange" onPress={() => this.incrementCounter()}></Icon>
                                    <Text style={{marginLeft:12}}> {this.state.count} </Text>
                                    <Icon name="minus" color="orange" type="font-awesome" onPress={() => this.decrementCounter()}></Icon>
                                
                                </View>
                        </View>
                    </CardView>
                </View>
                <View style={{alignItems:"center",padding:10}}>
                    <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                        <View style={{padding:15,flexDirection:"row"}}>
                            <Image source={{uri:path}} style={styles.imageStyle}></Image>
                            <View style={{flexDirection:"column"}}>
                                    <Text style={{fontSize:20,fontWeight:"bold",paddingLeft:5}}>Chocolate Cake</Text>                
                                    <Text style={{paddingLeft:5}}>Lorem ipsum dolor sit amet </Text>
                                    <Text style={{color:"red",paddingLeft:5,paddingTop:10}}>100 US</Text>
                            </View>
                                <View style={{flexDirection:"column",marginLeft:12}}>
                                    <Text style={{fontWeight:"500"}}>20 Hrs</Text>
                                    <Icon name="add" color="orange" onPress={() => this.incrementCounter()}></Icon>
                                    <Text style={{marginLeft:12}}> {this.state.count} </Text>
                                    <Icon name="minus" color="orange" type="font-awesome" onPress={() => this.decrementCounter()}></Icon>
                                
                                </View>
                        </View>
                    </CardView>
                </View>
                <View style={{alignItems:"center",padding:10}}>
                    <CardView cardElevation={7} cardMaxElevation={5} cornerRadius={9} style={styles.cardViewStyle}>
                        <View style={{padding:15,flexDirection:"row"}}>
                            <Image source={{uri:path}} style={styles.imageStyle}></Image>
                            <View style={{flexDirection:"column"}}>
                                    <Text style={{fontSize:20,fontWeight:"bold",paddingLeft:5}}>Chocolate Cake</Text>                
                                    <Text style={{paddingLeft:5}}>Lorem ipsum dolor sit amet </Text>
                                    <Text style={{color:"red",paddingLeft:5,paddingTop:10}}>100 US</Text>
                            </View>
                                <View style={{flexDirection:"column",marginLeft:12}}>
                                    <Text style={{fontWeight:"500"}}>20 Hrs</Text>
                                    <Icon name="add" color="orange" onPress={() => this.incrementCounter()}></Icon>
                                    <Text style={{marginLeft:12}}> {this.state.count} </Text>
                                    <Icon name="minus" color="orange" type="font-awesome" onPress={() => this.decrementCounter()}></Icon>
                                
                                </View>
                        </View>
                    </CardView>
                </View>
                
                </ScrollView>
            </View>
        )
    };
}

const styles = {
    cardViewStyle:{
        width: 322, 
        height: 120,
        marginTop:-2
      },
    imageStyle:{
        borderRadius:10,
        height:80,
        width:80
    }
}
export default Breakfast;
