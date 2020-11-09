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
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant'

const SelectServiceTypeModal = (props) => {
    const [phone, setPhone] = useState('')
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
                                <Text style={[styles.textH3Regular, { color: StyleConfig.COLORS.white, marginLeft: StyleConfig.countPixelRatio(8) }]}>{strings.cancel}</Text>
                            </TouchableOpacity>
                            <Text style={[styles.textH2Medium, { color: StyleConfig.COLORS.white, marginLeft: StyleConfig.countPixelRatio(8) }]}>{`Select Service Type`}</Text>
                            <TouchableOpacity style={styles.center} onPress={props.onClose}>
                                <Text style={[styles.textH3Regular, { color: StyleConfig.COLORS.white, marginLeft: StyleConfig.countPixelRatio(8) }]}>{strings.done}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SelectServiceTypeModal;