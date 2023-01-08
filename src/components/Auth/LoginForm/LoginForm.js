import React, {useState} from 'react';
import { View} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { styles } from './LoginForm.styles'
import { initialValues, validationSchema } from './LoginFormData';
import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { screen } from '../../../utils/screensName';
import { useNavigation } from '@react-navigation/native';

export function LoginForm() {

  const [showPassword, setShowPassword] = useState(false)
  const showHiddenPass = () => setShowPassword((prevState) => !prevState)

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      console.log(formValues)
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValues.email,
          formValues.password
        );
        navigation.navigate(screen.account.account)
      } catch (e) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Invalid user or password',
        })
      }
    },
  });

  return (
    <View style={styles.content}>
        <Input 
            placeholder='e-mail' 
            containerStyle={styles.input} 
            rightIcon={
              <Icon 
                  type='material-community' 
                  name='at' 
                  iconStyle={styles.icon} 
              />} 
            onChangeText={(text) => formik.setFieldValue('email', text)}
            errorMessage={formik.errors.email} 
        />
        <Input 
            placeholder='Password'  
            containerStyle={styles.input}
            secureTextEntry={showPassword? false : true}
            rightIcon={
              <Icon 
                  type='material-community' 
                  name={showPassword? 'eye-off-outline' :'eye-outline'} 
                  iconStyle={styles.icon}
                  onPress={showHiddenPass}
              />}
            onChangeText={(text) => formik.setFieldValue('password', text)}
            errorMessage={formik.errors.password}
        />
        <Button title='Sign in' 
          buttonStyle={styles.btnLogin} 
          containerStyle={styles.btnContainer} 
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
    </View>
  )
}