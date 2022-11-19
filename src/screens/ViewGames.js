import React from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

const ViewGames = ({route, navigation}) => {   

    const {id,competitionName, rink, teamOne,teamOnePlayerNames,teamTwoPlayerNames, teamTwo,date} = route.params;
    console.log("")
    console.log(route.params)
  return (
       <View style={styles.itemContainer}>
            <Text>ID: {id}</Text>
            <Text>Competition name: {competitionName}</Text>
            <Text>Rink No: {rink}</Text>
            <Text>Team: {teamOne}</Text>
            {console.log("View team players")}
            {console.log(teamOnePlayerNames)}
            {console.log(teamTwoPlayerNames)}
            {Object.keys(teamOnePlayerNames).map(item => {
               return( 
                <View>
                    <Text>{teamOne} Players {teamOnePlayerNames[item]}</Text>
                    {console.log("Player")}
                    {console.log(teamOnePlayerNames[item])
                    }      
               </View>  
             )
            })}
            {Object.keys(teamTwoPlayerNames).map(item => {
               return( 
                <View>
                    <Text>{teamTwo} Players {teamTwoPlayerNames[item]}</Text>
                    {console.log("Player")}
                    {console.log(teamTwoPlayerNames[item])
                    }      
               </View>  
             )
            })}
            <Text>Team B: {teamTwo}</Text>
            <Text>Date: {new Date(date).toLocaleDateString()}</Text>
            <Text style={styles.brandText}> {JSON.stringify(teamOnePlayerNames)}</Text>

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