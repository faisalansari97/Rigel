import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {Rating} from 'react-native-elements';
import ButtonComponent from 'react-native-button-component';
import Dialog, {DialogContent} from 'react-native-popup-dialog';


export default class About extends React.Component{
  state={visible:false}
  render(){
      return(
        <View>
            <Dialog
        visible={this.state.visible}
        onTouchOutside={() => {
          this.setState({ visible: false });
        }}
      >
      <DialogContent>
          <View style={{flexDirection:'column', alignItems:'center', margin:'3%', width:270}}>
            <Text style={{fontSize:20, fontWeight:'bold', margin:'4%'}}>Rate your Meal</Text>
            <View style={{margin:'4%'}}>
            <Rating type='custom' ratingColor='red' ratingCount={5} imageSize={30}
            ratingStyle={styles.ratingStyle}/>
            </View>
            <View style={{margin:'3%'}}>
            <ButtonComponent text="Rate" backgroundColors={['orange', 'red']}
            height={40} width={300} style={{marginLeft:'2%'}}
            onPress={()=>this.setState({visible:false})}/>
            </View>
          </View>
      </DialogContent>
      </Dialog>
          <View>
           <Image style={styles.heroImage}
           source = {{uri:"https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?cs=srgb&dl=buffet-celebration-delicious-5929.jpg&fm=jpg"}}/>
          </View>
           <View style={{padding: 30, backgroundColor:'rgba(0,0,0,.1)', height:'100%'}}>
           <View style = {styles.cardStyle}>
             <Image style={styles.imageStyle} source={{uri:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg"}}/>
             <View style={styles.titleButton}>
                <Text style={styles.textStyle}>Rigel</Text>
                <ButtonComponent style={styles.buttonStyle} text='Tap to rate' backgroundColors={['orange', 'red']} onPress={()=>this.setState({visible: true})}/>
             </View>
             <ScrollView>
             <View>
             <Text style={{fontSize:15, fontWeight:'bold', color:'black'}}>Lorem Ipsum 1</Text>
             <Text>The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon alternating directions.</Text>
             </View>
             <View>
             <Text style={{fontSize:15, fontWeight:'bold', color:'black'}}>Lorem Ipsum 2</Text>
             <Text>The first way to divide sentences into groups was the original paragraphos, similar to an underscore at the beginning of the new group.</Text>
             </View>
             <View>
             <Text style={{fontSize:15, fontWeight:'bold', color:'black'}}>Lorem Ipsum 3</Text>
             <Text>For additional ornamentation, a hedera leaf or other symbol can be added to the inter-paragraph whitespace, or put in the indentation space.</Text>
             </View>
             </ScrollView>
           </View>
           </View>
          </View>
      );
  };
}

const styles = {
  heroImage:{
      height:150,
      width:"100%",
  },
  imageStyle:{
      height: '30%',
      width: '100%',
  },

  cardStyle:{
    display: 'flex',
    borderRadius: 10,
    borderColor: '#ddd',
    backgroundColor: 'rgba(255,255,255,1)',
    height:'65%',
    width:'100%',
    marginTop: -70,
    overflow: 'hidden',
    padding: 15,
  },

  titleButton:{
    display:'flex', 
    flexDirection:'row',
    paddingTop: 10,
  },

  textStyle:{
    flex:2,
    color:'red',
    fontWeight:'bold',
    fontSize:17
  },
  buttonStyle:{
    flex:2,
    height:30,
    width:100,
  }
}