import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

  const navigation = useNavigation();
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false);
  const [PersistenceLoading, setPersistenceLoading] = useState(true); 

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@user')
      setPersistenceLoading(false)
      if (storageUser) {

        try {
          const response = await api.get('/me', {
            headers: {
              'Authorization': `Bearer ${storageUser}`
            },
          });

          api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
          setUser(response.data);
        } catch (error) {
          console.log(error);
          setUser(null);
        } finally {
          setPersistenceLoading(false);          
        }
      }
    }
    loadStorage();
  }, [])

  async function signUpAuth(email, password, name) {
    setLoading(true);
    try {
      const response = await api.post('/users', {
        name: name,
        email: email,
        password: password
      })
      Alert.alert('Success', 'User created successfully!');
      setLoading(false);
      navigation.goBack();
    }
    catch (err) {
      console.log('There was an error signing up', err);
      setLoading(false);
    }
  }

  async function signInAuth(email, password) {
    setLoading(true)
    try {
      const response = await api.post('/login', {
        email: email,
        password: password
      })
      const { id, name, token } = response.data

      await AsyncStorage.setItem('@user', token)
      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setUser({
        id,
        name,
        email
      })
      setLoading(false)
    }
    catch (err) {
      console.log('There was an error signIn', err);
      setLoading(false);  
    }
  }

  async function signOut() {
    AsyncStorage.removeItem('@user')
      .then(() => {
        setUser(null)
      })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUpAuth, signInAuth, signOut, loading, PersistenceLoading }} >
      {children}
    </AuthContext.Provider>
  )
}