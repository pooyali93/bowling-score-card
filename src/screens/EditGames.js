import React, { useState , useContext} from 'react'
import { Text, View, StyleSheet, Button, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Buttons from '../components/Buttons';
import GameContext from '../context/GameContext';



const EditGames = ({navigation, route}) => {
    const {id} = route.params;
    const {state, update} = useContext(GameContext);
    const currentEntry = state.find((item) => item.id === id);
    const [competitionName, setCompetitionName] = useState(currentEntry.competitionName);
    const [rink, setRink] = useState(currentEntry.rink);
    const [teamOne, setTeamOne] = useState(currentEntry.teamOne);
    const [teamTwo, setTeamTwo] = useState(currentEntry.teamTwo);
    const [selectedDate, setSelectedDate] = useState(currentEntry.selectedDate);
    const [teamOnePlayerOne, setTeamOnePlayerOne] = useState(currentEntry.teamOnePlayerOne); 
    const [teamOnePlayerTwo, setTeamOnePlayerTwo] = useState(currentEntry.teamOnePlayerTwo);
    const [teamOnePlayerThree, setTeamOnePlayerThree] = useState(currentEntry.teamOnePlayerThree);
    const [teamOnePlayerFour, setTeamOnePlayerFour] =useState(currentEntry.teamOnePlayerFour);

    const [teamTwoPlayerOne, setTeamTwoPlayerOne] =useState(currentEntry.teamTwoPlayerOne); 
    const [teamTwoPlayerTwo, setTeamTwoPlayerTwo] =useState(currentEntry.teamTwoPlayerTwo);
    const [teamTwoPlayerThree, setTeamTwoPlayerThree] =useState(currentEntry.teamTwoPlayerThree);
    const [teamTwoPlayerFour, setTeamTwoPlayerFour] =useState(currentEntry.teamTwoPlayerFour);

  return (   
    <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.innerContainer}>
                <Text style={styles.textLabel}> Edit your competition name: </Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="enter new competition name here" 
                    value={competitionName}
                    onChangeText={(text) => {
                    setCompetitionName(text);
                    }}
                />
                <Text style={styles.textLabel}>Edit Rink number: </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new rink number here" 
                    value={rink}
                    keyboardType="numeric"
                    returnKeyType={'done'}
                    onChangeText={(text) => {
                    setRink(text);
                    }}
                />
                <Text style={styles.textLabel}> Edit first team name : </Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="enter new team name here" 
                    value={teamOne}
                    onChangeText={(text) => {
                    setTeamOne(text);
                    }}
                />
                <Text style={styles.textLabel}>Edit second team name </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new team name here" 
                    value={teamTwo}
                    onChangeText={(text) => {
                    setTeamTwo(text);
                    }}
                />
                <Text style={styles.textLabel}>Edit date </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new date here" 
                    defaultValue={selectedDate}
                    onChangeText={(text) => {
                    setSelectedDate(text);
                    }}
                />

                <Text style={styles.textLabel}>Edit team player name </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new team player name here" 
                    value={teamOnePlayerOne}
                    onChangeText={(text) => {
                    setTeamOnePlayerOne(text);
                    }}
                />

                <Text style={styles.textLabel}>Edit team player name </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new team player name here" 
                    value={teamOnePlayerTwo}
                    onChangeText={(text) => {
                    setTeamOnePlayerTwo(text);
                    }}
                />
                <Text style={styles.textLabel}>Edit team player name </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new team player name here" 
                    value={teamOnePlayerThree}
                    onChangeText={(text) => {
                    setTeamOnePlayerThree(text);
                    }}
                />
                <Text style={styles.textLabel}>Edit team player name </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new team player name here" 
                    value={teamOnePlayerFour}
                    onChangeText={(text) => {
                    setTeamOnePlayerFour(text);
                    }}
                />

                <Text style={styles.textLabel}>Edit team player name </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new team player name here" 
                    value={teamTwoPlayerOne}
                    onChangeText={(text) => {
                    setTeamTwoPlayerOne(text);
                    }}
                />

                <Text style={styles.textLabel}>Edit team player name </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new team player name here" 
                    value={teamTwoPlayerTwo}
                    onChangeText={(text) => {
                    setTeamTwoPlayerTwo(text);
                    }}
                />
                <Text style={styles.textLabel}>Edit team player name </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new team player name here" 
                    value={teamTwoPlayerThree}
                    onChangeText={(text) => {
                    setTeamTwoPlayerThree(text);
                    }}
                />
                <Text style={styles.textLabel}>Edit team player name </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="enter new team player name here" 
                    value={teamTwoPlayerFour}
                    onChangeText={(text) => {
                    setTeamTwoPlayerFour(text);
                    }}
                />
                
                <Buttons style={styles.btn} title="Update Games" onPress={() => {
                    update(currentEntry.id, competitionName, rink,teamOne,teamTwo,selectedDate,teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour,currentEntry.teamOneScore, currentEntry.teamTwoScore, () => navigation.navigate('View Games', {
                        id: id,
                    })
                    )}}/>

            </View>
            </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    textInput: {
        fontSize:20,
        padding:10,
        margin:5,
        borderWidth:1,
    },
    textLabel: {
        fontSize:18,
        paddingLeft:10,
        marginTop:10,
    },
    btn: {
        borderStartColor:'red',
        borderWidth:1,
        borderColor:'#006a6a',
        borderRadius:5,
    },
});

export default EditGames;