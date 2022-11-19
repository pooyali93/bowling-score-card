import { useState } from "react";

const test = () => {
    const [teamOnePlayers, setTeamOnePlayers] = useState([]); 

const p = (newPlayer) => {
    teamOnePlayers.teamOneFirstPlayer = newPlayer;
    setTeamOnePlayers(teamOnePlayers);
}

const update = (obj, path, value) => {
    obj[path] = value;
    setObject(obj);
    
}



setPlayersState(setProperty(obj, `teamOnePlayerOne`, newPlayer));

console.log(update);

}
export deafult test();