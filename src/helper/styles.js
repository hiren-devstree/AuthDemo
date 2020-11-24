'use strict';
import React from 'react';
import { StyleSheet } from 'react-native'
import StyleConfig from './StyleConfig';
const paddingHori = { paddingHorizontal: StyleConfig.countPixelRatio(16) }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLORS.white
    },
    rowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowJustifyCenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    rowReverse: {
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    modalBackLayer: {
        flex: 1,
        backgroundColor: "#00000099",
        justifyContent: 'flex-end'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex1: {
        flex: 1
    },
    flex1White: {
        flex: 1,
        backgroundColor: StyleConfig.COLORS.white
    },
    row: {
        flexDirection: 'row',
    },
    flexRow1: {
        flexDirection: 'row',
        flex: 1
    },
    content: {
        flex: 1
    },
    contentWithPadding: {
        ...paddingHori,
        flex: 1
    },
    contentInit: {
        flex: 1,
        backgroundColor: '#00000088',
        alignItems: 'center',
        paddingTop: StyleConfig.countPixelRatio(100)
    },
    appIcon: {
        height: StyleConfig.countPixelRatio(100),
        width: StyleConfig.countPixelRatio(200)
    },
    modalSelectButtonWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: StyleConfig.countPixelRatio(16),
        borderBottomWidth: 1,
        borderColor: StyleConfig.COLORS.headerBorderColor
    },
    appDescText: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontSemiBold,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLORS.white,
    },
    headerWrapSingle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: StyleConfig.statusBarHeight,
        shadowColor: "#555",
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    modalContainer: {
        ...StyleConfig.card,
        marginTop: StyleConfig.countPixelRatio(4),
        alignSelf: 'center',
        zIndex: 99,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        margin: StyleConfig.countPixelRatio(16)
    },
    extModalContainer: {
        ...StyleConfig.card,
        marginBottom: 0,
        borderTopLeftRadius: StyleConfig.countPixelRatio(30),
        borderTopRightRadius: StyleConfig.countPixelRatio(30),
        overflow: 'hidden',
        minHeight: StyleConfig.height - StyleConfig.convertHeightPerVal(80)
    },
    extModalHeaderWrap: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: StyleConfig.COLORS.purple,
        padding: StyleConfig.countPixelRatio(16),
        marginHorizontal: StyleConfig.countPixelRatio(-8),
        marginTop: StyleConfig.countPixelRatio(-8)
    },
    modalTextWrap: {
        marginLeft: StyleConfig.countPixelRatio(12)
    },
    headerWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: StyleConfig.statusBarHeight,
        shadowColor: "#555",
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    backWrap: {
        paddingHorizontal: StyleConfig.countPixelRatio(16),
        paddingVertical: StyleConfig.countPixelRatio(4)
    },
    appIconWrap: {
        alignItems: 'center',
        marginVertical: StyleConfig.countPixelRatio(50)
    },
    buttonWrap: {
        width: StyleConfig.width * 0.5,
        marginVertical: StyleConfig.countPixelRatio(28)
    },
    headerTitle: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontMedium,
        fontSize: StyleConfig.fontSizeH2,
        opacity: 0.8
    },
    errorText: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontMedium,
        fontSize: StyleConfig.fontSizeH3_4,
        opacity: 0.8,
        color: StyleConfig.COLORS.red,
        marginLeft: StyleConfig.countPixelRatio(8),
        marginTop: StyleConfig.countPixelRatio(-4)
    },
    card: {
        ...StyleConfig.card, overflow: 'hidden'
    },
    cardRow: {
        ...StyleConfig.card,
        flexDirection: 'row'

    },

    textInputWrap: {
        borderWidth: 0.5,
        borderRadius: StyleConfig.countPixelRatio(4),
        paddingVertical: StyleConfig.countPixelRatio(2),
        paddingHorizontal: StyleConfig.countPixelRatio(8),
        margin: StyleConfig.countPixelRatio(16),
        width: StyleConfig.width * 0.7,
        justifyContent: 'center',
        minHeight: StyleConfig.countPixelRatio(48)
    },
    textH3Regular: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontRegular,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLORS.defaultTextColor
    },
    textH3Bold: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontBold,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLORS.defaultTextColor
    },
    linkWrap: {
        marginLeft: StyleConfig.countPixelRatio(6),
        borderBottomWidth: 1,
        borderColor: StyleConfig.COLORS.cyanBlue
    },
    linkText: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontSemiBold,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLORS.cyanBlue
    },
    textH2Medium: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontMedium,
        fontSize: StyleConfig.fontSizeH2,
        color: StyleConfig.COLORS.defaultTextColor
    },
    textH23Medium: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontMedium,
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.COLORS.defaultTextColor
    },
    textH23Bold: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontBold,
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.COLORS.defaultTextColor
    },
    textH3Medium: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontMedium,
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLORS.defaultTextColor
    },
    notesText: {
        includeFontPadding: false,
        fontFamily: StyleConfig.fontRegular,
        fontSize: StyleConfig.fontSizeH4,
        marginTop: StyleConfig.countPixelRatio(-4),
        marginLeft: StyleConfig.countPixelRatio(8),
        marginBottom: StyleConfig.countPixelRatio(8)
    },
    eventItemRow1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: StyleConfig.COLORS.headerBorderColor,
        borderBottomWidth: 0.5
    },

    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: StyleConfig.countPixelRatio(8)
    },

    eventItemRow: {
        padding: StyleConfig.countPixelRatio(4)
    },

    countCircle: {
        paddingVertical: StyleConfig.countPixelRatio(4),
        paddingHorizontal: StyleConfig.countPixelRatio(4),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: StyleConfig.countPixelRatio(40),
        minHeight: StyleConfig.countPixelRatio(40),
        minWidth: StyleConfig.countPixelRatio(40),
    },
    chatProfilePhoto: {
        height: StyleConfig.countPixelRatio(48),
        width: StyleConfig.countPixelRatio(48),
        borderRadius: StyleConfig.countPixelRatio(24)
    }
});

module.exports = styles;