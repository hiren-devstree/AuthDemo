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

        <View style={[styles.flex1, {backgroundColor:"#f24ffd"}]}>
        <View style={[StyleConfig.card, styles.center, { paddingVertical: StyleConfig.countPixelRatio(16), borderWidth:1, borderStyle: 'dashed',} ]} >
            <Text style={styles.textH23Bold}> Guest </Text>
        </View>
        </View>
        
    )
}
module.exports = GuestComponent ;

