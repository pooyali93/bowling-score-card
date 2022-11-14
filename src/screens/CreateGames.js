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
      <ScrollView >
        <View style={{}}>
        <Text style={styles.heading}> Caterham Bowling Club </Text>
          <Text style={styles.textLabel}> Competition name:  </Text>
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
                storeTeamPlayerOne.push(teamOnePlayer1);
                storeTeamPlayerOne.push(teamOnePlayer2);
                storeTeamPlayerOne.push(teamOnePlayer3);
                storeTeamPlayerOne.push(teamOnePlayer4);
                  create(competitionName, rink,teamOne,teamTwo,storeTeamPlayerOne, navigation.navigate("Load Games"));
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
    alignItems: 'center'
  },
  
    viewWrapper: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:1,
      margin:5,
      padding:8
    },
  
    inputStyle: {
      flex: 1,
      fontSize:18,
      color:'grey'
    },
  
    heading: {
      fontSize:24,
      textAlign:'center',
      marginTop:10,
      color:'#043730',
      fontWeight: 'bold',
    },
  
    textInput: {
      fontSize:20,
      padding:10,
      margin:5,
      borderWidth:1,
    },
    textLabel: {
      fontSize:18,
      marginTop:10,
      color:'#454648',
      fontWeight: 'bold',
      letterSpacing: 0.5,
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