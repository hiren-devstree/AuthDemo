
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
import { FontAwesome } from '@expo/vector-icons';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import { TextInputMask } from 'react-native-masked-text'
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant';
import withLoader from 'src/redux/actionCreator/withLoader';
import firebase from 'src/helper/firebaseConfig';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.recaptcha = null;
    this.state = { phone: '' }
  }
  componentDidMount = async () => {
    // const phoneProvider = new firebase.auth.PhoneAuthProvider();
    // phoneProvider.verifyPhoneNumber('+91 9033343516', this.recaptcha.current)
    //   .then((setVerificationId) => console.log({ setVerificationId }));

    //const confirmation = await firebase.auth().signInWithPhoneNumber('+91 9033343516', '123123');
    // console.log(confirmation);
  }
  setRecaptcha = (ref) => this.recaptcha = ref;
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.headerWrap}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.backWrap}>
              <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.gray20} size={StyleConfig.headerIconSize} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{strings.sign_in}</Text>
            <View style={styles.backWrap}>
              <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.transparent} size={StyleConfig.headerIconSize} />
            </View>
          </View>
          <ScrollView
            style={styles.content}>
            <View style={styles.appIconWrap}>
              <Image
                source={AppImages.icIcon}
                resizeMode={'contain'}
                style={styles.appIcon} />
              <Text style={[styles.appDescText, { color: StyleConfig.COLORS.gray20 }]}>{strings.the_world_is_a_party_lets_plan_one_lets_emzee}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.textInputWrap}>
                <TextInputMask
                  type={'custom'}
                  options={{
                    mask: Const.MASK_PHONE
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
                onPress={() => this.props.navigation.navigate(Const.NK_OTP_VERIFICATION)}
                buttonWrap={styles.buttonWrap}>{strings.continue}</Button>

            </View>
          </ScrollView>
          <FirebaseRecaptchaVerifierModal
            ref={this.setRecaptcha}
            firebaseConfig={firebase.app().options}
          />
        </SafeAreaView>
      </>
    );
  }
}
export default withLoader(LoginScreen);
