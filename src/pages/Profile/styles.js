import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #C0C0C0;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 50px;
  font-weight: bold;
  font-size: 25px;
`;

export const Name = styled.Text`
  font-weight: 350;
  font-size: 20px;
  
`;

export const RegisterButton = styled.TouchableOpacity`  
  margin-top: 25px;
  background-color: #3b3dbf;
  width: 90%;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const RegisterButtonText = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;


export const LogoutButton  = styled.TouchableOpacity`
  margin-top: 10px;
  background-color: transparent;
  width: 90%;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #c62c36;
`;

export const LogoutButtonText = styled.Text`
  color: #c62c36;
  font-size: 20px;
`;