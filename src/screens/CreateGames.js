import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from '@expo/vector-icons';
import GameContext from '../context/GameContext';

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
  }

  const [teamTwoPlayerNames, setTeamTwoPlayerNames] = useState([]);
  const updateTeamTwoPlayers= (path, value) => {
    setTeamTwoPlayerNames({...teamTwoPlayerNames, [path]: value});
  }


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

  let storeTeamOnePlayers = []
  let storeTeamTwoPlayers = []
  

    return (
      <ScrollView >
        <View style={styles.container}>
        <Text style={styles.heading}> Create your game </Text>
        <Text style={styles.textLabel}> Competition:  </Text>
          
        <TextInput 
                style={styles.textInput} 
                returnKeyType={'done'}
                placeholder="Type competition name" value={competitionName}
                onChangeText={(text) => {
                  setCompetitionName(text);
                }}
    
            />

              <Text style={styles.textLabel}> Rink No:  </Text>
                <TextInput 
                    style={styles.textInput}
                    keyboardType="numeric"
                    returnKeyType={'done'}
                    placeholder="Type rink" value={rink}
                    onChangeText={(text) => {
                    setRink(text);
                    }}
              />

              <View style={styles.dateContainer}
 >
                          <DateTimePickerModal
                            isVisible={datePickerVisible}
                            mode="date"
                            locale="en_GB"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                          />
                    <Text style={styles.inputStyle}>
                        {selectedDate ? selectedDate.toLocaleDateString() : 'Select a date'}

                      </Text>
                
                    <MaterialIcons name="date-range" size={32} style={{}} color="black" onPress={showDatePicker}/>
              </View>


                <Text style={styles.textLabel}> Team names:  </Text>
                  <TextInput 
                      style={styles.textInput} 
                      returnKeyType={'done'}
                      placeholder="Type team name" value={teamOne}
                      onChangeText={(text) => {
                        setTeamOne(text);
                      }}
                  /> 
                  <Text style={{textAlign:'center', color:'#454648', fontWeight: 'bold',}}>VS</Text>
                  <TextInput 
                      style={styles.textInput}
                      returnKeyType={'done'}
                      placeholder="Type team name" value={teamTwo}
                      onChangeText={(text) => {
                        setTeamTwo(text);
                      }}
                  />

                  <Text style={styles.textLabel}> Team {teamOne} Player names:  </Text>
                  <View style={{flexDirection:"row"}}>
                  <View style={styles.inputStyle} >
                  <Text style={styles.brandText}> {JSON.stringify(teamOnePlayerNames)}</Text>
                        {['One','Two','Three', 'Four'].map(num => 
                            <TextInput key={num}
                              style={styles.textInput}
                              returnKeyType={'next'}
                              autoFocus = {true}
                              placeholder="Test " value={teamOnePlayerNames[`teamOnePlayer${num}`]}
                              onChangeText={(text) => {
                            updateTeamOnePlayers(`teamOnePlayer${num}`, text);
                          }}/>
                          
                          )
                      
                    }
             
                    </View>
                    </View>
                  <Text style={styles.textLabel}> Team {teamTwo} Player names:  </Text>
                  <View style={{flexDirection:"row"}}>
                    <View style={styles.inputStyle} >
                  <Text style={styles.brandText}> {JSON.stringify(teamTwoPlayerNames)}</Text>
                       {['One','Two','Three', 'Four'].map(num => 
                            <TextInput key={num}
                              style={styles.textInput}
                              returnKeyType={'done'}
                              autoFocus = {true}
                              placeholder="Test " value={teamTwoPlayerNames[`teamTwoPlayer${num}`]}
                              onChangeText={(text) => {
                            updateTeamTwoPlayers(`teamTwoPlayer${num}`, text);
                          }}/>
                          
                          )
                    }
                    </View>                            
                </View>

                <Pressable style={styles.button} onPress={() => {  
                    create(competitionName, rink,teamOne,teamTwo,teamOnePlayerNames,teamTwoPlayerNames, navigation.navigate("Previous Games"));
                }}>
                  <Text style={styles.buttonText}> Submit</Text>
                </Pressable>

              </View>
    </ScrollView>

      
    );
}


const styles = StyleSheet.create({
  container: {
    flex: '1', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding:10
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
      fontSize:24,
      textAlign:'center',
      marginTop:10,
      color:'#043730',
      fontWeight: 'bold',
    },

    inputStyle:{ 
      flex:1,
     // flexDirection:'row',
     paddingRight:5
    },
  
    textInput: {
      fontSize:20,
      padding:10,
      margin:5,
      borderWidth:1,
      width:'100%'
    },
    textLabel: {
      fontSize:18,
      color:'#454648',
      fontWeight: 'bold',
      letterSpacing: 0.5,
      width:'100%'
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