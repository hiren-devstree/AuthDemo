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
import * as SecureStore from 'expo-secure-store';

import { CommonActions } from '@react-navigation/native';
import * as Const from 'src/helper/constant';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import styles from 'src/helper/styles';
class ProfileScreen extends Component {
    constructor(props) {
        super(props);
    }
    onLogout = async () => {
        await SecureStore.deleteItemAsync(Const.SS_IS_LOGIN)
        await SecureStore.deleteItemAsync(Const.SS_IS_VENDOR)
        this.props.navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: Const.NK_INIT }] }))
    }
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.headerTitle}>Profile</Text>
                    </View>
                    <ScrollView style={styles.scrollView}>
                        <TouchableOpacity
                            onPress={this.onLogout}
                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.headerTitle}>Logout</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}
export default ProfileScreen;