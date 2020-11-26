
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TextInput, TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import StyleConfig from 'src/helper/StyleConfig';

import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import styles from 'src/helper/styles';
import * as Const from 'src/helper/constant';
import { FontAwesome } from '@expo/vector-icons';
class SettingsScreen extends Component {
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
  onProfile = () => {
    this.props.navigation.navigate(Const.NK_PROFILE)
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={styles.headerWrapSingle}>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>

          <View style={[styles.flex1, { paddingTop: StyleConfig.countPixelRatio(8) }]}>
            <TouchableOpacity
              onPress={this.onProfile}
              style={[styles.cardRow, { paddingHorizontal: StyleConfig.countPixelRatio(12), paddingVertical: 12 }]}>
              <View style={styles.flex1}>
                <Text style={styles.textH23Medium}>{'Profile'}</Text>
              </View>
              <View style={styles.center}>
                <FontAwesome name={"angle-right"} size={StyleConfig.countPixelRatio(20)} color={StyleConfig.COLORS.defaultTextColor} />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
export default SettingsScreen;