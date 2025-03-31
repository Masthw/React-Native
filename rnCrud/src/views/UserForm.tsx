import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import UsersContext from '../context/UsersContext';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

const UserForm = ({route, navigation}: {route: any; navigation: any}) => {
  const usersContext = useContext(UsersContext);
  const [user, setUser] = useState(
    route.params?.user || {id: 0, name: '', email: '', avatar: ''},
  );

  useEffect(() => {
    if (route.params?.user) {
      setUser(route.params.user);
    }
  }, [route.params]);

  if (!usersContext) {
    return null;
  }

  const {dispatch} = usersContext;

  const saveUser = () => {
    if (user.id) {
      dispatch({type: 'EDIT_USER', payload: user});
    } else {
      let newId : number;
      do {
        newId = Math.floor(Math.random() * 1000);
      } while (user.some((u: User) => u.id === newId));

      dispatch({
        type: 'ADD_USER',
        payload: {...user, id: newId},
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.form}>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUser({...user, name: text})}
        placeholder="Informe o Nome"
        value={user.name}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUser({...user, email: text})}
        placeholder="Informe o Email"
        value={user.email}
      />

      <Text>Url do Avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setUser({...user, avatar: text})}
        placeholder="Informe o Avatar"
        value={user.avatar}
      />

      <Button buttonStyle={styles.button} title="Salvar" onPress={saveUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f4511e',
    borderRadius: 5,
  },
});

export default UserForm;
