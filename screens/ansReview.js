import React, {useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RadioButton,Text ,Dialog, Portal,Modal,Button} from 'react-native-paper';

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
import NotiificationCard from '../components/NotiificationCard';
// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from '../components/CredentialsContext';

import DropDownPicker from 'react-native-dropdown-picker';
// import AnsReviewCard from '../components/AnsReviewCard';
import AnsReviewCard from "../components/ansReviewCard"

const ansreview = ({route, navigation }) => {

  const { itemId, otherParam } = route.params;

  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  
  // modal
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  // Actual value to be sent
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const profile = () => {
    navigation.navigate('home');
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
          'https://maths-buddy.herokuapp.com/question/getcategory/'+otherParam,
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
        <PageTitle> Answer Review </PageTitle>
            <StyledFormArea>
            
            <Space/>
              
              {visible1 ? (
                <BestSellerContainer style={styles.row1}>
                  <View style={styles.row11}>
                  {/* <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}> */}
                    <ScrollView showsScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                      {dataAllProd.map((noti11, index) => {
                        // console.log(index)
                        return (
                          <AnsReviewCard
                            key={index}
                            id={noti11.id}
                            guide={noti11.guide}
                            ans={noti11.answer}
                            // ans1={noti11.sample_answers.split(',')[0]}
                            // ans2={noti11.sample_answers.split(',')[1]}
                            // ans3={noti11.sample_answers.split(',')[2]}
                            // ans4={noti11.sample_answers.split(',')[3]}
                            qimage={noti11.question}
                            i={index}
                          />
                        );
                      })}
                      <Button icon="location-exit" mode="contained" onPress={() => profile()}>
                        Exit to Home
                      </Button>
                    </ScrollView>
                  </View>
                  {/* </Modal> */}
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
    backgroundColor:Colors.primary,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // marginVertical: 8,
    display: "flex",
    // flexDirection: "vertical",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // textAlign: "center",
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

export default ansreview;
