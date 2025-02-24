import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn/index.jsx";
import SignUp from "../pages/SignUp/index.jsx";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ 
          headerTitle: 'Back',
          headerTintColor: '#fff',
          headerStyle:{
            backgroundColor: '#3b3dbf',
            borderBottomWidth: 1,
            borderBottomColor: '#00b94a'
          },          
        }}
      />
    </AuthStack.Navigator>
  )
}