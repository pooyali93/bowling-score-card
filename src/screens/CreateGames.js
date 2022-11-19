import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Button , SafeAreaView, StatusBar, Keyboard} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from '@expo/vector-icons';
import GameContext from '../context/GameContext';
import Input from '../components/Input';
import Buttons from '../components/Buttons';
import COLORS from '../context/Colors';

const CreateGames = ({navigation}) => {
  const {create} = useContext(GameContext);
  const [competitionName, setCompetitionName] = useState("");
  const [rink, setRink] = useState("");
  const [date, setDate] = useState("");
  const [teamOne, setTeamOne] = useState("");
  const [teamTwo, setTeamTwo] = useState("");

  //Team Player hooks 
  const [teamOnePlayerNames, setTeamOnePlayerNames] = useState([]);
  const updateTeamOnePlayers = (path, value) => {
    setTeamOnePlayerNames({...teamOnePlayerNames, [path]: value});
  };
  const [teamTwoPlayerNames, setTeamTwoPlayerNames] = useState([]);
  const updateTeamTwoPlayers= (path, value) => {
    setTeamTwoPlayerNames({...teamTwoPlayerNames, [path]: value});
  };

  const [selectedDate, setSelectedDate] = useState();
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  const [inputs, setInputs] = useState({
    competitionName:"",
    rink:"",
    teamOne:"",
    teamTwo:"",
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
      handleError("Please input first players name", 'teamOnePlayerTwo');
    }


  
    else {
    create(inputs.competitionName, inputs.rink,inputs.teamOne,inputs.teamTwo, inputs.teamOnePlayerOne, inputs.teamOnePlayerTwo,inputs.teamTwoPlayerOne, inputs.teamTwoPlayerTwo ,navigation.navigate("Previous Games"));
    }
  }; 

  const handleOnChange = (text, input) => {
    setInputs(prevState =>({...prevState, [input]: text}));
    

  };

  const handleError = (errorMessage, input) => {
    setError(prevState =>({...prevState, [input]: errorMessage }))
  };
  console.log("inputs")
  console.log(inputs)

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.heading}> Create your game </Text>
          <View style={styles.innerContainer}>

            <Input 
              label="Competition" 
              placeholder="Enter competition name"
              returnKeyType={'done'}
              error={error.competitionName}
              onChangeText={(text) => handleOnChange(text, 'competitionName' )}
              />
            
            <Input 
              label="Rink No" 
              keyboardType="numeric"
              returnKeyType={'done'}
              placeholder="Type rink number"
              error={error.rink}
              onChangeText={(text) => handleOnChange(text, 'rink' )}
              />

            <Input 
                label="First team name" 
                returnKeyType={'done'}
                placeholder="Enter team name" 
                error={error.teamOne}
                onChangeText={(text) => handleOnChange(text, 'teamOne' )}
              />

            <Input 
                label="Second team name" 
                returnKeyType={'next'}
                placeholder="Enter team name" 
                error={error.teamTwo}
                onChangeText={(text) => handleOnChange(text, 'teamTwo' )}
                />

              <View style={{}}>
                <Input 
                  style={{width:'100%'}}
                  label="Select a date"
                  onChangeText={(text) => handleOnChange(text, 'date' )}
                  placeholder={selectedDate ? selectedDate.toLocaleDateString() : 'Select a date'}
                  />
                <DateTimePickerModal
                  isVisible={datePickerVisible}
                  mode="date"
                  locale="en_GB"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  />
               <Ionicons  name="calendar-sharp" size={32} style={styles.icon} color="black" onPress={showDatePicker}/>
            </View>
                  
                      <Input 
                      label="First team Players"
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type first team players name"
                        error={error.teamOnePlayerOne}
                        onChangeText={(text) => handleOnChange(text, 'teamOnePlayerOne')}
                        
                       
                        />                 
                      <Input 
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type first team players name"
                        error={error.teamOnePlayerTwo}
                        onChangeText={(text) => handleOnChange(text, 'teamOnePlayerTwo')}                      
                        />

  
                    {/* <Text style={styles.brandText}> {JSON.stringify(teamOnePlayerOne)}</Text> */}
                      {/* <Text style={styles.textLabel}> Team {teamTwo} Player names:  </Text>
                            {['One','Two','Three', 'Four'].map(num => 
                                <Input key={num}
                                  returnKeyType={'done'}
                                  autoFocus = {true}
                                  placeholder="Type players name" value={teamTwoPlayerNames[`teamTwoPlayer${num}`]}
                                  onChangeText={(text) => {
                                updateTeamTwoPlayers(`teamTwoPlayer${num}`, text);
                              }}/>
                              
                              )
                        }
                        <Text style={styles.brandText}> {JSON.stringify(teamTwoPlayerNames)}</Text> */}             
                      <Input 
                        label="Second team players"
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type second team players name"
                        error={error.teamTwoPlayerOne}
                        onChangeText={(text) => handleOnChange(text, 'teamTwoPlayerOne')}
                        />
                   
                      <Input 
                        returnKeyType={'next'}
                        autoFocus = {true}
                        placeholder="Type second team players name"
                        error={error.teamTwoPlayerTwo}
                        onChangeText={(text) => handleOnChange(text, 'teamTwoPlayerTwo')}

                       
                        />

            <Buttons title="Submit" onPress={() => { 
              validate() 
                
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
  scrollView: {
    paddingTop:30,
    paddingHorizontal: 20,
  },
  icon:{
    position:'absolute',
    top:38,
    right:1,
   justifyContent:'center', 
   alignItems:'center',
   color:COLORS.lightblue
  },
  dateContainer: {
    width:'50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    margin:0,
    padding:8
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

/*
<Button style={styles.button} >
          
          title="Submit Item" onPress={() => {
           // callback({competitionName:competitionName, rink:rink, });
            //navigation.pop();
        }}
        </Button> 
        */