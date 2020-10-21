import { Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';

const { height, width } = Dimensions.get('window');
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = Platform.OS === 'ios' && (height === 812 || height === 896 || width === 812 || width === 896);
const iPhone5 = (Platform.OS === 'ios' && height === 568);

const smartScale = (value) => {
  let val = height > width ? height : width
  const dev_height = Platform.OS === 'ios' ? iPhoneX ? val - 78 : val : val - 24
  if (deviceType == 'phone') {
    return Math.round((value * dev_height) / 812);
  } else {
    return Math.round((value * dev_height) / 812);
  }
}
const ratioCount = Math.sqrt(height * height + width * width) / 1000;

const widthPer = width / 100;
const heightPer = height / 100;
export default {
  countPixelRatio: (defaultValue) => {
    return smartScale(defaultValue);
  },
  convertWithRatioCount: (size) => size * ratioCount,
  convertWidthPer: (per, isLandscape = false) => per * (isLandscape && width < height ? heightPer : widthPer),
  convertHeightPer: (per, isLandscape = false) => per * (isLandscape && width < height ? widthPer : heightPer),
  convertWidthPerVal: (val) => val * height / 812,
  convertHeightPerVal: (val) => val * width / 375,
  statusBarHeight: Platform.OS === 'ios' ? 60*ratioCount : 44*ratioCount,
  width,
  height,
  fontLight: 'Comfortaa-Light',
  fontRegular: 'Comfortaa-Regular',
  fontMedium: 'Comfortaa-Medium',
  fontSemiBold: 'Comfortaa-SemiBold',
  fontBold: 'Comfortaa-Bold',
  fontSizeH1: 26 * ratioCount,
  fontSizeH2: 20 * ratioCount,
  fontSizeH2_3: 18 * ratioCount,
  fontSizeH3: 15 * ratioCount,
  fontSizeH3_4: 13 * ratioCount,
  fontSizeH4: 10 * ratioCount,
  fontSizeParagraph: 13 * ratioCount,
  iconSize: 26 * ratioCount,
  headerHeight: iPhoneX ? 90 * width / 375 : 60 * width / 375,
  isIphone: Platform.OS === 'ios',
  iPhoneX,
  isPad: Platform.OS === 'ios' && Platform.isPad,
  headerIconSize: ratioCount*30,
  COLORS:{
      transparent:"#00000000",
      rusticRed:"#40010D",
      red: "#BF0436",
      darkRed: "#8C0327",
      darkPurple: "#250A40",
      purple: "#462673",
      purpleTran: "#46267388",
      cyanBlue: "#2196F3",
      green:"#4CAF50",
      yellow: "#FDD835",

      white: "#fff",
      offWhite: "#eee",
      black: "#000",
      gray20: "#333",
      headerBorderColor: "#ccc",
      inputHintColor: "#888",

      defaultTextColor: "#333",
      hintTextColor: "#888",

      lightRed: "#D32F2FCC",
      lightYellow: "#FBC02DCC",
      lightGreen: "#388E3CCC"

  },

  card:{
    backgroundColor: "#fff",
    borderRadius: 5 * ratioCount,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2* ratioCount,
    },
    shadowOpacity: 0.3,
    elevation: 2,
    shadowRadius: 2* ratioCount,
    padding:8* ratioCount,
    margin:8* ratioCount,
    
},
}
