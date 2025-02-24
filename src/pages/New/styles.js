import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #C0C0C0;
`;

export const Input = styled.TextInput`
  height: 50px;
  background-color: #FFF;
  width: 90%;
  padding: 0 10px;
  font-size: 17px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;    
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  border-radius: 8px;
`;

export const SubmitText = styled.Text`
  color: #FFF;
  font-size: 21px;
  font-weight: bold;
`;