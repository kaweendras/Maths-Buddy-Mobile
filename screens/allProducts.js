import React, {useEffect, useState, useContext } from 'react';
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
  WelcomeImage,
  ExtraView,
  ExtraText,
  ExtraText2,
  ExtraText3,
  TextLink,
  TextLinkContent,
  BestSellerContainer,
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
import NotiificationCard from './../components/NotiificationCard';
// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from '../components/CredentialsContext';

import DropDownPicker from 'react-native-dropdown-picker';
import QuizeCard from '../components/QuizCard';

const allProducts = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  // Actual value to be sent
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow('date');
  };

  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const { name, email, photoUrl } = storedCredentials;
  // Form handling
  
  const [visible1, setvisible1] = useState(false);
  const [dataAllProd, setDataNewArri] = useState([[]]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          'https://maths-buddy.herokuapp.com/question/getcategory/Geometry1',
        )
        .then(function (response1) {
          setDataNewArri(response1.data.question);
          // console.log(response1.data.question);
          LoadDetails2();
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 0);
  }, []);

  if (dataAllProd.length === 0) {
    return null;
  }
  const LoadDetails2 = () => {
    setvisible1(!visible1);
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle> All Aroducts </PageTitle>
            <StyledFormArea>
            
            <Space/>
              
              {visible1 ? (
                <BestSellerContainer style={styles.row1}>
                  {/* <View style={styles.row11}> */}
                    <ScrollView showsScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                      {dataAllProd.map((noti11, index) => {
                        // console.log(index)
                        return (
                          <QuizeCard
                            id={noti11.id}
                            quiz={noti11.guide}
                            ans1={noti11.answer}
                            ans2={noti11.sample_answers}
                            ans3={noti11.sample_answers}
                            ans4={noti11.sample_answers}
                            qimage={noti11.question}
                          />
                        );
                      })}
                    </ScrollView>
                  {/* </View> */}
                  
                </BestSellerContainer>
              ) : null}
  
            </StyledFormArea>
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

  ButtonText1: {
    fontWeight: 'bold',
    fontSize: 19,
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

  ButtonText1: {
    fontWeight: 'bold',
    fontSize: 19,
  },

  ExtraText3: {
    fontWeight: 'bold',
    fontSize: 19,
  },

  row1: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 8,
  },

  ExtraText: {
    fontWeight: 'bold',
    fontSize: 19,
  },

  row11: {
    margin: 30,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  StyledTextInput: {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    height: 150,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});

export default allProducts;