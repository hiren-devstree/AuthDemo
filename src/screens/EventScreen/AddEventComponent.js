import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import { FontAwesome } from '@expo/vector-icons';
import styles from 'src/helper/styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant'
import moment from 'moment';
const TextInputWrap=({children})=><View style={[styles.textInputWrap, {flex:1, width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                {children}</View>
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
            <View style={[styles.card,{  margin:StyleConfig.countPixelRatio(16)}]}>
                <TextInputWrap>
                    <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                    placeholder={strings.event_name_placeholder}
                    />
                </TextInputWrap>
                <TextInputWrap>
                    <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                    placeholder={strings.location_placeholder}
                    />
                </TextInputWrap>
                <Text style={styles.notesText}>{strings.a_name_your_guests_and_vendors_recorgnise}</Text>
                <TextInputWrap>
                    <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                    placeholder={strings.address_placeholder}
                    />
                </TextInputWrap>
                <TextInputWrap>
                    <TextInput
                    style={styles.textH3Regular}
                    placeholderTextColor={StyleConfig.COLORS.hintTextColor} 
                    placeholder={strings.type_of_event_placeholder}
                    />
                </TextInputWrap>
                <TouchableOpacity onPress={()=> this.setState({showDateTimePicker:true})} style={[styles.textInputWrap, {flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                    <Text style={[styles.textH3Regular, { color: eventDateTime == null ? StyleConfig.COLORS.hintTextColor : StyleConfig.COLORS.defaultTextColor }]}>{eventDateTime == null ? strings.select_event_date_time : eventDateTime.toString() }</Text>
                    <FontAwesome name={Const.IC_EVENT_CALENDAR} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.countPixelRatio(24)} />
                </TouchableOpacity>
                <View style={styles.rowReverse}>
                    <Button onPress={onSavePress} buttonWrap={{width:StyleConfig.width*0.25, height:StyleConfig.countPixelRatio(36)}}>{strings.save}</Button>
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

