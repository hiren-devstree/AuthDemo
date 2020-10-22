import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import StyleConfig from 'src/helper/StyleConfig';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant'

const AddGuestModal = (props) => {
    const [phone, setPhone]= useState('')
    return (
      <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.modalBackLayer}>
                <View style={styles.extModalContainer}>
                    <View style={styles.extModalHeaderWrap}>
                        <TouchableOpacity style={styles.center} onPress={props.onClose}>
                            <Text style={[styles.textH3Regular, {color: StyleConfig.COLORS.white, marginLeft:StyleConfig.countPixelRatio(8) }]}>{strings.cancel}</Text>
                        </TouchableOpacity>
                        <Text style={[styles.textH2Medium, {color: StyleConfig.COLORS.white, marginLeft:StyleConfig.countPixelRatio(8) }]}>{strings.add_guest}</Text>
                        <TouchableOpacity style={styles.center} onPress={props.onClose}>
                            <Text style={[styles.textH3Regular, {color: StyleConfig.COLORS.white, marginLeft:StyleConfig.countPixelRatio(8) }]}>{strings.done}</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{paddingVertical: StyleConfig.countPixelRatio(8)}}>
                    <View style={[styles.textInputWrap, { width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                        <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                            placeholder={strings.guest_name}
                        />
                    </View>

                    <View style={[styles.textInputWrap, { width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                        <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                            placeholder={strings.guest_email}
                        />
                    </View>

                    <View style={[styles.textInputWrap, { width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                        <TextInputMask
                            type={'custom'}
                            options={{
                                mask: Const.MASK_PHONE
                            }}
                            style={styles.textH3Regular}
                            placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                            placeholder={strings.enter_phone_number}
                            value={phone}
                            onChangeText={phone => {
                                setPhone(phone)
                            }}
                        />
                    </View>
                    {/* <View style={styles.rowJustifyCenter}>
                    <Button onPress={props.onApply} buttonWrap={{width:StyleConfig.width*0.5, minHeight:StyleConfig.countPixelRatio(36)}}>Invite</Button>
                    </View> */}
                    </ScrollView>

                    
                </View>
            </View>
        </Modal>
      </View>
  );
};

export default AddGuestModal;