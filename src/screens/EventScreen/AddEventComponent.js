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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant'
import moment from 'moment';


class AddEventComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showDateTimePicker:false,
            eventDateTime: null
        }

    }
    onDateConfirm=(date) => {
        let eventDateTime = moment(date).format("DD-mm-yyyy hh:MM A")


        this.setState({eventDateTime, showDateTimePicker: false})
    }
    render(){
        const {onSavePress} = this.props;
        const {showDateTimePicker, eventDateTime} = this.state;
        return(
            <View style={[StyleConfig.card,{  margin:StyleConfig.countPixelRatio(16)}]}>
                <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                    <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                    placeholder={"Event name e.g. 50th Bob's Birthday"}
                    />
                </View>
                <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                    <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                    placeholder={"Location e.g. ABC Banquet Hall"}
                    />
                </View>
                <Text style={styles.notesText}>a name your guests and vendors recorgnise</Text>
                <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                    <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                    placeholder={"address (start typing and we'll look )"}
                    />
                </View>
                <View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                    <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor} 
                    placeholder={"type of event (Bithday)"}
                    />
                </View>
                <TouchableOpacity onPress={()=> this.setState({showDateTimePicker:true})} style={[styles.textInputWrap, {flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                    <Text style={[styles.textH3Regular, { color: eventDateTime == null ? StyleConfig.COLORS.hintTextColor : StyleConfig.COLORS.defaultTextColor }]}>{eventDateTime == null ? strings.select_event_date_time : eventDateTime.toString() }</Text>
                    <FontAwesome name={Const.IC_EVENT_CALENDAR} color={'#333333dd'} size={StyleConfig.countPixelRatio(24)} />
                </TouchableOpacity>
                <View style={{flexDirection:'row-reverse'}}>
                    <Button onPress={onSavePress} buttonWrap={{width:StyleConfig.width*0.25, height:StyleConfig.countPixelRatio(36)}}>Save</Button>
                </View>
                <DateTimePickerModal
                    isVisible={showDateTimePicker}
                    mode="datetime"
                    headerTextIOS={strings.select_event_date_time}
                    onConfirm={this.onDateConfirm}
                    onCancel={()=> this.setState({showDateTimePicker: false}) }
                />
            </View>
        )
    }
}
export default AddEventComponent;

