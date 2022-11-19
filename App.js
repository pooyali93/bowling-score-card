import 'react-native-gesture-handler';
import { StyleSheet, ViewComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MenuNav from './src/components/MenuNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewGames from './src/screens/ViewGames';
import { GameProvider } from './src/context/GameContext';
import AddGame from './src/screens/AddGame';
import ScoreEnd from './src/screens/ScoreEnd';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <GameProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={MenuNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="View Games" component={ViewGames} />
        <Stack.Screen name="Score" component={ScoreEnd} />
      </Stack.Navigator>
      </GameProvider>
    </NavigationContainer>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3d69b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
