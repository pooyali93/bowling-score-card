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

  // const [teamOnePlayer, setTeamOnePlayer1] = useState(""); state array 
  const [teamOnePlayer1, setTeamOnePlayer1] = useState("");
  const [teamOnePlayer2, setTeamOnePlayer2] = useState("");
  const [teamOnePlayer3, setTeamOnePlayer3] = useState("");
  const [teamOnePlayer4, setTeamOnePlayer4] = useState("");


  const playerName = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];

  const [teamOnePlayers, setTeamOnePlayer] = useState(playerName);

  const addInput = () => {
    setTeamOnePlayer(player => {
      return [
        ...player,
        {
          type: "text",
          value: ""
        }
      ];
    });
  };

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setTeamOnePlayer(player => {
      const newPlayer = player.slice();
      newPlayer[index].value = e.target.value;

      return newPlayer;
    });
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


                  <View>
                  <Button title='+ 'onPress={() => 
                     {
                      teamOnePlayers.map((item, i) => {

                          <TextInput
                            onChange={handleChange}
                            value={item.value}
                            id={i}
                            type={item.type}
                            size="40"
                          />
                     })}
                    }
                  />

                  </View>
               
                  <Text style={styles.textLabel}> Team {teamOne} Player names:  </Text>
                  <View style={{flexDirection:"row"}}>
                    <View style={styles.inputStyle} >
                    <TextInput 
                        style={styles.textInput}
                        returnKeyType={'done'}
                        placeholder="Player 1" value={teamOnePlayer1}
                        onChangeText={(text) => {
                          setTeamOnePlayer1(text);
                        }}/>

                    <TextInput 
                        style={styles.textInput}
                        returnKeyType={'done'}
                        placeholder="Player 2" value={teamOnePlayer2}
                        onChangeText={(text) => {
                          setTeamOnePlayer2(text);
                        }}/>

                    </View>
                    <View style={styles.inputStyle} >
                    <TextInput 
                        style={styles.textInput}
                        returnKeyType={'done'}
                        placeholder="Player 3" value={teamOnePlayer3}
                        onChangeText={(text) => {
                          setTeamOnePlayer3(text);
                        }}/>

                    <TextInput 
                        style={styles.textInput}
                        returnKeyType={'done'}
                        placeholder="Player 4" value={teamOnePlayer4}
                        onChangeText={(text) => {
                          setTeamOnePlayer4(text);
                        }}/>
                    </View>
                </View>

                <Text style={styles.textLabel}> Team {teamTwo} Player names:  </Text>
                  <View style={{flexDirection:"row"}}>
                    <View style={styles.inputStyle} >
                    <TextInput 
                        style={styles.textInput}
                        returnKeyType={'done'}
                        placeholder="Player 1" value={teamOnePlayer1}
                        onChangeText={(text) => {
                          setTeamOnePlayer1(text);
                        }}/>

                    <TextInput 
                        style={styles.textInput}
                        returnKeyType={'done'}
                        placeholder="Player 2" value={teamOnePlayer2}
                        onChangeText={(text) => {
                          setTeamOnePlayer2(text);
                        }}/>

                    </View>
                    <View style={styles.inputStyle} >
                    <TextInput 
                        style={styles.textInput}
                        returnKeyType={'done'}
                        placeholder="Player 3" value={teamOnePlayer3}
                        onChangeText={(text) => {
                          setTeamOnePlayer3(text);
                        }}/>

                    <TextInput 
                        style={styles.textInput}
                        returnKeyType={'done'}
                        placeholder="Player 4" value={teamOnePlayer4}
                        onChangeText={(text) => {
                          setTeamOnePlayer4(text);
                        }}/>
                    </View>
                </View>

                <Pressable style={styles.button} onPress={() => {  
                   storeTeamOnePlayers.push(teamOnePlayer1, teamOnePlayer2, teamOnePlayer3, teamOnePlayer4);
                    create(competitionName, rink,teamOne,teamTwo,storeTeamOnePlayers, navigation.navigate("Previous Games"));
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