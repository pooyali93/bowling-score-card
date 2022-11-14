import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const ViewGames = ({route}) => {
    const {id,competitionName, rink, teamOne, teamOnePlayers, teamTwo,date} = route.params;
  return (
       <View style={styles.itemContainer}>
            <Text>ID: {id}</Text>
            <Text>Competition name: {competitionName}</Text>
            <Text>Rink No: {rink}</Text>
            <Text>Team A: {teamOne}</Text>
            <Text>Team B: {teamTwo}</Text>
            <Text>Player names: {teamOnePlayers}</Text>
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