import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import {    StyledContainer,
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
        } from './styles';
// import shopCart from '../screens/shoppingCart';
import moment from 'moment';
const NotiificationCard1 = (props) => {
  return (
    <View style={styles.row11}>
      {/* <Image
        source={{
          uri: props.image,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      /> */}
      <ButtonText style={styles.ButtonText1}>{moment(new Date(props.date)).format('YYYY-MM-DD')}</ButtonText>
      <ExtraText style={styles.itemText}>Category : {props.qcat}</ExtraText>
      <ExtraText style={styles.itemText}>Marks : {props.marks}</ExtraText>
      
      
      {/* <ExtraText style={styles.itemText1}> Rs. {props.price}</ExtraText> */}
      {/* <TouchableOpacity style={[styles.container, { backgroundColor: Colors.black }]}>
        
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({

  row11: {
    // marginTop: '5%',
    backgroundColor:Colors.PearlAsh,
    // width:'90%',
    borderRadius:20,
    paddingLeft:'10%',
    padding:'10%',
    marginBottom:'15%',
  },

  card: {
    marginVertical: 10,
    backgroundColor: '#D7D7D7',
    paddingVertical: 10,
    paddingLeft: 15,
    width: '90%',
    marginLeft: 20,
    borderRadius: 20,

    height: 110,

    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },
  
  ButtonText1: {
    color:Colors.darkLight,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 50,
    textAlign:'justify',
  },

  item: {
    alignSelf: 'auto',
    minWidth: 120,
    width: 100,
    flex: 1,
    justifyContent: 'space-between',
  },

  itemPhoto: {
    width: 100,
    justifyContent: 'center',
    height: 150,
  },

  container: {
    alignSelf: 'auto',
    borderRadius:10,
    minWidth: 50,
    width:70,
    justifyContent: 'space-between',
  },
  
  itemText: {
    // color: Colors.black,
    // marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15,
    // justifyContent: 'center',
  },

  text: {
    color: Colors.primary,
    fontWeight: "bold",
    textAlign: 'center',
  },
  itemText1: {
    color: Colors.brand3,
    marginTop: 5,
    fontSize: 18,
    justifyContent: 'center',
  },
});

export default NotiificationCard1;
