import { StyleSheet } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import CreateGames from '../screens/CreateGames';
import LoadGames from '../screens/LoadGames';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MenuNav =() => {
    return (
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="Create Game" component={CreateGames} />
        <Drawer.Screen name="Load Games" component={LoadGames} />
      </Drawer.Navigator>
    );
  }

  const styles = StyleSheet.create({
    
  });
  

  export default MenuNav;