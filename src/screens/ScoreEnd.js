import React, { useState } from 'react'
import { useContext } from 'react';
import { StyleSheet, Button, Text, View, Alert , SafeAreaView, StatusBar, ScrollView} from 'react-native';
import COLORS from '../context/Colors';
import GameContext from '../context/GameContext';
import Buttons from '../components/Buttons';

const ScoreEnd = ({navigation,route}) => {

    const {state, addScore,updateTotalOne}= useContext(GameContext)
    const {id} = route.params;
    const [score , setScore] = useState(0)
    const [current, setCurrent ] = useState()
    const teamOneScore = 1;
    const teamTwoScore = 2;
    const PlayGame = state.find(game => game.id === id )


   // const currentEnd = PlayGame.teamOneScore.length; 
    let currentEnd = 1; 

    const addEnds =(team, score) => {
       // setCurrent(PlayGame.teamOneScore.length);
        if (currentEnd === 8) {
            Alert.alert("Game Over")
        }
        else {
            {addScore(id, team, score)}
            if (PlayGame.totalScoreOne != null){
                console.log(`if statement ${PlayGame.totalScoreOne}`)
                totalTeaA = PlayGame.totalScoreOne
            }
            totalTeaA = totalTeaA + score
            console.log(`Totall score for A ${totalTeaA}`)
            updateTotalOne (id, totalTeaA)
           // setCurrent(PlayGame.teamOneScore.length);
        }
        
            
    };


    const totalScoreTwo = state.reduce((total, score) => {
        // console.log(`Total: ${total}`)
        // console.log(`item: ${teamTwoScore}`)
         return (
         total + score.teamTwoScore
            )
    }, 0);
    // console.log(`Total: ${totalScores}`)

    let totalTeaA = 0;


    

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View >
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={styles.scoreOne}>
                <Text style={{fontWeight:'bold', fontSize:40,textAlign:'center'}} >{PlayGame.totalScoreOne}</Text>
            </View>
            <View style={styles.scoreOne}>
            <Text style={{fontWeight:'bold', fontSize:40,textAlign:'center'}} > {totalScoreTwo}</Text>
            </View>
            </View>

        </View>
        <View style={styles.ends} >
            <Text style={{ fontSize:18,fontWeight:'bold',color:COLORS.black}} >Ends:  {current}</Text>
        </View>
    
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{width:'49%'}}>
                <Text style={{textAlign:'center', fontSize:24}}>Team {teamOneScore} Shots</Text>
                    <Buttons  title="+1"onPress={() =>{addEnds(teamOneScore, 1)}}/>
                    <Buttons  title="+2"onPress={() =>{addEnds(teamOneScore, 2)}}/>
                    <Buttons  title="+3"onPress={() =>{addEnds(teamOneScore, 3)}}/>
                    <Buttons  title="+4"onPress={() =>{addEnds(teamOneScore, 4)}}/>
                    <Buttons  title="+5"onPress={() =>{addEnds(teamOneScore, 5)}}/>
                </View>
              
                <View style={{width:'49%'}}>
                <Text  style={{textAlign:'center',fontSize:24}}>Team {teamTwoScore} Shots</Text>
                    <Buttons  title="+1"onPress={() =>{addEnds(teamTwoScore, 1)}}/>
                    <Buttons  title="+2"onPress={() =>{addEnds(teamTwoScore, 2)}}/>
                    <Buttons  title="+3"onPress={() =>{addEnds(teamTwoScore, 3)}}/>
                    <Buttons  title="+4"onPress={() =>{addEnds(teamTwoScore, 4)}}/>
                    <Buttons  title="+5"onPress={() =>{addEnds(teamTwoScore, 5)}}/>
                </View>
                
            </View>
            <Buttons  title="End Game" onPress={() => navigation.navigate('View Games', {
                id:id,
            }        
             ) }/>
        </ScrollView>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,       
    }, 
    innerContainer:{
        flexDirection:'row',
        backgroundColor: 'white',
        marginTop:10,
        padding:15,
        borderRadius:10,
        marginVertical:20,
        height:'100%'
      },
      scrollView: {
        paddingTop:30,
        paddingHorizontal: 20,
      },
      totalScore: {
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        borderColor:COLORS.white,
        backgroundColor:COLORS.white,
        borderWidth:1,
        textAlign:'center'
      },
      scoreOne: {
        width:'49%',
        justifyContent:'center',
        alignItems:'center', 
        height:100,
        backgroundColor:COLORS.white,
        borderColor:COLORS.white,
        borderRightWidth:1,
    },

      ends: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        borderColor:COLORS.white,
        backgroundColor:COLORS.white,
        borderWidth:1,
        borderRadius:10,
        textAlign:'center',
        marginVertical:20
      }
    
});

export default ScoreEnd;