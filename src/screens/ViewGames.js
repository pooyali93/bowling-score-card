import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const ViewGames = ({route}) => {
    const {id,competitionName, rink, teamOne, teamOnePlayers, teamTwo,date} = route.params;
  return (
       <View style={styles.itemContainer}>
            <Text>ID: {id}</Text>
            <Text>Competition name: {competitionName}</Text>
            <Text>Rink No: {rink}</Text>
            <Text>Team: {teamOne}</Text>
            <Text>{teamOne} Players: </Text>
            <Text>1st player name: {teamOnePlayers[0]}</Text>
            <Text>2nd player name: {teamOnePlayers[1]}</Text>
            <Text>3rd player name: {teamOnePlayers[2]}</Text>
            <Text>4th player name: {teamOnePlayers[3]}</Text>
            <Text>Team B: {teamTwo}</Text>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
  
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