import React, { useState, useContext } from 'react';
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

const profile = ({ navigation }) => {
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
  // navigation
  const contact = () => {
    navigation.navigate('inquiryPost');
  };

  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const { first_name,last_name, email, photoUrl } = storedCredentials;
  // Form handling

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const clearLogin = () => {
    AsyncStorage.removeItem('flowerCribCredentials')
      .then(() => {
        setStoredCredentials('');
      })
      .catch(error => console.log(error));
  };
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle> Profile </PageTitle>
        <Image resizeMode="cover" justifyContent="center" source={require('./../assets/avatar-man.png')}/>
        
        <ExtraText4>{first_name+" "+last_name}</ExtraText4>
        <ExtraText5>{email}</ExtraText5>

            
          <BestSellerContainer style={styles.row11}>
            <ExtraText5 >
              <ButtonText style={styles.ButtonText1}>Profile Settings</ButtonText>
            </ExtraText5>

            <ExtraText5 >
              <ButtonText style={styles.ButtonText1}>Notifications</ButtonText>
            </ExtraText5>

            <ExtraText5 >
              <ButtonText style={styles.ButtonText1}>Favourite</ButtonText>
            </ExtraText5>

          </BestSellerContainer>

          <BestSellerContainer style={styles.row11}>
            
            <ExtraText5 >
              <ButtonText style={styles.ButtonText1}>Terms and Conditions</ButtonText>
            </ExtraText5>

            <ExtraText5 onPress={contact}>
              <ButtonText style={styles.ButtonText1}>About Us</ButtonText>
            </ExtraText5>

            <ExtraText5  onPress={clearLogin}>
                <ButtonText style={styles.ButtonText11}>Logout</ButtonText>
            </ExtraText5>
          
          </BestSellerContainer>  

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
    width:'80%',
    borderRadius:20,
    paddingLeft:'10%',
    padding:'5%',
    marginBottom:'10%',
  },
});

export default profile;
