import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from 'formik';

import {
  StyledContainer,
  PageTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  WelcomeContainer,
  Line,
  Space,
  BestSellerContainer,
  WelcomeImage,
  ExtraView,
  ExtraText,
  ExtraText2,
  ExtraText3,
  ExtraText4,
  ExtraText5,
  TextLink,
  TextLinkContent,
  SubTitle,
  Avatar,
  Colors,
} from '../components/styles';
import { View, TouchableOpacity, Linking, Image, StyleSheet, ScrollView, Picker, ActivityIndicator } from 'react-native';

//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Ionicons } from '@expo/vector-icons';

// Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

// keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

// api client
import axios from 'axios';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from '../components/CredentialsContext';

import DropDownPicker from 'react-native-dropdown-picker';
import { BorderlessButton } from 'react-native-gesture-handler';
import NotiificationCard1 from '../components/NotiificationCard1';


const history = ({route, navigation }) => {

  const [visible, setvisible] = useState(false);
  const [dataBestSellers, setData] = useState([[]]);

  const { itemId, userIDParam } = route.params;

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          'https://maths-buddy.herokuapp.com/history/byuser/'+userIDParam,
        )
        .then(function (response) {
          setData(response.data.history);
          console.log(response.data.history);
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
  const { first_name,last_name, email, photoUrl } = storedCredentials;
  // Form handling
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle> History </PageTitle>
        <Image resizeMode="cover" justifyContent="center" source={require('./../assets/avatar-man.png')}/>
        
        <ExtraText4>{first_name+" "+last_name}</ExtraText4>
        <ExtraText5>{email}</ExtraText5>

            
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

              {visible ? (
                <BestSellerContainer style={styles.row11}>
                  <View style={styles.row11}>
                    {/* <ScrollView horizontal={true} showsScrollIndicator={false} showsHorizontalScrollIndicator={false}> */}
                      {dataBestSellers.map((noti, index) => {
                        // console.log(noti.id)
                        return (
                          <NotiificationCard1
                            id={noti._id}
                            date={noti.date}
                            marks={noti.marks}
                            qcat={noti.question_category}
                          />
                        );
                      })}
                    {/* </ScrollView> */}
                  </View>
                </BestSellerContainer>
              ) : null}

              <Space/>

            </ScrollView>

      </InnerContainer>
    </StyledContainer>
  );
};


const styles = StyleSheet.create({
  PageTitle1: {
    marginBottom: '5%',
  },
  PageTitle1: {
    marginBottom: '5%',
  },

  StyledButton1: {
    height: '15%',
    marginBottom: '5%',
    marginTop: '5%',
  },

  row112: {
    backgroundColor:Colors.primary,
  },

  ButtonText1: {
    color:Colors.darkLight,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 50,
    textAlign:'justify',
  },

  ButtonText11: {
    color:brand,
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 50,
    textAlign:'justify',
  },

  ExtraText: {
    fontWeight: 'bold',
    fontSize: 19,
  },

  StyledButton1: {
    height: '15%',
    marginBottom: '5%',
    marginTop: '5%',
  },

  ExtraText3: {
    fontWeight: 'bold',
    fontSize: 19,
  },

  ExtraText: {
    fontWeight: 'bold',
    fontSize: 19,
  },

  StyledTextInput: {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    height: 150,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  row11: {
    marginTop: '5%',
    backgroundColor:primary,
    width:'100%',
    borderRadius:20,
    paddingLeft:'5%',
    padding:'2%',
    marginBottom:'5%',
  },
});

export default history;
