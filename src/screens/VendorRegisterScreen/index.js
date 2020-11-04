
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
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant'

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';
import { Button } from 'src/components/common/Button';
import styles from 'src/helper/styles';
class VendorRegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "+91 9033343516"
    }
  }
  render() {
    const { phone } = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.flex1White}>
          <View style={styles.headerWrapSingle}>
            <Text style={styles.headerTitle}>{strings.vendor_profile}</Text>
          </View>
          <ScrollView style={styles.contentWithPadding}>
            <View style={[styles.textInputWrap, { width: null, margin: StyleConfig.countPixelRatio(8) }]}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.your_business_name}
              />
            </View>
            <View style={[styles.textInputWrap, { width: null, margin: StyleConfig.countPixelRatio(8) }]}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.type_of_services}
              />
            </View>
            <View style={{ flexDirection: 'row', margin: StyleConfig.countPixelRatio(8) }} >
              <Button
                disabled={true}
                buttonWrap={{ width: null, paddingLeft: StyleConfig.countPixelRatio(8), backgroundColor: StyleConfig.COLORS.darkPurple, borderColor: StyleConfig.COLORS.darkPurple, }}
                buttonText={{ fontSize: StyleConfig.fontSizeH2_3 }}
                onClosePress={() => alert("Test")}
                showClose
              >{'Photographer'}</Button>
              <Button
                disabled={true}
                buttonWrap={{ width: null, marginHorizontal: StyleConfig.countPixelRatio(4), paddingLeft: StyleConfig.countPixelRatio(8), backgroundColor: StyleConfig.COLORS.darkPurple, borderColor: StyleConfig.COLORS.darkPurple, }}
                buttonText={{ fontSize: StyleConfig.fontSizeH2_3 }}
                onClosePress={() => alert("Test")}
                showClose
              >{'Catering'}</Button>

            </View>
            <View style={[styles.textInputWrap, { width: null, margin: StyleConfig.countPixelRatio(8), marginBottom: StyleConfig.countPixelRatio(20) }]}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                value={phone}
                editable={false}
              />
            </View>
            <Text style={styles.textH23Medium}>{strings.your_location_details}</Text>
            <View style={[styles.textInputWrap, { width: null, margin: StyleConfig.countPixelRatio(8) }]}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.address}
              />
            </View>
            <View style={[styles.textInputWrap, { width: null, margin: StyleConfig.countPixelRatio(8) }]}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.address_line_2}
              />
            </View>
            <View style={[styles.textInputWrap, { width: null, margin: StyleConfig.countPixelRatio(8) }]}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.city}
              />
            </View>
            <View style={styles.row}>
              <View style={[styles.textInputWrap, { width: null, flex: 1, margin: StyleConfig.countPixelRatio(8) }]}>
                <TextInput
                  style={styles.textH3Regular}
                  placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                  placeholder={strings.state}
                />
              </View>
              <View style={[styles.textInputWrap, { width: null, flex: 1, margin: StyleConfig.countPixelRatio(8) }]}>
                <TextInput
                  style={styles.textH3Regular}
                  placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                  placeholder={strings.country}
                />
              </View>
            </View>
            <View style={[styles.center, { marginTop: StyleConfig.countPixelRatio(16) }]}>
              <Button
                buttonWrap={{ backgroundColor: StyleConfig.COLORS.darkPurple, borderColor: StyleConfig.COLORS.darkPurple, marginBottom: StyleConfig.countPixelRatio(44) }}
                onPress={() =>
                  this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: Const.NK_DASHBOARD }] }))}
              >{strings.save}</Button>
            </View>


          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
export default VendorRegisterScreen;