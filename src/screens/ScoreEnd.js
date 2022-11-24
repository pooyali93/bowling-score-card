import React, { useState } from 'react'
import { useContext } from 'react';
import { StyleSheet, Button, Text, View, Alert, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import COLORS from '../context/Colors';
import GameContext from '../context/GameContext';
import Buttons from '../components/Buttons';

const ScoreEnd = ({ navigation, route }) => {
    const { state, addScore } = useContext(GameContext)
    const { id } = route.params;
    const [score, setScore] = useState(0)
    const [current, setCurrentEnd] = useState(1)
    // State to store count value
    const [count, setCount] = useState(1);
    const teamOneScore = 1;
    const teamTwoScore = 2;
    const currentEntry = state.find(e => e.id === id)
     console.log("find play game" , currentEntry.teamOneScore)
    // console.log(currentEntry)

    const currentEnd = currentEntry.teamOneScore.length;

    const incrementEnd = (team, score) => {
        addScore(id, team, score)
        setCurrentEnd(currentEntry.teamOneScore);
        if (currentEnd === 8) {
            Alert.alert("Game Over")
        }
        else {

        };

    }

    // const addToScore = ( score) => {
    //     updateScoreTotal(id, score)
    //     setCurrentEnd(currentEntry.teamOneScore);
    //     if (currentEnd === 8) {
    //         Alert.alert("Game Over")
    //     }
    //     else {

    //     };

    // }



    // const addEnds =(team, score) => {
    //     setCurrent(currentEntry.teamOneScore.length+1);
    //     if (currentEnd === 8) {
    //         Alert.alert("Game Over")
    //     }
    //     else {
    //         {addScore(id, team, score)}
    //         if (currentEntry.totalScoreOne != null){
    //             // console.log(`if statement ${currentEntry.totalScoreOne}`)
    //             // totalTeamOne = currentEntry.totalScoreOne
    //         }
    //         // totalTeamOne = totalTeamOne + currentEntry.teamOneScore.length
    //         console.log(`Totall score for One ${totalTeamOne}`)
    //         console.log(`Totall score for Two ${totalTeamTwo}`)
    //         //  updateTeamTotal (id, totalTeamOne)
    //         // setCurrent(currentEntry.teamOneScore.length);
    //     }


    // };



    const totalScoreOne = currentEntry.teamOneScore.reduce((total, score) =>
        total + score, 0
    );

    const totalScoreTwo = currentEntry.teamTwoScore.reduce((total, score) =>
        total + score, 0
    );




    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center', paddingBottom: 20}}>
                        <View >
                            <Text style={{ fontSize: 20, }} >{currentEntry.teamOne}</Text>
                        </View>
                        <View >
                            <Text style={{fontSize: 20,  }} > {currentEntry.teamTwo}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.scoreOne}>
                            <Text style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center' }} >{totalScoreOne}</Text>
                            <Text>total</Text>
                        </View>
                        <View style={styles.scoreOne}>
                            <Text style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center' }} >{totalScoreTwo}</Text>
                            <Text>total</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.ends} >
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.black }} >Ends:  {currentEnd}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '49%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 24 }}>Shots</Text>
                        <Buttons title="+1" onPress={() => { incrementEnd(teamOneScore, 1) }} />
                        <Buttons title="+2" onPress={() => { incrementEnd(teamOneScore, 2) }} />
                        <Buttons title="+3" onPress={() => { incrementEnd(teamOneScore, 3) }} />
                        <Buttons title="+4" onPress={() => { incrementEnd(teamOneScore, 4) }} />
                        <Buttons title="+5" onPress={() => { incrementEnd(teamOneScore, 5) }} />
                    </View>

                    <View style={{ width: '49%' }}>
                        <Text style={{ textAlign: 'center', fontSize: 24 }}>Shots</Text>
                        <Buttons title="+1" onPress={() => { incrementEnd(teamTwoScore, 1) }} />
                        <Buttons title="+2" onPress={() => { incrementEnd(teamTwoScore, 2) }} />
                        <Buttons title="+3" onPress={() => { incrementEnd(teamTwoScore, 3) }} />
                        <Buttons title="+4" onPress={() => { incrementEnd(teamTwoScore, 4) }} />
                        <Buttons title="+5" onPress={() => { incrementEnd(teamTwoScore, 5) }} />
                    </View>
             </View>
                <Buttons title="End Game" onPress={() => navigation.navigate('View Games', {
                    id: id,
                }
                )} />
            </ScrollView>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        padding: 15,
        borderRadius: 10,
        marginVertical: 20,
        height: '100%'
    },
    scrollView: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    totalScore: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        textAlign: 'center'
    },
    scoreOne: {
        width: '49%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: COLORS.white,
        borderColor: COLORS.white,
        borderRightWidth: 1,
    },

    ends: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        marginVertical: 20
    },


});

export default ScoreEnd;