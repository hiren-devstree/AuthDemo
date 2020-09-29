
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput, TouchableOpacity
} from 'react-native';

import StyleConfig from 'src/helper/StyleConfig';


import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import withLoader from 'src/redux/actionCreator/withLoader';
import styles from 'src/helper/styles';
import * as Const from 'src/helper/constant';
import InitialViewComponent from 'src/screens/EventScreen/InitialViewComponent';
class EventScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          isCalendarView: true,
          showWelcome:false
        }
    }
    componentDidMount= async()=>{
      // this.props.loader(true);
      // setTimeout(()=>{
      //   this.props.loader(false)
      // },
      // 5000);
      this.setState({showWelcome:true})
      setTimeout(()=>{
        this.setState({showWelcome:false})
      },
      5000);
    }
    render(){
      const {isCalendarView} = this.state;
        return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
                  <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                      <View
                        style={styles.backWrap}>
                        <Ionicons name={"ios-chevron-back-sharp"} color={'transparent'} size={StyleConfig.countPixelRatio(24)} />
                      </View>
                      <Text style={styles.headerTitle}>Event</Text>
                      <TouchableOpacity 
                        onPress={()=> this.setState({isCalendarView: !isCalendarView})}
                        style={styles.backWrap}>
                        <FontAwesome name={ isCalendarView ? Const.IC_EVENT_LIST : Const.IC_EVENT_CALENDAR} color={'#333333dd'} size={StyleConfig.countPixelRatio(24)} />
                      </TouchableOpacity>
                  </View>                 
                <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.content}>
                    <InitialViewComponent />

                    { this.state.showWelcome && <View style={[StyleConfig.card,{ marginTop: StyleConfig.countPixelRatio(-10), position:'absolute', alignSelf:'center',zIndex:99, flexDirection:'row', flex:1, alignItems:'center', margin:StyleConfig.countPixelRatio(16)}]}>
                      <FontAwesome name={"check-circle"} size={StyleConfig.countPixelRatio(30)} color={'#388E3C88'} />
                      <View style={{marginLeft:StyleConfig.countPixelRatio(12)}}>
                        <Text style={styles.textH23Medium}>You are all set!</Text>
                        <Text style={styles.textH23Medium}>Lets add your first event now!</Text>
                      </View>
                    </View>}
                </ScrollView>
                
              </SafeAreaView>
            </>
          );
    }
}
export default withLoader(EventScreen) ;

// const styles = StyleSheet.create({
  
  
// });
