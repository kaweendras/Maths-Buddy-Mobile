// import React,{useEffect, useState, useContext} from 'react';
// import { View, TouchableOpacity, StyleSheet, Image ,ScrollView} from 'react-native';
// import { Colors, ExtraText ,StyledButton} from './styles';
// import {scoreContext} from '../components/stateProvider';
// // import shopCart from '../screens/shoppingCart';

// import { RadioButton,Text,Button ,Dialog, Portal} from 'react-native-paper';

// // let selectedans;


// // const opt = (x,i) => {
// //   // console.log(i,x);
// //   // console.log(i);
// //   setSelected(x);
// //   // getSelected();
// //   // console.log(selectedans);
// // };

// // const setSelected= (x)=>{
// //   selectedans=x;
// //   console.log(selectedans);

// // }

// // const getSelected= ()=>{
// //   console.log(selectedans);
// //   return selectedans;
// // }

// const ansReview = (props) => {

//   const [value, setValue] = React.useState();
//   // const [visible, setVisible] = React.useState(false);

//   // const hideDialog = () => setVisible(false);

//   // let a=0;
//   // if (props.i<10) {
//     return (
//       <View style={styles.item}>
//         <ExtraText style={styles.itemText2}>Question {props.i+1}</ExtraText>
//         <Image
//           source={{
//             uri: props.qimage,
//           }}
//           style={styles.itemPhoto}
//         />
//         <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
//           <View>
//             <RadioButton.Item value={props.i+"1"} label={props.ans1}/>
//           </View>
//           <View>
//             <RadioButton.Item value={props.i+"2"} label={props.ans2}/> 
//           </View>
//           <View>
//             <RadioButton.Item value={props.i+"3"} label={props.ans3}/>
//           </View>
//           <View>
//             <RadioButton.Item value={props.i+"4"} label={props.ans4}/>
//           </View>
//         </RadioButton.Group>
//         <Button style={styles.butt}  icon="content-save" mode="contained" onPress={() => console.log(value)}>
//           Save
//         </Button>
//         {/* <Button style={styles.butt} icon="heart-plus" mode="contained" onPress={() => console.log("fav")}>
          
//         </Button> */}
//       </View>
      
//     );
//   }; 
//   // }
  

// const styles = StyleSheet.create({
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
//   item: {
    
//     // alignSelf: 'auto',
//     // minWidth: 720,
//     backgroundColor:Colors.primary,
//     width: '95%',
//     height: 900,
//     // flex: 1,
//     // justifyContent: 'space-between',
//   },

//   itemPhoto: {
//     width: 330,
//     height: 450,
//     resizeMode: 'contain',
//   },

//   container: {
//     alignSelf: 'auto',
//     borderRadius:10,
//     minWidth: 50,
//     width:70,
//     justifyContent: 'space-between',
//   },
  
//   butt:{
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width:'30%',
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
//     margin: 5,
//     fontSize: 20,
//     // justifyContent: 'left',
//   },

//   itemText2: {
//     color: Colors.brand,
//     marginTop: 5,
//     fontSize: 22,
//     justifyContent: 'center',
//   },
  
//   itemText3: {
//     color: Colors.black,
//     marginTop: 5,
//     fontSize: 24,
//     justifyContent: 'center',
//   },
// });

// export default ansReview;


import React,{useEffect, useState, useContext} from 'react';
import { View, TouchableOpacity, StyleSheet, Image ,ScrollView} from 'react-native';
import { Colors, ExtraText ,Space,StyledButton} from './styles';
import {scoreContext} from './stateProvider';
// import shopCart from '../screens/shoppingCart';

import { RadioButton,Text,Button ,Dialog, Portal} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import TTS
import Tts from 'react-native-tts';
// var Speech = require('react-native-speech');
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
// const [{score}, dispatch] = useState();
// const updateScore = Score => {
//   dispatch({
//     type: 'UPDATE_SCORE',
//     score: Score,
//   });
// };
const { storedScore, setStoredScore } = useContext(scoreContext);
const { user_id,marks,question_category,date } = storedScore;

// console.log(storedScore,'==> all quiz');

// AsyncStorage.getItem( 'attendUserQuiz' )
//     .then( data => {

//       // the string value read from AsyncStorage has been assigned to data
//       // console.log( data );

//       // transform it back to an object
//       // setStoredScore (JSON.stringify(data));
//     console.log(data,'--->quiz card');

//       // console.log(data);
//     })

// const attendQuiz={
//   "user_id": _id,
//   "question_category": otherParam,
//   "marks": 0,
//   "date": new Date()
// }

const updateScore=(m)=>{

AsyncStorage.setItem('attendUserQuiz', JSON.stringify({'marks':m},['marks']))
  .then(() => {  
    setStoredScore({'marks':m},['marks']);

  })
  .catch((error) => {
    console.log(error,'catch')
  });
}

const saveOpt = (x,ans,i) => { 

// AsyncStorage.getItem( 'attendUserQuiz' )
// .then( data => {

//   // the string value read from AsyncStorage has been assigned to data
//   // console.log( data );

//   // transform it back to an object
//   setStoredScore (JSON.stringify(data));
// console.log(marks,'--->quiz card');

//   // console.log(data);
// })
  // console.log(storedScore.marks,' --->test');
  
  //   // if (props.qnIndex + 1 >= Questions.questions.length) {
  //   //   console.log('End of Quiz');
  //   //   // props.navigation.navigate('CongratsScreen')
  //   // } else {
  //   //   // props.navigation.navigate('QuestionScreen', {
  //   //   //   index: props.qnIndex + 1,
  //   //   // });
  //   // }


    x.trim() === ans.trim()
    ? mark=mark+1
    : mark=mark+0 ;
  console.log(mark);
  updateScore(mark);
    // ? updateMarks(1)
    // : updateMarks(0) ;
  // console.log(mark);
  
};

const isEnable= ()=>{ setEnable(true); }

const functioncombiner=(x,ans,i) => { 
  Tts.speak('Hello, world!', {
    androidParams: {
      KEY_PARAM_PAN: -1,
      KEY_PARAM_VOLUME: 0.5,
      KEY_PARAM_STREAM: 'STREAM_MUSIC',
    },
  });
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
        {/* <RadioButton.Group  onValueChange={newValue => setValue(newValue)} value={value}>
          <View>
            <RadioButton.Item disabled={enable} value={props.ans1} label={props.ans1}/>
          </View>
          <View>
            <RadioButton.Item disabled={enable} value={props.ans2} label={props.ans2}/> 
          </View>
          <View>
            <RadioButton.Item disabled={enable} value={props.ans3} label={props.ans3}/>
          </View>
          <View>
            <RadioButton.Item disabled={enable} value={props.ans4} label={props.ans4}/>
          </View>
        </RadioButton.Group> */}
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
        {/* <Button style={styles.butt} icon="heart-plus" mode="contained" onPress={() => console.log("fav")}>
          
        </Button> */}
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
