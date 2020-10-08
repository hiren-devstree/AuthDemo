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
import { FlatList } from 'react-native-gesture-handler';
class GuestComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allContacts:[],
            contactListVisible: false,
            contactListVisibleSingle:false,
            showAccepted:false,
            showRejected:false, 
            showTentative:false
        }
    }

    componentDidMount= async ()=>{
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Emails,Contacts.Fields.PhoneNumbers],
            });

            if (data.length > 0) {
                let newData = data.map((item, index)=> ({...item, selected:false, singleSelect:false}))
                this.setState({allContacts:newData})
            }
        }
    }
    onSelectContact=(index)=>{
        const { allContacts } = this.state ;
        allContacts[index].selected = !allContacts[index].selected;
        this.setState({ allContacts })
    }
    onSelectSingleContact=(index)=>{
        let { allContacts } = this.state ;
        let item=allContacts[index];
        allContacts = allContacts.map((item)=> ({...item, singleSelect:false}))
        allContacts[index].singleSelect = !item.singleSelect;
        this.setState({ allContacts })
    }

    render(){
        const { allContacts, contactListVisible, contactListVisibleSingle, showAccepted, showRejected, showTentative } = this.state;
        return(
            <ScrollView>
                <View style={[styles.flex1, StyleConfig.card,]}>
                    <View style={StyleConfig.card}>
                        <TouchableOpacity onPress={()=> this.setState({showAccepted: !showAccepted, showRejected: false, showTentative: false})} style={[styles.flex1,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                            <Text style={styles.headerTitle}>{"Accepted"}</Text>
                            <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightGreen, }]}>
                                <Text style={styles.textH23Medium}>{"25"}</Text>
                            </View>
                            <View style={{width: StyleConfig.headerIconSize, alignItems:'center', justifyContent:'center'}}>
                            <FontAwesome name={showAccepted?"caret-down" : "caret-right"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1} />
                            </View>
                        </TouchableOpacity>
                        {showAccepted && <FlatList 
                            renderSeparator={()=> <View style={{height:2, backgroundColor:"#888"}} />}
                            data={[0,1,2,3,4,5]}
                            renderItem={(item)=><View style={[styles.row,{ paddingVertical:StyleConfig.countPixelRatio(8)}]}>
                            <FontAwesome name={"user-circle"} size={StyleConfig.countPixelRatio(30)} />
                            <View style={{marginLeft:StyleConfig.countPixelRatio(8)}}>
                                <Text style={styles.textH23Medium}>Michael Thomas</Text>
                                <Text style={styles.textH3Medium}>{`2 Adults \& 2 Children`}</Text>
                            </View>
                        </View>}
                        />}
                    </View>

                    <View style={StyleConfig.card}>
                        <TouchableOpacity onPress={()=> this.setState({showAccepted: false, showRejected: !showRejected, showTentative: false})} style={[styles.flex1,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                            <Text style={styles.headerTitle}>{"Declined"}</Text>
                            <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightRed, }]}>
                                <Text style={styles.textH23Medium}>{"25"}</Text>
                            </View>
                            <View style={{width: StyleConfig.headerIconSize, alignItems:'center', justifyContent:'center'}}>
                            <FontAwesome name={showRejected?"caret-down" : "caret-right"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1} />
                            </View>
                        </TouchableOpacity>
                        {showRejected && <FlatList 
                            renderSeparator={()=> <View style={{height:2, backgroundColor:"#888"}} />}
                            data={[0,1,2]}
                            renderItem={(item)=><View style={[styles.row,{ paddingVertical:StyleConfig.countPixelRatio(8)}]}>
                            <FontAwesome name={"user-circle"} size={StyleConfig.countPixelRatio(30)} />
                            <View style={{marginLeft:StyleConfig.countPixelRatio(8)}}>
                                <Text style={styles.textH23Medium}>Michael Thomas</Text>
                                <Text style={styles.textH3Medium}>{`2 Adults \& 2 Children`}</Text>
                            </View>
                        </View>}
                        />}
                    </View>

                    <View style={StyleConfig.card}>
                        <TouchableOpacity onPress={()=> this.setState({showAccepted: false, showRejected: false, showTentative: !showTentative})} style={[styles.flex1,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                            <Text style={styles.headerTitle}>{"Declined"}</Text>
                            <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightYellow, }]}>
                                <Text style={styles.textH23Medium}>{"25"}</Text>
                            </View>
                            <View style={{width: StyleConfig.headerIconSize, alignItems:'center', justifyContent:'center'}}>
                            <FontAwesome name={showTentative?"caret-down" : "caret-right"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1} />
                            </View>
                        </TouchableOpacity>
                        {showTentative && <FlatList 
                            renderSeparator={()=> <View style={{height:2, backgroundColor:"#888"}} />}
                            data={[0,1,2,3,4]}
                            renderItem={(item)=><View style={[styles.row,{ paddingVertical:StyleConfig.countPixelRatio(8)}]}>
                            <FontAwesome name={"user-circle"} size={StyleConfig.countPixelRatio(30)} />
                            <View style={{marginLeft:StyleConfig.countPixelRatio(8)}}>
                                <Text style={styles.textH23Medium}>Michael Thomas</Text>
                                <Text style={styles.textH3Medium}>{`2 Adults \& 2 Children`}</Text>
                            </View>
                        </View>}
                        />}
                    </View>
                    <View style={[styles.row, styles.center,{marginVertical:StyleConfig.countPixelRatio(8)}]}>
                    <Button onPress={()=>this.setState({contactListVisible:true})} buttonWrap={{minHeight:StyleConfig.countPixelRatio(36)}}>Import additional guest</Button>
                    </View>
                    <View style={[styles.row, styles.center,{marginVertical:StyleConfig.countPixelRatio(8)}]}>
                    <Button onPress={()=>this.setState({contactListVisibleSingle:true})} buttonWrap={{minHeight:StyleConfig.countPixelRatio(36)}}>Add another guest</Button>
                    </View>
                </View>
                <ContactsListModal visible={contactListVisible} onSelectContact={this.onSelectContact} contacts ={allContacts} onClose={()=> this.setState({contactListVisible:false})} onApply={()=> this.setState({contactListVisible:false})}  />
                <ContactsListModal visible={contactListVisibleSingle} singleSelection={true} onSelectContact={this.onSelectSingleContact} contacts ={allContacts} onClose={()=> this.setState({contactListVisibleSingle:false})} onApply={()=> this.setState({contactListVisibleSingle:false})}  />
            </ScrollView>
        )
    }
}

export default GuestComponent ;
