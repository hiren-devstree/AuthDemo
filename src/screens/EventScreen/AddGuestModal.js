import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
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
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <View style={{flex:1, backgroundColor:"#00000099", justifyContent:'flex-end'}}>
                <View style={[StyleConfig.card,{ minHeight: StyleConfig.height*0.2, marginBottom: StyleConfig.countPixelRatio(-8), marginHorizontal: StyleConfig.countPixelRatio(-8)}]}>
                    <View style={[{ justifyContent:'space-between', flexDirection:'row' ,backgroundColor:StyleConfig.COLORS.purple, padding:StyleConfig.countPixelRatio(16), marginHorizontal: StyleConfig.countPixelRatio( -8), marginTop:StyleConfig.countPixelRatio( -8)}]}>
                        <Text style={[styles.textH2Medium, {color:"#fff", marginLeft:StyleConfig.countPixelRatio(8) }]}>{"Add Guest"}</Text>
                        <TouchableOpacity onPress={props.onClose}>
                            <FontAwesome name={ "close"} 
                                color={"#fff"}
                                size={StyleConfig.countPixelRatio(20)}
                                />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{paddingVertical: StyleConfig.countPixelRatio(8)}}>
                    <View style={[styles.textInputWrap, { width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                        <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                            placeholder={"Guest Name"}
                        />
                    </View>

                    <View style={[styles.textInputWrap, { width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                        <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                            placeholder={"Guest Email"}
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
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <Button onPress={props.onApply} buttonWrap={{width:StyleConfig.width*0.5, minHeight:StyleConfig.countPixelRatio(36)}}>Invite</Button>
                    </View>
                    </ScrollView>

                    
                </View>
            </View>
        </Modal>
      </View>
  );
};

export default AddGuestModal;