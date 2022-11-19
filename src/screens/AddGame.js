import { StyleSheet, Text, View,TextInput, ScrollView, Switch} from 'react-native';
import { useState } from 'react';



const AddGame = () => {
  
  const [state, setState] = useState([]);
  const updateTest = (path, value) => {
    
    // teamOnePlayers[path] = value;
    setState({...state, [path]: value});
    console.log(state)
      
  }
  // updateTest(obj, `teamOnePlayerOne`, newPlayer);

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView >
    <View style={styles.container}>
    <Text style={styles.brandText}> {JSON.stringify(state)}</Text>
    {['One','Two'].map(num => {
      return (
        ['One','Two','Three', 'Four'].map(num2 => 
            <TextInput key={num2}
              style={styles.textInput}
              returnKeyType={'done'}
              autoFocus = {true}
              placeholder="Test " value={state[`team${num}Player${num2}`]}
              onChangeText={(text) => {
            updateTest(`team${num}Player${num2}`, text);
          }}/>
          )
      )
    })
    }

   <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>





    </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7e4bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: {
    fontSize:24,
  },
  heroText: {
    fontSize:18,

  },
  logo: {
    width: 300,
    height: 400,
  },

  textInput: {
    fontSize:20,
    padding:10,
    margin:5,
    borderWidth:1,
    width:'80%'
  },
  textLabel: {
    fontSize:18,
    color:'#454648',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    width:'100%'
  },

});

export default AddGame;