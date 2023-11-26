import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({children}) => {
    return(
        <View style={styles.outercontainer}>
            <Text>{children}</Text>
        </View>
    )};

export default PrimaryButton;


const styles=StyleSheet.create({
    outercontainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    }
})