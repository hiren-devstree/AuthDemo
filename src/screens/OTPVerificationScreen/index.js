
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
import {FontAwesome} from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import { CommonActions } from '@react-navigation/native';
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant';
import { TextInputMask } from 'react-native-masked-text'
import * as SecureStore from 'expo-secure-store';
class OTPVerificationScreen extends Component{
    constructor(props){
        super(props);
        this.state={ otp: ''}
    }
    onVerifyOtp=async ()=>{
      //if(this.state.otp.length == 6){
        await SecureStore.setItemAsync( Const.SS_IS_LOGIN, "true" );

        this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Dashboard' }] }))
      //}
    }
    render(){
        return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView style={styles.container}>
                <ScrollView
                  style={styles.content}>
                    <View style={styles.headerWrap}>
                      <TouchableOpacity 
                      onPress={()=> this.props.navigation.goBack()}
                      style={{paddingHorizontal:StyleConfig.countPixelRatio(16), paddingVertical:StyleConfig.countPixelRatio(4)}}>
                      <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.gray20} size={StyleConfig.headerIconSize} />
                      </TouchableOpacity>
                      <Text style={local_styles.headerTitle}>SIGN UP</Text>
                      <View style={{paddingHorizontal:StyleConfig.countPixelRatio(16), paddingVertical:StyleConfig.countPixelRatio(4)}}>
                      <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.transparent} size={StyleConfig.headerIconSize} />
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
                      <View style={styles.textInputWrap}>
                        <TextInputMask
                          type={'custom'}
                          options={{
                            mask: Const.MASK_OTP
                          }}
                          style={styles.textH3Regular}
                          placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                          placeholder={strings.enter_your_phone_number}
                          value={this.state.otp}
                          onChangeText={otp => {
                            this.setState({ otp })
                          }}
                        />
                      </View>

                      <Button 
                        onPress={this.onVerifyOtp}
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
