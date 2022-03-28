import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Colors, ExtraText } from './styles';
// import shopCart from '../screens/shoppingCart';

const QuizCard = (props) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: props.qimage,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <ExtraText style={styles.itemText}>{props.quiz}</ExtraText>
      <ExtraText style={styles.itemText1}>{props.ans1}</ExtraText>
      <ExtraText style={styles.itemText1}>{props.ans2}</ExtraText>
      <ExtraText style={styles.itemText1}>{props.ans3}</ExtraText>
      <ExtraText style={styles.itemText1}>{props.ans4}</ExtraText>
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
    color: Colors.black,
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

export default QuizCard;
