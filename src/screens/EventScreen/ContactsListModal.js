import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  FlatList,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity
} from "react-native";
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from 'src/helper/styles';


const ContactsListModal = (props) => {
    const [allContacts, setAllContacts]= useState([]);
    
    return (
      <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <View style={{flex:1, backgroundColor:"#00000099"}}>
                <View style={[StyleConfig.card,{ height: StyleConfig.height*0.8, marginVertical: StyleConfig.height*0.1}]}>
                    <View style={[{ justifyContent:'space-between', flexDirection:'row' ,backgroundColor:StyleConfig.COLORS.purple, padding:StyleConfig.countPixelRatio(16), marginHorizontal: StyleConfig.countPixelRatio( -8), marginTop:StyleConfig.countPixelRatio( -8)}]}>
                        <View style={styles.row}>
                        <TouchableOpacity onPress={props.onClose}>
                            <FontAwesome name={ "close"} 
                                color={"#fff"}
                                size={StyleConfig.countPixelRatio(20)}
                                />
                        </TouchableOpacity>
                        <Text style={[styles.textH2Medium, {color:"#fff", marginLeft:StyleConfig.countPixelRatio(8) }]}>{"Select from Contacts"}</Text>
                        </View>
                        <TouchableOpacity onPress={props.onApply}>
                            <FontAwesome name={ "check"} 
                                color={"#fff"}
                                size={StyleConfig.countPixelRatio(22)}
                                />
                        </TouchableOpacity>
                        
                        
                    </View>
                    <FlatList
                        data={allContacts.length ? allContacts : props.contacts}
                        extraData={allContacts}
                        renderItem={({item, index})=><TouchableOpacity 
                            onPress={()=> props.onSelectContact(index)}
                        style={{
                            padding:8,
                            flexDirection:'row',
                            justifyContent:'space-between',
                            backgroundColor: index%2==0? "#fff":"#eee", alignItems:'center'}}>
                                <View> 
                                    <Text style={styles.textH3Bold}>{`${item.name}`}</Text>
                                    <Text style={styles.textH3Medium}>{item.phoneNumbers ? item.phoneNumbers[0].number:''}</Text>
                                </View>
                                { !props.singleSelection && <FontAwesome name={ item.selected == true ? "check-square-o" : "square-o"} 
                                    size={StyleConfig.countPixelRatio(20)}
                                />}
                                {props.singleSelection && item.singleSelect && <FontAwesome name={ "check"} 
                                    size={StyleConfig.countPixelRatio(20)}
                                /> }
                            </TouchableOpacity>}
                    />
                </View>
            </View>
        </Modal>
      </View>
  );
};

export default ContactsListModal;