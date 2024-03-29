import  React from 'react'
import { useReducer, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { actionTypes } from '../helpers/actionTypes';

const GameContext = React.createContext();
const STORAGE_KEY = "BowlsGamePass"; 

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
                selectedDate:action.payload.selectedDate,
                teamOnePlayerOne:action.payload.teamOnePlayerOne,
                teamOnePlayerTwo:action.payload.teamOnePlayerTwo,
                teamOnePlayerThree:action.payload.teamOnePlayerThree,
                teamOnePlayerFour:action.payload.teamOnePlayerFour,
                teamTwoPlayerOne:action.payload.teamTwoPlayerOne,
                teamTwoPlayerTwo:action.payload.teamTwoPlayerTwo,
                teamTwoPlayerThree:action.payload.teamTwoPlayerThree,
                teamTwoPlayerFour:action.payload.teamTwoPlayerFour,
                teamOneScore:[0],
                teamTwoScore:[0],
                // Score:[],
              }
          ];

        case actionTypes.score:
        // console.log(action.payload)
        // console.log("Test")
        // //   console.log("Find the game")
        //    console.log(state);
        //   // console.log(action.payload)
            
            if(action.payload.team === 1 ) {
              state.find(game => game.id === action.payload.id ).teamOneScore = [...state.find(game => game.id === action.payload.id ).teamOneScore, action.payload.score];
              state.find(game => game.id === action.payload.id ).teamTwoScore = [...state.find(game => game.id === action.payload.id ).teamTwoScore, 0];

             } else if ( action.payload.team === 2 ){
              state.find(game => game.id === action.payload.id ).teamTwoScore = [...state.find(game => game.id === action.payload.id ).teamTwoScore, action.payload.score];
              state.find(game => game.id === action.payload.id ).teamOneScore = [...state.find(game => game.id === action.payload.id ).teamOneScore, 0];
             }
            //  console.log("find after state")
            //  console.log(state);


        
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
                selectedDate:action.payload.selectedDate,
                teamOnePlayerOne:action.payload.teamOnePlayerOne,
                teamOnePlayerTwo:action.payload.teamOnePlayerTwo,
                teamOnePlayerThree:action.payload.teamOnePlayerThree,
                teamOnePlayerFour:action.payload.teamOnePlayerFour,
                teamTwoPlayerOne:action.payload.teamTwoPlayerOne,
                teamTwoPlayerTwo:action.payload.teamTwoPlayerTwo,
                teamTwoPlayerThree:action.payload.teamTwoPlayerThree,
                teamTwoPlayerFour:action.payload.teamTwoPlayerFour,
                teamOneScore:action.payload.teamOneScore,
                teamTwoScore:action.payload.teamTwoScore,
                // Score:action.payload.Score,
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
  
  const addGame = (competitionName, rink, teamOne, teamTwo,selectedDate, teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour, callback) => {  
    dispatch({type: actionTypes.create, payload: {competitionName, rink, teamOne, teamTwo,selectedDate, teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour}});
    // console.log("Log state")
    // console.log(state)
    dispatch({type: actionTypes.save});
    if(callback) {
      callback();
    }
  };


  const updateGame = (id, competitionName, rink,teamOne,teamTwo,selectedDate, teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour,teamOneScore, teamTwoScore, callback) => {
    // console.log("update state ", state)
    dispatch({type: actionTypes.update, payload: {id, competitionName, rink,teamOne,teamTwo,selectedDate,teamOnePlayerOne,teamOnePlayerTwo,teamOnePlayerThree,teamOnePlayerFour,teamTwoPlayerOne,teamTwoPlayerTwo,teamTwoPlayerThree,teamTwoPlayerFour,teamOneScore, teamTwoScore}});
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
    dispatch({type: actionTypes.save});
    // console.log("team score one")
    // console.log(team)
    // console.log(score)

  }

  //  const updateScoreTotal = (id,Score, callback) => {
  //    dispatch({type: actionTypes.update, payload: {id,Score }});
  // //    console.log(`Testing Team A ${teamOneScore}`)
  //  }

  


 
 
  return (
    <GameContext.Provider value={{
      state:state, 
      create:addGame,
      remove:deleteGame,
      update:updateGame,
      addScore:addScore,
      // updateScoreTotal:updateScoreTotal
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;