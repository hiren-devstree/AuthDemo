import React, {useState} from 'react';
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
    const [width, setWidth] = useState(StyleConfig.countPixelRatio(110))
    const [showDropdown, setDropdown] = useState(false)
    const [groupBy, setGroupBy] = useState('')
    return(

        <View style={[styles.flex1]}>
            <View style={{height:StyleConfig.statusBarHeight, flexDirection:'row-reverse', alignItems:'center'}}>
                <TouchableOpacity onPress={()=> setDropdown(!showDropdown)} style={{flexDirection:'row-reverse', width: StyleConfig.countPixelRatio(110), alignItems:'center', justifyContent:'space-between'}}>
                    <FontAwesome style={{paddingHorizontal:StyleConfig.countPixelRatio(8)}} name={"caret-down"} size={20} color={StyleConfig.COLORS.defaultTextColor} />
                    <Text style={styles.textH23Medium}>{groupBy == ''? "Group By": groupBy}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={[StyleConfig.card,{borderRadius:StyleConfig.countPixelRatio(20)}]}>
                    <View style={{flexDirection:'row', marginBottom:10}}> 
                        <Image 
                            style={{width:StyleConfig.width*0.15, height:StyleConfig.width*0.15, borderRadius:StyleConfig.width*0.075}}
                            source={{uri:"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"}}
                        />
                        <View style={{marginLeft: 10, justifyContent:'center'}}>
                            <Text style={styles.textH23Medium}>Michael Thomas</Text>
                            <Text style={styles.textH3Medium}>{`Photographer`}</Text>
                        </View>
                    </View>
                    <FlatList 
                        data={[1,2,3,4,5,6,7,8]}
                        numColumns={3}
                        contentContainerStyle={{
                            flex: 1,
                            justifyContent: 'space-between'}}
                        renderItem={({item})=><View>
                            <Image 
                                style={{width:StyleConfig.width*0.3, height:StyleConfig.width*0.3}}
                                source={{uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"}}
                            />
                        </View>}
                    />
                </View>
                
                <View style={[StyleConfig.card,{borderRadius:StyleConfig.countPixelRatio(20)}]}>
                <View style={{flexDirection:'row', marginBottom:10}}> 
                    <Image 
                        style={{width:StyleConfig.width*0.15, height:StyleConfig.width*0.15, borderRadius:StyleConfig.width*0.075}}
                        source={{uri:"https://icon-library.com/images/lady-icon/lady-icon-7.jpg"}}
                    />
                    <View style={{marginLeft: 10, justifyContent:'center'}}>
                        <Text style={styles.textH23Medium}>Era Kwan</Text>
                        <Text style={styles.textH3Medium}>{`Event Planner`}</Text>
                    </View>
                </View>
                <FlatList 
                    data={[1,2,3,4,5,6,7,8]}
                    numColumns={3}
                    renderItem={({item})=><View>
                        <Image 
                            style={{width:StyleConfig.width*0.3, height:StyleConfig.width*0.3}}
                            source={{uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"}}
                        />
                    </View>}
                />
            </View>
            </ScrollView>
            { showDropdown && <View style={{position:'absolute',zIndex:88, margin:StyleConfig.statusBarHeight-StyleConfig.countPixelRatio(4), alignSelf:'flex-end', width:width, backgroundColor: StyleConfig.COLORS.white}}>
            <TouchableOpacity onPress={()=>{ 
                setGroupBy('Member') 
                setDropdown(false)
                }} style={{padding:4}} >
                <Text style={styles.textH3Medium}>{'Member'}</Text>
            </TouchableOpacity>    
            <TouchableOpacity onPress={()=>{ 
                setGroupBy('Date') 
                setDropdown(false)
                }} style={{padding:4}} >
                <Text style={styles.textH3Medium}>{'Date'}</Text>
            </TouchableOpacity>    
            </View>}
        </View>
        
    )
}
module.exports = PhotosComponent ;

