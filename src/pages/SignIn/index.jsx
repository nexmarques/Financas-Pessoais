import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const { signInAuth, loading } = useContext(AuthContext)

  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    signInAuth(email, password)
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
          source={require('../../assets/Logo.png')}
        />

        <AreaInput>
          <Input
            placeholder="Your email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin} >
          {loading ? (
            <ActivityIndicator
              color='#fff'
              size="large"
            />
          ) : (
            <SubmitText>Login</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')} >
          <LinkText>Create an account</LinkText>
        </Link>

      </Container>
    </Background>
  );
}