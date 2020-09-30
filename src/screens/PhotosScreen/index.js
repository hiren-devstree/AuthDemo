
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import StyleConfig from 'src/helper/StyleConfig';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import styles from 'src/helper/styles'
class PhotosScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
                <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.content}>
               <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                           <Text style={styles.headerTitle}>Photo</Text>
                    </View>
                 
                </ScrollView>
              </SafeAreaView>
            </>
          );
    }
}
export default PhotosScreen ;

