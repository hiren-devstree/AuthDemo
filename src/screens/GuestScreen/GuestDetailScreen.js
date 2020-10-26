
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
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
import ContactsListModal from 'src/components/ContactsListModal';
import * as Const from 'src/helper/constant';
import * as Contacts from 'expo-contacts';
const TextInputWrap = ({ children }) => <View style={[styles.textInputWrap, { width: null, margin: StyleConfig.countPixelRatio(8) }]}>
    {children}</View>
const TextInputWrap2 = ({ children }) => <View style={[styles.textInputWrap,
{ width: StyleConfig.width * 0.5 - StyleConfig.countPixelRatio(32), margin: StyleConfig.countPixelRatio(8) }]}>
    {children}</View>
class GuestDetailScreen extends Component {
    constructor(props) {
        super(props);
        let item = props.route.params.item;
        this.state = {
            ...item,
            allContacts: [],
            contactListVisible: false
        }
    }
    componentDidMount = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
                let newData = data.map((item, index) => ({ ...item, selected: false, singleSelect: false }))
                console.log({ newData: newData[0] })
                this.setState({ allContacts: newData })
            }
        }
    }
    onSelectContact = (index) => {
        const { allContacts } = this.state;
        allContacts[index].selected = !allContacts[index].selected;
        let contacts = allContacts.filter((item) => item.selected)

        this.setState({ allContacts, contacts })
    }
    render() {
        const { name, allContacts, contactListVisible } = this.state
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.flex1White}>
                    <View style={styles.headerWrap}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                            style={styles.backWrap}>
                            <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize} />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>{strings.guest_details}</Text>
                        <View
                            style={styles.backWrap}>
                            <FontAwesome name={'check'} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize} />
                        </View>
                    </View>
                    <View style={[styles.flex1]}>
                        <View style={[styles.card, styles.flex1]}>
                            <TextInputWrap>
                                <TextInput
                                    style={styles.textH3Regular}
                                    value={name}
                                    onChangeText={(name) => this.setState({ name })}
                                    placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                                    placeholder={strings.enter_guest_group_name}
                                />
                            </TextInputWrap>
                            <View style={styles.row}>
                                <TextInputWrap2>
                                    <TextInput
                                        style={styles.textH3Regular}
                                        value={name}
                                        keyboardType={'phone-pad'}
                                        onChangeText={(name) => this.setState({ name })}
                                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                                        placeholder={'Adult'}
                                    />
                                </TextInputWrap2>
                                <TextInputWrap2>
                                    <TextInput
                                        style={styles.textH3Regular}
                                        value={name}
                                        keyboardType={'phone-pad'}
                                        onChangeText={(name) => this.setState({ name })}
                                        placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                                        placeholder={'Children'}
                                    />
                                </TextInputWrap2>

                            </View>

                            <View style={[styles.rowAlignCenter, { justifyContent: 'space-between', padding: StyleConfig.countPixelRatio(8) }]}>
                                <Text style={styles.textH23Medium}>{`${strings.guest_list} (${this.state.contacts.length})`}</Text>
                                <FontAwesome onPress={() => this.setState({ contactListVisible: true })} name={'plus-square-o'} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.countPixelRatio(30)} />
                            </View>
                            <FlatList
                                data={this.state.contacts}
                                keyExtractor={({ item, index }) => `guestlist${index}`}
                                renderItem={({ item, index }) =>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingHorizontal: StyleConfig.countPixelRatio(10),
                                        paddingVertical: StyleConfig.countPixelRatio(10),
                                        backgroundColor: index % 2 == 0 ? StyleConfig.COLORS.white : StyleConfig.COLORS.offWhite
                                    }}>
                                        <View>
                                            <Text style={styles.textH3Regular}>{`${item.firstName} ${item.lastName}`}</Text>
                                            <View style={{ height: 4 }} />
                                            <Text style={styles.textH3Regular}>{`${item.phoneNumbers ? item.phoneNumbers[0].number : ''}`}</Text>
                                        </View>

                                        <FontAwesome onPress={() => alert("Do you want to delete contact?")}
                                            name={'trash-o'} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.countPixelRatio(26)} />
                                    </View>}
                            />
                        </View>

                    </View>
                    <ContactsListModal visible={contactListVisible} onSelectContact={this.onSelectContact} contacts={allContacts} onClose={() => this.setState({ contactListVisible: false })} onApply={() => this.setState({ contactListVisible: false })} />
                </SafeAreaView>
            </>
        );
    }
}
export default GuestDetailScreen;