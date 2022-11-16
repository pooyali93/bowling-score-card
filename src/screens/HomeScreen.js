import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.brandText}> Welcome to Caterham Bowling Club</Text>
      <Image  style={styles.logo} source={require('../img/logo.png')} /> 
      <Text style={styles.heroText}> Active since 1911</Text>
      <StatusBar style="auto" />
    </View>

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

});

export default HomeScreen;