import {View, TextInput, StyleSheet, Styles} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen =()=>{
    return(
        <View style={styles.mainContainer}>
            <TextInput/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
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
});

    

    
