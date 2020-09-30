'use strict';
import React from 'react';
import { StyleSheet } from 'react-native'
import StyleConfig from './StyleConfig';
const paddingHori = { paddingHorizontal: StyleConfig.countPixelRatio(16) }
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: StyleConfig.COLORS.white
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    center: {
        alignItems:'center',
        justifyContent:'center'
    },
    flex1:{
        flex:1
    },
    flexRow1:{
        flexDirection:'row',
        flex:1
    },
    content:{
        flex:1
    },
    contentWithPadding:{
        ...paddingHori,
        flex:1
    },
    contentInit:{
        flex:1,
        backgroundColor:'#00000088',
        alignItems:'center',
        paddingTop: StyleConfig.countPixelRatio(100)
    },
    appIcon:{
        height:StyleConfig.countPixelRatio(100),
        width:StyleConfig.countPixelRatio(200)
    },
    appDescText: {
        fontFamily: StyleConfig.fontSemiBold,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLORS.white,
    },
    headerWrapSingle: {
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'center', 
        borderBottomWidth: 0.5, 
        borderBottomColor: StyleConfig.COLORS.headerBorderColor
    },
    headerWrap: {
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'space-between', 
        borderBottomWidth: 0.5, 
        borderBottomColor: StyleConfig.COLORS.headerBorderColor
    },
    backWrap:{
        paddingHorizontal:StyleConfig.countPixelRatio(16), 
        paddingVertical:StyleConfig.countPixelRatio(4)
    },
    appIconWrap:{
        alignItems:'center',
        marginVertical:StyleConfig.countPixelRatio(50) 
    },
    buttonWrap:{
        width: StyleConfig.width*0.5,
        marginVertical:StyleConfig.countPixelRatio(28)
    },
    headerTitle:{
        fontFamily: StyleConfig.fontMedium,
        fontSize: StyleConfig.fontSizeH2,
        opacity: 0.8
    },
    textInputWrap:{
        borderWidth:0.5,
        borderRadius: StyleConfig.countPixelRatio(4),
        paddingVertical:StyleConfig.countPixelRatio(2),
        paddingHorizontal:StyleConfig.countPixelRatio(8),
        margin:StyleConfig.countPixelRatio(16),
        width: StyleConfig.width*0.7,
        justifyContent:'center',
        minHeight: StyleConfig.countPixelRatio(48)
    },
    textH3Regular:{
        fontFamily: StyleConfig.fontRegular,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLORS.defaultTextColor
    },
    textH3Bold:{
        fontFamily: StyleConfig.fontBold,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLORS.defaultTextColor
    },
    linkWrap:{
        marginLeft: StyleConfig.countPixelRatio(6),
        borderBottomWidth:1,
        borderColor: StyleConfig.COLORS.cyanBlue
    },
    linkText:{
        fontFamily: StyleConfig.fontSemiBold,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLORS.cyanBlue
    },
    textH23Medium:{
        fontFamily: StyleConfig.fontMedium,
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.COLORS.defaultTextColor
    },
    textH23Bold:{
        fontFamily: StyleConfig.fontBold,
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.COLORS.defaultTextColor
    },
    notesText:{
        fontFamily: StyleConfig.fontRegular,
        fontSize: StyleConfig.fontSizeH4,
        marginTop: StyleConfig.countPixelRatio(-6),
        marginLeft: StyleConfig.countPixelRatio(8),
        marginBottom: StyleConfig.countPixelRatio(8)
    },
    eventItemRow1:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: StyleConfig.COLORS.headerBorderColor,
        borderBottomWidth:0.5
    },
    eventItemRow:{
        padding: StyleConfig.countPixelRatio(4)
    }
});

module.exports = styles ;