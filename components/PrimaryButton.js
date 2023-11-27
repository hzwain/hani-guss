import { View, Text, StyleSheet, Pressable } from "react-native";
import {Colors} from "../constants/Colors";

const PrimaryButton = ({children, onPress}) => {
    return(
        <View style={styles.outercontainer}>
            <Pressable
            style={({Pressed})=>
            Pressed
            ? [styles.innercontainer, styles.Pressed]
            : styles.innercontainer
            }
            android_ripple={{color: "#b9f706"}}
            onPress={onPress}
            >
            <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )};

export default PrimaryButton;


const styles=StyleSheet.create({
    outercontainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },

    innercontainer:{
        backgroundColor: "#b9f706",
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width:0, height:2},
        shadowRadius: 8,
        shadowOpacity: 0.3,
    },

    Pressed:{
        opacity: 0.5,
    },

    text:{
        color: "#b9f706",
        textAlign: "center",
        fontWeight: "bold",
    },

});