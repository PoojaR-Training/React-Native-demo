import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Touchable,
  TouchableHighlight,
    
} from 'react-native';
import COLORS from '../../consts/colors';


const {width} = Dimensions.get('screen');
const HomeScreen = ({navigation}) => {
  const optionsList = [
    {title: 'Rent Home', img: require('../../assets/house1.jpg')},
    {title: 'Rent Apartment', img: require('../../assets/house2.jpg')},
    {title: 'Rent Villa', img: require('../../assets/house4.jpg')},
    {title: 'Rent PG/Hostel', img: require('../../assets/house3.jpg')},
  ];
  const screenList = ['House1', 'House2', 'House3',]; // Add more screen names as needed
  const handlePress = (index) => {
  const screenName = screenList[index];
   navigation.navigate('DetailsScreen');
  };


  const ListOptions = () => {
    return (
      <View style={style.optionListsContainer}>
        {optionsList.map((option, index) => (
          <View style={style.optionsCard} key={index}>
          <TouchableOpacity style={{width:150,height:100}} onPress={()=>{handlePress(index)}}>
            <Image source={option.img} style={style.optionsCardImage} />
            <Text style={{marginTop: 10, fontSize: 15, fontWeight: 'bold', marginLeft:15}}>
              {option.title}
            </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      
    );
  };
const drawer = ()=>{
  console.log("dkcj");
}
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:"#d5e0e8"}}>
  
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View  style={{flex:0.30}}>
      <View style={style.header}>
        <View>
       
          <Image 
             source={{uri:"https://www.iconpacks.net/icons/2/free-icon-pin-location-4354.png"}}
             style = {{ width: 25, height: 25 }}
           />
          <Text style={{color: COLORS.dark, fontSize: 15, fontWeight: 'bold'}}>India</Text>
          
         
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('DrawerScreen')}>
        <Image
          style={style.profileImage}
          source={require('../../assets/person.jpg')}
        />
        </TouchableOpacity>
      </View>

      <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <View style={style.searchInputContainer}>
            <TextInput placeholder="Search address, city, location" />
          </View>
          </View>
        
      </View>
      <View  style={{backgroundColor:"#668fad", flex:1,borderTopRightRadius:20, borderTopLeftRadius:20}}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <ListOptions />
      </ScrollView>
      </View>
      <View  style={{backgroundColor:"#d5e0e8", flex:0.15}}>
        <View style={style.footer}>
          <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
          <Image 
             source={{uri:"https://www.iconpacks.net/icons/2/free-home-icon-2503.png"}}
             style = {{ width: 35, height: 35}}
           />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('AddScreen')}>
            <Image 
             source={{uri:"https://www.iconpacks.net/icons/4/free-icon-add-button-12005.png"}}
             style = {{ width: 35, height: 35 }}
           />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("HomeScreen")}>
             <Image 
             source={{uri:"https://www.iconpacks.net/icons/2/free-icon-user-4250.png"}}
             style = {{ width: 35, height:35}}
           />
          </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 20,
       
  },
  searchInputContainer: {
    height: '130%',
    width: '91%',
    backgroundColor: "white",
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
    borderColor:"black",
    borderWidth: 1,
  },
  
  optionsCard: {
    height: 200,
    width: 170,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    padding: 10,
    flexWrap:'wrap',
    justifyContent :'space-around'

  },
  footer:{
    flexDirection: 'row',
    padding: 10,
    flexWrap:'wrap',
    justifyContent :'space-around'
  }
});
export default HomeScreen;
