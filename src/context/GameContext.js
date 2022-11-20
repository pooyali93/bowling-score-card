import  React from 'react'
import { useReducer, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { actionTypes } from '../helpers/actionTypes';

const GameContext = React.createContext();
const STORAGE_KEY = "super_key"; 

let initialGames = []

const reducer = (state, action) => {
  switch (action.type) {
      case actionTypes.create:
        // console.log(action.payload)
        // console.log("Test")
          return[
              ...state,
              {
                id: uuid.v4(),
                competitionName:action.payload.competitionName,
                rink:action.payload.rink,
                teamOne:action.payload.teamOne,
                teamTwo:action.payload.teamTwo,
                teamOnePlayerOne:action.payload.teamOnePlayerOne,
                teamOnePlayerTwo:action.payload.teamOnePlayerTwo,
                teamOnePlayerThree:action.payload.teamOnePlayerThree,
                teamOnePlayerFour:action.payload.teamOnePlayerFour,
                teamTwoPlayerOne:action.payload.teamTwoPlayerOne,
                teamTwoPlayerTwo:action.payload.teamTwoPlayerTwo,
                teamTwoPlayerThree:action.payload.teamTwoPlayerThree,
                teamTwoPlayerFour:action.payload.teamTwoPlayerFour,
                date: new Date().toUTCString(),
                teamOneScore: [],
                teamTwoScore:[], 
                totalScoreOne:0,
  
              }
          ];

        case actionTypes.score:
        // console.log(action.payload)
        // console.log("Test")
        //   console.log("Find the game")
          // console.log(state);
          // console.log(action.payload)
            
            if(action.payload.team === 1 ) {
              state.find(game => game.id === action.payload.id ).teamOneScore = [...state.find(game => game.id === action.payload.id ).teamOneScore, action.payload.score];
              state.find(game => game.id === action.payload.id ).teamTwoScore = [...state.find(game => game.id === action.payload.id ).teamTwoScore, 0];

             } else if ( action.payload.team === 2 ){
              state.find(game => game.id === action.payload.id ).teamTwoScore = [...state.find(game => game.id === action.payload.id ).teamTwoScore, action.payload.score];
              state.find(game => game.id === action.payload.id ).teamOneScore = [...state.find(game => game.id === action.payload.id ).teamOneScore, 0];
             }

        
              //  teamOneScore: [4],
              //  teamTwoScore:[1]   
              // console.log("score for team 1")
              // console.log(state.find(game => game.id === action.payload.id ).teamOneScore)
              // console.log("score for team 2")
              // console.log(state.find(game => game.id === action.payload.id ).teamTwoScore)
              return state;

          case actionTypes.save:
            try {
              AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch (e) {
              console.log(e);
            }finally {
              return state;
            }
          case actionTypes.load:
            return [
              ...state, {
                id: uuid.v4(),
                competitionName:action.payload.competitionName,
                rink:action.payload.rink,
                teamOne:action.payload.teamOne,
                teamTwo:action.payload.teamTwo,
                teamOnePlayerOne:action.payload.teamOnePlayerOne,
                teamOnePlayerTwo:action.payload.teamOnePlayerTwo,
                teamOnePlayerThree:action.payload.teamOnePlayerThree,
                teamOnePlayerFour:action.payload.teamOnePlayerFour,
                teamTwoPlayerOne:action.payload.teamTwoPlayerOne,
                teamTwoPlayerTwo:action.payload.teamTwoPlayerTwo,
                teamTwoPlayerThree:action.payload.teamTwoPlayerThree,
                teamTwoPlayerFour:action.payload.teamTwoPlayerFour,
                date: new Date(),
                totalScoreOne: totalScoreOne.action.payload.totalScoreOne,
              }
            ]
          case actionTypes.update:
              return state.map((item) => {
                  if(item.id === action.payload.id) {
                      return action.payload;
                  }else {
                      return item;
                  }
              });
          case actionTypes.delete: 
              return state.filter((e) => e.id !== action.payload.id);
          default:
              return state;
  };
};

export const GameProvider = ({children})  => {
  const [state, dispatch] = useReducer(reducer, initialGames);
  useEffect(() => {
    const loadStorage = async () => {
      const storage = await AsyncStorage.getItem(STORAGE_KEY);
      if(storage !== null && state.length ===0 ) {
        initialGames = JSON.parse(storage);
        initialGames.forEach(element => {
          dispatch({type: actionTypes.load, payload:element});
        })
      }
    }
    loadStorage();
  }, [STORAGE_KEY])
  
  const addGame = (competitionName, rink, teamOne, teamTwo,teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour, callback) => {
    // console.log(teamOnePlayerOne)
    // console.log("Team Players")
    // console.log(teamTwoPlayerOne)
   
    dispatch({type: actionTypes.create, payload: {competitionName, rink, teamOne, teamTwo,teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour}});
    dispatch({type: actionTypes.save});
    if(callback) {
      callback();
    }
  };


  const updateGame = (id, competitionName, rink, teamOne, teamTwo,teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour,date, callback) => {
    dispatch({type: actionTypes.update, payload: {id, competitionName, rink, teamOne, teamTwo,teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour,date}});
    dispatch({type: actionTypes.save});
    if(callback) callback();
    
  };

const deleteGame = (id, callback) => {
    dispatch({type: actionTypes.delete, payload: {id: id}});
    dispatch({type: actionTypes.save});
    if(callback) callback();
    
  };

  const addScore = (id, team, score , callback) => {
    dispatch({type: actionTypes.score, payload: {id,team, score }});
    // console.log("team score one")
    // console.log(team)
    // console.log(score)

  }

  const updateTotalOne = (id, totalScoreOne, callback) => {
    dispatch({type: actionTypes.update, payload: {id, totalScoreOne }});
    // console.log(`Testing Team A ${totalScoreOne}`)

  }

  


 
 
  return (
    <GameContext.Provider value={{
      state:state, 
      create:addGame,
      remove:deleteGame,
      update:updateGame,
      addScore:addScore,
      updateTotalOne:updateTotalOne
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;