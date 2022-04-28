import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Colors, ExtraText } from './styles';
import shopCart from '../screens/shoppingCart';
import { Avatar, Card, IconButton } from 'react-native-paper';
// import { StackNavigator } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

const NotiificationCard = (props) => {
  
  const navigation = useNavigation();
  const quize = (name) => {
    // console.log(name)
    // const { navigate } = this.props.navigation;
    // navigate('allProducts');
    navigation.navigate('allProducts', {itemId: 1,otherParam: name})
  };
  return (
    // <View style={styles.item}>
    //   <Image
    //     source={{
    //       uri: props.image,
    //     }}
    //     style={styles.itemPhoto}
    //     resizeMode="cover"
    //   />
    //   <ExtraText style={styles.itemText}>{props.name}</ExtraText>
    //   {/* <ExtraText style={styles.itemText1}> Rs. {props.price}</ExtraText> */}
    //   <TouchableOpacity style={[styles.container, { backgroundColor: Colors.brand }]}>
    //     <View style={styles.button} >
    //       <Text style={styles.text}>Attempt </Text>
    //     </View>
    //   </TouchableOpacity>
    // </View>
    <View style={styles.item}>
      <TouchableOpacity onPress={()=> quize(props.name)}>
        <Card.Title
          title={props.name}
          subtitle={props.name[(props.name.length)-1]==1 ? "Easy":"Hard"}
          left={(props) => <Avatar.Icon {...props} icon="book" />}
        />
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
//   card: {
//     marginVertical: 10,
//     backgroundColor: '#D7D7D7',
//     paddingVertical: 10,
//     paddingLeft: 15,
//     width: '90%',
//     marginLeft: 20,
//     borderRadius: 20,

//     height: 110,

//     shadowColor: '#000',
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 1.5,
//   },
  item: {
    alignSelf: 'auto',
    // minWidth: 120,
    // width: 100,
    flex: 1,
    // justifyContent: 'space-between',
  },

//   itemPhoto: {
//     width: 100,
//     justifyContent: 'center',
//     height: 150,
//   },

//   container: {
//     alignSelf: 'auto',
//     borderRadius:10,
//     minWidth: 50,
//     width:70,
//     justifyContent: 'space-between',
//   },
  
//   itemText: {
//     color: Colors.black,
//     marginTop: 5,
//     justifyContent: 'center',
//   },

//   text: {
//     color: Colors.black,
//     fontWeight: "bold",
//     textAlign: 'center',
//   },
//   itemText1: {
//     color: Colors.brand3,
//     marginTop: 5,
//     fontSize: 18,
//     justifyContent: 'center',
//   },
});

export default NotiificationCard;
