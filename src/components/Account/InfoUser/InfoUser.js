import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { getAuth, updateProfile } from 'firebase/auth';

// Importamos el paquete image picker de la documentación de expo 'docs.expo.dev --- Image Picker' ( se debe instalar el modulo primeramente)

import * as ImagePicker from 'expo-image-picker'

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { styles } from './InfoUser.styles';


export function InfoUser(props) {  
  const { setLoading, setLoadingText } = props
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const [ avatar ,setAvatar ] = useState(photoURL);
  
  const changeAvatar = async () => {    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result)
    
    if (!result.canceled) uploadImage(result.assets[0].uri)
  };

    
    const uploadImage = async (uri) => {
      setLoadingText('Avatar is updating')
      setLoading(true)
      const response = await fetch(uri);
      const blob = await response.blob();

      const storage = getStorage();
      const storageRef = ref(storage, `avatar/${uid}`);

      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log(snapshot.metadata)
        updatePhotoUrl(snapshot.metadata.fullPath);
      })
    }

    const updatePhotoUrl = async (imagePath) => {
      console.log(imagePath)
      const storage = getStorage();
      const imageRef = ref(storage, imagePath)
      const imageUrl = await getDownloadURL(imageRef);
      
      const auth = getAuth();
      updateProfile(auth.currentUser, { photoURL:imageUrl });
      
      setAvatar(imageUrl)
      setLoading(false)
    }

  return (
    <View style={styles.content}>
      <Avatar
        size='large'
        rounded 
        icon={{ type: 'material', name: 'person' }}
        containerStyle={ styles.avatar }
        source={{ uri: avatar }}
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