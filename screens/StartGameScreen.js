import {View, TextInput, StyleSheet, Styles} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { Colors } from "../constants/Colors";
import Card from "../components/Card";
const StartGameScreen =()=>{
    return(
        <View style={styles.mainContainer}>
            <Card>
            <TextInput maxLength={2} keyboardType="number-pad" style={styles.input}/>
            <View style={styles.buttons}>
            <View style={styles.button}>
            <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
            <PrimaryButton>Confirm</PrimaryButton>
            </View>
            </View>
            </Card>
        </View>
    );

};

export default StartGameScreen;

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: "center",
        backgroundColor: "red",
    },

    input:{
      width: 50,
      height: 50,
      fontSize: 32,
      borderBottomWidth: 2,
      borderColor: "accent",
      textAlign: "center",
      color: "accent" ,
      marginVertical: 8,
      fontWeight: "bold", 
    },

    buttons: {
        flexDirection: "row",
    },
    button:{
        flex: 1,

    },
});

    

    
