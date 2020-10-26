import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import styles from './styles'
import string from 'src/helper/strings'
import StyleConfig from 'src/helper/StyleConfig'
import * as ImageManipulator from "expo-image-manipulator";

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const flashIcons = {
  off: 'flash-off',
  on: 'flash-on',
  auto: 'flash-auto',
  torch: 'highlight'
};

const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

const wbIcons = {
  auto: 'wb-auto',
  sunny: 'wb-sunny',
  cloudy: 'wb-cloudy',
  shadow: 'beach-access',
  fluorescent: 'wb-iridescent',
  incandescent: 'wb-incandescent',
};

class AttachImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: 'off',
      zoom: 0,
      autoFocus: 'on',
      type: 'back',
      whiteBalance: 'auto',
      ratio: '9:16',
      ratios: [],
      barcodeScanning: false,
      faceDetecting: false,
      faces: [],
      newPhotos: false,
      permissionsGranted: false,
      pictureSize: undefined,
      pictureSizes: [],
      pictureSizeId: 0,
      showGallery: false,
      showMoreOptions: false,
    };
  }


  componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === 'granted' })
    try {
      await FileSystem.makeDirectoryAsync(
        `${FileSystem.documentDirectory}photos`,
        {
          intermediates: true,
        }
      )
    } catch (e) {
      console.log(e)
    }
  }


  toggleFacing = () => this.setState({ type: this.state.type === 'back' ? 'front' : 'back' });

  toggleFlash = () => this.setState({ flash: flashModeOrder[this.state.flash] });

  setRatio = ratio => this.setState({ ratio });

  toggleWB = () => this.setState({ whiteBalance: wbOrder[this.state.whiteBalance] });

  toggleFocus = () => this.setState({ autoFocus: this.state.autoFocus === 'on' ? 'off' : 'on' });

  zoomOut = () => this.setState({ zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1 });

  zoomIn = () => this.setState({ zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1 });

  takePicture = async () => {
    // Option 1 set exif:false

    // Option 2 
    if (this.camera) {
      await this.camera.takePictureAsync({
        quality: 0.5,
        exif: true
      }).then(photo => {
        //photo.exif.Orientation = 1
        this.onPictureSaved(photo)
      })
    }
  };

  handleMountError = ({ message }) => console.error(message);

  onPictureSaved = async photo => {
    let resizedPhoto = await ImageManipulator.manipulateAsync(
      photo.uri,
      [{ resize: { width: photo.width * 0.6, height: photo.height * 0.6 } }],
      { compress: 0.60, format: ImageManipulator.SaveFormat.JPEG, base64: false }
    );

    await FileSystem.copyAsync({
      from: resizedPhoto.uri,
      to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpeg`,
    });
    const { callback } = this.props.route.params
    callback(resizedPhoto.uri)
    this.props.navigation.goBack()
    //this.props.navigation.navigate('CRUDSummary', { 'binaryImageFile': {name: "myphoto.jpeg", type: "image/jpeg", uri: resizedPhoto.uri} })
  }

  collectPictureSizes = async () => {
    if (this.camera) {
      const pictureSizes = await this.camera.getAvailablePictureSizesAsync(this.state.ratio);
      let pictureSizeId = 0;
      if (StyleConfig.isIphone) {
        pictureSizeId = pictureSizes.indexOf('High');
      } else {
        // returned array is sorted in ascending order - default size is the largest one
        pictureSizeId = pictureSizes.length - 1;
      }
      this.setState({ pictureSizes, pictureSizeId, pictureSize: pictureSizes[pictureSizeId] });
    }
  };

  previousPictureSize = () => this.changePictureSize(1);
  nextPictureSize = () => this.changePictureSize(-1);

  changePictureSize = direction => {
    let newId = this.state.pictureSizeId + direction;
    const length = this.state.pictureSizes.length;
    if (newId >= length) {
      newId = 0;
    } else if (newId < 0) {
      newId = length - 1;
    }
    this.setState({ pictureSize: this.state.pictureSizes[newId], pictureSizeId: newId });
  }

  renderNoPermissions = () =>
    <View style={styles.noPermissions}>
      <Text style={{ color: StyleConfig.COLORS.white }}>{string.str_camera_permision}</Text>
    </View>

  renderTopBar = () =>
    <View
      style={[styles.topBar, { flexDirection: 'row', }]}>
      <TouchableOpacity style={styles.toggleButton} onPress={() => this.props.navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={32} color={StyleConfig.COLORS.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFacing}>
        <Ionicons name="ios-reverse-camera" size={32} color={StyleConfig.COLORS.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFlash}>
        <MaterialIcons name={flashIcons[this.state.flash]} size={32} color={StyleConfig.COLORS.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleButton} onPress={this.toggleWB}>
        <MaterialIcons name={wbIcons[this.state.whiteBalance]} size={32} color={StyleConfig.COLORS.white} />
      </TouchableOpacity>
    </View>

  renderSideBar = () =>
    <View
      style={styles.sideBar}>
      <TouchableOpacity style={{}} onPress={this.zoomOut}>
        <MaterialIcons name={"zoom-out"} size={40} color={StyleConfig.COLORS.white} />
      </TouchableOpacity>
      <TouchableOpacity style={{}} onPress={this.zoomIn}>
        <MaterialIcons name={"zoom-in"} size={40} color={StyleConfig.COLORS.white} />
      </TouchableOpacity>
    </View>

  renderBottomBar = () =>
    <View style={[styles.bottomBar, {}]}>
      <TouchableOpacity
        onPress={this.takePicture}
        style={{ alignSelf: 'center' }}
      >
        <Ionicons name="ios-radio-button-on" size={70} color={StyleConfig.COLORS.white} />
      </TouchableOpacity>
    </View>

  renderCamera = () =>
    (
      <Camera
        ref={ref => {
          this.camera = ref;
        }}

        style={styles.camera}
        type={this.state.type}
        flashMode={this.state.flash}
        zoom={this.state.zoom}
        whiteBalance={this.state.whiteBalance}
        ratio={this.state.ratio}
        pictureSize={this.state.pictureSize}
      >
        {this.renderTopBar()}
        {this.renderSideBar()}
        {this.renderBottomBar()}
      </Camera>
    );
  render() {
    const cameraScreenContent = this.state.permissionsGranted
      ? this.renderCamera()
      : this.renderNoPermissions();
    const content = this.state.showGallery ? this.renderGallery() : cameraScreenContent;
    return <View style={styles.container}>{content}</View>;
  }
}
export default AttachImage