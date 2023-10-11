import React from "react";
import { View, Text } from "react-native"; // Importa el componente Text

import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

const auth = null;

export default function Micuenta() {
  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
      {/* Añade esto como ejemplo */}
    </View>
  );
}
