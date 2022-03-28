import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Colors, ExtraText } from './styles';
import shopCart from '../screens/shoppingCart';

const NotiificationCard1 = (props) => {
  return (
    <View style={styles.item}>
      {/* <Image
        source={{
          uri: props.image,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      /> */}
      <ExtraText style={styles.itemText}>{props.name}</ExtraText>
      {/* <ExtraText style={styles.itemText1}> Rs. {props.price}</ExtraText> */}
      <TouchableOpacity style={[styles.container, { backgroundColor: Colors.black }]}>
        <View style={styles.button} >
          <Text style={styles.text}>View All </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: Colors.black,
    marginTop: 5,
    justifyContent: 'center',
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
