
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
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import VendorComponent from 'src/screens/EventScreen/VendorComponent';
import GuestComponent from 'src/screens/EventScreen/GuestComponent';
import PhotosComponent from 'src/screens/EventScreen/PhotosComponent';
import ChatComponent from 'src/screens/EventScreen/ChatComponent';
import withLoader from 'src/redux/actionCreator/withLoader';
import styles from 'src/helper/styles';
import * as Const from 'src/helper/constant';
import strings from 'src/helper/strings';
import Animated from 'react-native-reanimated';
const userId = 50;
const initialLayout = { width: StyleConfig.width };

const vendors = [
  { "id": "vendors1", "name": "Micah\'s Photography", "status": 1 },
  { "id": "vendors2", "name": "Jeremy\'s Catering", "status": 1 },
  { "id": "vendors3", "name": "M20 Banquet", "status": -1 },
  { "id": "vendors4", "name": "Rosy\'s Flowers", "status": 0 }
]
class EventDetailScreen extends Component {
  constructor(props) {
    super(props);

    const { event, hostOfTheEvent } = props.route.params;
    this.state = {
      isCalendarView: true,
      showNewEventCreate: false,
      isAddNewVendor: false,
      event,
      hostOfTheEvent,
      routes: [
        { key: 'vendors', title: 'Vendors' },
        { key: 'guests', title: 'Guests' },
        { key: 'photos', title: 'Photos' },
        { key: 'chat', title: 'Chat' },
      ],
      index: 0
    }
    setTimeout(() => {
      this.setState({ showNewEventCreate: false })
    },
      5000);
  }


  onItemPress = (event) => {

  }
  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <View style={[styles.rowAlignCenter]}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );
          const selected = i == this.state.index;
          return (
            <TouchableOpacity
              key={`page${i}`}
              style={[styles.tabItem, { backgroundColor: StyleConfig.COLORS.purple, borderBottomWidth: 2, borderColor: StyleConfig.COLORS[selected ? 'darkPurple' : 'purple'] }]}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ fontFamily: selected ? StyleConfig.fontBold : StyleConfig.fontRegular, color: '#fff' }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  render() {
    const { hostOfTheEvent, isAddNewVendor, showNewEventCreate, event, index, routes } = this.state;
    const renderScene = SceneMap({
      vendors: () => <VendorComponent initial={isAddNewVendor} vendors={vendors} hostOfTheEvent={hostOfTheEvent} onSavePress={() => this.setState({ isAddNewVendor: false })} onAddNewPress={() => this.setState({ isAddNewVendor: true })} />,
      guests: () => <GuestComponent {...this.props} hostOfTheEvent={hostOfTheEvent} />,
      photos: () => <PhotosComponent {...this.props} hostOfTheEvent={hostOfTheEvent} />,
      chat: () => <ChatComponent {...this.props} hostOfTheEvent={hostOfTheEvent} />
    });
    //
    console.log({ hostOfTheEvent })
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.flex1White}>
          <View style={styles.headerWrap}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}
              style={styles.backWrap}>
              <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.defaultTextColor} size={StyleConfig.headerIconSize} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{event.eventName}</Text>
            <View
              style={styles.backWrap}>
              <FontAwesome name={Const.IC_BACK} color={StyleConfig.COLORS.transparent} size={StyleConfig.headerIconSize} />
            </View>
          </View>
          <View style={styles.content}>
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              renderTabBar={this._renderTabBar}
              onIndexChange={(index) => this.setState({ index })}
              initialLayout={initialLayout}
            />
            {showNewEventCreate && <View style={[styles.card, {
              marginTop: StyleConfig.countPixelRatio(4), position: 'absolute', alignSelf: 'center', zIndex: 99, flexDirection: 'row', flex: 1, alignItems: 'center', margin: StyleConfig.countPixelRatio(16)
            }]}>
              <FontAwesome name={"check-circle"} size={StyleConfig.countPixelRatio(30)} color={StyleConfig.COLORS.lightGreen} />
              <View style={{ marginLeft: StyleConfig.countPixelRatio(12) }}>
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
export default withLoader(EventDetailScreen);
