import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Container, Imagem, Texto, Name} from './styles';
import {AuthContext} from '../../contexts/auth';
import {View} from 'react-native';

export default function CustomDrawer(props) {
  const {user, signOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Imagem source={require('../../assets/Logo.png')} />

        <Texto> Bem vindo </Texto>

        <Name numberOfLines={1} style={{paddingHorizontal: 20}}>
          {' '}
          {user && user.name}{' '}
        </Name>
      </Container>

      <View style={{gap: 8}}>
        <DrawerItemList {...props} style={{gap: 10}} />
      </View>

      <DrawerItem        
        {...props}
        label="Sair da conta"
        onPress={() => {
          signOut()
        }}
      />
    </DrawerContentScrollView>
  );
}
