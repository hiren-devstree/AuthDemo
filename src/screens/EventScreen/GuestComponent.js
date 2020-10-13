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
    FlatList,
    TouchableOpacity
  } from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import * as Contacts from 'expo-contacts';
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from 'src/helper/styles';
import ContactsListModal from 'src/screens/EventScreen/ContactsListModal';
import AddGuestModal from 'src/screens/EventScreen/AddGuestModal';
import ExpandedComponent from 'src/components/ExpandedComponent';

const {
    set,
    cond,
    startClock,
    stopClock,
    clockRunning,
    block,
    timing, //Updates position node by running timing based animation from a given position to a destination determined by toValue. The animation is expected to last duration milliseconds and use easing function that could be set to one of the nodes exported by the Easing object. The frameTime node will also get updated and represents the progress of animation in milliseconds (how long the animation has lasted so far), similar to the time node that just indicates the last clock time the animation node has been evaluated. Both of these variables are expected to be reset before restarting the animation. Finally finished node will be set to 1 when the position reaches the final value or when frameTime exceeds duration.
    debug,
    Value,
    Clock, //animated node , the value it returns is the current frame timestamp in milliseconds
  } = Animated;
function runTiming(clock, value, dest) {
    const state = {
        finished: new Value(0),
        position: value, //from position given by value
        time: new Value(0),
        frameTime: new Value(0), //frameTime node will also get updated and represents the progress of animation in milliseconds (how long the animation has lasted so far)
    };

    const config = {
        duration: 1000, //animation duration
        toValue: dest, //to position given by dest
        easing: Easing.inOut(Easing.cubic), //easing function
    };
    //block nodes can be used if we want to execute several nodes (commands) in a specific sequence
    return block([
        //check if clock is running already, if not we set variables and start clock
        cond(clockRunning(clock), 0, [
        //cond nodes are equivalent of if ... else
        set(state.finished, 0), //set nodes are equivalent of =
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
        ]),
        timing(clock, state, config), //here we start animation using timing which takes state and config variables
        cond(state.finished, debug('stop clock', stopClock(clock))), //if animation is finished ,we stop clock
        state.position, //return position of animated variable which will map to this.heightIncrease
    ]);
}
const DATA={
    accepted: [0,1,2,3,4,5,6,7,8,9,10],
    rejected: [0,1,2,3],
    tentative: [0,1,2,3,4,5]
}
const HEADER_HEIGHT = 52 ;

class GuestComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:DATA,
            allContacts:[],
            contactListVisible: false,
            contactListVisibleSingle:false,
            showAccepted:false,
            showRejected:false, 
            showTentative:false,
        }
        this.heightAccepted = new Value(HEADER_HEIGHT);
        this.heightRejected = new Value(HEADER_HEIGHT);
        this.heightTentative = new Value(HEADER_HEIGHT);
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

    onAcceptedPress=()=>{
        const {data:{accepted, rejected, tentative}} = this.state;
        if (!this.state.showAccepted) {
            this.heightAccepted = runTiming(new Clock(), new Value(HEADER_HEIGHT), new Value(accepted.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT));
        } else {
            this.heightAccepted = runTiming(new Clock(), new Value(accepted.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT), new Value(HEADER_HEIGHT));
        }
        if (this.state.showRejected) {
            this.heightRejected = runTiming(new Clock(),  new Value(rejected.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT), new Value(HEADER_HEIGHT));
        }
        if (this.state.showTentative) {
            this.heightTentative = runTiming(new Clock(),  new Value(tentative.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT), new Value(HEADER_HEIGHT));
        }
        this.setState({
            showAccepted: !this.state.showAccepted,
            showRejected: false,
            showTentative: false,
        });
    }
    onRejectedPress=()=>{
        const {data:{accepted, rejected, tentative}} = this.state;
        if (!this.state.showRejected) {
            this.heightRejected = runTiming(new Clock(), new Value(HEADER_HEIGHT), new Value(rejected.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT));
        } else {
            this.heightRejected = runTiming(new Clock(), new Value(rejected.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT), new Value(HEADER_HEIGHT));
        }
        if (this.state.showAccepted) {
            this.heightAccepted = runTiming(new Clock(),  new Value(accepted.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT), new Value(HEADER_HEIGHT));
        }
        if (this.state.showTentative) {
            this.heightTentative = runTiming(new Clock(),  new Value(tentative.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT), new Value(HEADER_HEIGHT));
        }
        this.setState({
            showAccepted: false,
            showRejected: !this.state.showRejected,
            showTentative: false,
        });
    }
    onTentativePress=()=>{
        const {data:{accepted, rejected, tentative}} = this.state;
        if (!this.state.showTentative) {
            this.heightTentative = runTiming(new Clock(), new Value(HEADER_HEIGHT), new Value(tentative.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT));
        } else {
            this.heightTentative = runTiming(new Clock(), new Value(tentative.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT), new Value(HEADER_HEIGHT));
        }
        if (this.state.showRejected) {
            this.heightRejected = runTiming(new Clock(),  new Value(rejected.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT), new Value(HEADER_HEIGHT));
        }
        if (this.state.showAccepted) {
            this.heightAccepted = runTiming(new Clock(),  new Value(accepted.length*StyleConfig.countPixelRatio(52)+HEADER_HEIGHT), new Value(HEADER_HEIGHT));
        }
        this.setState({
            showAccepted: false,
            showRejected: false,
            showTentative: !this.state.showTentative,
        });
    }
    render(){
        const { data, allContacts, contactListVisible, contactListVisibleSingle, showAccepted, showRejected, showTentative } = this.state;
        return(
            <ScrollView>
                <View style={[styles.flex1, StyleConfig.card,]}>
                    <ExpandedComponent
                        onTitlePress={this.onAcceptedPress}
                        height={this.heightAccepted}
                        title={()=> <View style={[{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                        <View style={{flex:1, backgroundColor:'red'}}><Text style={styles.headerTitle}>{"Accepted"}</Text></View>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightGreen, }]}>
                                <Text style={styles.textH23Bold}>{`${data.accepted.length}`}</Text>
                            </View>
                            <View style={{width: StyleConfig.headerIconSize, alignItems:'center', justifyContent:'center'}}>
                                <FontAwesome name={showAccepted?"caret-down" : "caret-right"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1} />
                            </View>
                        </View>
                    </View>}
                        content={()=><FlatList 
                            renderSeparator={()=> <View style={{height:2, backgroundColor:"#888"}} />}
                            data={data.accepted}
                            renderItem={(item)=><View style={[styles.row,{ paddingVertical:StyleConfig.countPixelRatio(8)}]}>
                            <FontAwesome name={"user-circle"} size={StyleConfig.countPixelRatio(30)} />
                            <View style={{marginLeft:StyleConfig.countPixelRatio(8)}}>
                                <Text style={styles.textH23Medium}>Michael Thomas</Text>
                                <Text style={styles.textH3Medium}>{`2 Adults \& 2 Children`}</Text>
                            </View>
                        </View>}
                        />}
                    />

                    <ExpandedComponent
                        onTitlePress={this.onRejectedPress}
                        height={this.heightRejected}
                        title={()=> <View
                            style={[{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                               <View style={{flex:1}}>
                                   <Text style={styles.headerTitle}>{"Declined"}</Text>
                                </View>
                               <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
   
                                    <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightRed, }]}>
                                        <Text style={styles.textH23Bold}>{`${data.rejected.length}`}</Text>
                                    </View>
                                    <View style={{width: StyleConfig.headerIconSize, alignItems:'center', justifyContent:'center'}}>
                                            <FontAwesome name={showRejected?"caret-down" : "caret-right"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1} />
                                    </View>
                               </View>
                            </View>}
                        content={()=><FlatList 
                            renderSeparator={()=> <View style={{height:2, backgroundColor:"#888"}} />}
                            data={data.rejected}
                            renderItem={(item)=><View style={[styles.row,{ paddingVertical:StyleConfig.countPixelRatio(8)}]}>
                            <FontAwesome name={"user-circle"} size={StyleConfig.countPixelRatio(30)} />
                            <View style={{marginLeft:StyleConfig.countPixelRatio(8)}}>
                                <Text style={styles.textH23Medium}>Michael Thomas</Text>
                                <Text style={styles.textH3Medium}>{`2 Adults \& 2 Children`}</Text>
                            </View>
                        </View>}
                        />}
                    />
                    <ExpandedComponent
                        onTitlePress={this.onTentativePress}
                        height={this.heightTentative}
                        title={()=>  <View  style={[{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                        <View style={{flex:1}}>
                        <Text style={styles.headerTitle}>{"Tentative"}</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightYellow, }]}>
                                <Text style={styles.textH23Bold}>{`${data.tentative.length}`}</Text>
                            </View>
                            <View style={{width: StyleConfig.headerIconSize, alignItems:'center', justifyContent:'center'}}>
                            <FontAwesome name={showTentative?"caret-down" : "caret-right"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1} />
                            </View>
                        </View>
                        
                    </View>}
                        content={()=><FlatList 
                            renderSeparator={()=> <View style={{height:2, backgroundColor:"#888"}} />}
                            data={data.tentative}
                            renderItem={(item)=><View style={[styles.row,{ paddingVertical:StyleConfig.countPixelRatio(8)}]}>
                            <FontAwesome name={"user-circle"} size={StyleConfig.countPixelRatio(30)} />
                            <View style={{marginLeft:StyleConfig.countPixelRatio(8)}}>
                                <Text style={styles.textH23Medium}>Michael Thomas</Text>
                                <Text style={styles.textH3Medium}>{`2 Adults \& 2 Children`}</Text>
                            </View>
                        </View>}
                        />}
                    />                  


                    {/* <View style={StyleConfig.card}>
                        <View
                         style={[styles.flex1,{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}]}>
                            <View style={{flex:1}}><Text style={styles.headerTitle}>{"Declined"}</Text></View>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>

                            <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightRed, }]}>
                                <Text style={styles.textH23Bold}>{"3"}</Text>
                            </View>
                            <View style={{width: StyleConfig.headerIconSize, alignItems:'center', justifyContent:'center'}}>
                            <FontAwesome name={showRejected?"caret-down" : "caret-right"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1} />
                            </View>
                            </View>
                        </View>
                        {showRejected && <FlatList 
                            renderSeparator={()=> <View style={{height:2, backgroundColor:"#888"}} />}
                            data={data.rejected}
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
                            <View style={{flex:1}}>
                            <Text style={styles.headerTitle}>{"Tentative"}</Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                                <View style={[styles.countCircle, {backgroundColor:StyleConfig.COLORS.lightYellow, }]}>
                                    <Text style={styles.textH23Bold}>{"5"}</Text>
                                </View>
                                <View style={{width: StyleConfig.headerIconSize, alignItems:'center', justifyContent:'center'}}>
                                <FontAwesome name={showTentative?"caret-down" : "caret-right"} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize*1} />
                                </View>
                            </View>
                            
                        </TouchableOpacity>
                        {showTentative && <FlatList 
                            renderSeparator={()=> <View style={{height:2, backgroundColor:"#888"}} />}
                            data={data.tentative}
                            renderItem={(item)=><View style={[styles.row,{ paddingVertical:StyleConfig.countPixelRatio(8)}]}>
                            <FontAwesome name={"user-circle"} size={StyleConfig.countPixelRatio(30)} />
                            <View style={{marginLeft:StyleConfig.countPixelRatio(8)}}>
                                <Text style={styles.textH23Medium}>Michael Thomas</Text>
                                <Text style={styles.textH3Medium}>{`2 Adults \& 2 Children`}</Text>
                            </View>
                        </View>}
                        />}
                    </View> */}
                    <View style={[styles.row, styles.center,{marginVertical:StyleConfig.countPixelRatio(8)}]}>
                    <Button onPress={()=>this.setState({contactListVisible:true})} buttonWrap={{minHeight:StyleConfig.countPixelRatio(36)}}>Import additional guest</Button>
                    </View>
                    <View style={[styles.row, styles.center,{marginVertical:StyleConfig.countPixelRatio(8)}]}>
                    <Button onPress={()=>this.setState({contactListVisibleSingle:true})} buttonWrap={{minHeight:StyleConfig.countPixelRatio(36)}}>Add another guest</Button>
                    </View>
                </View>
                <ContactsListModal visible={contactListVisible} onSelectContact={this.onSelectContact} contacts ={allContacts} onClose={()=> this.setState({contactListVisible:false})} onApply={()=> this.setState({contactListVisible:false})}  />
                {/* <ContactsListModal visible={contactListVisibleSingle} singleSelection={true} onSelectContact={this.onSelectSingleContact} contacts ={allContacts} onClose={()=> this.setState({contactListVisibleSingle:false})} onApply={()=> this.setState({contactListVisibleSingle:false})}  /> */}
                <AddGuestModal 
                    visible={contactListVisibleSingle} 
                    onClose={()=> this.setState({contactListVisibleSingle:false})}
                    onApply={()=> this.setState({contactListVisibleSingle:false})} /> 
            </ScrollView>
        )
    }
}

export default GuestComponent ;
