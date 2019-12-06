import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Image } from 'react-native';
import Background from '../../../components/Background';
import logo from '../../../assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('petrovickg@officina5.com.br');
  const [password, setPassword] = useState('12345678');
  const dispatch = useDispatch();
  const passwordRef = useRef();

  function handleSubmit() {
    console.tron.log('BUTTON');
    dispatch({ type: 'SIGN_IN_REQUEST', email, password });
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            value={email}
            icon="mail-outline"
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autoFocus
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="vpn-key"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
