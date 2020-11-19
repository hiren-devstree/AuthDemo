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
const TextInputWrap = ({ children }) => <View style={[styles.textInputWrap, { flex: 1, width: null, margin: StyleConfig.countPixelRatio(8) }]}>
    {children}</View>
class AddEventComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDateTimePicker: false,
            eventDateTime: null,
            eventName: '',
            location: '',
            address: '',
            typeOfEvent: ''
        }

    }
    onDateConfirm = (date) => {
        let eventDateTime = moment(date).format("DD-MM-yyyy")
        this.setState({ eventDateTime, showDateTimePicker: false })
    }

    onSubmit = () => {
        const { onSavePress } = this.props;
        const { showDateTimePicker, eventDateTime, eventName, location, address, typeOfEvent } = this.state;
        let data = {
            startdate: eventDateTime,
            name: eventName,
            location,
            address,
            typeOfEvent
        }
        console.log({ data })
        onSavePress(data)
    }

    render() {
        const { showDateTimePicker, eventDateTime, eventName, location, address, typeOfEvent } = this.state;
        return (
            <View style={[styles.card, { margin: StyleConfig.countPixelRatio(16) }]}>
                <TextInputWrap>
                    <TextInput
                        style={styles.textH3Regular}
                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                        placeholder={strings.event_name_placeholder}
                        value={eventName}
                        onChangeText={(eventName) => this.setState({ eventName })}
                    />
                </TextInputWrap>
                <TextInputWrap>
                    <TextInput
                        style={styles.textH3Regular}
                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                        placeholder={strings.location_placeholder}
                        value={location}
                        onChangeText={(location) => this.setState({ location })}
                    />
                </TextInputWrap>
                <Text style={styles.notesText}>{strings.a_name_your_guests_and_vendors_recorgnise}</Text>
                <TextInputWrap>
                    <TextInput
                        style={styles.textH3Regular}
                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                        placeholder={strings.address_placeholder}
                        value={address}
                        onChangeText={(address) => this.setState({ address })}
                    />
                </TextInputWrap>
                <TextInputWrap>
                    <TextInput
                        style={styles.textH3Regular}
                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                        placeholder={strings.type_of_event_placeholder}
                        value={typeOfEvent}
                        onChangeText={(typeOfEvent) => this.setState({ typeOfEvent })}
                    />
                </TextInputWrap>
                <TouchableOpacity onPress={() => this.setState({ showDateTimePicker: true })} style={[styles.textInputWrap, { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: null, margin: StyleConfig.countPixelRatio(8) }]}>
                    <Text style={[styles.textH3Regular, { color: eventDateTime == null ? StyleConfig.COLORS.hintTextColor : StyleConfig.COLORS.defaultTextColor }]}>{eventDateTime == null ? strings.select_event_date_time : eventDateTime.toString()}</Text>
                    <FontAwesome name={Const.IC_EVENT_CALENDAR} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.countPixelRatio(24)} />
                </TouchableOpacity>
                <View style={styles.rowReverse}>
                    <Button onPress={this.onSubmit} buttonWrap={{ width: StyleConfig.width * 0.25, height: StyleConfig.countPixelRatio(36) }}>{strings.save}</Button>
                </View>
                <DateTimePickerModal
                    isVisible={showDateTimePicker}
                    mode="date"
                    headerTextIOS={strings.select_event_date_time}
                    onConfirm={this.onDateConfirm}
                    onCancel={() => this.setState({ showDateTimePicker: false })}
                />
            </View>
        )
    }
}
export default AddEventComponent;

