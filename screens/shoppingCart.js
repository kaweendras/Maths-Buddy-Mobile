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
  WelcomeImage,
  ExtraView,
  ExtraText,
  ExtraText2,
  ExtraText3,
  TextLink,
  TextLinkContent,
  SubTitle,
  Colors,
} from '../components/styles';
import { View, TouchableOpacity, Linking, Text,StyleSheet, ScrollView, Picker, ActivityIndicator } from 'react-native';

//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Ionicons } from '@expo/vector-icons';
  
componentWillMount =()=> {
    let TotalAmount = 0;
    for (var i = 0; i < this.state.cart.length; i++) {
      TotalAmount =
        TotalAmount +
        this.state.cart[i].ItemQuantity * this.state.cart[i].ItemPrice;
    }
    this.setState({ TotalAmount: TotalAmount });
  };

const shopCart = (props) => {


  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle> </PageTitle>
        <Text></Text>
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
});

export default shopCart;
