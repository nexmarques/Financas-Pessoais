import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth";

export default function Routes(){ 

  const { signed, PersistenceLoading } = useContext(AuthContext);
  if(PersistenceLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: ' #C0C0C0'}} >
        <ActivityIndicator size="large" color="#131313" />
      </View>
    )
  }

  return(
    signed ? <AppRoutes /> : <AuthRoutes />
  )
}