import React, { Component} from 'react';
import {
    FlatList,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Const from 'src/helper/constant';
import StyleConfig from 'src/helper/StyleConfig';
import AppImages from 'src/assets/images';
import { Button } from 'src/components/common/Button';
import FontAwesome  from '@expo/vector-icons/FontAwesome';
import styles from 'src/helper/styles';
import utils from 'src/helper/utils';
import moment from 'moment';
import _ from 'lodash';
import SelectPhotoTypeModal from 'src/components/SelectPhotoTypeModal';

const users ={
    "6":{
        "id":"6",
        "name":"Era Kwan",
        "designation": "Event Planner",
        "profilePhoto": "https://icon-library.com/images/lady-icon/lady-icon-7.jpg",
    },
    "12":{
        "id":"12",
        "name":"Michael Thomas",
        "designation": "Photographer",
        "profilePhoto": "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png",
    }
}
let images = [
    { "id":"12", datetime:"", uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
    { "id":"12", datetime:"", uri:"https://static.toiimg.com/photo/msid-61737605,width-96,height-65.cms"},
    { "id":"12", datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
    { "id":"12", datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
    { "id":"12", datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
    { "id":"12", datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
    { "id":"12", datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"},
    { "id":"12", datetime:"", uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
    { "id":"12", datetime:"", uri:"https://static.toiimg.com/photo/msid-61737605,width-96,height-65.cms"},
    { "id":"12", datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
    { "id":"12", datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
    { "id":"12", datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
    { "id":"12", datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
    { "id":"12", datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"},
    { "id":"6", datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
    { "id":"6", datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"},    
    { "id":"6", datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
    { "id":"6", datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
    { "id":"6", datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
    { "id":"6", datetime:"", uri:"https://static.toiimg.com/photo/msid-61737605,width-96,height-65.cms"},
    { "id":"6", datetime:"", uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
    { "id":"6", datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
    { "id":"6", datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"},    
    { "id":"6", datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
    { "id":"6", datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
    { "id":"6", datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
    { "id":"6", datetime:"", uri:"https://static.toiimg.com/photo/msid-61737605,width-96,height-65.cms"},
    { "id":"6", datetime:"", uri:"https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"},
    { "id":"6", datetime:"", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNPYWoioa3lVAdY_SXoQv3sL7Q7SSshGqohg&usqp=CAU"},
    { "id":"6", datetime:"", uri:"https://img.freepik.com/free-photo/people-enjoying-new-years-eve-party_53876-20990.jpg?size=626&ext=jpg"},    
    { "id":"6", datetime:"", uri:"https://seda.college/wp-content/uploads/party.jpg"},
    { "id":"6", datetime:"", uri:"https://mlhuyqg8xyvz.i.optimole.com/w:1600/h:1067/q:75/https://glowkidsparty.com/wp-content/uploads/2019/08/IMG_Aug142019at10421AM.jpg"},
    { "id":"6", datetime:"", uri:"https://www.claimsaction.co.uk/wp-content/uploads/2017/12/new_years_party.jpg"},
]
class PhotosComponent extends Component{
    constructor(props){
        super(props);
        for(let ind in images){
            images[ind].datetime = utils.randomDate()
        }
        let albums = this.getGroupBy('Date')
        this.state={
            albums,
            width: StyleConfig.countPixelRatio(110),
            showDropdown:false,
            groupBy:'Date',
            showSelectMediaModal:false
        }
    }
    getGroupBy=(type)=>{
        let albums = [];
        switch(type){
            case 'Member':
                albums = images.reduce((r, a) => {
                    r[a.id] = [...r[a.id] || [], a];
                    return r;
                   }, {});
                let mAlbums = [];
                for(let ind in albums){
                    mAlbums.push({
                        ...users[ind],
                        photos: albums[ind]
                    })
                }
                return mAlbums;
            case 'Date':
                return utils.testDateFilter(images)
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
          this.setState({showSelectMediaModal:false})
          if (!result.cancelled) {
            this.addPhoto(result.uri)
          }
        
      };
    previewPhoto=(item)=>{
        this.props.navigation.navigate( Const.NK_PREVIEW_PHOTO, { photoUri:item.uri })
    }
    addPhoto=(photoUri)=>{
        images.push({
            "id":"12",
            "datetime": moment(new Date()).format("YYYY-MM-DD"),
            uri: photoUri
        })
        let albums = this.getGroupBy(this.state.groupBy);
        this.setState({ albums})
    }
    changeGroupBy=(type)=>{
        if(type == this.state.groupBy){
            this.setState({ showDropdown:false })
        } else{
            let albums = this.getGroupBy(type);
            this.setState({groupBy:type, albums, showDropdown:false})
        }
    }
    render(){
        const { albums, width, showDropdown, groupBy, showSelectMediaModal } = this.state;
        let itemWidth = (StyleConfig.width - StyleConfig.countPixelRatio(64))/3
        console.log(JSON.stringify(albums))
        return(
            <View style={styles.flex1}>
                <View style={{height:StyleConfig.statusBarHeight, flexDirection:'row-reverse', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=> this.setState({showDropdown:!showDropdown})} style={{flexDirection:'row-reverse', width: StyleConfig.countPixelRatio(110), alignItems:'center', justifyContent:'space-between'}}>
                        <FontAwesome style={{paddingHorizontal:StyleConfig.countPixelRatio(8)}} name={"caret-down"} size={20} color={StyleConfig.COLORS.defaultTextColor} />
                        <Text style={styles.textH23Medium}>{groupBy == ''? "Group By": groupBy}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {albums.map((item,index)=>(
                    <View key={item.id} style={[styles.card,{borderRadius:StyleConfig.countPixelRatio(20)}]}>
                        <View style={{flexDirection:'row', marginBottom: StyleConfig.countPixelRatio(10)}}> 
                                <Image 
                                    style={{width:StyleConfig.width*0.15, height:StyleConfig.width*0.15, borderRadius:StyleConfig.width*0.075}}
                                    source={{uri: item.profilePhoto}}
                                />
                                <View style={{marginLeft: StyleConfig.countPixelRatio(10), justifyContent:'center'}}>
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
                { showDropdown && <View style={{position:'absolute',zIndex:88, margin:StyleConfig.statusBarHeight-StyleConfig.countPixelRatio(4), alignSelf:'flex-end', width:width, backgroundColor: StyleConfig.COLORS.white}}>
                <TouchableOpacity onPress={()=> this.changeGroupBy('Member')} style={{padding:4}} >
                    <Text style={styles.textH3Medium}>{'Member'}</Text>
                </TouchableOpacity>    
                <TouchableOpacity onPress={()=> this.changeGroupBy('Date') } style={{padding:4}} >
                    <Text style={styles.textH3Medium}>{'Date'}</Text>
                </TouchableOpacity>    
                </View>}
    
                <TouchableOpacity
                    onPress={()=> this.setState({showSelectMediaModal: true})}
                style={{position:'absolute',zIndex:87,
                borderRadius: StyleConfig.countPixelRatio(28),
                alignItems:'center', justifyContent:'center',
                borderWidth:0.25,
                borderColor: StyleConfig.COLORS.headerBorderColor,
                 width:StyleConfig.countPixelRatio(56), marginTop: StyleConfig.height -(StyleConfig.statusBarHeight * 4 +StyleConfig.countPixelRatio(60)), marginLeft: StyleConfig.width- StyleConfig.countPixelRatio(16+56), height:StyleConfig.countPixelRatio(56), backgroundColor: StyleConfig.COLORS.white}}>
                     <FontAwesome name={"plus"} size={StyleConfig.countPixelRatio(32)} color={"#333"} />
                </TouchableOpacity>
                <SelectPhotoTypeModal 
                    visible={showSelectMediaModal} 
                    onPressCamera={()=>{
                        this.setState({showSelectMediaModal:!showSelectMediaModal})
                        this.props.navigation.navigate(Const.NK_ATTACH_IMAGE,{ callback: this.addPhoto })}} 
                    onPressGallery={()=>this.pickImage()}
                    onCancel={()=> this.setState({showSelectMediaModal:!showSelectMediaModal})}
                    />
            </View>
            
        )
    }
}
export default PhotosComponent;

