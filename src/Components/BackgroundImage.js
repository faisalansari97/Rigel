import React,{Component} from "react"
import {ImageBackground,StyleSheet,Dimensions} from "react-native"

class BackgroundImage extends Component {

    render() {
        return (
            <ImageBackground style = {styles.imageBackground}
            source={{uri: 'https://images.pexels.com/photos/1528013/pexels-photo-1528013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}>
                {this.props.children}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
   
    imageBackground:{
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        resizeMode:"stretch"

      
    },
});

export default BackgroundImage;