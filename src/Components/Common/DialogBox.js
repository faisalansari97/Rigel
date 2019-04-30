import React from 'react';
import {Text, View} from 'react-native';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import { Rating } from 'react-native-ratings';
import ButtonComponent from 'react-native-button-component/dist/ButtonComponent';

export default class DialogBox extends React.Component{
  state={visible:false}
  render(){
    return(
    <View style={styles.container}>
      <Dialog
        visible={this.state.visible}
        onTouchOutside={() => {
          this.setState({ visible: false });
        }}
      >
        <DialogContent>
          <View>
            <Text>Rate your Meal</Text>
            <Rating type='custom' ratingColor='red' ratingCount={5} imageSize={20}
            ratingStyle={styles.ratingStyle}/>
             <ButtonComponent text="Rate" backgroundColors={['orange', 'red']}
        height={40} width={300} style={{marginLeft:'2%'}}/>
          </View>
        </DialogContent>
      </Dialog>
    </View>
    )
  }
}