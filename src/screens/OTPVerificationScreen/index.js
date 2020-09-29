
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
import {Ionicons} from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import { CommonActions } from '@react-navigation/native';
import styles from 'src/helper/styles';
class OTPVerificationScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView style={styles.container}>
                <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.content}>
                    <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                      <TouchableOpacity 
                      onPress={()=> this.props.navigation.goBack()}
                      style={{paddingHorizontal:StyleConfig.countPixelRatio(16), paddingVertical:StyleConfig.countPixelRatio(4)}}>
                      <Ionicons name={"ios-chevron-back-sharp"} color={'#333'} size={StyleConfig.countPixelRatio(24)} />
                      </TouchableOpacity>
                      <Text style={local_styles.headerTitle}>SIGN UP</Text>
                      <View style={{paddingHorizontal:StyleConfig.countPixelRatio(16), paddingVertical:StyleConfig.countPixelRatio(4)}}>
                      <Ionicons name={"ios-chevron-back-sharp"} color={'#fff'} size={StyleConfig.countPixelRatio(24)} />
                      </View>
                    </View>
                    <View style={{ alignItems:'center', marginVertical:StyleConfig.countPixelRatio(50) }}>
                      <Image
                          source={AppImages.icIcon}
                          resizeMode={'contain'}
                          style={local_styles.appIcon} />
                      <Text style={local_styles.sectionTitle1}>The world is a party let's plan one. Let's Emzee</Text>
                    </View>
                    <View style={{ alignItems:'center'}}>
                      <View style={{
                        borderWidth:0.5,
                        borderRadius: StyleConfig.countPixelRatio(4),
                        padding:StyleConfig.countPixelRatio(6),
                        margin:StyleConfig.countPixelRatio(16),
                        width: StyleConfig.width*0.7,
                        justifyContent:'center',
                        minHeight: StyleConfig.countPixelRatio(48)
                      }}>
                      <TextInput
                        style={styles.textH3Regular}
                        placeholderTextColor={"#888"}
                        keyboardType={'phone-pad'}
                        maxLength={6}
                        placeholder={"Enter your confirmation number"}
                      ></TextInput>
                      </View>

                      <Button 
                        onPress={()=> this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Dashboard' }] })) }
                        buttonWrap={{width: StyleConfig.width*0.5}}>Verify</Button>

                    </View>
                </ScrollView>
              </SafeAreaView>
            </>
          );
    }
}
export default OTPVerificationScreen ;

const local_styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
  },
  headerTitle:{
    fontFamily: StyleConfig.fontMedium,
    fontSize: StyleConfig.fontSizeH2,
    opacity: 0.8
  },
  appIcon:{
    height:StyleConfig.countPixelRatio(100),
    width:StyleConfig.countPixelRatio(200)
  },
  sectionTitle1: {
    fontFamily: StyleConfig.fontSemiBold,
    fontSize: StyleConfig.fontSizeH3,
    
  },
  inputStyle: {
    fontFamily: StyleConfig.fontRegular,
    fontSize: StyleConfig.fontSizeH3,
  }
});
