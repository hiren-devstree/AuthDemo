
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
class InitScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
              <StatusBar barStyle="light-content" />
              <ImageBackground 
                source={AppImages.initBack}
                style={styles.container}
              >
                  <View style={styles.contentInit}>
                      <Image
                        source={AppImages.icIcon}
                        resizeMode={'contain'}
                        style={[styles.appIcon, {tintColor: StyleConfig.COLORS.white}]} />
                      <Text style={styles.appDescText}>{strings.the_world_is_a_party_lets_plan_one_lets_emzee}</Text>
                      <View style={ styles.content}>

                      </View>
                      <Button
                        onPress={() => this.props.navigation.navigate("Login")}
                        buttonWrap={{backgroundColor:"#388E3C", borderColor:"#388E3C", marginBottom:StyleConfig.countPixelRatio(24)}}
                      >{strings.ready_to_plan_lets_emzee}</Button>
                      
                      <Button
                        buttonWrap={{backgroundColor:StyleConfig.COLORS.darkRed, marginBottom:StyleConfig.countPixelRatio(24)}}
                        onPress={() => this.props.navigation.navigate("Login")}
                      >{strings.vendors_help_emzee}</Button>
                      
                      <Button
                        buttonWrap={{width:StyleConfig.width*0.85, backgroundColor:'transparent', borderWidth:0,marginBottom:StyleConfig.countPixelRatio(24)}}
                        onPress={() => this.props.navigation.navigate("Register")}
                      >{strings.are_you_new_at_emzee_sign_up}</Button>
                      
                  </View>
                </ImageBackground>
                
            </>
          );
    }
}
export default InitScreen ;

// const styles = StyleSheet.create({
//   ibContainer:{
//     width:StyleConfig.width,
//     height:StyleConfig.height
//   },
//   content:{
//     flex:1,
//     backgroundColor:'#00000088',
//     alignItems:'center',
//     paddingTop: StyleConfig.countPixelRatio(100)
//   },
//   appIcon:{
//     height:StyleConfig.countPixelRatio(100),
//     width:StyleConfig.countPixelRatio(200),
//     tintColor: '#fff'
//   },
//   sectionTitle1: {
//     fontFamily: StyleConfig.fontSemiBold,
//     fontSize: StyleConfig.fontSizeH3,
//     color: StyleConfig.COLORS.white,
//   },
  
// });