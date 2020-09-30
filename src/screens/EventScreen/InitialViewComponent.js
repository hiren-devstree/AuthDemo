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
const InitialViewComponent=(props)=>{
    return(
        <View style={[StyleConfig.card,{  margin:StyleConfig.countPixelRatio(16)}]}>
            <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={"Event name e.g. 50th Bob's Birthday"}
                />
            </View>
            <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={"Location e.g. ABC Banquet Hall"}
                />
            </View>
            <Text style={styles.notesText}>a name your guests and vendors recorgnise</Text>
            <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={"address (start typing and we'll look )"}
                />
            </View>
            <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor} 
                placeholder={"type of event (Bithday)"}
                />
            </View>
            <View style={{flexDirection:'row-reverse'}}>
                <Button onPress={props.onSavePress} buttonWrap={{width:StyleConfig.width*0.25, height:StyleConfig.countPixelRatio(36)}}>Save</Button>
            </View>
        </View>
    )
}
module.exports = InitialViewComponent ;

