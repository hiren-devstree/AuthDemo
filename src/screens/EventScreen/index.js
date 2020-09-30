
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import StyleConfig from 'src/helper/StyleConfig';

import {FontAwesome, Ionicons} from '@expo/vector-icons';
import withLoader from 'src/redux/actionCreator/withLoader';
import styles from 'src/helper/styles';
import * as Const from 'src/helper/constant';
import InitialViewComponent from 'src/screens/EventScreen/InitialViewComponent';
import EventListItem from 'src/screens/EventScreen/EventListItem';
import { FlatList } from 'react-native-gesture-handler';
import strings from 'src/helper/strings';
const userId = 50;
const DUMMY_DATA = [
  {
    "id": 1001,
    "hostUserId": 50,
    "eventName": "Dev's Birthday",
    "date": "Oct 20,2020",
    "location": "Honest Banquet",
    "address": "700 5th Avenue, New York",
    "eventType": "Birthday",
    "guest":{
      "confirmed": 22,
      "cancelled": 8,
      "tentative": 12
    }
  },
  {
    "id": 1002,
    "hostUserId": 49,
    "eventName": "James & Eline Anniversary",
    "date": "Oct 25,2020",
    "location": "Mango Hotel",
    "address": "133, West 55th street. New York",
    "eventType": "Anniversary",
    "guest": null,
    "myRes": 1 // accepted
  },
  {
    "id": 1003,
    "hostUserId": 49,
    "eventName": "Edan & Robin Anniversary",
    "date": "Oct 25,2020",
    "location": "Mango Hotel",
    "address": "133, West 55th street. New York",
    "eventType": "Anniversary",
    "guest": null,
    "myRes": -1 // rejected
  },
  {
    "id": 1004,
    "hostUserId": 49,
    "eventName": "Amelia's Birthday",
    "date": "Nov 09,2020",
    "location": "7Star Hotel",
    "address": "15, West 24th street. New York",
    "eventType": "Birthday",
    "guest": null,
    "myRes": 0 // tentative
  }
]
class EventScreen extends Component{
    constructor(props){
        super(props);
        this.state={
          isCalendarView: false,
          showWelcome: true,
          data: []
        }
    }
    componentDidMount= async()=>{
      this.setState({showWelcome:true})
      setTimeout(()=>{
        this.setState({showWelcome:false})
      },
      5000);
      
    }
    onSavePress=()=> {
      this.props.loader(true);
      setTimeout(()=>{
        this.setState({data:DUMMY_DATA})
        this.props.loader(false)
      }, 2000);
    }
    render(){
      const { isCalendarView, showWelcome, data } = this.state;
        return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
                  <View style={styles.headerWrap}>
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
                    { data.length == 0 &&  <InitialViewComponent onSavePress={this.onSavePress} />}
                    {data.length > 0 && !isCalendarView && 
                      <FlatList 
                        data={data}
                        extraData={this.state}
                        keyExtractor={(item,index)=>item.id.toString()}
                        renderItem={({item,index})=> <EventListItem onPress={()=> Alert.alert(`You have Selected ${item.eventName}`)} event={item} isHostedByMe={item.hostUserId == userId} /> }
                        ListFooterComponent={() => <EventListItem onPress={()=> Alert.alert("You want to add new Event?")}/>}
                      />
                    
                    }
                    { showWelcome && <View style={[StyleConfig.card,{ 
                      marginTop: StyleConfig.countPixelRatio(4), position:'absolute', alignSelf:'center',zIndex:99, flexDirection:'row', flex:1, alignItems:'center', margin:StyleConfig.countPixelRatio(16)}]}>
                      <FontAwesome name={"check-circle"} size={StyleConfig.countPixelRatio(30)} color={'#388E3C88'} />
                      <View style={{marginLeft:StyleConfig.countPixelRatio(12)}}>
                        <Text style={styles.textH23Medium}>{strings.you_are_all_set}</Text>
                        <Text style={styles.textH23Medium}>{strings.lets_add_your_first_event_now}</Text>
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
