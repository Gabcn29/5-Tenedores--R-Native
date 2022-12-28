import React from 'react'
import { View, ScrollView } from 'react-native'
import { Text, Image } from 'react-native-elements'
import { styles } from './RegisterScreen.styles'
import { RegisterForm } from '../../../components/Auth/RegisterForm/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image 
        source={require('../../../../assets/Img/5-tenedores-letras-icono-logo.png')}
        style={styles.img}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  )
}