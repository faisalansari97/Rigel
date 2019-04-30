import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import {List,ListItem,SearchBar,Avatar} from 'react-native-elements'

class Search extends Component{
    state={loading: false,
        name: ["Stuti","Ankit","Dhwani"],
        error: null,
        refreshing: false, searchValue:''}
    updateSearch = () => {
        this.setState({searchValue:()=>this.props.value})
    }
    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round onChangeText={()=>this.updateSearch()} value={this.state.searchValue} />;
      };
    render(){
        return(
            <View>
            <View style={{padding:10}}> 
                <FlatList keyExtractor = {item => this.state.name} data = {this.state.name}
                 ListHeaderComponent={this.renderHeader}
                 title="Main" titleStyle={{color:"black",fontWeight:"bold"}}
                 renderItem={({item}) => (
                        <ListItem  roundAvatar title={item}
                        titleStyle={{fontWeight:"bold"}} bottomDivider
                        leftAvatar={<Avatar rounded source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} />}>
                        </ListItem>)}/>
            </View>           
            <View style={{borderBottomWidth:1,padding:5,opacity:0.2,borderBottomStartRadius:30,borderBottomEndRadius:30}}></View>
            </View>
        )
    };
}

export default Search;