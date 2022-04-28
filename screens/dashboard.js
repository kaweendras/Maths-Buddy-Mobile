import React, { useEffect, useState, useContext } from 'react';
// keyboard avoiding view
import {
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import {
  Avatar,
  WelcomeImage,
  PageTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  BestSellerContainer,
  Space,
  Colors,
  LeftIcon,
  ExtraText,
} from './../components/styles';

// icon
import { Octicons } from '@expo/vector-icons';

// Async storage

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

// const Drawer = createDrawerNavigator();

// import { HeaderSearchBar, HeaderClassicSearchBar } from "react-native-header-search-bar";


// import Carousel from 'react-native-snap-carousel';

// api client
import axios from 'axios';
import NotiificationCard from './../components/NotiificationCard';
import NotiificationCard1 from '../components/NotiificationCard1';
// import Tabs from './MainTabScreen';


const dashboard = ({ navigation }) => {
  // const { name, email, photoUrl } = route.params.storedCredentials ? route.params.storedCredentials : route.params;

  const [visible, setvisible] = useState(false);
  const [dataBestSellers, setData] = useState([[]]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          'https://maths-buddy.herokuapp.com/category',
        )
        .then(function (response) {
          setData(response.data.categories);
          console.log(response.data.categories);
          LoadDetails();
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 0);
  }, []);


  if (dataBestSellers.length === 0) {
    return null;
  }

  // if (dataNewArri.length === 0) {
  //   return null;
  // }
  
  // if (dataCategory.length === 0) {
  //   return null;
  // }
  const LoadDetails = () => {
    setvisible(!visible);
  };

  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const { _id,name,first_name,last_name, photoUrl } = storedCredentials;
// console.log(storedCredentials._id)


  // Navigate flows

  const contact = () => {
    navigation.navigate('inquiryPost');
  };

  const cart = () => {
    navigation.navigate('shopCart');
  };

  const profile = () => {
    navigation.navigate('profile');
  };

  const allpro = () => {
    navigation.navigate('allProducts',{itemId: 2,otherParam: 'Geometry1'});
  };

  const [text, onChangeText] = React.useState('');

  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <>
      <StatusBar style="dark" />
      
      <InnerContainer>
        {/* <HeaderContainer source={image} resizeMode="cover"> */}
        <View style={styles.row1}>
          <View style={styles.row2}>
            <TouchableOpacity onPress={profile}>
              <Avatar resizeMode="cover" source={require('./../assets/LOGO.png')}/>
            </TouchableOpacity>
          </View>
          <LeftIcon style={styles.SearchBarIcon}>
            <Octicons name="search" size={30} color={Colors.brand} />
          </LeftIcon>
          
          <TextInput
            style={styles.SearchBar}
            placeholder="  Search..."
            placeholderTextColor={Colors.whiteAsh}
            onChangeText={onChangeText}
            value={text}
          />
          <View style={styles.row2}>
            <TouchableOpacity onPress={cart}>
              <Avatar resizeMode="cover" source={require('./../assets/notify.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <WelcomeImage resizeMode="cover" source={require('./../assets/cover.jpg')}>
          <View style={styles.row1}>
          <ExtraText style={styles.HeaderButtonText}> Take a test to see where you stand </ExtraText>

            <StyledButton style={styles.HeaderButton} onPress={allpro}>
              <ButtonText style={styles.HeaderButtonText1}>Attempt</ButtonText>
            </StyledButton>
            {/* <StyledButton style={styles.HeaderButton} onPress={contact}>
              <ButtonText style={styles.HeaderButtonText}>Contact Us</ButtonText>
            </StyledButton>
            <StyledButton style={styles.HeaderButton} onPress={profile}>
              <ButtonText style={styles.HeaderButtonText}>Account</ButtonText>
            </StyledButton> */}
          </View>
        </WelcomeImage>
        <PageTitle welcome={true}>Welcome! {last_name || 'Buddy'}</PageTitle>

        <WelcomeContainer>
          {/* <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          /> */}
          <StyledFormArea>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
              <ExtraText style={styles.HeaderButtonText}> Quizzes </ExtraText>
              {visible ? (
                <BestSellerContainer style={styles.row112}>
                  <View style={styles.row11}>
                    <ScrollView horizontal={true} showsScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                      {dataBestSellers.map((noti, index) => {
                        // console.log(noti.id)
                        return (
                          <NotiificationCard
                            id={index}
                            name={noti}
                            // price={noti.price}
                            // image={noti.images[0].src}
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                </BestSellerContainer>
              ) : null}

              <Space/>

            </ScrollView>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },

  item: {
    minWidth: 100,
    width: 100,
    justifyContent: 'center',
  },

  itemPhoto: {
    width: 100,
    justifyContent: 'center',
    height: 150,
  },

  itemText: {
    color: Colors.black,
    marginTop: 5,
    justifyContent: 'center',
  },

  itemText1: {
    color: Colors.brand3,
    marginTop: 5,
    fontSize: 18,
    justifyContent: 'center',
  },

  HeaderButton: {
    backgroundColor: Colors.brand,
    borderRadius: 15,
    width: 100,
    height: 35,
    zIndex: 1,
    marginVertical:'20%',
    margin:'5%'
    // marginHorizontal: '20%',
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '-10%',
    justifyContent: 'space-between',
  },
 
  row2: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:'5%',
    marginVertical:'5%',
    marginLeft:35,
  },

  row1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 8,
  },

  row11: {
    display: "flex",
    // flexDirection: "vertical",
    justifyContent: "flex-start",
    alignItems: "center",
    // margin: 30,
    // marginBottom: 10,
    // marginTop: 10,
    // // flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  row112: {
    backgroundColor:Colors.primary,
  },

  HeaderButtonText: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },

  HeaderButtonText1: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  SearchBar: {
    borderRadius: 10,
    height: 40,
    width: '48%',
    textAlign: 'left',
    justifyContent: 'center',
    color: Colors.black,
    backgroundColor: Colors.primary,
    fontSize: 20,
    marginTop: '8%',
  },

  SearchBarIcon: {
    fontSize: 30,
    marginTop: '1%',
    marginLeft: '63%',
  },
});
export default dashboard;
