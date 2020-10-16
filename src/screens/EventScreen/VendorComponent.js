import React,{useState} from 'react';
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
import { TextInputMask } from 'react-native-masked-text';
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';
import * as Const from 'src/helper/constant'
import { FlatList } from 'react-native-gesture-handler';

const VendorComponent=(props)=>{
    const [phone, setPhone]=useState('');
    const [addNew, setIsNew] = useState(props.initial);
    return(
        <ScrollView>
            { addNew ? 
                <View style={[styles.flex1, styles.card,]}>
                    <Text style={styles.textH3Regular}>{'We want your party to be stressfree and painless. Let\'s add everyone who is going to serve at the event. Cateres, Photographers etc..'}</Text>
                    <View style={[styles.textInputWrap, { width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                        <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                            placeholder={"Service Provider (e.g. Photographer)"}
                        />
                    </View>

                    <View style={[styles.textInputWrap, { width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                        <TextInput
                            style={styles.textH3Regular}
                            placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                            placeholder={"Micah\'s Photography"}
                        />
                    </View>

                    <View style={[styles.textInputWrap, { width:null,margin:StyleConfig.countPixelRatio(8)}]}>
                        <TextInputMask
                            type={'custom'}
                            options={{
                                mask: Const.MASK_PHONE
                            }}
                            style={styles.textH3Regular}
                            placeholderTextColor={StyleConfig.COLORS.hintTextColor}
                            placeholder={strings.enter_phone_number}
                            value={phone}
                            onChangeText={phone => {
                                setPhone(phone)
                            }}
                        />
                    </View>
                    <View style={{flexDirection:'row-reverse'}}>
                        <Button onPress={props.onSavePress} buttonWrap={{width:StyleConfig.width*0.25, minHeight:StyleConfig.countPixelRatio(36)}}>Invite</Button>
                    </View>
                </View> : <View style={[styles.flex1, styles.card,]}>
                    <FlatList
                        data={props.vendors}
                        extraData={props}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=> <View style={{flexDirection:'row', borderBottomColor: StyleConfig.COLORS.headerBorderColor, borderBottomWidth:1, alignItems:'center', paddingVertical: StyleConfig.countPixelRatio(8)}}>
                           <FontAwesome name={item.status == 1 ? "check-circle": item.status == -1 ? "times-circle" : "question-circle"} 
                            size={StyleConfig.countPixelRatio(24)} 
                            color={item.status == 1 ? StyleConfig.COLORS.lightGreen : item.status == -1 ? StyleConfig.COLORS.lightRed : StyleConfig.COLORS.lightYellow} /> 
                            <View style={{width: StyleConfig.countPixelRatio(6)}} />
                           <Text style={styles.textH23Medium}>{item.name}</Text> 
                        </View>}
                        ListFooterComponent={()=><TouchableOpacity onPress={props.onAddNewPress} style={[styles.center, { 
                            marginVertical:StyleConfig.countPixelRatio(8),
                            paddingVertical: StyleConfig.countPixelRatio(8),
                            borderWidth:1,
                            borderColor: StyleConfig.COLORS.purple,
                            borderRadius: StyleConfig.countPixelRatio(8),
                            borderStyle: 'dashed',} ]} >
                        <Text style={[styles.textH23Medium,{color:StyleConfig.COLORS.purple}]}>{'Invite another vendor'}</Text> 
                            <FontAwesome name={"plus-square-o"} color={StyleConfig.COLORS.purple} size={StyleConfig.headerIconSize*1.5} />                        
                   </TouchableOpacity>}
                            
                    />
                </View>
            }
        </ScrollView>
    )
}
module.exports = VendorComponent ;

