import React from 'react';
import {View, FlatList, Alert} from 'react-native';
import users from '../data/users';
import {ListItem, Avatar} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

const UserList = ({navigation}: {navigation: any}) => {
  const getActions = (user: User) => {
    return (
      <>
        <Button
          icon={<Icon name="edit" size={25} color="orange" />}
          type="clear"
          onPress={() => navigation.navigate('UserForm', {user})}
        />
        <Button
          icon={<Icon name="delete" size={25} color="red" />}
          type="clear"
          onPress={() => confirmDelete(user)}
        />
      </>
    );
  };

  const confirmDelete = (user: User) => {
    Alert.alert('Excluir Usuário', `Deseja excluir ${user.name}?`, [
      {text: 'Cancelar', style: 'cancel'},
      {
        text: 'Excluir',
        onPress: () => console.log('Usuário excluído:', user.id),
        style: 'destructive',
      },
    ]);
  };

  function getUserItem({item}: {item: User}) {
    return (
      <ListItem bottomDivider>
        <Avatar source={{uri: item.avatar}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(item)}
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        data={users}
        renderItem={getUserItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default UserList;
