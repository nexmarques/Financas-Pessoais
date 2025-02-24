import React, { useContext } from 'react';
import {
  Container,
  Title,
  Name,
  RegisterButton,
  RegisterButtonText,
  LogoutButton,
  LogoutButtonText,
} from './styles';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {

  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation()
  return (
    <Container>

      <Header title="Meu perfil" />

      <Title> Bem vindo de volta</Title>

      <Name numberOfLines={1} > {user && user.name} </Name>

      <RegisterButton onPress={() => navigation.navigate('New')} >
        <RegisterButtonText>Registrar gastos</RegisterButtonText>
      </RegisterButton>

      <LogoutButton onPress={signOut} >
        <LogoutButtonText> Sair </LogoutButtonText>
      </LogoutButton>
    </Container>
  );
}
