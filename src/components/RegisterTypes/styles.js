import styled from "styled-components/native";

export const RegisterContainer = styled.View`
  width: 100%;  
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;  
  align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
  background-color: ${props => props.checked ? '#FFF' : "#E7E7E7"};
  width: 47.5%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  border-width: ${props => props.checked ? 1.5 : 0}px;
  border-color: #3b3dbf;
  height: 50px;
  flex-direction: row;
`;

export const RegisterLabel = styled.Text`
  margin-left: 8px;
  font-size: 17px;
`;
