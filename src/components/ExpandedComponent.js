import React, {useState, useEffect} from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import {Text, View, TouchableOpacity} from 'react-native';
import StyleConfig from 'src/helper/StyleConfig';
import styles from 'src/helper/styles';
const ExpandedComponent = ({onTitlePress, height, title, content}) => {
    return (
        <Animated.View style={[ styles.card ,{height: height}]}>
            {/*this is title part */}
            <TouchableOpacity onPress={onTitlePress} style={{height:StyleConfig.countPixelRatio(44)}}>{title()}</TouchableOpacity>
            {/* this is content part */}
            <Animated.ScrollView>{content()}</Animated.ScrollView>
        </Animated.View>
    );
};
module.exports = ExpandedComponent ;

