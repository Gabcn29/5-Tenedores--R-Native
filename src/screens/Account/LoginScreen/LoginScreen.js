import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image  } from 'react-native-elements';
import {styles} from './LoginScreen.styles';
import { useNavigation } from '@react-navigation/native';
import {screen} from '../../../utils/screensName'
import { LoginForm } from '../../../components/Auth/LoginForm/LoginForm';

export function LoginScreen() {
  const navigate = useNavigation();

  const goToRegister = () => {
    navigate.navigate(screen.account.register)
  }

  return (
    <ScrollView>
      <Image source={require('../../../../assets/Img/5-tenedores-letras-icono-logo.png')} style={styles.img} />
      <View style={styles.content}>
        <LoginForm />

        <Text style={styles.textRegister}>
          New to 5-Tenedores?{' '}
          <Text style={styles.btn} onPress={goToRegister}>
            Create an Account.
          </Text>
        </Text>
      </View>
    </ScrollView>
  )
}