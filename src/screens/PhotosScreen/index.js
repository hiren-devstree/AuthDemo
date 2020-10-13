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
class PhotosScreen extends Component{
    constructor(props){
        super(props);
        console.log(utils.randomDate().toString())
        let albums = images.map((album,index)=>({...album,
            photos:album.photos.map((item)=>({
                ...item, datetime: utils.randomDate()
            }))
        }))

        console.log("PHOTOS  ", albums)
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
    
        console.log(result);
        let {albums} = this.state;
        if (!result.cancelled) {
          //setImage(result.uri);
          albums[0].photos.push({
            "datetime":"",
            uri:result.uri
          })
          this.setState({albums})

        }
      };
    render(){
        const { albums, width, showDropdown, groupBy } = this.state;
        let itemWidth = (StyleConfig.width - StyleConfig.countPixelRatio(64))/3
        console.log(JSON.stringify(albums))
        return(
          <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{ flex:1, backgroundColor:'#fff'}}>
          <View style={styles.headerWrapSingle}>
                      <Text style={styles.headerTitle}>{strings.photos}</Text>
                      
                  </View>       
          <View style={styles.flex1}>
                <View style={{height:StyleConfig.statusBarHeight, flexDirection:'row-reverse', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=> this.setState({showDropdown:!showDropdown})} style={{flexDirection:'row-reverse', width: StyleConfig.countPixelRatio(110), alignItems:'center', justifyContent:'space-between'}}>
                        <FontAwesome style={{paddingHorizontal:StyleConfig.countPixelRatio(8)}} name={"caret-down"} size={20} color={StyleConfig.COLORS.defaultTextColor} />
                        <Text style={styles.textH23Medium}>{groupBy == ''? "Group By": groupBy}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {albums.map((item,index)=>(
                    <View key={item.id} style={[StyleConfig.card,{borderRadius:StyleConfig.countPixelRatio(20)}]}>
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
                                    //justifyContent: "space-around",
                                    marginVertical:StyleConfig.countPixelRatio(4)
                                }}
                                renderItem={({item})=><View>
                                    <Image 
                                        style={{width:itemWidth, height:itemWidth, marginLeft: StyleConfig.countPixelRatio(8), borderRadius:8}}
                                        source={{uri:item.uri}}
                                    />
                                </View>}
                            />
                    </View>
                        ))}
                    
                </ScrollView>
                { showDropdown && <View style={{position:'absolute',zIndex:88, margin:StyleConfig.statusBarHeight-StyleConfig.countPixelRatio(4), alignSelf:'flex-end', width:width, backgroundColor: StyleConfig.COLORS.white}}>
                <TouchableOpacity onPress={()=>this.setState({groupBy:'Member', showDropdown:false})} style={{padding:4}} >
                    <Text style={styles.textH3Medium}>{'Member'}</Text>
                </TouchableOpacity>    
                <TouchableOpacity onPress={()=>this.setState({groupBy:'Date', showDropdown:false})} style={{padding:4}} >
                    <Text style={styles.textH3Medium}>{'Date'}</Text>
                </TouchableOpacity>    
                </View>}
    
                {/* <TouchableOpacity
                    onPress={this.pickImage}
                style={{position:'absolute',zIndex:87,
                borderRadius: StyleConfig.countPixelRatio(28),
                alignItems:'center', justifyContent:'center',
                borderWidth:0.25,
                borderColor: StyleConfig.COLORS.headerBorderColor,
                 width:StyleConfig.countPixelRatio(56), marginTop: StyleConfig.height -(StyleConfig.statusBarHeight * 4 +StyleConfig.countPixelRatio(60)), marginLeft: StyleConfig.width- StyleConfig.countPixelRatio(16+56), height:StyleConfig.countPixelRatio(56), backgroundColor: StyleConfig.COLORS.white}}>
                     <FontAwesome name={"plus"} size={StyleConfig.countPixelRatio(32)} color={"#333"} />
                </TouchableOpacity> */}
    
            </View>
          </SafeAreaView>
          </>

          
            
        )
    }
}
export default PhotosScreen;

