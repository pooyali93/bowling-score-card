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
          return[
              ...state,
              {
                id: uuid.v4(),
                competitionName:action.payload.competitionName,
                rink:action.payload.rink,
                teamOne:action.payload.teamOne,
                teamTwo:action.payload.teamTwo,
                teamOnePlayers:action.payload.teamOnePlayers,
                teamTwoPlayers:action.payload.teamTwoPlayers,

                date: new Date().toUTCString()
  
              }
          ];

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
                teamOne:action.teamOne,
                teamTwo:action.teamTwo,
                teamOnePlayers:action.teamOnePlayers,
                teamTwoPlayers:action.teamTwoPlayers,
                date: new Date()
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
  
  const addGame = (competitionName, rink, teamOne, teamTwo,teamOnePlayers, callback) => {
    dispatch({type: actionTypes.create, payload: {competitionName, rink, teamOne, teamTwo,teamOnePlayers}});
    dispatch({type: actionTypes.save});
    if(callback) {
      callback();
    }
  };


  const updateGame = (id, competitionName, rink, teamOne, teamTwo,teamOnePlayers,date, callback) => {
    dispatch({type: actionTypes.update, payload: {id, competitionName,rink}});
    dispatch({type: actionTypes.save});
    if(callback) callback();
    
  };

const deleteGame = (id, callback) => {
    dispatch({type: actionTypes.delete, payload: {id: id}});
    dispatch({type: actionTypes.save});
    if(callback) callback();
    
  };
 
  return (
    <GameContext.Provider value={{
      state:state, 
      create:addGame,
      remove:deleteGame,
      update:updateGame
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;