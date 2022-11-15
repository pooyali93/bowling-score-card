import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
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

  let storeTeamPlayerOne = []
  

    return (
      <>
      <TextInput/>      
      
      <TextInput 
              style={styles.textInput} 
              returnKeyType={'done'}
              placeholder="Type competition name" value={competitionName}
              onChangeText={(text) => {
                setCompetitionName(text);
              }}
  
          />

            <Text style={styles.textLabel}> Rink No:  </Text>
            <TextInput label="rink" placeholder="Enter rink number" />
              <TextInput 
                  style={styles.textInput}
                  keyboardType="numeric"
                  returnKeyType={'done'}
                  placeholder="Type rink" value={rink}
                  onChangeText={(text) => {
                  setRink(text);
                  }}
            />

            <View style={styles.dateContainer} >
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
              
                  <MaterialIcons name="date-range" size={32} style={{alignSelf:'center'}} color="black" onPress={showDatePicker}/>
            </View>


              <Text style={styles.textLabel}> Team names:  </Text>
              <View>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Type team name" value={teamOne}
                    onChangeText={(text) => {
                      setTeamOne(text);
                    }}
                /> 
                <Text style={{textAlign:'center', color:'#454648', fontWeight: 'bold',}}>VS</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Type team name" value={teamTwo}
                    onChangeText={(text) => {
                      setTeamTwo(text);
                    }}
                />

                <Text style={styles.textLabel}> Team {teamOne} Player names:  </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Type player name" value={teamOnePlayer1}
                    onChangeText={(text) => {
                      setTeamOnePlayer1(text);
                    }}/>

                <TextInput 
                    style={styles.textInput}
                    placeholder="Type player name" value={teamOnePlayer2}
                    onChangeText={(text) => {
                      setTeamOnePlayer2(text);
                    }}/>

                <TextInput 
                    style={styles.textInput}
                    placeholder="Type player name" value={teamOnePlayer3}
                    onChangeText={(text) => {
                      setTeamOnePlayer3(text);
                    }}/>

                <TextInput 
                    style={styles.textInput}
                    placeholder="Type player name" value={teamOnePlayer4}
                    onChangeText={(text) => {
                      setTeamOnePlayer4(text);
                    }}/>
              </View>

              <Pressable style={styles.button} onPress={() => {  
                storeTeamPlayerOne.push(teamOnePlayer1, teamOnePlayer2, teamOnePlayer3, teamOnePlayer4);
                  create(competitionName, rink,teamOne,teamTwo,storeTeamPlayerOne, navigation.navigate("Previous Games"));
              }}>
                <Text style={styles.buttonText}> Submit</Text>
              </Pressable>

              </>

      
    );
}


const styles = StyleSheet.create({
 
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