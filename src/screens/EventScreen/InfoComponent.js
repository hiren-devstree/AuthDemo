import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant'
import { FlatList } from 'react-native-gesture-handler';

const InfoComponent = (props) => {
    const [phone, setPhone] = useState('');
    const [addNew, setIsNew] = useState(props.initial);
    return (
        <View style={styles.flex1}>
            <TouchableOpacity onPress={props.onAddNewPress} style={[styles.center, {
                marginVertical: StyleConfig.countPixelRatio(20),
                paddingVertical: StyleConfig.countPixelRatio(8),

            }]} >
                <Text style={[styles.textH23Medium, { color: StyleConfig.COLORS.purple }]}>{'show Event Info'}</Text>
            </TouchableOpacity>
        </View>
    )
}
module.exports = InfoComponent;

