import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { InfoUser } from '../../../components/Account'
import { styles } from './UserLoggedScreen.styles';
import { getAuth, signOut } from 'firebase/auth';
import { LoadingModal } from '../../../components'
import { AccountOptions } from '../../../components/Account/AccountOptions';


export function UserLoggedScreen() {

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const logOut = async () => {
    console.log('log out')
    const auth = getAuth();
    await signOut(auth)
  }

  return (
    <View >
      <InfoUser  
        setLoading={setLoading}
        setLoadingText={setLoadingText}
      />
      
      <AccountOptions
        
      />

      <Button 
        title='SignOut'
        buttonStyle={styles.button}
        titleStyle={styles.btnTitle}
        onPress={logOut}
      /> 
      <LoadingModal 
        show={loading}
        text={loadingText}       
      />
    </View>
  )
}