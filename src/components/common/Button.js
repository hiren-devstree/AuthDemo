import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import StyleConfig from 'src/helper/StyleConfig';
export const Button = (props) => {

    return (
        <TouchableOpacity disabled={props.disabled} style={[styles.buttonWrap, props.buttonWrap]}
            onPress={props.onPress}>
            <Text style={[styles.buttonText, props.buttonText]}>{props.children}</Text>
            {props.showClose && <FontAwesome onPress={props.onClosePress} name={'close'} color={StyleConfig.COLORS.white} size={StyleConfig.fontSizeH2_3} style={{ paddingHorizontal: StyleConfig.countPixelRatio(8) }} />}
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    buttonWrap: {
        height: StyleConfig.countPixelRatio(44),
        width: StyleConfig.width * 0.75,
        borderRadius: StyleConfig.countPixelRatio(8),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: StyleConfig.COLORS.purple,
        backgroundColor: StyleConfig.COLORS.purple,
        borderWidth: 1,
        flexDirection: 'row'
    },
    buttonText: {
        opacity: 0.7,
        fontFamily: StyleConfig.fontBold,
        color: StyleConfig.COLORS.white,
        fontSize: StyleConfig.fontSizeH2
    }
})