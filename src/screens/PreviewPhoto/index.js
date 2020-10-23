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
            showHideDelete: false,
            topPadding:0,
            photo : this.props.route.params && this.props.route.params.photoUri ? this.props.route.params.photoUri : undefined ,
            isOpenByHost : this.props.route.params && this.props.route.params.isOpenByHost ? this.props.route.params.isOpenByHost : true 
        }
    }
    
    render(){
        const {showHideDelete} = this.state;
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
                <View onLayout={(event)=> this.setState({topPadding:event.nativeEvent.layout.y+event.nativeEvent.layout.height/3*2})} style={styles.headerWrap}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()}
                    style={styles.backWrap}>
                        <FontAwesome name={Const.IC_BACK} color={'#333'} size={StyleConfig.headerIconSize} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{"Photo Preview"}</Text>
                    <TouchableOpacity onPress={()=> this.setState({showHideDelete:!showHideDelete})} style={styles.backWrap}>
                        <FontAwesome  name={'ellipsis-v'} color={'#333'} size={StyleConfig.headerIconSize*0.8} />
                    </TouchableOpacity>
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
                { showHideDelete && <View style={{
                    position:'absolute',
                    backgroundColor: StyleConfig.COLORS.offWhite,
                    marginTop: this.state.topPadding,
                    right: StyleConfig.countPixelRatio(16)
                }}>
                    <TouchableOpacity onPress={()=> this.setState({showHideDelete:!showHideDelete})} style={{paddingHorizontal:StyleConfig.countPixelRatio(10), paddingVertical:StyleConfig.countPixelRatio(10)}}>
                        <Text style={styles.textH23Medium}>{"Hide"}</Text>
                    </TouchableOpacity>
                    <View style={{height:1, backgroundColor:'#ddd'}} />
                    <TouchableOpacity onPress={()=> this.setState({showHideDelete:!showHideDelete})} style={{paddingHorizontal:StyleConfig.countPixelRatio(10), paddingVertical:StyleConfig.countPixelRatio(10)}}>
                        <Text style={styles.textH23Medium}>{"Delete"}</Text>
                    </TouchableOpacity>
                </View>}
                </SafeAreaView>
                </>
    )}
}

export default PreviewPhoto
