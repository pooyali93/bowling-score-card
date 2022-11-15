import { useEffect, useContext} from "react";
import { View, StyleSheet, Text, FlatList, Pressable} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import GameContext from "../context/GameContext";



const LoadGames = ({navigation}) => {
    const {state, remove} = useContext(GameContext);
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Create Games')}>
                   <Ionicons name="add-circle" style={{paddingRight:10,}}size={28} color="black" />
                </Pressable>
            )
        })
    }, [state]);
  return (
        <View  style={styles.mainContainer}>
            <FlatList 
                data={state}
                keyExtractor={(e) => e.id.toString()}
                renderItem={({item}) =>  {
                return (
                    <Pressable onPress={() => navigation.navigate('View Games', { 
                        id: item.id,
                        competitionName: item.competitionName,
                        rink: item.rink,
                        date: new Date(),
                        teamOne: item.teamOne,
                        teamTwo: item.teamTwo,
                        teamOnePlayers: item.teamOnePlayers,
                        teamTwoPlayers: item.teamTwoPlayers,

                        
                     } )}>
                    <View style={styles.itemContainer}>
                            <Text style={styles.itemContainer}> 
                                {item.competitionName}
                            </Text>
                            <Text style={styles.itemContainer}> 
                                {item.date = new Date().toLocaleDateString()}
                            </Text>
                        <Pressable onPress={() => {remove(item.id)}}>
                            <Ionicons name='trash' size={28} color="red" />
                        </Pressable>
                    </View>
                    
                    </Pressable>
                );
                }}
            />
        </View>
        
    )
};


const styles = StyleSheet.create({
    mainContainer: {
        marginTop:10,
        borderColor:'red',
        padding:10,
    },
    itemContainer: {
        backgroundColor:'#ffffff',
        marginBottom:0,
        padding:10,
        borderBottomWidth: 1,
        borderBottomColor:'#cfcfd1',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        flex:1,
        flexDirection: 'row',
        alignItems:'center'
    },
    dateContainer: {
        flexDirection:'column',
        alignItems:'center'
    },
    dateText: {
        fontSize:16,
    },
    titleText: {
        fontSize:18,
        paddingLeft:15,
        flex:1,
        justifyContent:'center'
    },
    iconText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'centre'
    },
  });


export default LoadGames;