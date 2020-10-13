import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from 'src/helper/styles';
import { Component } from 'react';
const USER_ID = 50
class ChatComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            chats:[{
                message: "Hi",
                userId: 50
            },
            {
                message: "Hello",
                userId: 0
            }
        ],
            currMessage:''
        }
    }
    render(){
        return(
            <View style={[styles.flex1]}>
                <View style={[styles.flex1]}>
                <FlatList
                    data={this.state.chats}
                    inverted
                    renderItem={({item})=>{
                        return(
                            <View style={{flexDirection: USER_ID == item.userId ? 'row-reverse': "row", paddingHorizontal:8}}>
                                <Image 
                                    source={{uri: item.userId ? "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png": "https://icon-library.com/images/lady-icon/lady-icon-7.jpg"}}
                                    style={{height:StyleConfig.countPixelRatio(48), width:StyleConfig.countPixelRatio(48), borderRadius:StyleConfig.countPixelRatio(24)}}
                                />
                                <View style={{...StyleConfig.card, flexDirection:'row',}}>
                                    <Text style={styles.textH3Regular}>{item.message}</Text>
                                </View>
                            </View>
                            
                        )
                    }}
                    />
                </View>
                <View style={{...StyleConfig.card,flexDirection:'row', alignItems:'center', width:StyleConfig.width-StyleConfig.countPixelRatio(32), marginHorizontal:StyleConfig.countPixelRatio(16), paddingHorizontal: StyleConfig.countPixelRatio(16), borderRadius:StyleConfig.countPixelRatio(30)}}>
                    <View style={styles.flex1}>
                        <TextInput 
                            style={styles.textH23Medium}
                            placeholder={"Type a Message"}
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
                            //chats.push()
                            this.setState({chats, currMessage:''})
                        }}
                        name="send" size={StyleConfig.countPixelRatio(30)} color={StyleConfig.COLORS.cyanBlue} />
                    
                </View>
            
            </View>
            
        )
    }
    
}
export default ChatComponent ;

