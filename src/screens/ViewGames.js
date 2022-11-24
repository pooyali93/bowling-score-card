import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Buttons from '../components/Buttons';
import COLORS from '../context/Colors';
import GameContext from '../context/GameContext';

const ViewGames = ({ route, navigation }) => {
  const { id } = route.params;
  const { state } = useContext(GameContext);
  const currentEntry = state.find((e) => e.id === id);
  // console.log(currentEntry)



  // const total = (scores) => {
  //   console.log(" view scores total ", scores )
  //   let score = 0;
  //   scores.map (e => {
  //      score += e 
  //   })
  //   return (
  //     score
  //   )
  // }


  // const teamOneShots = () => {
  //   let shots= [];
  //   let t1Sub = 0
  //   let t2Sub = 0
  //   for(let i=0; i < currentEntry.teamOneScore.length; i++) {
  //     t1Sub =+ currentEntry.teamOneScore[i]
  //     t2Sub =+ currentEntry.teamTwoScore[i]
  //    shots.push([currentEntry.teamOneScore[i], t1Sub , '1', '4', '5'])
  //   }
  // }

  const header = ['Shots', 'Total', 'Ends', 'Shots', 'Total']
  let t1Run = 0
  let t2Run = 0
  let rowsData = [];

  // console.log("current Entry length", currentEntry)

  if (rowsData.length !== undefined) {
    for (let i = 0; i < currentEntry.teamOneScore.length; i++) {
      const t1score = currentEntry.teamOneScore[i]
      const t2score = currentEntry.teamTwoScore[i]

      t1Run += t1score;
      t2Run += t2score;
      const rowData = [
        t1score, t1Run, i, t2score, t2Run
      ]
      rowsData.push(rowData)
      // currentEntry.teamOneScore.push(t1score)
      // currentEntry.teamTwoScore.push(t2score)
    }
  }

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.itemContainer}>
        <View style={[{flexDirection: 'column', flexWrap: 'nowrap'}, styles.itemContainer]}>
          <View style={styles.col1}>
          <Text style={styles.label}>Competition:   {currentEntry.competitionName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.col2}>
              <Text style={styles.label}>Rink No: {currentEntry.rink}</Text>
            </View>
            <View style={styles.col2}>
              <Text style={styles.label}>Date: {currentEntry.selectedDate}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.col2}>
            <Text style={styles.label}>First team</Text>
            </View>
            <View style={styles.col2}>
            <Text style={styles.label}>Second team</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.col2}>
               <Text style={styles.label}>{currentEntry.teamOne}</Text>
            </View>
            <View style={styles.col2}>
             <Text style={styles.label}>{currentEntry.teamTwo}</Text>
            </View>
          </View>
           <View style={{flexDirection: 'row'}}>
              <View style={styles.col2}>
                <Text style={styles.label}>{currentEntry.teamOne} Players</Text>
              </View>
              <View style={styles.col2}>
              <Text style={styles.label}>{currentEntry.teamOne} Players</Text>
              </View>
          </View>
           <View style={{flexDirection: 'row'}}>
            <View style={styles.col3}>
                <Text style={styles.pLabel}>{currentEntry.teamOnePlayerOne}</Text>
                <Text style={styles.pLabel}>{currentEntry.teamOnePlayerTwo}</Text>
                <Text style={styles.pLabel}>{currentEntry.teamOnePlayerThree}</Text>
                <Text style={styles.pLabel}>{currentEntry.teamOnePlayerFour}</Text>
            </View>
            <View style={styles.col3}>
                <Text style={styles.pLabel}>{currentEntry.teamTwoPlayerOne}</Text>
                <Text style={styles.pLabel}>{currentEntry.teamTwoPlayerTwo}</Text>
                <Text style={styles.pLabel}>{currentEntry.teamTwoPlayerThree}</Text>
                <Text style={styles.pLabel}>{currentEntry.teamTwoPlayerFour}</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-between',paddingBottom:20}}>
              <View style={styles.col4}>
                 <Buttons title="Edit"  onPress={() => navigation.navigate('Edit Game', { id: id })} />
              </View>
              <View style={styles.col4}>
                  <Buttons title="Start Game" onPress={() => navigation.navigate('Score', { id: id })} />
              </View>
          </View>
        
      </View>
          <View style={styles.tableContainer}>
              <Table >
                <Row data={header} style={styles.HeadStyle} textStyle={styles.TableText} />
                <FlatList
                  data={rowsData}
                  keyExtractor={(e) => e.toString()}
                  renderItem={({ item }) => {
                    return (
                      <Row data={item} textStyle={styles.TableText} />
                    )
                  }}
                />
              </Table>
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  col1 : {
    backgroundColor:COLORS.blue,
    borderRadius:5,
    padding:5,
 
   },
  col2 : {
    height: 30,
    width: '50%',
  },
  col3 : {
    width: '50%',
  },
  col4 : {
    width: '45%',
    paddingHorizontal:20
  },

  

  
  purple : {
    width: '50%',
  },
  violet : {
    width: '100%',
  },
  container: {
    paddingHorizontal:10,
    paddingVertical:10,
    flex: 1
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 24
  },
  itemContainer: {
    flex: 1,
  },

  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 0
  },

  // //container: {
  //   flex: 1,
  // },
  label: {
    fontSize: 18,
    color: COLORS.black,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight:'600',
    color:COLORS.black
  },
  pLabel: {
    fontSize: 18,
    color: COLORS.black,
    paddingHorizontal: 10,
    paddingVertical:3,
  },
  title: {
    fontSize: 22,
    color: 'black',

  },
  top: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'


  },
  rows: {
    flex: 1,
    fontSize: 18,
    

    },


  tableContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingBottom:20
    
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor:COLORS.blue
  },
  TableText: {
    margin: 10,
    textAlign: 'center',
    borderStyle:{
      borderWidth:1,
      }
  }
});

export default ViewGames;