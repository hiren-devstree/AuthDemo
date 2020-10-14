import React, { Component } from 'react'
import { View, Image, Text,StatusBar, SafeAreaView, TouchableOpacity  } from 'react-native'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import {FontAwesome, Ionicons} from '@expo/vector-icons'; 
import styles from 'src/helper/styles';
import * as Const from 'src/helper/constant';
import StyleConfig from 'src/helper/StyleConfig';
class PreviewPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photo : this.props.route.params && this.props.route.params.photoUri ? this.props.route.params.photoUri : undefined // this.props.navigation.getParam('photos'),
        }
    }
    
    render(){
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
                <View style={styles.headerWrap}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()}
                    style={styles.backWrap}>
                        <FontAwesome name={Const.IC_BACK} color={'#333'} size={StyleConfig.headerIconSize} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{"Photo Preview"}</Text>
                    <View style={styles.backWrap}>
                        <Ionicons name={Const.IC_BACK} color={'transparent'} size={StyleConfig.headerIconSize} />
                    </View>
                </View>   
            <View style={styles.flex1}>
            <ReactNativeZoomableView
                    maxZoom={1.5}
                    minZoom={0.5}
                    zoomStep={0.5}
                    initialZoom={1}
                    bindToBorders={true}
                    // onZoomAfter={this.logOutZoomState}
                    style={{
                        padding: 5,
                        backgroundColor: 'white',
                    }}
                >
                <Image
                style={{ flex: 1, width: null, height: '100%' }}
                   
                    source={{uri:this.state.photo}}
                    resizeMode="contain"
                />
            </ReactNativeZoomableView> 
            </View>
                </SafeAreaView>
                </>
    )}
}

export default PreviewPhoto
