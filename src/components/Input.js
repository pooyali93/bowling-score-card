import React, { useState } from "react";
import {StyleSheet, View, Text, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import COLORS from "../context/Colors";
import { Ionicons } from '@expo/vector-icons';

const Input = ({label,iconName, error, onFocus=()=>{}, ...props }) => {
    const [isFocused, setIsFocused] = useState (false)

    return (
        <View style={{marginTop:5}}>
            <Text style={styles.label}>{label}</Text>
            <View style={[
                styles.inputContainer, 
                {
                    borderColor: error 
                    ?COLORS.red
                    :isFocused 
                    ?COLORS.black
                    :COLORS.lightblue
                    }]}>
                <TextInput 
                    style={{flex:1}}
                    autoCorrect={false}
                    onFocus={()=> {
                        onFocus();
                        setIsFocused(true)
                    }}
                    onBlur={()=> {
                        setIsFocused(false)
                    }}
                    {...props}/>
                    
                    <Ionicons 
                    name={iconName} 
                    style={{fontSize:22, color:COLORS.lightblue}}
                    />
            </View>
            {error && (
                <Text style={{color:COLORS.red, fontSize:12, marginTop:6}}>
                {error}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        marginVertical:5,
        fontSize:16,
        color:'grey'        
    },
    inputContainer: {
        height:40,
        borderWidth:0.5,
        paddingHorizontal:10,
        //marginBottom:5,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white'

    },

    redBorder:{
        color:'red',
    },
    grayBorder: {
        color: 'lightgray'
    },
    lightgrayBorder: {
        color: 'lightgray'
    }

});

export default Input;