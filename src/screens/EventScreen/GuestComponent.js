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

const GuestComponent=(props)=>{
    
    return(
        <ScrollView>
            <View style={[styles.flex1, StyleConfig.card,]}>
                <TouchableOpacity style={[styles.flex1, StyleConfig.card,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                    <Text style={styles.headerTitle}>{"Accepted"}</Text>
                    <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightGreen, }]}>
                        <Text style={styles.textH23Medium}>{"25"}</Text>
                    </View>
                    <FontAwesome name={"caret-down"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1.5} />
                    
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flex1, StyleConfig.card,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                    <Text style={styles.headerTitle}>{"Declined"}</Text>
                    <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightRed, }]}>
                        <Text style={styles.textH23Medium}>{"9"}</Text>
                    </View>
                    <FontAwesome name={"caret-down"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1.5} />
                    
                </TouchableOpacity>
                <TouchableOpacity style={[styles.flex1, StyleConfig.card,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                    <Text style={styles.headerTitle}>{"Tentative"}</Text>
                    <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightYellow, }]}>
                        <Text style={styles.textH23Medium}>{"18"}</Text>
                    </View>
                    <FontAwesome name={"caret-down"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1.5} />
                    
                </TouchableOpacity>
                <View style={[styles.row, styles.center,{marginVertical:StyleConfig.countPixelRatio(8)}]}>
                <Button onPress={props.onSavePress} buttonWrap={{minHeight:StyleConfig.countPixelRatio(36)}}>Import additional guest</Button>
                </View>
                <View style={[styles.row, styles.center,{marginVertical:StyleConfig.countPixelRatio(8)}]}>
                <Button onPress={props.onSavePress} buttonWrap={{minHeight:StyleConfig.countPixelRatio(36)}}>Add another guest</Button>
                </View>
            </View>
        </ScrollView>
    )
}
module.exports = GuestComponent ;

