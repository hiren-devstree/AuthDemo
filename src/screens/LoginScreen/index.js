
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
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
import withVendor from 'src/redux/actionCreator/withVendor';
firebase.auth().isAppVerificationDisabledForTesting = true

const LoginScreen = ({ navigation, ...props }) => {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState('9033343516');
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
  const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
    ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device." }
    : undefined);
  console.log({ vendor: props.isVendor })
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrap}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
                value={phoneNumber}
                onChangeText={phone => { setPhoneNumber(phone) }}
              />
            </View>

            <Button
              onPress={async () => {
                // The FirebaseRecaptchaVerifierModal ref implements the
                // FirebaseAuthApplicationVerifier interface and can be
                // passed directly to `verifyPhoneNumber`.
                try {
                  const phoneProvider = new firebase.auth.PhoneAuthProvider();
                  const verificationId = await phoneProvider.verifyPhoneNumber(
                    `+91${phoneNumber}`,
                    recaptchaVerifier.current
                  );
                  navigation.navigate(Const.NK_OTP_VERIFICATION, { verificationId })
                  // setVerificationId(verificationId);
                  // showMessage({
                  //   text: "Verification code has been sent to your phone.",
                  // });
                } catch (err) {
                  showMessage({ text: `Error: ${err.message}`, color: "red" });
                }
              }}
              buttonWrap={styles.buttonWrap}>{strings.continue}</Button>

          </View>
        </ScrollView>

      </SafeAreaView>
    </>
  );
}
export default withVendor(withLoader(LoginScreen))