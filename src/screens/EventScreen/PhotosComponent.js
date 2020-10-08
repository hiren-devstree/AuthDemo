import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from 'src/helper/styles';
import { FlatList } from 'react-native-gesture-handler';
const images=[
    {datetime:"",
    uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
    {datetime:"",
    uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
    {datetime:"",
    uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
    {datetime:"",
    uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
]
const PhotosComponent=(props)=>{
    
    return(

        <View style={[styles.flex1]}>
        <FlatList 
            data={[1,2,3,4,5,6,7,8]}
            numColumns={3}
            renderItem={({item})=><View>
                <Image 
                    style={{width:StyleConfig.width*0.33, height:StyleConfig.width*0.33}}
                    source={{uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"}}
                />
            </View>}
        />
        </View>
        
    )
}
module.exports = PhotosComponent ;

