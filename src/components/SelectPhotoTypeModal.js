import React from "react";
import {
  Alert,
  Modal,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import StyleConfig from 'src/helper/StyleConfig';
import styles from 'src/helper/styles';
import strings from 'src/helper/strings';

const SelectPhotoTypeModal = (props) => {
    return (
      <View>
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.modalBackLayer}>
                <View style={styles.extModalContainer}>
                    <View style={{paddingVertical: StyleConfig.countPixelRatio(8)}}>
                        <Text style={styles.textH23Medium}>{strings.add_photos_from}</Text>
                        
                        <TouchableOpacity onPress={props.onPressCamera} style={styles.modalSelectButtonWrap} >
                            <Text style={styles.textH23Medium}>{strings.take_picture}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={props.onPressGallery} style={styles.modalSelectButtonWrap} >
                            <Text style={styles.textH23Medium}>{strings.select_from_gallery}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={props.onCancel} style={[styles.modalSelectButtonWrap, {borderBottomWidth:0, marginBottom: StyleConfig.countPixelRatio(-12)}]} >
                            <Text style={[styles.textH23Medium, {color: StyleConfig.COLORS.red}]}>{strings.cancel}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
      </View>
  );
};

export default SelectPhotoTypeModal;