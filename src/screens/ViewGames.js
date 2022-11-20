import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const ViewGames = ({route, navigation}) => {   

    const {id,competitionName, rink, teamOne,teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour, teamTwo,date} = route.params;
    console.log("")
    console.log(route.params)
  return (
       <View style={styles.itemContainer}>
            <Text>ID: {id}</Text>
            <Text>Competition name: {competitionName}</Text>
            <Text>Rink No: {rink}</Text>
            <Text>Team: {teamOne}</Text>
            <Text>Team B: {teamTwo}</Text>
            <View>
              <Text>{teamOne} Players</Text>
              <Text>Player 1 {teamOnePlayerOne}</Text>
              <Text>Player 2 {teamOnePlayerTwo}</Text>
              <Text>Player 3 {teamOnePlayerThree}</Text>
              <Text>Player 4 {teamOnePlayerFour}</Text>
            </View>
            <View>
              <Text>{teamTwo} Players</Text>
              <Text>Player 1 {teamTwoPlayerOne}</Text>
              <Text>Player 2 {teamTwoPlayerTwo}</Text>
              <Text>Player 3 {teamTwoPlayerThree}</Text>
              <Text>Player 4 {teamTwoPlayerFour}</Text>
            </View>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
            <Text style={styles.brandText}> {JSON.stringify(teamOnePlayerOne)}</Text>

            <Button  title="Start Game"onPress={() => navigation.navigate('Score' , {id:id})}/>
  
       </View>
  );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor:'#ffffff',
        marginBottom:0,
        padding:20,
        borderBottomWidth: 1,
        borderBottomColor:'#cfcfd1',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    
    },
});

export default ViewGames;