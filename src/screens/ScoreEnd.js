import React, { useState } from 'react'
import { useContext } from 'react';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';
import GameContext from '../context/GameContext';

const ScoreEnd = ({route}) => {

    const {state, addScore}= useContext(GameContext)
    const {id} = route.params;
    const [score , setScore] = useState(0)
    const [current, setCurrent ] = useState()
    const teamOneScore = 1;
    const teamTwoScore = 2;
    const PlayGame = state.find(game => 
        game.id === id

    )

    const currentEnd = PlayGame.teamOneScore.length; 
    

    const addEnds =(team, score) => {
        setCurrent(PlayGame.teamOneScore.length);
        if (currentEnd === 8) {
            Alert.alert("Game Over")
        }
        else {
            {addScore(id, team, score)}
            setCurrent(PlayGame.teamOneScore.length);
        }
        
            
    };
    
    const totalScores = state.reduce((total, score) => {
        console.log(`Total: ${total}`)
        console.log(`item: ${teamOneScore}`)
         return (
         total + score.teamOneScore
            )
    }, 0);
    console.log(`Total: ${totalScores}`)
    

  return (
    <>
    <View style={styles.container}>
        <Text>Team 1</Text>
        <Button  title="1"onPress={() =>{addEnds(teamOneScore, 1)}}/>
        <Button  title="2"onPress={() =>{addEnds(teamOneScore, 2)}}/>
        <Button  title="3"onPress={() =>{addEnds(teamOneScore, 3)}}/>
        <Button  title="4"onPress={() =>{addEnds(teamOneScore, 4)}}/>
        <Button  title="5"onPress={() =>{addEnds(teamOneScore, 5)}}/>
       
    </View>

    <Text style={styles.container} > Ends {current}</Text>
    <Text style={styles.container} > Total for team One {totalScores}</Text>




    <View style={styles.container}>
    <Text>Team 2</Text>
         <Button  title="1"onPress={() =>{addEnds(teamTwoScore, 1)}}/>
         <Button  title="2"onPress={() =>{addEnds(teamTwoScore, 2)}}/>
         <Button  title="3"onPress={() =>{addEnds(teamTwoScore, 3)}}/>
         <Button  title="4"onPress={() =>{addEnds(teamTwoScore, 4)}}/>
         <Button  title="5"onPress={() =>{addEnds(teamTwoScore, 5)}}/>
    </View>

    </>

  )
}


const styles = StyleSheet.create({
    container: {
      flex: '1', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding:10
    },
});

export default ScoreEnd;