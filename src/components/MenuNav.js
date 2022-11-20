import { StyleSheet } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import CreateGames from '../screens/CreateGames';
import LoadGames from '../screens/LoadGames';
import { Ionicons  } from '@expo/vector-icons';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MenuNav =() => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Create Games') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'Previous Games') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }
            // You can return any component that you like here!
            return (
              <Ionicons  name={iconName} size={size} color={color} />
              );
          },
          tabBarActiveTintColor: '#142249',
          tabBarInactiveTintColor: 'gray',
          size:26,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Create Games" component={CreateGames} />
        <Tab.Screen name="Previous Games" component={LoadGames} />
      </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    
  });
  

  export default MenuNav;