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
import { View, TouchableOpacity,Linking, StyleSheet, ScrollView, Picker, ActivityIndicator } from 'react-native';

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

const inquiryPost = ({ navigation }) => {
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
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const { name, email, photoUrl } = storedCredentials;
  // Form handling
  const handleSignup = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://whispering-headland-00232.herokuapp.com/user/signup';
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;

        if (status !== 'SUCCESS') {
          handleMessage(message, status);
        } else {
          persistLogin({ ...data } ,message, status);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        handleMessage('An error occurred. Check your network and try again');
        console.log(error.toJSON());
      });
  };

  const handleMessage = (message, type = '') => {
    setMessage(message);
    setMessageType(type);
  };

  // Persisting login after signup
  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem('flowerCribCredentials', JSON.stringify(credentials))
      .then(() => {
        handleMessage(message, status);
        // setTimeout(() => navigation.navigate('Welcome', credentials), 1000);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        handleMessage('Persisting login failed');
        console.log(error)
      });
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Contact Us </PageTitle>

          <Formik
            initialValues={{ name: '', email: '', messages: ''}}
            onSubmit={(values, { setSubmitting }) => {
              values = { ...values};
              if (
                values.name == '' || values.email == '' || values.messages == ''
              ) {
                handleMessage('Please valied details..!');
                setSubmitting(false);
              } else {
                handleSignup(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => { Linking.openURL('https://www.google.lk/maps/place/Sri+Lanka+Institute+of+Information+Technology/@6.9146828,79.9707558,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae256db1a6771c5:0x2c63e344ab9a7536!8m2!3d6.9146775!4d79.9729445')}}>
               <WelcomeImage resizeMode="cover" source={require('./../assets/map1.jpg')}/>
               </TouchableOpacity>
               <Space/>
               <ExtraText style={styles.ExtraText}>Tel.</ExtraText>
                  <ExtraText3 style={styles.ExtraText3} onPress={() => Linking.openURL('tel:+94117544801')}> 011 7 544 801</ExtraText3>
               <Space/>
                
                <ExtraText style={styles.ExtraText}>Email.</ExtraText>
                  <ExtraText3 style={styles.ExtraText3} onPress={() => Linking.openURL('mailto:info@sliit.lk')}> info@sliit.lk</ExtraText3>
                <Line/>
                <Space/>
                <Space/>
                <ExtraText style={styles.ExtraText}>Name </ExtraText>
                <MyTextInput
                  placeholder="Yashodha Godage"
                  placeholderTextColor={darkLight}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  icon="person"
                />
                <ExtraText style={styles.ExtraText}>Email </ExtraText>
                <MyTextInput
                  placeholder="yashodhagodage@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  icon="mail"
                />
                <ExtraText style={styles.ExtraText}>Message </ExtraText>
                <Space/>
                <StyledTextInput 
                    style={styles.StyledTextInput}
                    multiline={true} 
                    value={values.messages}
                />
                <Space/>
                <StyledButton>
                  <ButtonText>Submit</ButtonText>
                </StyledButton>
                </ScrollView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>

      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {!isDate && <StyledTextInput {...props} />}

      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  PageTitle1: {
    marginBottom: "5%"

  },
  PageTitle1: {
    marginBottom: "5%"

  },

  StyledButton1: {
    height: "15%",
    marginBottom: "5%",
    marginTop: "5%"
    
  },

  ButtonText1: {
    fontWeight: "bold",
    fontSize: 19,

  },
  
  ExtraText: {
    fontWeight: "bold",
    fontSize: 19,
  },

  StyledButton1: {
    height: "15%",
    marginBottom: "5%",
    marginTop: "5%"
    
  },

  ButtonText1: {
    fontWeight: "bold",
    fontSize: 19,

  },

  ExtraText3: {
    fontWeight: "bold",
    fontSize: 19,
  },  

  ExtraText: {
    fontWeight: "bold",
    fontSize: 19,
  },

  StyledTextInput: {
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    height: 150,
    textAlign: "left",
    textAlignVertical: "top",
  },
});

export default inquiryPost;
