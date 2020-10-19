import StyleConfig from "src/helper/StyleConfig"
import Constants from 'expo-constants'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConfig.COLORS.black,
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    flex: 0.2,
    backgroundColor: StyleConfig.COLORS.transparent,
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight / 2,
  },
  sideBar: {
    flex: 0.2,
    backgroundColor: StyleConfig.COLORS.transparent,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  bottomBar: {
    backgroundColor: StyleConfig.COLORS.transparent,
    alignSelf: 'center',
    padding: StyleConfig.countPixelRatio(10),
  },
  noPermissions: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    padding: StyleConfig.countPixelRatio(10),
  },
  toggleButton: {
    flex: 0.25,
    height: StyleConfig.countPixelRatio(40),
    marginHorizontal: StyleConfig.countPixelRatio(2),
    marginBottom: StyleConfig.countPixelRatio(10),
    marginTop: StyleConfig.countPixelRatio(20),
    padding: StyleConfig.countPixelRatio(5),
    alignItems: 'center',
    justifyContent: 'center',
  }
}) 
