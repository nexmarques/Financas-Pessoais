import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from '../SignIn/styles';

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signUpAuth, loading } = useContext(AuthContext)

    function handleSignUp() {
        if(name === '' || email === '' || password === ''){
            Alert.alert('Error', 'Fill in the fields')
            return
        }
        signUpAuth(email, password, name)
    }
    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="E-mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp} >
                    {loading ? 
                        (
                        <ActivityIndicator
                            color='#fff'
                            size="large"
                        />
                        ) :
                        (
                            <SubmitText>Create Account</SubmitText>
                        )
                    }
                </SubmitButton>

            </Container>
        </Background>
    );
}