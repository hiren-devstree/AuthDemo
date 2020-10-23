
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import StyleConfig from 'src/helper/StyleConfig';

import {FontAwesome, Ionicons} from '@expo/vector-icons';
import withLoader from 'src/redux/actionCreator/withLoader';
import styles from 'src/helper/styles';
import * as Const from 'src/helper/constant';
import AddEventComponent from 'src/screens/EventScreen/AddEventComponent';
import EventListItem from 'src/screens/EventScreen/EventListItem';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

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
          isCalendarView: true,
          showWelcome: false,
          data: DUMMY_DATA,
          calendarHeight: 0,
          selectedDate: new Date()
        }
        this.setState({showWelcome:true})
        setTimeout(()=>{
          this.setState({showWelcome:false})
        },
        5000);
    }
    componentDidMount= async()=>{
      // this.props.loader(true);
      // setTimeout(()=>{
      //   this.setState({data:DUMMY_DATA})
      //   this.props.loader(false)
      // }, 2000);
      
    }
    onSavePress=()=> {
      this.props.loader(true);
      setTimeout(()=>{
        this.setState({data:DUMMY_DATA})
        this.props.loader(false)
      }, 2000);
    }

    onAddPress=()=>{
        this.setState({data: []})
    }
    onItemPress= (event) => {
        if(event==null){
            this.setState({data: []})
        } else  if(event.hostUserId == userId){
            this.props.navigation.navigate(Const.NK_EVENT_DETAILS, {event})
        }
    }
    render(){
      const { isCalendarView, showWelcome, data, selectedDate, calendarHeight } = this.state;
        return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView style={styles.flex1White}>
                  <View style={styles.headerWrap}>
                      <View
                        style={styles.backWrap}>
                        <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.transparent} size={StyleConfig.headerIconSize} />
                      </View>
                      <Text style={styles.headerTitle}>{strings.events}</Text>
                      <TouchableOpacity 
                        onPress={()=> this.setState({isCalendarView: !isCalendarView})}
                        style={styles.backWrap}>
                        <FontAwesome name={ isCalendarView ? Const.IC_EVENT_LIST : Const.IC_EVENT_CALENDAR} color={'#333333dd'} size={StyleConfig.countPixelRatio(24)} />
                      </TouchableOpacity>
                  </View>    
                  {isCalendarView &&<View style={{ flex:1 }} >
                      <Calendar
                        theme={{
                          calendarBackground: '#fcfcfc',
                          textSectionTitleColor: StyleConfig.COLORS.purple,
                          textSectionTitleDisabledColor: '#ff0000', // "#d9e1e8"
                          selectedDayBackgroundColor: StyleConfig.COLORS.darkPurple, // "#00adf5"
                          selectedDayTextColor: '#ffffff',
                          todayTextColor: StyleConfig.COLORS.darkPurple,
                          dayTextColor: '#2d4150',
                          textDisabledColor: '#d9e1e8',
                          dotColor: StyleConfig.COLORS.darkPurple,
                          selectedDotColor: '#ffffff',
                          arrowColor: StyleConfig.COLORS.darkPurple,
                          disabledArrowColor: '#d9e1e8',
                          monthTextColor: StyleConfig.COLORS.darkPurple,
                          indicatorColor: StyleConfig.COLORS.darkPurple,
                          textDayFontFamily: StyleConfig.fontLight,
                          textMonthFontFamily: StyleConfig.fontBold,
                          textDayHeaderFontFamily: StyleConfig.fontMedium,
                          textTodayFontFamily: StyleConfig.fontBold,
                          textDayFontSize: 16,
                          textMonthFontSize: 16,
                          textDayHeaderFontSize: 13
                        }}
                        onDayPress={({dateString}) => this.setState({ selectedDate:dateString })}
                        markedDates={{
                          [selectedDate]: {selected: true},
                          '2020-10-17': {marked: true},
                          '2020-10-18': {marked: true}
                          
                        }}
                      />
                      
                      <FlatList 
                        data={data}
                        extraData={this.state}
                        keyExtractor={(item,index)=>item.id.toString()}
                        renderItem={({item,index})=> <EventListItem onPress={()=> this.onItemPress(item)} event={item} isHostedByMe={item.hostUserId == userId} /> }
                        ListFooterComponent={() => <EventListItem onPress={ () => this.onItemPress(null)}/>}
                      />
                    </View>}             
                {!isCalendarView  && <ScrollView
                  style={styles.content}>
                    { data.length == 0 &&  <AddEventComponent onSavePress={this.onSavePress} />}
                    {data.length > 0 && <FlatList 
                        data={data}
                        extraData={this.state}
                        keyExtractor={(item,index)=>item.id.toString()}
                        renderItem={({item,index})=> <EventListItem onPress={()=> this.onItemPress(item)} event={item} isHostedByMe={item.hostUserId == userId} /> }
                        ListFooterComponent={() => <EventListItem onPress={ () => this.onItemPress(null)}/>}
                      />
                    }
                    { showWelcome && <View style={[styles.modalContainer,{ position:'absolute',}]}>
                      <FontAwesome name={"check-circle"} size={StyleConfig.countPixelRatio(30)} color={StyleConfig.COLORS.lightGreen} />
                      <View style={styles.modalTextWrap}>
                        <Text style={styles.textH23Medium}>{strings.you_are_all_set}</Text>
                        <Text style={styles.textH23Medium}>{strings.lets_add_your_first_event_now}</Text>
                      </View>
                    </View>}
                </ScrollView>
                }
                
              </SafeAreaView>
            </>
          );
    }
}
export default withLoader(EventScreen) ;
