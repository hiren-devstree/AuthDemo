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
const errorInit = {
    eventDateTime: undefined,
    eventName: undefined,
    location: undefined,
    address: undefined,
    typeOfEvent: undefined
}
const TextInputWrap = ({ error, children }) => <View style={[styles.textInputWrap, { flex: 1, width: null, margin: StyleConfig.countPixelRatio(8), borderColor: error ? StyleConfig.COLORS.red : StyleConfig.COLORS.defaultTextColor }]}>
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
            typeOfEvent: '',
            error: {
                ...errorInit
            }
        }

    }
    onDateConfirm = (date) => {
        let eventDateTime = moment(date).format("DD-MM-yyyy")
        this.setState({ eventDateTime, showDateTimePicker: false })
    }

    onSubmit = () => {
        const { onSavePress } = this.props;
        const { showDateTimePicker, eventDateTime, eventName, location, address, typeOfEvent } = this.state;
        let error = {
            ...errorInit
        }
        if (eventName.length == 0) {
            error.eventName = strings.required
        }
        if (eventDateTime == null) {
            error.eventDateTime = strings.required
        }
        if (location.length == 0) {
            error.location = strings.required
        }
        if (address.length == 0) {
            error.address = strings.required
        }
        if (typeOfEvent.length == 0) {
            error.typeOfEvent = strings.required
        }

        if (JSON.stringify(error) == JSON.stringify(errorInit)) {
            let data = {
                startdate: eventDateTime,
                name: eventName,
                location,
                address,
                typeOfEvent
            }
            console.log({ data })
            onSavePress(data)
        } else {
            this.setState({ error })
        }

    }

    render() {
        const { showDateTimePicker, eventDateTime, eventName, location, address, typeOfEvent, error } = this.state;
        return (
            <View style={[styles.card, { margin: StyleConfig.countPixelRatio(16) }]}>
                <TextInputWrap error={error.eventName != undefined}>
                    <TextInput
                        style={styles.textH3Regular}
                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                        placeholder={strings.event_name_placeholder}
                        value={eventName}
                        onChangeText={(eventName) => this.setState({ eventName, error: { ...error, eventName: undefined } })}
                    />
                </TextInputWrap>
                {error.eventName && <Text style={styles.errorText}>{error.eventName}</Text>}
                <TextInputWrap error={error.location != undefined}>
                    <TextInput
                        style={styles.textH3Regular}
                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                        placeholder={strings.location_placeholder}
                        value={location}
                        onChangeText={(location) => this.setState({ location, error: { ...error, location: undefined } })}
                    />
                </TextInputWrap>
                {error.location && <Text style={styles.errorText}>{error.location}</Text>}
                <Text style={styles.notesText}>{strings.a_name_your_guests_and_vendors_recorgnise}</Text>
                <TextInputWrap error={error.address != undefined}>
                    <TextInput
                        style={styles.textH3Regular}
                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                        placeholder={strings.address_placeholder}
                        value={address}
                        onChangeText={(address) => this.setState({ address, error: { ...error, address: undefined } })}
                    />
                </TextInputWrap>
                {error.address && <Text style={styles.errorText}>{error.address}</Text>}
                <TextInputWrap error={error.typeOfEvent != undefined}>
                    <TextInput
                        style={styles.textH3Regular}
                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                        placeholder={strings.type_of_event_placeholder}
                        value={typeOfEvent}
                        onChangeText={(typeOfEvent) => this.setState({ typeOfEvent, error: { ...error, typeOfEvent: undefined } })}
                    />
                </TextInputWrap>
                {error.typeOfEvent && <Text style={styles.errorText}>{error.typeOfEvent}</Text>}
                <TouchableOpacity onPress={() => this.setState({ showDateTimePicker: true, error: { ...error, eventDateTime: undefined } })} style={[styles.textInputWrap, {
                    flex: 1, flexDirection: 'row', alignItems: 'center',
                    justifyContent: 'space-between', width: null, margin: StyleConfig.countPixelRatio(8),
                    borderColor: error.eventDateTime != undefined ? StyleConfig.COLORS.red : StyleConfig.COLORS.defaultTextColor
                }]}>
                    <Text style={[styles.textH3Regular, { color: eventDateTime == null ? StyleConfig.COLORS.hintTextColor : StyleConfig.COLORS.defaultTextColor }]}>{eventDateTime == null ? strings.select_event_date_time : eventDateTime.toString()}</Text>
                    <FontAwesome name={Const.IC_EVENT_CALENDAR} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.countPixelRatio(24)} />
                </TouchableOpacity>
                {error.eventDateTime && <Text style={styles.errorText}>{error.eventDateTime}</Text>}
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

