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

const SelectPhotoTypeModal = (props) => {
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
            <View style={styles.modalBackLayer}>
                <View style={styles.extModalContainer}>
                    <View style={{paddingVertical: StyleConfig.countPixelRatio(8)}}>
                        <Text style={styles.textH23Medium}>Add Photos From</Text>
                        
                        <TouchableOpacity onPress={props.onPressCamera} style={styles.modalSelectButtonWrap} >
                            <Text style={styles.textH23Medium}>Take picture</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={props.onPressGallery} style={styles.modalSelectButtonWrap} >
                            <Text style={styles.textH23Medium}>Select from Gallery</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={props.onCancel} style={[styles.modalSelectButtonWrap, {borderBottomWidth:0, marginBottom: StyleConfig.countPixelRatio(-12)}]} >
                            <Text style={[styles.textH23Medium, {color: StyleConfig.COLORS.red}]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                    
                </View>
            </View>
        </Modal>
      </View>
  );
};

export default SelectPhotoTypeModal;