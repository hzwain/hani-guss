import {View, TextInput, StyleSheet, Text} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { Colors } from "../constants/Colors";
import Card from "../components/Card";

const StartGameScreen =()=>{
    return(
        <View style={styles.mainContainer}>
         <Card>
            <TextInput 
            maxLength={2} 
            keyboardType="number-pad"
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            />
            <View style={styles.buttons}>
            <View style={styles.button}>
            <PrimaryButton 
            onPress={()=> {console.log('Reset pressed')}}
            >Reset
            </PrimaryButton>
            </View>
            <View style={styles.button}>
            <PrimaryButton
             onPress={()=>{console.log('Confirm pressed')}}
             >Confirm
             </PrimaryButton>
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
    },

    input:{
      width: 50,
      height: 50,
      fontSize: 32,
      borderBottomWidth: 2,
      borderColor: "#b9f706",
      textAlign: "center",
      color: "#b9f706",
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

    

    
