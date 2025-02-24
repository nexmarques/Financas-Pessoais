import React from 'react';
import {Container, Tipo, IconView, TipoText, ValorText} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {Alert, TouchableWithoutFeedback} from 'react-native';

export default function HistoricoList({data, deleteItem}) {

  function handleDeleteItem() {
    Alert.alert('Remover item', 'Deseja realmente remover esse item?', [
      {
        text: 'Sim',
        onPress: () => deleteItem(data.id),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Tipo>
          <IconView tipo={data.type}>
            <Icon
              name={data.type === 'receita' ? 'arrow-up' : 'arrow-down'}
              size={20}
              color="#FFF"
            />
            <TipoText> {data.type} </TipoText>
          </IconView>
        </Tipo>

        <ValorText>R$ {data.value}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
