import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #F0F3FF;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px; 
  margin-bottom: 5px;
  padding: 12px;
  margin-top: 14px;  
  justify-content: center;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
  padding: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 6px;
  margin-bottom: 5px;
`;

export const TipoText =  styled.Text`
  color: #FFF;
  font-size: 17px;
  font-style: italic;
`;

export const ValorText = styled.Text`
  color: '#121212';
  font-size: 15px;
`;