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
import strings from 'src/helper/strings';

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
            <View style={{flex:1, backgroundColor:"#00000099", justifyContent:'flex-end', marginBottom:StyleConfig.countPixelRatio(-8)}}>
                <View style={[styles.card,{ height: StyleConfig.height- StyleConfig.convertHeightPerVal(80), borderTopLeftRadius:StyleConfig.countPixelRatio(30), borderTopRightRadius: StyleConfig.countPixelRatio(30),}]}>
                    <View style={styles.extModalHeaderWrap}>
                        <TouchableOpacity style={styles.center} onPress={props.onClose}>
                            <Text style={[styles.textH3Regular, {color: StyleConfig.COLORS.white }]}>{strings.cancel}</Text>
                        </TouchableOpacity>
                        <Text style={[styles.textH2Medium, {color: StyleConfig.COLORS.white}]}>{strings.contacts}</Text>
                        <TouchableOpacity style={styles.center} onPress={props.onApply}>
                            <Text style={[styles.textH3Regular, {color: StyleConfig.COLORS.white}]}>{strings.done}</Text>
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
                                    <View style={{height:StyleConfig.countPixelRatio(4)}} />
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