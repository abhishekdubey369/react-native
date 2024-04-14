import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View
} from "react-native"

import { LoginScreen , RegisterScreen , ForgotPasswordScreen, HomeScreen, Dashboard} from "./src/screens";

function App():React.JSX.Element{
  return(
    <SafeAreaView>
      <ScrollView>
        <Dashboard/>
        <HomeScreen/>
        <ForgotPasswordScreen/>
        <RegisterScreen/>
        <LoginScreen/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App