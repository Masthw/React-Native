import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UsersContext from '../context/UsersContext';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

const UserList = ({ navigation }: { navigation: any }) => {
  const usersContext = useContext(UsersContext);

  if (!usersContext) {
    return null;
  }

  const { state, dispatch } = usersContext;

  const getActions = (user: User) => (
    <>
      <Button
        icon={<Icon name="edit" size={25} color="orange" />}
        type="clear"
        onPress={() => navigation.navigate('UserForm', { user })}
      />
      <Button
        icon={<Icon name="delete" size={25} color="red" />}
        type="clear"
        onPress={() => confirmDelete(user)}
      />
    </>
  );

  const confirmDelete = (user: User) => {
    Alert.alert('Excluir Usuário', `Deseja excluir ${user.name}?`, [
      {
        text: 'Excluir',
        onPress: () => dispatch({ type: 'DELETE_USER', payload: user.id }),
        style: 'destructive',
      },
      { text: 'Cancelar', style: 'cancel' },
    ]);
  };

  function getUserItem({ item }: { item: User }) {
    return (
      <ListItem bottomDivider>
        <Avatar source={{ uri: item.avatar }} />
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
      <FlatList data={state.users} renderItem={getUserItem} keyExtractor={item => item.id.toString()} />
    </View>
  );
};

export default UserList;
