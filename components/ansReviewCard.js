import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image ,ScrollView} from 'react-native';
import { Colors, ExtraText ,StyledButton} from './styles';
// import shopCart from '../screens/shoppingCart';

import { RadioButton,Text,Button ,Dialog, Portal} from 'react-native-paper';

// let selectedans;


// const opt = (x,i) => {
//   // console.log(i,x);
//   // console.log(i);
//   setSelected(x);
//   // getSelected();
//   // console.log(selectedans);
// };

// const setSelected= (x)=>{
//   selectedans=x;
//   console.log(selectedans);

// }

// const getSelected= ()=>{
//   console.log(selectedans);
//   return selectedans;
// }

const ansReview = (props) => {

  const [value, setValue] = React.useState();
  // const [visible, setVisible] = React.useState(false);

  // const hideDialog = () => setVisible(false);

  // let a=0;
  // if (props.i<10) {
    return (
      <View style={styles.item}>
        <ExtraText style={styles.itemText2}>Question {props.i+1}</ExtraText>
        <Image
          source={{
            uri: props.qimage,
          }}
          style={styles.itemPhoto}
        />
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View>
            <RadioButton.Item value={props.i+"1"} label={props.ans1}/>
          </View>
          <View>
            <RadioButton.Item value={props.i+"2"} label={props.ans2}/> 
          </View>
          <View>
            <RadioButton.Item value={props.i+"3"} label={props.ans3}/>
          </View>
          <View>
            <RadioButton.Item value={props.i+"4"} label={props.ans4}/>
          </View>
        </RadioButton.Group>
        <Button style={styles.butt}  icon="content-save" mode="contained" onPress={() => console.log(value)}>
          Save
        </Button>
        {/* <Button style={styles.butt} icon="heart-plus" mode="contained" onPress={() => console.log("fav")}>
          
        </Button> */}
      </View>
      
    );
  }; 
  // }
  

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

export default ansReview;
