import React, { useState } from 'react';
import { View } from 'react-native';
import { ListItem, Icon, Text} from 'react-native-elements';
import { map } from 'lodash';
import { Modal } from '../Shared';



export function AccountOptions() {
    
    const [showModal, setShowModal] = useState(false);
    const [renderComponent, setRenderComponent] = useState(null)

    const onCloseOpenModal = () => setShowModal( (prevState) => !prevState);

    const selectedComponent = (key) => {
        if(key === 'displayName') setRenderComponent(<Text>Change Name & LastName</Text>);
        if(key === 'e-mail') setRenderComponent(<Text>Change e-mail</Text>);
        if(key === 'Password') setRenderComponent(<Text>Password</Text>);
        
        onCloseOpenModal()
    };
    const menuOptions = getMenuOptions(selectedComponent);
    
  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem 
            key={index} 
            buttonDivider onPress={menu.onPress}
        >
            <Icon 
                type={menu.iconType}
                name={menu.iconNameLeft}
                color={menu.iconColorLeft}
            />
            <ListItem.Content>
                <ListItem.Title>{menu.title}</ListItem.Title>
            </ListItem.Content>
            <Icon
                type={menu.iconType}
                name={menu.iconNameRight}
                color={menu.iconColorRight}
            />
        </ListItem>
      ))}
      <Modal
        show={showModal}
        close={ onCloseOpenModal }
      >
        {renderComponent}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent) {
    return [
        {
            title: 'Change Name & LastName',
            iconType: 'material-community',
            iconNameLeft: 'account-circle',
            iconColorLeft: '#ccc',
            iconNameRight: 'chevron-right',
            iconColorRight: '#ccc',
            onPress: () => selectedComponent('displayName')
        },
        {
            title: 'Change User Email',
            iconType: 'material-community',
            iconNameLeft: 'at',
            iconColorLeft: '#ccc',
            iconNameRight: 'chevron-right',
            iconColorRight: '#ccc',
             onPress: () => selectedComponent('e-mail')
        },
        {
            title: 'Change Password',
            iconType: 'material-community',
            iconNameLeft: 'lock-reset',
            iconColorLeft: '#ccc',
            iconNameRight: 'chevron-right',
            iconColorRight: '#ccc',
             onPress: () => selectedComponent('Password')
        },
    ];
}