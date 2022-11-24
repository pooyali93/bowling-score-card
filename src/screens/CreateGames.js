import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Button , SafeAreaView, StatusBar, Keyboard} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import GameContext from '../context/GameContext';
import Input from '../components/Input';
import Buttons from '../components/Buttons';
import COLORS from '../context/Colors';
import { Ionicons } from '@expo/vector-icons';

const CreateGames = ({navigation}) => {
  const {create} = useContext(GameContext);
  const [numOfPlayers, setNumOfPlayers] = useState([])

  // const [competitionName, setCompetitionName] = useState("");
  // const [rink, setRink] = useState("");
  // const [date, setDate] = useState("");
  // const [teamOne, setTeamOne] = useState("");
  // const [teamTwo, setTeamTwo] = useState("");

  // //Team Player hooks 
  // const [teamOnePlayerNames, setTeamOnePlayerNames] = useState([]);
  // const updateTeamOnePlayers = (path, value) => {
  //   setTeamOnePlayerNames({...teamOnePlayerNames, [path]: value});
  // };
  

  const [selectedDate, setSelectedDate ] = useState([])
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
   console.log("A date has been picked: ", date.toLocaleDateString());
    setSelectedDate(date.toLocaleDateString())
    hideDatePicker();
  };
  const [inputs, setInputs] = useState({
    competitionName:"",
    rink:"",
    teamOne:"",
    teamTwo:"",
    selectedDate:"",
    teamOnePlayerOne:"",
    teamOnePlayerTwo:"",
    teamOnePlayerThree:"",
    teamOnePlayerFour:"",
    teamTwoPlayerOne:"",
    teamTwoPlayerTwo:"",
    teamTwoPlayerThree:"",
    teamTwoPlayerFour:"",
  });

  const [error, setError] = useState({});
  const validate = () => {
    Keyboard.dismiss();
    if(!inputs.competitionName){
      handleError("Please input competition name", 'competitionName');
    }
    if(!inputs.rink){
      handleError("Please input rink no", 'rink');
    }
    if(!inputs.teamOne){
      handleError("Please input first team name", 'teamOne');
    }
    if(!inputs.teamTwo){
      handleError("Please input second team name", 'teamTwo');
    }
    if(!inputs.teamOnePlayerOne){
      handleError("Please input first players name", 'teamOnePlayerOne');
    }
    if(!inputs.teamTwoPlayerOne){
      handleError("Please input first players name", 'teamTwoPlayerTwo');
    }
    else { }
  }; 

  const handleOnChange = (text, input) => {
    setInputs(prevState =>({...prevState, [input]: text}));
    // console.log("print text")
    // console.log(text)

  };

  const handleError = (errorMessage, input) => {
    setError(prevState =>({...prevState, [input]: errorMessage }))
  };
  // console.log("inputs")
  // console.log(inputs.teamOnePlayerOne)
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}> Create your game </Text>
          <View style={styles.innerContainer}>

            <Input 
              label="Competition" 
              placeholder="Enter competition name"
              returnKeyType={'done'}
              // error={error.competitionName}
              onChangeText={(text) => handleOnChange(text, 'competitionName' )}
              />
            
            <Input  
            label="Rink No" 
             
              keyboardType="numeric"
              returnKeyType={'done'}
              placeholder="Type rink number"
              // error={error.rink}
              onChangeText={(text) => handleOnChange(text, 'rink' )}
              />

            <Input 
                label="First team name" 
                returnKeyType={'done'}
                placeholder="Enter team name" 
                // error={error.teamOne}
                onChangeText={(text) => handleOnChange(text, 'teamOne' )}
              />

            <Input 
                label="Second team name" 
                returnKeyType={'done'}
                placeholder="Enter team name" 
                // error={error.teamTwo}
                onChangeText={(text) => handleOnChange(text, 'teamTwo' )}
                />

                <Text style={styles.textLabel}>Select a date</Text>
              

                        <View style={styles.inputContainer}>
                        <Text style={styles.icon}>{selectedDate}</Text>

                        <Ionicons name="calendar-sharp" style={{fontSize:24, color:COLORS.lightblue}} onPress={showDatePicker} />
                              
                              <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                              />
                            
                            </View>
            
               {/* <Text style={styles.brandText}> {JSON.stringify(teamTwoPlayerNames)}</Text> */}
                      <Input 
                      label="First team Players"
                        returnKeyType={'next'}
                        // autoFocus = {true}
                        id="ftPlayer1"
                        placeholder="Type first team players name"
                        onChangeText={(text) => handleOnChange(text, 'teamOnePlayerOne')}

                        />  
                                  
                       <Input 
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type first team players name"
                        onChangeText={(text) => handleOnChange(text, 'teamOnePlayerTwo')}                      
                        />
                        <Input 
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type first team players name"
                        onChangeText={(text) => handleOnChange(text, 'teamOnePlayerThree')}
                        
                       
                        />                 
                      <Input 
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type first team players name"
                        onChangeText={(text) => handleOnChange(text, 'teamOnePlayerFour')}                      
                        />
                      <Input 
                        label="Second team players"
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type second team players name"
                        id="stPlayer2"
                        onChangeText={(text) => handleOnChange(text, 'teamTwoPlayerOne')}
                        />
                   
                       <Input 
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type second team players name"
                        onChangeText={(text) => handleOnChange(text, 'teamTwoPlayerTwo')}
                        />
                        <Input 
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type second team players name"
                        onChangeText={(text) => handleOnChange(text, 'teamTwoPlayerThree')}
                        />
                   
                      <Input 
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type second team players name"
                        onChangeText={(text) => handleOnChange(text, 'teamTwoPlayerFour')}
                        /> 
            <Buttons title="Submit" onPress={() => { 
              validate() 
              create(
                inputs.competitionName, 
                inputs.rink,
                inputs.teamOne,
                inputs.teamTwo, 
                selectedDate,
                inputs.teamOnePlayerOne, 
                inputs.teamOnePlayerTwo,
                inputs.teamOnePlayerThree,
                inputs.teamOnePlayerFour,
                inputs.teamTwoPlayerOne, 
                inputs.teamTwoPlayerTwo,
                inputs.teamTwoPlayerThree,
                inputs.teamTwoPlayerFour,
                navigation.navigate("Previous Games"));
              
                }}
            />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: '1', 
    paddingTop: StatusBar.currentHeight,
  },
  innerContainer:{
    backgroundColor: 'white',
    marginTop:10,
    padding:15,
    borderRadius:10,
    marginVertical:20
  },
  inputContainer: {
    height:40,
    borderWidth:0.5,
    paddingHorizontal:10,
    //marginBottom:5,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white'
  },
  scrollView: {
    paddingTop:30,
    paddingHorizontal: 20,
  },
  icon:{
    position:'absolute',
    top:12,
    right:10,
   justifyContent:'center', 
   alignItems:'center',
   color:COLORS.black,
   fontSize:16,
   letterSpacing:5
  },
   
  heading: {
    fontSize:32,
    color:'black',
    fontWeight: 'bold',
  },

  inputStyle:{ 
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },

  textInput: {
    fontSize:20,
    padding:10,
    margin:5,
    borderWidth:1,
  },
  textLabel: {
    fontSize:18,
    color:'grey',
    marginVertical:10
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    paddingHorizontal: 24,
    borderRadius: 5,
    backgroundColor: '#3dcf8e',
    margin:5
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  });

export default CreateGames;

