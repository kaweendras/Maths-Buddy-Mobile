import styled from 'styled-components';
import {Dimensions } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;

// colors
export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand3: '#272264',
  green: '#10B981',
  red: '#EF4444',
  PearlAsh: '#e9f0f7',
  whiteAsh: '#97969a',
  brand2: '#4066E0',
  brand: '#0172FF',
  black :'#000000',
};

const { primary, secondary, tertiary, darkLight, brand, brand2, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${Colors.darkLight};
`;

export const InnerContainer = styled.View`
  width: 99.9%;
  flex: 1;
  align-items: center;
  background-color: ${Colors.darkLight};

`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
  background-color: ${Colors.PearlAsh};

`;

export const BestSellerContainer = styled.View`
  width: 100%;
  flex:1;
  background-color: ${Colors.darkLight};

`;

export const ImgSliderContainer = styled(InnerContainer)`
  width: 100%;
  height: 12px;
  flex: 1;
`;

export const PaymentLargeContainer = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const PaymentContainer = styled(PaymentLargeContainer)`
  width: 97%;
  height: 100px;
  padding: 5px;
  margin: auto;
  border-radius: 10px;
  background-color: ${Colors.PearlAsh};
`;

export const StyledPaymentText = styled.Text`
  color: ${Colors.whiteAsh};
  font-size: 20px;
  text-align: left;
  margin-right: 5%;
  flex: 1;
  margin-top: -13%;
`;

export const StyledPaymentDetailsText = styled.Text`
  color: ${brand};
  font-size: 20px;
  flex: 1;
  text-align: center;
`;

export const StyledPaymentHeaderText = styled.Text`
  color: ${tertiary};
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  flex: 1;
  
`;

export const StyledPaymentHeaderAmountText = styled.Text`
  color: ${tertiary};
  font-size: 18px;
  text-align: right;
  margin-top: 1%;
  margin-right: 5%;
  font-weight: bold;
  flex: 1
`;

export const PageLogo = styled.Image`
  width: 150px;
  height: 200px;
`;

export const Avatar = styled.ImageBackground`
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-top: 10%;
  margin-left: 10%;
`;

export const ImageElemente = styled.ImageBackground`
  width: 90px;
  height: 150px;
  margin: auto;
  border-radius: 50px;
  border-width: 1px;
  border-color: ${secondary};
  margin-top: 10%;
  margin-left: 10%;
`;

export const WelcomeImage = styled.ImageBackground`
  height: 160px;
  width: 100%;
  margin-top: 1%;
`;

export const PageTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.primary};
  padding: 10px;
  margin-bottom: 2%;
  ${(props) =>
    props.welcome &&
    `
    font-size: 25px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.google == true &&
    `
    background-color: ${green};
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

  ${(props) =>
    props.google == true &&
    `
    color: ${primary};
    padding: 25px;
  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${Colors.black};
  margin-vertical: 10px;
`;

export const Space = styled.View`
  height: 1px;
  width: 100%;
  margin-vertical: 1%;
`;

export const StyledFormArea = styled.View`
  width: 90%;
  height: 95%;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;
export const ExtraText4 = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${brand2};
  font-size: 28px;
  marginTop:3%;
`;
export const ExtraText5 = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 24px;
`;
export const ExtraText1 = styled.Text`
  justify-content: center;
  display: flex; 
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const ExtraText2 = styled.Text`
  display: flex; 
  text-align: left;
  color: ${tertiary};
  font-size: 25px;
  font-weight: bold;
`;

export const ExtraText3 = styled.Text`
  display: flex; 
  text-align: left;
  color: ${brand2};
  font-weight: bold;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;
