import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from 'src/helper/styles';

const ChatComponent=(props)=>{
    
    return(
        <View style={[styles.flex1]}>
            <View style={[styles.flex1]}>

            </View>
            <View style={{...StyleConfig.card,flexDirection:'row', alignItems:'center', width:StyleConfig.width-StyleConfig.countPixelRatio(32), marginHorizontal:StyleConfig.countPixelRatio(16), paddingHorizontal: StyleConfig.countPixelRatio(16), borderRadius:StyleConfig.countPixelRatio(30)}}>
                <View style={styles.flex1}>
                    <TextInput 
                        style={styles.textH23Medium}
                        placeholder={"Type a Message"}
                        multiline={true}
                    />
                </View>
                <FontAwesome
                    onPress={()=> alert("Sent")}
                    name="send" size={StyleConfig.countPixelRatio(30)} color={StyleConfig.COLORS.cyanBlue} />
                
            </View>
        
        </View>
        
    )
}
module.exports = ChatComponent ;

