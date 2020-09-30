import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from 'src/helper/styles';

// {
//     "id": 1001,
//     "hostUserId": 50,
//     "eventName": "Dev's Birthday",
//     "date": "Oct 20,2020",
//     "location": "Honest Banquet",
//     "address": "700 5th Avenue, New York",
//     "eventType": "Birthday",
//     "guest":{
//       "confirmed": 22,
//       "cancelled": 8,
//       "tentative": 12
//     }
//   }
const EventListItem=({event, isHostedByMe, ...props})=>{
    let headerIconName = "";
    let headerIconColor= StyleConfig.COLORS.darkRed ;
    if(event){
        headerIconName = isHostedByMe ? "star" : event.myRes == 1 ? "check" : event.myRes == 0 ? "question" : "close";
        headerIconColor = isHostedByMe || event.myRes == -1 ? StyleConfig.COLORS.darkRed : event.myRes == 1 ? StyleConfig.COLORS.green : StyleConfig.COLORS.yellow ;
    }
    return(
        <TouchableOpacity onPress={props.onPress}>
            {event ?
        <View style={[StyleConfig.card]}>
            <View style={[styles.eventItemRow1, styles.eventItemRow]}>
                <FontAwesome name={"star"} color={StyleConfig.COLORS.transparent} size={StyleConfig.headerIconSize} />
                <Text style={styles.textH23Bold}>{event.eventName}</Text>
                <FontAwesome name={ headerIconName} color={headerIconColor} size={StyleConfig.headerIconSize} />
            </View>
            <View style={styles.row}>
                <View style={[ styles.flex1, styles.eventItemRow ]}>
                    <Text style={[styles.textH3Bold,styles.eventItemRow]}>{event.date}</Text>
                    <Text style={[styles.textH3Regular,styles.eventItemRow]}>{event.location}</Text>
                    <Text style={[styles.textH3Regular,styles.eventItemRow]}>{event.address}</Text>
                    { isHostedByMe &&
                    <View style={[styles.row, styles.eventItemRow]}>
                        <FontAwesome name={"check"} color={StyleConfig.COLORS.green} size={StyleConfig.headerIconSize} />
                        <Text style={[styles.textH3Regular,styles.eventItemRow]}>{event.guest.confirmed}</Text>
                        <View style = {styles.eventItemRow} />
                        <FontAwesome name={"close"} color={StyleConfig.COLORS.darkRed} size={StyleConfig.headerIconSize} />
                        <Text style={[styles.textH3Regular,styles.eventItemRow]}>{event.guest.cancelled}</Text>
                        <View style = {styles.eventItemRow} />
                        <FontAwesome name={"question"} color={StyleConfig.COLORS.yellow} size={StyleConfig.headerIconSize} />
                        <Text style={[styles.textH3Regular,styles.eventItemRow]}>{event.guest.tentative}</Text>
                    </View>
                    }
                </View>
                <View style={styles.center, styles.eventItemRow}>
                    <FontAwesome name={"caret-right"} color={StyleConfig.COLORS.defaultTextColor} size={isHostedByMe ? StyleConfig.headerIconSize*1.5 : StyleConfig.headerIconSize} />
                </View>
            </View>

            
        </View> : <View style={[StyleConfig.card, styles.center, {paddingVertical: StyleConfig.countPixelRatio(16)} ]} >

        <FontAwesome name={"plus-square-o"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1.5} />
        

        </View> }
        </TouchableOpacity>
        
    )
}
module.exports = EventListItem ;

