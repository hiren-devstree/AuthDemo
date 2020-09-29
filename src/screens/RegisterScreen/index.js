
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import StyleConfig from 'src/helper/StyleConfig';
import {Ionicons} from '@expo/vector-icons';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import { TextInputMask } from 'react-native-masked-text'
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
import withLoader from 'src/redux/actionCreator/withLoader'
class RegisterScreen extends Component{
    constructor(props){
        super(props);
        this.state={ phone: '' }
    }
    render(){
        return (
            <>
              <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.container}>
                    <View style={styles.headerWrap}>
                      <TouchableOpacity 
                        onPress={()=> this.props.navigation.goBack()}
                        style={styles.backWrap}>
                        <Ionicons name={"ios-chevron-back-sharp"} color={StyleConfig.COLORS.gray20} size={StyleConfig.headerIconSize} />
                      </TouchableOpacity>
                      <Text style={styles.headerTitle}>{strings.sign_up}</Text>
                      <View style={styles.backWrap}>
                        <Ionicons name={"ios-chevron-back-sharp"} color={StyleConfig.COLORS.transparent} size={StyleConfig.headerIconSize} />
                      </View>
                    </View>
                    <ScrollView
                      contentInsetAdjustmentBehavior="automatic"
                      style={styles.content}>
                      <View style={styles.appIconWrap}>
                        <Image
                            source={AppImages.icIcon}
                            resizeMode={'contain'}
                            style={styles.appIcon} />
                        <Text style={[styles.appDescText, {color: StyleConfig.COLORS.gray20}]}>{strings.the_world_is_a_party_lets_plan_one_lets_emzee}</Text>
                      </View>
                      <View style={{ alignItems:'center'}}>
                        <View style={styles.textInputWrap}>
                        <TextInputMask
                          type={'custom'}
                          options={{
                            mask: strings.mask_phone
                          }}
                          style={styles.textH3Regular}
                          placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                          placeholder={strings.enter_your_phone_number}
                          value={this.state.phone}
                          onChangeText={phone => {
                            this.setState({ phone })
                          }}
                        />
                        </View>

                        <Button
                          onPress={()=>this.props.navigation.navigate("OTPVerificationScreen")}
                        buttonWrap={styles.buttonWrap}>{strings.sign_up}</Button>

                        <View style={styles.row}>
                        <Text style={styles.textH3Regular}>{strings.already_have_an_account}</Text>
                          <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login")} style={styles.linkWrap}>
                            <Text style={styles.linkText}>{strings.login_here}</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                </ScrollView>
              </SafeAreaView>
            </>
          );
    }
}
export default withLoader(RegisterScreen) ;
