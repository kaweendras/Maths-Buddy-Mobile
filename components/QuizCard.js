import React,{useState , useContext} from 'react';
import { View, TouchableOpacity, StyleSheet, Image ,ScrollView} from 'react-native';
import { Colors, ExtraText ,StyledButton} from './styles';
import {scoreContext} from '../components/stateProvider';
// import shopCart from '../screens/shoppingCart';

import { RadioButton,Text,Button ,Dialog, Portal} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const QuizCard = (props) => {

const [value, setValue] = React.useState();
const [enable, setEnable] = useState(false);
// const [marks, updateMarks] = useState(0.0);
// const [{score}, dispatch] = useState();
// const updateScore = Score => {
//   dispatch({
//     type: 'UPDATE_SCORE',
//     score: Score,
//   });
// };
const { storedScore, setStoredScore } = useContext(scoreContext);
const { user_id,marks,question_category,date } = storedScore;

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
// AsyncStorage.setItem('attendUserQuiz', JSON.stringify({'marks':m},['marks']))
//   .then(() => {  
//     // setStoredScore({'marks':m},['marks']);

//   })
//   .catch((error) => {
//     console.log(error,'catch')
//   });
}

const saveOpt = (x,ans,i) => { 
  // console.log(storedScore.marks,' --->test');
  
  //   // if (props.qnIndex + 1 >= Questions.questions.length) {
  //   //   console.log('End of Quiz');
  //   //   // props.navigation.navigate('CongratsScreen')
  //   // } else {
  //   //   // props.navigation.navigate('QuestionScreen', {
  //   //   //   index: props.qnIndex + 1,
  //   //   // });
  //   // }


    // x.trim() === ans.trim()
  //   ? updateScore(marks+1)
  //   : updateScore(marks+0);
  console.log(user_id);
  
};

const isEnable= ()=>{ setEnable(true); }

const functioncombiner=(x,ans,i) => { saveOpt (x,ans,i); isEnable(); }

    return (
      <View style={styles.item}>
        <ExtraText style={styles.itemText2}>Question {props.i+1}</ExtraText>
        <Image
          source={{
            uri: props.qimage,
          }}
          style={styles.itemPhoto}
        />
        <RadioButton.Group  onValueChange={newValue => setValue(newValue)} value={value}>
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
        </RadioButton.Group>
        <Button 
          style={styles.butt}
          id={props.i} 
          disabled={enable} 
          icon="content-save"
          mode="contained" 
          onPress={() => functioncombiner(value,props.ans,props.i)}>
          Save
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
    width:'30%',
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

export default QuizCard;
