import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { styles } from './RegisterForm.styles';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './RegisterForm.data';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils/screensName';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


export function RegisterForm() {

    const [showPassword, setShowPassword] = useState(false)

    const navigation = useNavigation();


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const auth = getAuth();
                await createUserWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                );
                navigation.navigate(screen.account.account)

            } catch (error) {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Failed to Register. Please try later'
                })
            }
        }
    });


    const showHiddenPass = () => setShowPassword((prevState) => !prevState) 
  
    return (
    <View 
    style={styles.content}
    >
        <Input 
        placeholder='e-mail'
        containerStyle={styles.input}
        rightIcon={<Icon type='material-community' name='at' iconStyle={styles.icon} />}
        onChangeText={(text) => formik.setFieldValue('email',text)}
        errorMessage={formik.errors.email}
        />
        <Input 
        placeholder='Password'
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={<Icon type='material-community' name={showPassword? 'eye-off-outline' : 'eye-outline'} iconStyle={styles.icon} onPress={showHiddenPass} />}
        onChangeText={(text) => formik.setFieldValue('password',text)}
        errorMessage={formik.errors.password}
        />
        <Input 
        placeholder='Repeat password'
        containerStyle={styles.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={<Icon type='material-community' name={showPassword? 'eye-off-outline' : 'eye-outline'} iconStyle={styles.icon} onPress={showHiddenPass} />}
        onChangeText={(text) => formik.setFieldValue('repeatPassword',text)}
        errorMessage={formik.errors.repeatPassword}
        />
        <Button
        containerStyle={styles.btnContainer}
        title='Join'
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        />      
    </View>
  )
}