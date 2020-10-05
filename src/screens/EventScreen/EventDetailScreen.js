
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import StyleConfig from 'src/helper/StyleConfig';
import { TabView, SceneMap } from 'react-native-tab-view';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import VendorComponent from 'src/screens/EventScreen/VendorComponent';
import GuestComponent from 'src/screens/EventScreen/GuestComponent';
import PhotosComponent from 'src/screens/EventScreen/PhotosComponent';
import ChatComponent from 'src/screens/EventScreen/ChatComponent';
import withLoader from 'src/redux/actionCreator/withLoader';
import styles from 'src/helper/styles';
import * as Const from 'src/helper/constant';
import strings from 'src/helper/strings';
const userId = 50;
const initialLayout = { width:StyleConfig.width };

const vendors =[
  { "id": "vendors1", "name": "Micah\'s Photography", "status": 1 },
  { "id": "vendors2", "name": "Jeremy\'s Catering", "status": 1 },
  { "id": "vendors3", "name": "M20 Banquet", "status": -1 },
  { "id": "vendors4", "name": "Rosy\'s Flowers", "status": 0 }
]
class EventDetailScreen extends Component{
    constructor(props){
        super(props);
        
        const {event} = props.route.params;
        console.log("event-> ", event)
        this.state={
          isCalendarView: true,
          showNewEventCreate: false,
          isAddNewVendor:false,
          event,
          routes:[
            { key: 'vendors', title: 'Vendors' },
            { key: 'guests', title: 'Guests' },
            { key: 'photos', title: 'Photos' },
            { key: 'chat', title: 'Chat' },
          ],
          index: 0
        }
        setTimeout(()=>{
          this.setState({showNewEventCreate:false})
        },
        5000);
    }

    
    onItemPress= (event) => {
        
    }
    render(){
        const {isAddNewVendor} = this.state ;
        const renderScene = SceneMap({
            vendors:()=> <VendorComponent initial={isAddNewVendor} vendors={vendors} onSavePress={()=> this.setState({isAddNewVendor:false})} onAddNewPress={()=> this.setState({isAddNewVendor:true})} />,
            guests: GuestComponent,
            photos: PhotosComponent,
            chat: ChatComponent
          });
        const { isCalendarView, showNewEventCreate, event, index, routes } = this.state;
        return (
            <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
                  <View style={styles.headerWrap}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()}
                      style={styles.backWrap}>
                      <FontAwesome name={Const.IC_BACK} color={'#333'} size={StyleConfig.headerIconSize} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{event.eventName}</Text>
                    <View
                      style={styles.backWrap}>
                      <Ionicons name={Const.IC_BACK} color={'transparent'} size={StyleConfig.headerIconSize} />
                    </View>
                  </View>                 
                <View style={styles.content}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={(index)=> this.setState({index})}
                        initialLayout={initialLayout}
                    />
                    { showNewEventCreate && <View style={[StyleConfig.card,{ 
                      marginTop: StyleConfig.countPixelRatio(4), position:'absolute', alignSelf:'center',zIndex:99, flexDirection:'row', flex:1, alignItems:'center', margin:StyleConfig.countPixelRatio(16)}]}>
                      <FontAwesome name={"check-circle"} size={StyleConfig.countPixelRatio(30)} color={'#388E3C88'} />
                      <View style={{marginLeft:StyleConfig.countPixelRatio(12)}}>
                        <Text style={styles.textH23Medium}>{}</Text>
                        <Text style={styles.textH23Medium}>{strings.lets_add_your_first_event_now}</Text>
                      </View>
                    </View>}
                </View>
                
              </SafeAreaView>
            </>
          );
    }
}
export default withLoader(EventDetailScreen) ;
