import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Agrega esta línea
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { enableScreens } from "react-native-screens";
import Navigation from "./src/navigation/Navigations";

// Resto de tus importaciones y código aquí

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {renderCLS()}
        <Text>Bienvenue Bienvenidos</Text>
        <Text>CLUB LA SANTE-HISTORIA CLINICA</Text>

        <StatusBar style="auto" />
      </View>
      <Navigation />
    </NavigationContainer>
  );
}
function renderCLS() {
  return (
    <Image
      source={require("./src/assets/Cls.png")}
      style={{ width: 150, height: 175, top: -35 }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
