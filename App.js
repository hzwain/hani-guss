import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinerGradient} from 'expo-linear-gradient';
import {Colors} from './constants/Colors';

export default function App() {
  return (
    <LinerGradient colors={["#b9f706", "#0c95c3"]}
    style={styles.rootScreen}
    >
      <ImageBackground
      source={require("./assets/images/nrd.jpeg")}
      resizeMode='cover'
      style={styles.image}
      >
      <StartGameScreen/>
    </ImageBackground>
    </LinerGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1,
  },

  image:{
    opacity: 0.5
  },

});
