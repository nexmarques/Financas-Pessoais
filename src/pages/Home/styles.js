import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #C0C0C0;  
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;  
  margin-top: 15px;
`;

export const Area = styled.View`
  background-color: #F0F3FF;   
  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;  
  margin-top: 15px;
  align-items: center;
  justify-content: center ;
  margin-top: 20px;
`;

export const Title = styled.Text`
  margin-left: 5px;
  color: '#121212';
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 20px;  
  padding-top: 10px;  
`;

export const List = styled.FlatList`
  flex: 1;
  color: '#FFF'
`;