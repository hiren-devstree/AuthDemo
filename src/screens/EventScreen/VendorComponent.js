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

const VendorComponent=(props)=>{
    
    return(

        <View style={styles.flex1}>
        <View style={[StyleConfig.card, styles.center, { paddingVertical: StyleConfig.countPixelRatio(16), borderWidth:1, borderStyle: 'dashed',} ]} >
            <Text style={styles.textH23Bold}> Vendor </Text>
        </View>
        </View>
        
    )
}
module.exports = VendorComponent ;

