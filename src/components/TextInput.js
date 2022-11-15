import React from 'react';
import { StyleSheet, TextInput, View, Text, ScrollView } from 'react-native';


const TextInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
return (
    <ScrollView >
        <View>
        <Text style={styles.heading}> Caterham Bowling Club </Text>
          <Text style={styles.textLabel}> Competition name:  </Text>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            />

    </View>
    </ScrollView>
);
};



const styles = StyleSheet.create({
    container: {
        flex: '1', 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      
        viewWrapper: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      
        dateContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth:1,
          margin:5,
          padding:8
        },
      
        inputStyle: {
          flex: 1,
          fontSize:18,
          color:'grey'
        },
      
        heading: {
          fontSize:24,
          textAlign:'center',
          marginTop:10,
          color:'#043730',
          fontWeight: 'bold',
        },
      
        textInput: {
          fontSize:20,
          padding:10,
          margin:5,
          borderWidth:1,
        },
        textLabel: {
          fontSize:18,
          marginTop:10,
          color:'#454648',
          fontWeight: 'bold',
          letterSpacing: 0.5,
        },
    });

export default TextInput;