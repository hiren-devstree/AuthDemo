
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import StyleConfig from 'src/helper/StyleConfig';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome} from '@expo/vector-icons';
import withLoader from 'src/redux/actionCreator/withLoader';
import styles from 'src/helper/styles';
class EventScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          isCalendarView: true
        }
    }
    componentDidMount= async()=>{
      this.props.loader(true);
      setTimeout(()=>{
        this.props.loader(false)
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
                        <FontAwesome name={ isCalendarView ? "list" : "calendar"} color={'#333333dd'} size={StyleConfig.countPixelRatio(24)} />
                      </TouchableOpacity>
                  </View>                 
                <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.content}>
                    <View style={[StyleConfig.card,{ flexDirection:'row', alignItems:'center', margin:StyleConfig.countPixelRatio(16)}]}>
                      <FontAwesome name={"check-circle"} size={StyleConfig.countPixelRatio(30)} color={'#388E3C88'} />
                      <View style={{marginLeft:StyleConfig.countPixelRatio(12)}}>
                        <Text style={styles.textH23Medium}>You are all set!</Text>
                        <Text style={styles.textH23Medium}>Lets add your first event now!</Text>
                      </View>
                    </View>

                    <View style={[StyleConfig.card,{  margin:StyleConfig.countPixelRatio(16)}]}>
                        <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                          <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={"#33333399"}
                            placeholder={"Event name e.g. 50th Bob's Birthday"}
                          />
                        </View>
                        <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                          <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={"#33333399"}
                            placeholder={"Location e.g. ABC Banquet Hall"}
                          />
                        </View>
                        <Text style={styles.notesText}>a name your guests and vendors recorgnise</Text>
                        
                        <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                          <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={"#33333399"}
                            placeholder={"address (start typing and we'll look )"}
                          />
                        </View>

                        <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                          <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={"#33333399"}
                            placeholder={"type of event (Bithday)"}
                          />
                        </View>

                        <View style={{flexDirection:'row-reverse'}}>
                          <Button  buttonWrap={{width:StyleConfig.width*0.25, height:StyleConfig.countPixelRatio(36)}}>Next</Button>
                        </View>



                    </View>



                </ScrollView>
              </SafeAreaView>
            </>
          );
    }
}
export default withLoader(EventScreen) ;

// const styles = StyleSheet.create({
  
  
// });
