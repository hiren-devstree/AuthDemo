import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Image, ActivityIndicator, Modal,StyleSheet, Text, Platform } from 'react-native';
import StyleConfig from 'src/helper/StyleConfig'
import AppImages from 'src/assets/images';
class Loader extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const { loader } = this.props;
        return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loader}
            onRequestClose={() => {console.log('close modal')}}>
            <View style={styles.container}>
                <View style={styles.overlay}>
                    <Image 
                        source={AppImages.loader}
                        style={{
                            height:100,
                            width: 100
                        }}
                    />
                    {/* <ActivityIndicator
                        color={'#f5f5f5'}
                        size={(Platform.OS == 'ios') ? 1 : 14}
                        animating={loader} style={styles.progressBar}/> */}
                    <Text style={styles.text}>
                        Loading
                    </Text>
                </View>
            </View>
        </Modal>
        );
    }
}

const mapStateToProps = state => ({
    loader: state.loader ? state.loader : false
});

export default connect(mapStateToProps)(Loader);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
    },
    progressBar: {
        margin: StyleConfig.countPixelRatio(10),
        justifyContent: 'center',
        alignItems: 'center',
        padding: StyleConfig.countPixelRatio(10)
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: StyleConfig.countPixelRatio(10),
        padding: StyleConfig.countPixelRatio(10),
        width: StyleConfig.countPixelRatio(150),
        // height: StyleConfig.countPixelRatio(100),
        backgroundColor: "#333333aa",
    },
    text: {
        fontFamily:StyleConfig.fontRegular,
        marginTop: StyleConfig.countPixelRatio(4),
        color: '#f5f5f5',
        fontSize: StyleConfig.fontSizeH3,
    },
    
    
});
