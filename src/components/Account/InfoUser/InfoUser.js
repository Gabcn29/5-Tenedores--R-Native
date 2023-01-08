import { View, Text } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-elements';
import { getAuth } from 'firebase/auth';
import { styles } from './InfoUser.styles';


export function InfoUser() {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;

  const changeAvatar = () => {
    console.log('Change Avatar')
  }

  return (
    <View style={styles.content}>
      <Avatar
        size='large'
        rounded 
        icon={{ type: 'material', name: 'person' }}
        containerStyle={ styles.avatar }
        source={{ uri: photoURL }}
      >
        <Avatar.Accessory 
          size={24}
          onPress={changeAvatar}

          />
      </Avatar>

      <View>
        <Text 
          style={styles.displayName}
        >{ displayName || 'Annonimous' }</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}