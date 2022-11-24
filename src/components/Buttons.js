import React from "react";
import { TouchableOpacity , Text} from "react-native";
import COLORS from "../context/Colors";
import { Ionicons } from '@expo/vector-icons';

const Buttons = ({title , onPress=() => {}, iconName}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={{
                height:50,
                width:'100%',
                backgroundColor:COLORS.lightblue,
                justifyContent:'center',
                alignItems:'center',
                marginVertical:5,
                borderRadius:10
            }}>
                <Text style={{color:COLORS.white, fontWeight:'bold', fontSize:16}}>{title}</Text>
            </TouchableOpacity>
    );
}

export default Buttons;