
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
import * as SecureStore from 'expo-secure-store';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';
import { Button } from 'src/components/common/Button';
import SelectServiceTypeModal from 'src/screens/VendorRegisterScreen/SelectServiceTypeModal';
import styles from 'src/helper/styles';
import withVendor from 'src/redux/actionCreator/withVendor';
import ApiManager from 'src/apiManager'
const errorInit = {
  firstName: undefined,
  lastName: undefined,
  phone: undefined,
  businessName: undefined,
  address: undefined,
  address2: undefined,
  city: undefined,
  state: undefined,
  country: undefined,
  type_of_services: undefined
}
const TextInputWrap = ({ error, children }) => <View style={[styles.textInputWrap, { width: null, margin: StyleConfig.countPixelRatio(8), borderColor: error ? StyleConfig.COLORS.red : StyleConfig.COLORS.defaultTextColor }]}>
  {children}</View>

class VendorRegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "+91 9033343516",
      firstName: '',
      lastName: '',
      showSelectServiceTypeModal: false,
      businessName: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      error: {
        ...errorInit
      }
    }
  }
  onSave = async () => {
    const { firstName, lastName, phone, businessName, address, address2, city, state, country } = this.state;
    const { isVendor } = this.props ;
    let error = {
      ...errorInit
    }
    if (phone.length == 0) {
      error.phone = strings.required
    }
    if (firstName.length == 0) {
      error.firstName = strings.required
    }
    if (lastName.length == 0) {
      error.lastName = strings.required
    }

    if (businessName.length == 0 && isVendor ) {
      error.businessName = strings.required
    }
    if (address.length == 0) {
      error.address = strings.required
    }
    if (address2.length == 0) {
      error.address2 = strings.required
    }
    if (city.length == 0) {
      error.city = strings.required
    }
    if (state.length == 0) {
      error.state = strings.required
    }
    if (country.length == 0) {
      error.country = strings.required
    }
    if (JSON.stringify(error) == JSON.stringify(errorInit)) {
      let data = {}
      if(isVendor){
        data = {
          "id": phone,
          businessName, address, address2, city, state, country,
          "initials": "ASS",
          "type": Const.VENDOR
        }
      }else{
        data = {
          "id": phone,
          firstName,
          lastName,
          address, address2, city, state, country,
          "initials": "ASS",
          "type": Const.USER
        }
      }
      console.log("step1")
      let response = await ApiManager.postRegister(data)
      console.log(response)
      await SecureStore.setItemAsync(Const.SS_IS_VENDOR, "true")
      this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: Const.NK_DASHBOARD }] }))
    } else {
      this.setState({ error })
    }






  }
  render() {
    const { firstName,phone, showSelectServiceTypeModal, businessName, address, address2, city, state, country, error } = this.state;
    const {isVendor} = this.props;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.flex1White}>
          <View style={styles.headerWrapSingle}>
            <Text style={styles.headerTitle}>{strings.vendor_profile}</Text>
          </View>
          <ScrollView style={styles.contentWithPadding}>
            {isVendor ? <>
              <TextInputWrap error={error.businessName != undefined}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.your_business_name}
                value={businessName}
                onChangeText={(businessName) => this.setState({ businessName, error: { ...error, businessName: undefined } })}
              />
            </TextInputWrap>
            {error.businessName && <Text style={styles.errorText}>{error.businessName}</Text>}
            <TextInputWrap error={error.type_of_services != undefined}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.type_of_services}
              />
            </TextInputWrap>
            {error.type_of_services && <Text style={styles.errorText}>{error.type_of_services}</Text>}
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
            </> : <>
            <TextInputWrap error={error.firstName != undefined}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.first_name}
                value={firstName}
                onChangeText={(firstName) => this.setState({ firstName, error: { ...error, firstName: undefined } })}
              />
            </TextInputWrap>
            {error.firstName && <Text style={styles.errorText}>{error.firstName}</Text>}
            <TextInputWrap error={error.lastName != undefined}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.last_name}
                value={firstName}
                onChangeText={(lastName) => this.setState({ lastName, error: { ...error, lastName: undefined } })}
              />
            </TextInputWrap>
            {error.lastName && <Text style={styles.errorText}>{error.lastName}</Text>}
            </>}
            
            <TextInputWrap error={error.phone != undefined}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                value={phone}
                editable={false}
              />
            </TextInputWrap>
            {error.phone && <Text style={styles.errorText}>{error.phone}</Text>}
            <Text style={[styles.textH23Medium, { marginTop: StyleConfig.countPixelRatio(20) }]}>{strings.your_location_details}</Text>
            <TextInputWrap error={error.address != undefined}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.address}
                value={address}
                onChangeText={(address) => this.setState({ address, error: { ...error, address: undefined } })}
              />
            </TextInputWrap>
            {error.address && <Text style={styles.errorText}>{error.address}</Text>}
            <TextInputWrap error={error.address2 != undefined}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.address_line_2}
                value={address2}
                onChangeText={(address2) => this.setState({ address2, error: { ...error, address2: undefined } })}
              />
            </TextInputWrap>
            {error.address2 && <Text style={styles.errorText}>{error.address2}</Text>}
            <TextInputWrap error={error.address2 != undefined}>
              <TextInput
                style={styles.textH3Regular}
                placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                placeholder={strings.city}
                value={city}
                onChangeText={(city) => this.setState({ city, error: { ...error, city: undefined } })}
              />
            </TextInputWrap>
            {error.city && <Text style={styles.errorText}>{error.city}</Text>}
            <View style={styles.row}>
              <View style={{ width: null, flex: 1, }}>
                <View style={[styles.textInputWrap, { width: null, flex: 1, margin: StyleConfig.countPixelRatio(8), borderColor: error.state != undefined ? StyleConfig.COLORS.red : StyleConfig.COLORS.defaultTextColor }]}>
                  <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                    placeholder={strings.state}
                    value={state}
                    onChangeText={(state) => this.setState({ state, error: { ...error, state: undefined } })}
                  />
                </View>
                {error.state && <Text style={styles.errorText}>{error.state}</Text>}
              </View>
              <View style={{ width: null, flex: 1, }}>
                <View style={[styles.textInputWrap, { width: null, flex: 1, margin: StyleConfig.countPixelRatio(8), borderColor: error.country != undefined ? StyleConfig.COLORS.red : StyleConfig.COLORS.defaultTextColor }]}>
                  <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                    placeholder={strings.country}
                    value={country}
                    onChangeText={(country) => this.setState({ country, error: { ...error, country: undefined } })}
                  />
                </View>
                {error.country && <Text style={styles.errorText}>{error.country}</Text>}
              </View>
            </View>
            <View style={[styles.center, { marginTop: StyleConfig.countPixelRatio(16) }]}>
              <Button
                buttonWrap={{ backgroundColor: StyleConfig.COLORS.darkPurple, borderColor: StyleConfig.COLORS.darkPurple, marginBottom: StyleConfig.countPixelRatio(44) }}
                onPress={this.onSave}
              >{strings.save}</Button>
            </View>


          </ScrollView>
          <SelectServiceTypeModal
            visible={showSelectServiceTypeModal}
            onClose={() => this.setState({ showSelectServiceTypeModal: false })}
            onApply={() => this.setState({ showSelectServiceTypeModal: false })} />
        </SafeAreaView>
      </>
    );
  }
}
export default withVendor(VendorRegisterScreen);