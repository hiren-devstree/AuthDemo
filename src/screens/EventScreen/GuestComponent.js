import React, {useEffect, useState} from 'react';
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

  import * as Contacts from 'expo-contacts';
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from 'src/helper/styles';
import ContactsListModal from 'src/screens/EventScreen/ContactsListModal';
class GuestComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allContacts:[],
            contactListVisible: false
        }
    }

    componentDidMount= async ()=>{
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Emails,Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
                let newData = data.map((item, index)=> ({...item, selected:false}))
                this.setState({allContacts:newData})
            }
        }
    }
    render(){
        const { allContacts, contactListVisible } = this.state;
        return(
            <ScrollView>
                <View style={[styles.flex1, StyleConfig.card,]}>
                    <TouchableOpacity style={[styles.flex1, StyleConfig.card,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                        <Text style={styles.headerTitle}>{"Accepted"}</Text>
                        <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightGreen, }]}>
                            <Text style={styles.textH23Medium}>{"25"}</Text>
                        </View>
                        <FontAwesome name={"caret-down"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1.5} />
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex1, StyleConfig.card,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                        <Text style={styles.headerTitle}>{"Declined"}</Text>
                        <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightRed, }]}>
                            <Text style={styles.textH23Medium}>{"9"}</Text>
                        </View>
                        <FontAwesome name={"caret-down"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1.5} />
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flex1, StyleConfig.card,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                        <Text style={styles.headerTitle}>{"Tentative"}</Text>
                        <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightYellow, }]}>
                            <Text style={styles.textH23Medium}>{"18"}</Text>
                        </View>
                        <FontAwesome name={"caret-down"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1.5} />
                        
                    </TouchableOpacity>
                    <View style={[styles.row, styles.center,{marginVertical:StyleConfig.countPixelRatio(8)}]}>
                    <Button onPress={()=>this.setState({contactListVisible:true})} buttonWrap={{minHeight:StyleConfig.countPixelRatio(36)}}>Import additional guest</Button>
                    </View>
                    <View style={[styles.row, styles.center,{marginVertical:StyleConfig.countPixelRatio(8)}]}>
                    <Button onPress={this.props.onSavePress} buttonWrap={{minHeight:StyleConfig.countPixelRatio(36)}}>Add another guest</Button>
                    </View>
                </View>
                <ContactsListModal visible={contactListVisible} contacts ={allContacts} onClose={()=> this.setState({contactListVisible:false})} />
            </ScrollView>
        )
    }
}

export default GuestComponent ;
