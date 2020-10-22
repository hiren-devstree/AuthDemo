import React, {useState, useEffect, Component} from 'react';
import {
    SafeAreaView,
    FlatList,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TextInput,
    TouchableOpacity
  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import FontAwesome  from '@expo/vector-icons/FontAwesome';
import styles from 'src/helper/styles';
import utils from 'src/helper/utils';
import * as Const from 'src/helper/constant';
import strings from 'src/helper/strings';
const images = [
    {
        "id":"12",
        "name":"Michael's Birthday",
        "designation": "",
        "profilePhoto": "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png",
        photos:[
            {datetime:"", uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
            {datetime:"", uri:"https://static.toiimg.com/photo/msid-61737605,width-96,height-65.cms"},
            {datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
            {datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
            {datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
            {datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
            {datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"},
            {datetime:"", uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
            {datetime:"", uri:"https://static.toiimg.com/photo/msid-61737605,width-96,height-65.cms"},
            {datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
            {datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
            {datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
            {datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
            {datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"}    
        ]
    },
    {
        "id":"6",
        "name":"Era Kwan & Michael marriage",
        "designation": "Event Planner",
        "profilePhoto": "https://icon-library.com/images/lady-icon/lady-icon-7.jpg",
        photos:[
            {datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
            {datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"},    
            {datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
            {datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
            {datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
            {datetime:"", uri:"https://static.toiimg.com/photo/msid-61737605,width-96,height-65.cms"},
            {datetime:"", uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
            {datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
            {datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"},    
            {datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
            {datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
            {datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
            {datetime:"", uri:"https://static.toiimg.com/photo/msid-61737605,width-96,height-65.cms"},
            {datetime:"", uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
            {datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
            {datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"},    
            {datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
            {datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
            {datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
        ]
    }
]
class MemoriesScreen extends Component{
    constructor(props){
        super(props);
        let albums = images.map((album,index)=>({...album,
            photos:album.photos.map((item)=>({
                ...item, datetime: utils.randomDate()
            }))
        }))
        this.state={
            albums,
            width: StyleConfig.countPixelRatio(110),
            showDropdown:false,
            groupBy:''
        }
    }
    componentDidMount =async()=>{
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to upload Event photos');
        }
    }
    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [3, 5],
          quality: 1,
        });
        let {albums} = this.state;
        if (!result.cancelled) {
          albums[0].photos.push({
            "datetime":"",
            uri:result.uri
          })
          this.setState({albums})
        }
      };
    previewPhoto=(item)=>{
        this.props.navigation.navigate(Const.NK_PREVIEW_PHOTO, { photoUri:item.uri })
    }
    render(){
        const { albums, width, showDropdown, groupBy } = this.state;
        let itemWidth = (StyleConfig.width - StyleConfig.countPixelRatio(64))/3
        console.log(JSON.stringify(albums))
        return(
          <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.flex1White}>
            <View style={styles.headerWrapSingle}>
                <Text style={styles.headerTitle}>{strings.photos}</Text>
            </View>
            <View style={styles.flex1}>
                <ScrollView>
                    {albums.map((item,index)=>(
                    <View key={item.id} style={[styles.card,{borderRadius:StyleConfig.countPixelRatio(20)}]}>
                        <View style={{flexDirection:'row', marginBottom:10}}> 
                                <Image 
                                    style={{width:StyleConfig.width*0.15, height:StyleConfig.width*0.15, borderRadius:StyleConfig.width*0.075}}
                                    source={{uri: item.profilePhoto}}
                                />
                                <View style={{marginLeft: 10, justifyContent:'center'}}>
                                    <Text style={styles.textH23Medium}>{item.name}</Text>
                                    <Text style={styles.textH3Medium}>{item.designation}</Text>
                                </View>
                            </View>
                            <FlatList 
                                data={item.photos}
                                numColumns={3}
                                extraData={this.state}
                                keyExtractor={(item, index)=> `${item.id}${index}`}
                                columnWrapperStyle={{
                                    flex: 1,
                                    marginVertical:StyleConfig.countPixelRatio(4)
                                }}
                                renderItem={({item})=><TouchableOpacity onPress={()=> this.previewPhoto(item)}>
                                    <Image 
                                        style={{width:itemWidth, height:itemWidth, marginLeft: StyleConfig.countPixelRatio(8), borderRadius:8}}
                                        source={{uri:item.uri}}
                                    />
                                </TouchableOpacity>}
                            />
                    </View>
                    ))}
                    
                </ScrollView>
            </View>
          </SafeAreaView>
          </>

          
            
        )
    }
}
export default MemoriesScreen;

