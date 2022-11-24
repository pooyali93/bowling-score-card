import { Camera } from "expo-camera";
import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View , TouchableOpacity} from "react-native";

const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const getPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        setHasPermission(status === 'granted');
    };
    let camera;
    const getPicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            console.log(photo)
            navigation.navigate('Photo', { uri: photo.uri })
        }
        
    }

     



    useEffect(() => {
        getPermission();
    }, []);
    if (hasPermission === null) {

        return <Text>Awaiting Permission</Text>

    }
    if (hasPermission === false) {
        return Alert.alert('Permissions not granted')
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.subContainer} ref={(ref) => { camera = ref }}>

                <Pressable style={styles.buttonContainer} onPress={() => {
                    getPicture();
                }}>
                    
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Snap</Text>
                    </View>
                </Pressable>
            </Camera>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row-reverse",
        alignItems: "flex-end"
    },
    buttonStyle: {
        alignItems: "center",
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 30,
        color: "yellow",
    },
      buttonContainer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
      },
      button: {
        width: 200,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        paddingVertical: 4,
        borderWidth: 1.5,
        borderColor: '#fff',
      },
      buttonText: {
        fontSize: 24,
        color: '#fff',
      },

});

export default CameraScreen;