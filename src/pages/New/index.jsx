import React, { useState } from 'react';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import Header from '../../components/Header'
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import RegisterTypes from '../../components/RegisterTypes';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

export default function New() {
  const navigation = useNavigation()

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita')
  

 async function handleRegister(){  
  Keyboard.dismiss();  
  if(isNaN(parseFloat(value)) || type === null){ 
    alert('Preencha todos os campos')
    return;
  }
  Alert.alert(
    'Confirmação',
    `Tipo: ${type} - Valor: ${parseFloat(value)}`,    
    [
      {
        
        text: 'Cancelar',
        style: 'cancel',        
      },
      {
        text: 'Continuar',
        style: 'confirm',
        onPress: () => handleAdd()
      },
    ]    
  )  
}

  async function handleAdd(){
    Keyboard.dismiss();    
    const response = await api.post('/receive',{
      description: description,
      value: Number(value),
      type: type,
      date: format(new Date(), 'dd/MM/yyyy')      
    })  
    setDescription('');
    setValue('');
    navigation.navigate('Home');
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <Background>
        <Header title="Registrando" />
        <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }} >

          <Input
            placeholder="Descrição desse registro"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => setValue(text)}
          />

          <RegisterTypes type={type} sendTypeChanged={ (item) => setType(item)} />          

          <SubmitButton onPress={ handleRegister } >
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>

        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}