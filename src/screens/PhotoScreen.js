import { View, Image, StyleSheet, Text, Button } from "react-native";

const PhotoScreen = ({ route }) => {
    const { uri } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: uri }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'transparent',
        alignItems:'flex-start',
        paddingVertical:20

    },

    lesserContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    textstyle: {
        fontSize: 17,

    },

    imageStyle: {
        maxWidth: 600,
        maxHeight: 600,
        height:200 ,
        aspectRatio: 1,
        resizeMode: 'contain',

    }
})

export default PhotoScreen;