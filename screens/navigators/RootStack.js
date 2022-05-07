import React from 'react';

//colors
import { Colors } from '../../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// React DrawerNavigator
import { createDrawerNavigator} from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import Tabs  from '../MainTabScreen';

// screens
import Login from '../login';
import Signup from '../Signup'
import restPass from '../restPass';
import dashboard from '../dashboard';
import validateOTP from '../validateOTP';
import inquiryPost from '../inquiryPost';
import shopCart from '../shoppingCart';
import profile from '../profile';
import allProducts from '../allProducts';
import ansReview from '../ansReview';
import history from '../history';


// credentials context
import { CredentialsContext } from '../../components/CredentialsContext';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
      >

      <Tab.Screen name="Home" component={dashboard} 
        options={{
          tabBarLabel: 'Home',
          paddingTop: 75,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: 'red' }}>

          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: tertiary,
              headerTransparent: true,
              headerTitle: '',
              headerLeftContainerStyle: {
                paddingLeft: 15,
              },
            }}
          >
            {storedCredentials ? (
              <>
              {MyTabs}
                {/* <Stack.Screen name="Tabs"component={Tabs}/> */}
                <Stack.Screen name="home"component={dashboard}/>
                <Stack.Screen name="validateOTP" component={validateOTP} />   
                <Stack.Screen name="inquiryPost" component={inquiryPost} /> 
                {/* <Stack.Screen name="shopCart" component={shopCart} />  */}
                <Stack.Screen name="profile" component={profile} /> 
                <Stack.Screen name="allProducts" component={allProducts} /> 
                <Stack.Screen name="ansReview" component={ansReview} /> 
                <Stack.Screen name='history' component={history}/>
                
              </>
                
               
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="restPass" component={restPass} />
                <Stack.Screen name="validateOTP" component={validateOTP} />
              </>
            )}
            
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
