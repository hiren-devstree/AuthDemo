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
            <View style={{flex:1, backgroundColor:"#00000099", justifyContent:'center'}}>
                <View style={[styles.card,{ minHeight: StyleConfig.height*0.4, maxHeight:StyleConfig.height*0.8}]}>
                    <View style={[{ justifyContent:'space-between', flexDirection:'row' ,backgroundColor:StyleConfig.COLORS.purple, padding:StyleConfig.countPixelRatio(16), marginHorizontal: StyleConfig.countPixelRatio( -8), marginTop:StyleConfig.countPixelRatio( -8)}]}>
                        <View style={styles.rowAlignCenter}>
                        <TouchableOpacity onPress={props.onClose}>
                            <FontAwesome name={ "close"} 
                                color={StyleConfig.COLORS.white}
                                size={StyleConfig.countPixelRatio(20)}
                                />
                        </TouchableOpacity>
                        <Text style={[styles.textH2Medium, {color: StyleConfig.COLORS.white, marginLeft:StyleConfig.countPixelRatio(8) }]}>{"Select from Contacts"}</Text>
                        </View>
                        <TouchableOpacity onPress={props.onApply}>
                            <FontAwesome name={ "check"} 
                                color={StyleConfig.COLORS.white}
                                size={StyleConfig.countPixelRatio(22)}
                                />
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={props.contacts}
                        extraData={props}
                        renderItem={({item, index})=><TouchableOpacity 
                            onPress={()=> props.onSelectContact(index)}
                        style={{
                            padding: StyleConfig.countPixelRatio(8),
                            flexDirection:'row',
                            justifyContent:'space-between',
                            backgroundColor: index%2==0? StyleConfig.COLORS.white : StyleConfig.COLORS.offWhite, alignItems:'center'}}>
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