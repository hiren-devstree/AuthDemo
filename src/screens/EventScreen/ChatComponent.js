import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    ImageBackground
  } from 'react-native';
  
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import {FontAwesome} from '@expo/vector-icons';
import styles from 'src/helper/styles';
import { Component } from 'react';
import strings from '../../helper/strings';
const USER_ID = 50
class ChatComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            chats:[{ message: "Hi", userId: 50},
                   { message: "Hello", userId: 0 }],
            currMessage:''
        }
    }
    render(){
        return(
            <View style={[styles.flex1]}>
                <ImageBackground 
                    source={AppImages.chatBack}
                    style={{flex:1, width:StyleConfig.width}}>
                    <View style={[styles.flex1,{backgroundColor:"#ffffffaa"}]} >
                        <View style={[styles.flex1]}>
                            <FlatList
                                data={this.state.chats}
                                inverted
                                renderItem={({item})=>{
                                    return(
                                        <View style={{flexDirection: USER_ID == item.userId ? 'row-reverse': "row", paddingHorizontal:8}}>
                                            <Image 
                                                source={{uri: item.userId ? "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png": "https://icon-library.com/images/lady-icon/lady-icon-7.jpg"}}
                                                style={styles.chatProfilePhoto}
                                            />
                                            <View style={ styles.cardRow}>
                                                <Text style={styles.textH3Regular}>{item.message}</Text>
                                            </View>
                                        </View>
                                        
                                    )
                                }}
                            />
                        </View>
                        <View style={[ styles.cardRow, { alignItems:'center', width:StyleConfig.width-StyleConfig.countPixelRatio(32), marginHorizontal:StyleConfig.countPixelRatio(16), borderRadius:StyleConfig.countPixelRatio(30)}]}>
                            <FontAwesome
                                onPress={()=> {
                                   }}
                                color={StyleConfig.COLORS.defaultTextColor} 
                                style={{paddingHorizontal:8}}
                                name="paperclip" size={StyleConfig.countPixelRatio(22)} 
                            />
                            <View style={styles.flex1}>
                                <TextInput 
                                    style={styles.textH23Medium}
                                    placeholder={ strings.type_a_message}
                                    multiline={true}
                                    value={this.state.currMessage}
                                    onChangeText={(currMessage)=> this.setState({currMessage})}
                                />
                            </View>
                            <FontAwesome
                                onPress={()=> {
                                    let { chats,currMessage } = this.state;
                                    chats = [{
                                        message: currMessage,
                                        userId: currMessage.toString().length % 2 ? 0 : 50
                                    }, ...chats]
                                    this.setState({chats, currMessage:''})
                                }}
                                style={{paddingHorizontal:8}}
                                name="send" size={StyleConfig.countPixelRatio(30)} color={StyleConfig.COLORS.cyanBlue} 
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
            
        )
    }
    
}
export default ChatComponent ;

