import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import StyleConfig from 'src/helper/StyleConfig';
export const Button=(props)=>{

    return (
        <TouchableOpacity style={[styles.buttonWrap, props.buttonWrap]} 
            onPress={props.onPress}>
            <Text style={[styles.buttonText, props.buttonText]}>{props.children}</Text>
        </TouchableOpacity>
                      
    );
}

const styles = StyleSheet.create({
    buttonWrap:{
        height: StyleConfig.countPixelRatio(44), 
        width: StyleConfig.width*0.75, 
        borderRadius: StyleConfig.countPixelRatio(8),
        alignItems:'center',
        justifyContent: 'center',
        borderColor:StyleConfig.COLORS.purple,
        backgroundColor:StyleConfig.COLORS.purple,
        borderWidth:1
    },
    buttonText:{ 
        opacity:0.7,
        fontFamily: StyleConfig.fontBold,
        color: StyleConfig.COLORS.white,
        fontSize: StyleConfig.fontSizeH2 
    }
})