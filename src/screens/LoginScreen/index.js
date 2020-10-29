
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import StyleConfig from 'src/helper/StyleConfig';
import { FontAwesome } from '@expo/vector-icons';
import AppImages from 'src/assets/images';
// import { Button } from 'src/components/common/Button';
import { TextInputMask } from 'react-native-masked-text'
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant';
import withLoader from 'src/redux/actionCreator/withLoader';
import firebase from 'src/helper/firebaseConfig';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
let recaptcha = null
export default function LoginScreen() {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
  const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
    ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device." }
    : undefined);

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage({
              text: "Verification code has been sent to your phone.",
            });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = firebase.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await firebase.auth().signInWithCredential(credential);
            showMessage({ text: "Phone authentication successful 👍" });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
        }}
      />
      {message ? (
        <TouchableOpacity
          style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
          onPress={() => showMessage(undefined)}>
          <Text style={{ color: message.color || "blue", fontSize: 17, textAlign: "center", margin: 20, }}>
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
}

// class LoginScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { phone: '' }
//   }
//   componentDidMount = async () => {


//     //const confirmation = await firebase.auth().signInWithPhoneNumber('+91 9033343516', '123123');
//     // console.log(confirmation);
//   }

//   extOnPress = async () => {
//     // this.props.navigation.navigate(Const.NK_OTP_VERIFICATION)

//     const phoneProvider = new firebase.auth.PhoneAuthProvider();
//     var applicationVerifier = new firebase.auth.RecaptchaVerifier(
//       'recaptcha-container');
//     const verificationId = await phoneProvider.verifyPhoneNumber(
//       "+91 9033343516",
//       recaptcha.current
//     );
//     console.log({ verificationId })

//     // const phoneProvider = new firebase.auth.PhoneAuthProvider();
//     // if (this.recaptcha != null) {
//     //   console.log("inside if")
//     //   const recaptchaToken = await this.recaptcha.current.verify();
//     //   var applicationVerifier = new firebase.auth.RecaptchaVerifier(recaptchaToken);
//     //   phoneProvider.verifyPhoneNumber("+91 9033343516", applicationVerifier)
//     //     .then((setVerificationId) => console.log({ setVerificationId }));
//     // }

//   }

//   render() {
//     return (
//       <>
//         <StatusBar barStyle="dark-content" />

//         <FirebaseRecaptchaVerifierModal
//           ref={(refs) => recaptcha = refs}
//           firebaseConfig={firebase.app().options}
//           style={{ margin: 0, left: 0, top: -10, right: 0, bottom: 0 }}
//           title="Hello"
//         />
//         <SafeAreaView style={styles.container}>
//           <View style={styles.headerWrap}>
//             <TouchableOpacity
//               onPress={() => this.props.navigation.goBack()}
//               style={styles.backWrap}>
//               <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.gray20} size={StyleConfig.headerIconSize} />
//             </TouchableOpacity>
//             <Text style={styles.headerTitle}>{strings.sign_in}</Text>
//             <View style={styles.backWrap}>
//               <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.transparent} size={StyleConfig.headerIconSize} />
//             </View>
//           </View>

//           <ScrollView
//             style={styles.content}>
//             <View style={styles.appIconWrap}>
//               <Image
//                 source={AppImages.icIcon}
//                 resizeMode={'contain'}
//                 style={styles.appIcon} />
//               <Text style={[styles.appDescText, { color: StyleConfig.COLORS.gray20 }]}>{strings.the_world_is_a_party_lets_plan_one_lets_emzee}</Text>
//             </View>
//             <View style={{ alignItems: 'center' }}>
//               <View style={styles.textInputWrap}>
//                 <TextInputMask
//                   type={'custom'}
//                   options={{
//                     mask: Const.MASK_PHONE
//                   }}
//                   style={styles.textH3Regular}
//                   placeholderTextColor={StyleConfig.COLORS.hintTextColor}
//                   placeholder={strings.enter_your_phone_number}
//                   value={this.state.phone}
//                   onChangeText={phone => {
//                     this.setState({ phone })
//                   }}
//                 />
//               </View>

//               <Button
//                 onPress={this.extOnPress}
//                 buttonWrap={styles.buttonWrap}>{strings.continue}</Button>

//             </View>
//           </ScrollView>

//         </SafeAreaView>
//       </>
//     );
//   }
// }
// export default withLoader(LoginScreen);


