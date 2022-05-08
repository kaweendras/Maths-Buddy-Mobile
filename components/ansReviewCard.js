import React,{useEffect, useState, useContext} from 'react';
import { View, TouchableOpacity, StyleSheet, Image ,ScrollView} from 'react-native';
import { Colors, ExtraText ,Space,StyledButton} from './styles';
import {scoreContext} from './stateProvider';
// import shopCart from '../screens/shoppingCart';

import { RadioButton,Text,Button ,Dialog, Portal} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import TTS
import Tts from 'react-native-tts';
import * as Speech from 'expo-speech';

// import * as Speech from 'expo-speech';

// let selectedans;
// const [updateScore, score] = React.useState();

// const getSelected= ()=>{
//   console.log(selectedans);
//   return selectedans;
// }

// ---------------
// setStoredCredentials('');

// {
//   "user_id": "62133281166aaec0b3c8493b",
//   "question_category": "Geometry 1",
//   "marks": 90,
//   "date": "2022-02-21T10:24:37.301Z",
// },



// ---------------
const m=0;
let mark=m;

const AnsReviewCard = (props) => {

const [value, setValue] = React.useState();
const [enable, setEnable] = useState(false);
const [markss, updateMarks] = useState(0);

const { storedScore, setStoredScore } = useContext(scoreContext);
const { user_id,marks,question_category,date } = storedScore;

const updateScore=(m)=>{

AsyncStorage.setItem('attendUserQuiz', JSON.stringify({'marks':m},['marks']))
  .then(() => {  
    setStoredScore({'marks':m},['marks']);

  })
  .catch((error) => {
    console.log(error,'catch')
  });
}

// const saveOpt = (x,ans,i) => { 

//     x.trim() === ans.trim()
//     ? mark=mark+1
//     : mark=mark+0 ;
//   console.log(mark);
//   updateScore(mark);
  
// };

const isEnable= ()=>{ setEnable(true); }

const functioncombiner=(x,ans,i) => { 
  let qno=i+1;
  Speech.speak("the Question "+ qno + "answer is "+ans+". "+x, )

}

    return (
      <View style={styles.item}>
        <ExtraText style={styles.itemText2}>Question {props.i+1}</ExtraText>
        <Image
          source={{
            uri: props.qimage,
          }}
          style={styles.itemPhoto}
        />

        <ExtraText style={styles.itemText1}>Answer: {props.ans}</ExtraText>
        <ExtraText style={styles.itemText1}> {props.guide}</ExtraText>
        <Space></Space>
        <Button 
          style={styles.butt}
          id={props.i} 
          disabled={enable} 
          icon="headset"
          mode="contained" 
          onPress={() => functioncombiner(props.guide,props.ans,props.i)}>
          Play Review
        </Button>
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
    
    // alignSelf: 'auto',
    // minWidth: 720,
    backgroundColor:Colors.primary,
    width: '95%',
    height: 900,
    // flex: 1,
    // justifyContent: 'space-between',
  },

  itemPhoto: {
    width: 330,
    height: 450,
    resizeMode: 'contain',
  },

  container: {
    alignSelf: 'auto',
    borderRadius:10,
    minWidth: 50,
    width:70,
    justifyContent: 'space-between',
  },
  
  butt:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'60%',
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
    margin: 5,
    fontSize: 20,
    // justifyContent: 'left',
  },

  itemText2: {
    color: Colors.brand,
    marginTop: 5,
    fontSize: 22,
    justifyContent: 'center',
  },
  
  itemText3: {
    color: Colors.black,
    marginTop: 5,
    fontSize: 24,
    justifyContent: 'center',
  },
});

export default AnsReviewCard;
