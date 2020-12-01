
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

import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import styles from 'src/helper/styles';
import * as Const from 'src/helper/constant';
import strings from 'src/helper/strings';
import { FontAwesome } from '@expo/vector-icons';
const ITEM_OBJ = {
  "id": 0,
  "name": "",
  "contacts": []
}
class GuestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "id": 1,
          "name": "childhood",
          "contacts": [{}, {}]
        },
        {
          "id": 2,
          "name": "Prompt Group",
          "contacts": [{}, {}]
        }
      ]
    }
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={styles.headerWrapSingle}>
            <Text style={styles.headerTitle}>Guests</Text>
          </View>

          <View style={[styles.flex1, { paddingTop: StyleConfig.countPixelRatio(8) }]}>
            <FlatList
              data={this.state.data}
              extraData={this.state}
              keyExtractor={(item, index) => `mainguestlist${index}`}
              ListFooterComponent={() => <TouchableOpacity onPress={() =>  console.log("footer item press")}
                style={[styles.card, styles.center, {
                  paddingVertical: StyleConfig.countPixelRatio(8),
                  borderWidth: 1,
                  borderColor: StyleConfig.COLORS.purple,
                  borderStyle: 'dashed',
                }]} >
                <FontAwesome name={"plus-square-o"} color={StyleConfig.COLORS.purple} size={StyleConfig.headerIconSize * 1} />
              </TouchableOpacity>}
              renderItem={({ item, index }) =>
                <View style={[styles.cardRow, { paddingHorizontal: StyleConfig.countPixelRatio(12), paddingVertical: 12 }]}>
                  <View style={styles.flex1}>
                    <Text style={styles.textH23Medium}>{item.name}</Text>
                    <Text style={styles.textH3Regular}>{`${item.contacts.length} contacts`}</Text>
                  </View>
                  <View style={styles.center}>
                    <FontAwesome onPress={() => console.log("pencil icon press")} name={'pencil'} size={StyleConfig.countPixelRatio(20)} color={StyleConfig.COLORS.defaultTextColor} />
                  </View>
                </View>}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
export default GuestScreen;
